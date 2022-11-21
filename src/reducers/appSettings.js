import {
  createSelector,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const initialState = {
  drawerOpen: true,
  newEventModalOpen: false,
  currentDate: new Date(2022, 10, 20).toJSON(),
  currentCalendarSpread: 'day',
  availableColorFilters: ['blue', 'green', 'red', 'orange'],
  customCalendars: {},
  defaultCalendars: [
    {
      title: 'Holidays',
      filter: 'pink',
    },
    {
      title: 'Birthdays',
      filter: 'yellow',
    },
    {
      title: 'Events',
      filter: 'lightseagreen',
    },
    {
      title: 'Reminders',
      filter: 'peru',
    },
  ],
};

export const getCustomCalendars = createAsyncThunk(
  'appSettings/getCustomCalenars',
  async () => JSON.parse(localStorage.getItem('customCalendars'))
);

export const addNewCalendar = createAsyncThunk(
  'appSettings/addNewCalendar',
  async (calendar, { getState }) => {
    const state = getState();
    let customCalendars = Object.values(state.appSettings.customCalendars);
    customCalendars.push(calendar);
    localStorage.setItem('customCalendars', JSON.stringify(customCalendars));
    return calendar;
  }
);

export const deleteCustomCalendar = createAsyncThunk(
  'appSettings/deleteCustomCalendar',
  async (title, { getState }) => {
    const state = getState();
    const customCalendars = Object.values(
      state.appSettings.customCalendars
    ).filter((calendar) => calendar.title !== title);
    localStorage.setItem('customCalendars', JSON.stringify(customCalendars));
    return customCalendars;
  }
);

export const setCustomFilters = createAsyncThunk(
  'appSettings/setCustomFilters',
  async () => {
    const customCalendars = JSON.parse(localStorage.getItem('customCalendars'));
    const usedFilters = customCalendars.map((calendar) => calendar.filter);
    return initialState.availableColorFilters.filter(
      (filter) => !usedFilters.includes(filter)
    );
  }
);

const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    drawerCloseSelected(state) {
      state.drawerOpen = false;
    },
    drawerOpenSelected(state) {
      state.drawerOpen = true;
    },
    navLinkSelected(state, action) {
      const link = action.payload;
      state.currentCalendarSpread = link;
    },
    mainHeaderButtonClicked(state, action) {
      const newDate = action.payload;
      state.currentDate = newDate;
    },
    calendarDaySelected(state, action) {
      const newDate = action.payload;
      state.currentDate = newDate;
      state.currentCalendarSpread = 'day';
    },
    calendarMonthSelected(state, action) {
      const newDate = action.payload;
      state.currentDate = newDate;
      state.currentCalendarSpread = 'month';
    },
    addEventButtonClicked(state) {
      state.newEventModalOpen = true;
    },
    eventModalClosed(state) {
      state.newEventModalOpen = false;
    },
    filterReturned(state, action) {
      const filter = action.payload;
      state.availableColorFilters.push(filter);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCustomCalendars.fulfilled, (state, action) => {
        const customCalendars = action.payload;
        state.customCalendars = customCalendars;
      })
      .addCase(addNewCalendar.fulfilled, (state, action) => {
        const newCalendar = action.payload;
        state.customCalendars[newCalendar.id] = newCalendar;
        state.availableColorFilters = state.availableColorFilters.filter(
          (filter) => filter !== newCalendar.filter
        );
      })
      .addCase(deleteCustomCalendar.fulfilled, (state, action) => {
        const customCalendars = action.payload;
        state.customCalendars = customCalendars;
      })
      .addCase(setCustomFilters.fulfilled, (state, action) => {
        const availableFilters = action.payload;
        state.availableColorFilters = availableFilters;
      });
  },
});

// selectors
export const selectDrawerOpen = (state) => state.appSettings.drawerOpen;
export const selectCurrentDate = (state) =>
  new Date(state.appSettings.currentDate);
export const selectCurrentCalendarSpread = (state) =>
  state.appSettings.currentCalendarSpread;
export const selectAvailableColorFilters = (state) =>
  state.appSettings.availableColorFilters;
export const selectCustomCalendarsEntities = (state) =>
  state.appSettings.customCalendars;
export const selectNewEventModalOpen = (state) =>
  state.appSettings.newEventModalOpen;
export const selectDefaultCalendars = (state) =>
  state.appSettings.defaultCalendars;

export const selectCustomCalendars = createSelector(
  selectCustomCalendarsEntities,
  (entities) =>
    Object.values(entities).map((calendar) => {
      return { ...calendar };
    })
);

export const selectDefaultCalendarTitles = createSelector(
  selectDefaultCalendars,
  (defaultCalendars) => {
    return defaultCalendars.map((calendar) => calendar.title);
  }
);

export const selectAllCalendars = createSelector(
  selectDefaultCalendars,
  selectCustomCalendars,
  (defaultCalendars, customCalendars) => {
    let calendarList = new Array();
    defaultCalendars.forEach((calendar) => calendarList.push(calendar));
    customCalendars.forEach((calendar) => calendarList.push(calendar));
    return calendarList;
  }
);

export const {
  customFiltersSet,
  drawerCloseSelected,
  drawerOpenSelected,
  navLinkSelected,
  mainHeaderButtonClicked,
  calendarDaySelected,
  calendarMonthSelected,
  addEventButtonClicked,
  eventModalClosed,
  filterReturned,
} = appSettingsSlice.actions;
export default appSettingsSlice.reducer;
