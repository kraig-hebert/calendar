import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import store from './app/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { fetchEvents } from './reducers/eventsSlice';

const container = document.getElementById('root');
const root = createRoot(container);
store.dispatch(fetchEvents());
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
