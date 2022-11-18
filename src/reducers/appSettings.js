import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  drawerOpen: true,
  newEventModalOpen: false,
  currentDate: new Date().toJSON(),
  currentCalendarSpread: 'month',
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
    newCalendarAdded(state, action) {
      const newCalendar = action.payload;
      state.customCalendars[newCalendar.id] = newCalendar;
      state.availableColorFilters = state.availableColorFilters.filter(
        (filter) => filter !== newCalendar.filter
      );
    },
    addEventButtonClicked(state) {
      state.newEventModalOpen = true;
    },
    eventModalClosed(state) {
      state.newEventModalOpen = false;
    },
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

export const {
  drawerCloseSelected,
  drawerOpenSelected,
  navLinkSelected,
  mainHeaderButtonClicked,
  calendarDaySelected,
  calendarMonthSelected,
  newCalendarAdded,
  addEventButtonClicked,
  eventModalClosed,
} = appSettingsSlice.actions;
export default appSettingsSlice.reducer;
