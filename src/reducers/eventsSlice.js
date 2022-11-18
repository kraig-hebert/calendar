import {
  createSelector,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import * as client from '../api/client';
import { selectCurrentDate } from './appSettings';

const initialState = {
  entities: {},
};

// return next available id
const getID = (eventList) =>
  eventList.length ? eventList[eventList.length - 1].id + 1 : 2;

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
    return filteredEvents;
  }
);

export default eventsSlice.reducer;
