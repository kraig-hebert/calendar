import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  drawerOpen: true,
  currentDate: new Date().toJSON(),
  currentCalendarSpread: 'month',
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
  },
});

// selectors
export const selectDrawerOpen = (state) => state.appSettings.drawerOpen;
export const selectCurrentDate = (state) =>
  new Date(state.appSettings.currentDate);

export const { drawerCloseSelected, drawerOpenSelected, navLinkSelected } =
  appSettingsSlice.actions;
export default appSettingsSlice.reducer;
