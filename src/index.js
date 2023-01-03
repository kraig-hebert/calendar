import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import {
  getCustomCalendars,
  setCustomFilters,
  getActiveFilters,
} from './reducers/appSettings';
import { fetchEvents } from './reducers/eventsSlice';
import App from './App';
import store from './app/store';

import { ThemeProvider } from 'react-jss';
import { theme } from './themes/theme';

const container = document.getElementById('root');
const root = createRoot(container);
store.dispatch(fetchEvents());
store
  .dispatch(getCustomCalendars())
  .then((result) => store.dispatch(setCustomFilters(result.payload)));
store.dispatch(getActiveFilters());

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
);
