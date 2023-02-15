import {
  createSelector,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import {
  isSameWeek,
  getDay,
  isSameDay,
  isSameMonth,
  addMonths,
  isWithinInterval,
  getDaysInMonth,
} from 'date-fns';

import * as client from '../api/client';
import { selectCurrentDate, selectActiveFilters } from './appSettings';
import holidayFactory from '../utils/holidayFactory';
import { getDateObject, months } from '../helpers/dateHelpers';

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

export const editEvent = createAsyncThunk(
  'events/editEvent',
  async (eventForEdit) => {
    const response = await client.put(eventForEdit);
    if (response.status === 200) return eventForEdit;
  }
);

export const updateCalendarEventFilters = createAsyncThunk(
  'events/updateCalendarEventFilters',
  async (props, { getState }) => {
    const { newTitle, oldCalendarTitle } = props;
    const state = getState();
    const eventsToUpdate = Object.values(state.events.entities)
      .filter((event) => event.filter === oldCalendarTitle)
      .map((event) => {
        return { ...event, filter: newTitle };
      });
    eventsToUpdate.forEach(async (event) => await client.patch(event));
    return eventsToUpdate;
  }
);

export const deleteEvent = createAsyncThunk(
  'events/deleteEvent',
  async (id) => {
    const response = await client.remove(id);
    if (response.status === 200) return id;
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
      .addCase(editEvent.fulfilled, (state, action) => {
        const eventForEdit = action.payload;
        state.entities[eventForEdit.id] = eventForEdit;
      })
      .addCase(updateCalendarEventFilters.fulfilled, (state, action) => {
        const eventsToUpdate = action.payload;
        eventsToUpdate.forEach((event) => {
          state.entities[event.id] = { ...event };
        });
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        const id = action.payload;
        delete state.entities[id];
      })
      .addCase(deleteCalendarEvents.fulfilled, (state, action) => {
        const title = action.payload;
        Object.values(state.entities).forEach((event) => {
          if (event.filter === title) {
            delete state.entities[event.id];
          }
        });
      });
  },
});

// export const {} = eventsSlice.actions;

export const selectEventEntities = (state) => state.events.entities;

// returns list of all events with dateObjects
export const selectEvents = createSelector(
  selectEventEntities,
  selectCurrentDate,
  (events, currentDate) => {
    const sortedEventListWithDateObjects = Object.values(events).map(
      (event) => {
        if (event.allDay)
          return {
            ...event,
            startTime: new Date(event.startTime),
          };
        else
          return {
            ...event,
            startTime: new Date(event.startTime),
            endTime: new Date(event.endTime),
          };
      }
    );
    holidayFactory(currentDate.getFullYear(), 'all').forEach((holiday) => {
      sortedEventListWithDateObjects.push({
        title: holiday.title,
        startTime: new Date(holiday.singleDate),
        allDay: true,
        filter: 'Holidays',
        color: 'rgb(0,0,0)',
        notEditable: true,
      });
    });
    return sortedEventListWithDateObjects;
  }
);

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
  eventsDict.timed.sort((a, b) => a.startTime - b.startTime);
  return eventsDict;
};

// returns the groupedEvents based on currentDay
export const selectDayFilteredEvents = createSelector(
  selectEvents,
  selectCurrentDate,
  selectActiveFilters,
  (events, currentDate, activeFilters) => {
    const filteredEvents = events
      .filter((event) => isSameDay(event.startTime, currentDate))
      .filter((event) => activeFilters.includes(event.filter));
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
  selectActiveFilters,
  (events, currentDate, activeFilters) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const filteredEventsByDay = {};
    const filteredEvents = events
      .filter((event) => isSameWeek(event.startTime, currentDate))
      .filter((event) => activeFilters.includes(event.filter));

    days.forEach((day, index) => {
      const dayEvents = filteredEvents.filter(
        (event) => getDay(event.startTime) === index
      );
      filteredEventsByDay[days[index]] = groupFilteredEvents(dayEvents);
    });
    return filteredEventsByDay;
  }
);

// returns the groupedEvents based on currentMonth
export const selectMonthFilteredEvents = createSelector(
  selectEvents,
  selectCurrentDate,
  selectActiveFilters,
  (events, currentDate, activeFilters) => {
    const filteredEvents = events
      .filter((event) => isSameMonth(event.startTime, currentDate))
      .filter((event) => activeFilters.includes(event.filter));
    return groupFilteredEvents(filteredEvents);
  }
);

// return the groupedEvents based on the next 6 months
export const selectScheduleFilteredEvents = createSelector(
  selectEvents,
  selectActiveFilters,
  (events, activeFilters) => {
    const date = getDateObject(new Date());
    const endDate = addMonths(new Date(), 5);
    const eventsByMonth = {};

    /* 
      returns eventsByMonth structured as {january: {1: [events], 2: [events].......}}
    */
    months
      .slice(date.getMonth(), endDate.getMonth() + 1)
      .forEach((month) => (eventsByMonth[month] = {}));
    Object.keys(eventsByMonth).forEach((month) => {
      const numberOfDaysInMonth = getDaysInMonth(
        date.getFullYear(),
        months.indexOf(month)
      );
      for (let i = 1; i <= numberOfDaysInMonth; i++) {
        eventsByMonth[month][i] = [];
      }
    });

    events
      .filter((event) =>
        isWithinInterval(event.startTime, {
          start: date,
          end: endDate,
        })
      )
      .filter((event) => activeFilters.includes(event.filter))
      .forEach((event) => {
        const monthName = months[event.startTime.getMonth()];
        const date = event.startTime.getDate();
        eventsByMonth[monthName][date].push(event);
      });
    return eventsByMonth;
  }
);

export default eventsSlice.reducer;
