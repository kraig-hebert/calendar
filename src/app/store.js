import { configureStore } from '@reduxjs/toolkit';
import appSettingsReducer from '../reducers/appSettings';

export const store = configureStore({
  reducer: {
    appSettings: appSettingsReducer,
  },
});

export default store;
