import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  drawerOpen: true,
  currentDate: new Date(),
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
  },
});

// selectors
export const selectDrawerOpen = (state) => state.appSettings.drawerOpen;
export const selectCurrentDate = (state) => state.appSettings.currentDate;

export const { drawerCloseSelected, drawerOpenSelected } =
  appSettingsSlice.actions;
export default appSettingsSlice.reducer;
