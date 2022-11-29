import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import store from './app/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { getCustomCalendars, setCustomFilters } from './reducers/appSettings';
import { fetchEvents } from './reducers/eventsSlice';
import { ThemeProvider } from 'react-jss';
import { theme } from './themes/theme';

const container = document.getElementById('root');
const root = createRoot(container);
store.dispatch(fetchEvents());
store.dispatch(getCustomCalendars());
store.dispatch(setCustomFilters());

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
);
