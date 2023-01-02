import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

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

const options = {
  method: 'GET',
  url: 'https://holidayapi1.p.rapidapi.com/holidays',
  params: { year: '2023', country: 'US', pretty: '0', format: 'json' },
  headers: {
    'X-RapidAPI-Key': '3fd70b785emsh7faa30e471e3da1p105dc2jsna420a4cf3036',
    'X-RapidAPI-Host': 'holidayapi1.p.rapidapi.com',
  },
};
axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
);
