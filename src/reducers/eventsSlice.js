import {
  createSelector,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { isSameWeek, getDay, isSameDay } from 'date-fns';

import * as client from '../api/client';
import { selectCurrentDate, selectActiveFilters } from './appSettings';

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
        const newEvents = {};
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

// export const {} = eventsSlice.actions;

export const selectEventEntities = (state) => state.events.entities;

// returns list of all events with dateObjects
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

// creates object with allDay and timed events separated into 2 lists
const groupFilteredEvents = (filteredEvents) => {
  const eventsDict = {
    allDay: [],
    timed: [],
  };
  filteredEvents.forEach((event) => {
    if (event.allDay) eventsDict.allDay.push(event);
    else eventsDict.timed.push(event);
  });
  return eventsDict;
};

// returns the groupedEvents based on currentDay
export const selectDayFilteredEvents = createSelector(
  selectEvents,
  selectCurrentDate,
  selectActiveFilters,
  (events, currentDate, activeFilters) => {
    console.log(events);
    console.log(currentDate);
    const filteredEvents = events.filter(
      (event) =>
        (event.hasOwnProperty('startTime') &&
          isSameDay(event.startTime, currentDate)) |
        (event.hasOwnProperty('singleDate') &&
          isSameDay(event.singleDate, currentDate))
    );
    return groupFilteredEvents(filteredEvents);
  }
);

/* 
  returns an object with a key for each day of the week 
  each key is a list of groupedEvents for that given day
*/
export const selectWeekFilteredEvents = createSelector(
  selectEvents,
  selectCurrentDate,
  (events, currentDate) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const filteredEventsByDay = {};
    const filteredEvents = events.filter((event) => {
      if (event.hasOwnProperty('startTime')) {
        if (isSameWeek(event.startTime, currentDate)) return true;
      } else if (isSameWeek(event.singleDate, currentDate)) return true;
      return false;
    });
    days.forEach((day, index) => {
      const dayEvents = filteredEvents.filter((event) => {
        if (event.hasOwnProperty('startTime')) {
          if (getDay(event.startTime) === index) return true;
        } else if (getDay(event.singleDate) === index) return true;
        return false;
      });
      filteredEventsByDay[days[index]] = groupFilteredEvents(dayEvents);
    });
    return filteredEventsByDay;
  }
);

// returns the groupedEvents based on currentMonth
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
