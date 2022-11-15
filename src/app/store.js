import { configureStore } from '@reduxjs/toolkit';
import appSettingsReducer from '../reducers/appSettings';
import eventsReducer from '../reducers/eventsSlice';

export const store = configureStore({
  reducer: {
    appSettings: appSettingsReducer,
    events: eventsReducer,
  },
});

export default store;
