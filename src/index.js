import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import {
  getCustomCalendars,
  setCustomFilters,
  setActiveFilters,
} from './reducers/appSettings';
import { fetchEvents } from './reducers/eventsSlice';
import App from './App';
import store from './app/store';

import { ThemeProvider } from 'react-jss';
import { theme } from './themes/theme';

const container = document.getElementById('root');
const root = createRoot(container);
store.dispatch(fetchEvents()); // load events
store
  .dispatch(getCustomCalendars())
  .then((result) => store.dispatch(setActiveFilters(result.payload))); // load custom calendars than build active filter list
store.dispatch(setCustomFilters()); // set custom filter list

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
);
