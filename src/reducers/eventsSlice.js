import {
  createSelector,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import * as client from '../api/client';

const initialState = {
  entities: {},
};

// return next available id
const getID = (eventList) =>
  eventList.length ? eventList[eventList.length - 1].id + 1 : 2;

export const saveNewEvent = createAsyncThunk(
  'events/saveNewEvent',
  async (newEvent, { getState }) => {
    const state = getState();
    const newEventWithID = {
      ...newEvent,
      id: getID(Object.values(state.events.entities)),
    };
    console.log(newEventWithID);
    const response = await client.post(newEventWithID);
    if (response.status === 201) return newEventWithID;
  }
);

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(saveNewEvent.fulfilled, (state, action) => {
      const newEvent = action.payload;
      state.entities[newEvent.id] = newEvent;
    });
  },
});

export const {} = eventsSlice.actions;

export default eventsSlice.reducer;
