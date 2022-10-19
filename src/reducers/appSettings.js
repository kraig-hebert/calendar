import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  drawerOpen: true,
};

const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    drawerCloseSelected(state, action) {
      const drawerOpen = action.payload;
      state.drawerOpen = drawerOpen;
    },
    drawerOpenSelected(state, action) {
      const drawerOpen = action.payload;
      state.drawerOpen = drawerOpen;
    },
  },
});

// selectors
export const selectDrawerOpen = (state) => state.appSettings.drawerOpen;

export const { drawerCloseSelected, drawerOpenSelected } =
  appSettingsSlice.actions;
export default appSettingsSlice.reducer;
