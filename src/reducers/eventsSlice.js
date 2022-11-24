import {
  createSelector,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import * as client from '../api/client';
import { selectCurrentDate } from './appSettings';
import { isSameWeek, getDay } from 'date-fns';

const initialState = {
  entities: {},
};

// return next available id
const getID = (eventList) =>
  eventList.length ? eventList[eventList.length - 1].id + 1 : 1;

export const fetchEvents = createAsyncThunk(
  'events/fetchEvents',
  async () => await client.get()
);

export const saveNewEvent = createAsyncThunk(
  'events/saveNewEvent',
  async (newEvent, { getState }) => {
    const state = getState();
    const newEventWithID = {
      ...newEvent,
      id: getID(Object.values(state.events.entities)),
    };
    const response = await client.post(newEventWithID);
    if (response.status === 201) return newEventWithID;
  }
);

export const deleteCalendarEvents = createAsyncThunk(
  'events/deleteCalendarEvents',
  async (title, { getState }) => {
    const state = getState();
    Object.values(state.events.entities).forEach(async (event) => {
      if (event.filter === title) await client.remove(event.id);
    });
    return title;
  }
);

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.fulfilled, (state, action) => {
        const newEvents = new Object();
        const eventList = action.payload;
        eventList.forEach((event) => {
          newEvents[event.id] = event;
        });
        state.entities = newEvents;
      })
      .addCase(saveNewEvent.fulfilled, (state, action) => {
        const newEvent = action.payload;
        state.entities[newEvent.id] = newEvent;
      })
      .addCase(deleteCalendarEvents.fulfilled, (state, action) => {
        const title = action.payload;
        state.entities = Object.values(state.entities).filter(
          (event) => event.filter !== title
        );
      });
  },
});

export const {} = eventsSlice.actions;

export const selectEventEntities = (state) => state.events.entities;

export const selectEvents = createSelector(selectEventEntities, (events) => {
  const sortedEventListWithDateObjects = Object.values(events).map((event) => {
    if (event.allDay)
      return {
        ...event,
        singleDate: new Date(event.singleDate),
      };
    else
      return {
        ...event,
        startTime: new Date(event.startTime),
        endTime: new Date(event.endTime),
      };
  });

  return sortedEventListWithDateObjects;
});

const groupFilteredEvents = (filteredEvents) => {
  const eventsDict = {
    allDay: new Array(),
    timed: new Array(),
  };
  filteredEvents.forEach((event) => {
    if (event.allDay) eventsDict.allDay.push(event);
    else eventsDict.timed.push(event);
  });
  return eventsDict;
};

export const selectDayFilteredEvents = createSelector(
  selectEvents,
  selectCurrentDate,
  (events, currentDate) => {
    const filteredEvents = events.filter(
      (event) =>
        ((event.hasOwnProperty('startTime') && event.startTime.getDate()) |
          (event.hasOwnProperty('singleDate') &&
            event.singleDate.getDate())) ===
        currentDate.getDate()
    );
    return groupFilteredEvents(filteredEvents);
  }
);

export const selectWeekFilteredEvents = createSelector(
  selectEvents,
  selectCurrentDate,
  (events, currentDate) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const filteredEventsByDay = new Object();
    const filteredEvents = events.filter((event) => {
      if (event.hasOwnProperty('startTime')) {
        if (isSameWeek(event.startTime, currentDate)) return true;
      } else if (isSameWeek(event.singleDate, currentDate)) return true;
    });
    days.forEach((day, index) => {
      const dayEvents = filteredEvents.filter((event) => {
        if (event.hasOwnProperty('startTime')) {
          if (getDay(event.startTime) === index) return true;
        } else if (getDay(event.singleDate) === index) return true;
      });
      filteredEventsByDay[days[index]] = groupFilteredEvents(dayEvents);
    });
    return filteredEventsByDay;
  }
);

export const selectMonthFilteredEvents = createSelector(
  selectEvents,
  selectCurrentDate,
  (events, currentDate) => {
    const filteredEvents = events.filter(
      (event) =>
        ((event.hasOwnProperty('startTime') && event.startTime.getMonth()) |
          (event.hasOwnProperty('singleDate') &&
            event.singleDate.getMonth())) ===
        currentDate.getMonth()
    );
    return groupFilteredEvents(filteredEvents);
  }
);

export default eventsSlice.reducer;
