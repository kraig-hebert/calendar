import {
  createSelector,
  createSlice,
  createAsyncThunk,
} from '@reduxjs/toolkit';

const initialState = {
  drawerOpen: true,
  eventModalOpen: false,
  eventForEditID: 0,
  calendarFormOpen: false,
  calendarForEditTitle: '',
  currentDate: new Date().toJSON(),
  currentCalendarSpread: 'month',
  availableColorFilters: [
    'rgba(0,0,255,.9)' /* blue */,
    'rgba(32,178,170,.9)' /* seagreen */,
    'rgba(255,0,0,.9)' /* red */,
    'rgba(165,42,42,.9)' /* orange */,
  ],
  activeFilters: [],
  customCalendars: [],
  defaultCalendars: [
    {
      title: 'Events',
      filter: 'rgba(0,255,50,.9)' /* green */,
    },
    {
      title: 'Holidays',
      filter: 'rgba(255,192,203,.9)', // pink
    },
    {
      title: 'Birthdays',
      filter: 'rgba(255,255,50,.9)', // yellow
    },

    {
      title: 'Reminders',
      filter: 'rgba(205,133,63,.9)', // peru
    },
  ],
};

export const getCustomCalendars = createAsyncThunk(
  'appSettings/getCustomCalendars',
  async () => {
    if (localStorage.getItem('customCalendars'))
      return JSON.parse(localStorage.getItem('customCalendars'));
    else {
      localStorage.setItem('customCalendars', '[]');
      return [];
    }
  }
);

export const addNewCalendar = createAsyncThunk(
  'appSettings/addNewCalendar',
  async (calendar, { getState }) => {
    const state = getState();
    const customCalendars = [...state.appSettings.customCalendars];
    customCalendars.push(calendar);
    localStorage.setItem('customCalendars', JSON.stringify(customCalendars));

    const activeFilters = [...state.appSettings.activeFilters];
    activeFilters.push(calendar.title);
    localStorage.setItem('activeFilters', JSON.stringify(activeFilters));

    return calendar;
  }
);

export const editCustomCalendar = createAsyncThunk(
  'appSettings/editCalendar',
  async (calendar, { getState }) => {
    const state = getState();
    const customCalendars = state.appSettings.customCalendars.map(
      (existingCalendar) => {
        if (existingCalendar.id === calendar.id) return calendar;
        else return existingCalendar;
      }
    );
    localStorage.setItem('customCalendars', JSON.stringify(customCalendars));

    const activeFilterList = state.appSettings.activeFilters.map(
      (activeFilter) => {
        if (activeFilter === state.appSettings.calendarForEditTitle)
          return calendar.title;
        else return activeFilter;
      }
    );
    localStorage.setItem('activeFilters', JSON.stringify(activeFilterList));
    return { customCalendars, activeFilterList };
  }
);

export const deleteCustomCalendar = createAsyncThunk(
  'appSettings/deleteCustomCalendar',
  async (title, { getState }) => {
    const state = getState();

    const customCalendars = state.appSettings.customCalendars.filter(
      (calendar) => calendar.title !== title
    );
    localStorage.setItem('customCalendars', JSON.stringify(customCalendars));

    const activeFilterList = state.appSettings.activeFilters.filter(
      (activeFilter) => activeFilter !== title
    );
    localStorage.setItem('activeFilters', JSON.stringify(activeFilterList));
    return { customCalendars, activeFilterList };
  }
);

export const setCustomFilters = createAsyncThunk(
  'appSettings/setCustomFilters',
  async (customCalendarList) => {
    const usedFilters = customCalendarList.map((calendar) => calendar.filter);
    return initialState.availableColorFilters.filter(
      (filter) => !usedFilters.includes(filter)
    );
  }
);

export const getActiveFilters = createAsyncThunk(
  'appSettings/getActiveFilters',
  async () => {
    if (localStorage.getItem('activeFilters'))
      return JSON.parse(localStorage.getItem('activeFilters'));
    else {
      const defaultFilters = initialState.defaultCalendars.map(
        (calendar) => calendar.title
      );
      localStorage.setItem('activeFilters', JSON.stringify(defaultFilters));
      return defaultFilters;
    }
  }
);

export const addActiveFilter = createAsyncThunk(
  'appSettings/addActiveFilter',
  async (filter, { getState }) => {
    const state = getState();
    const activeFilters = [...state.appSettings.activeFilters];
    activeFilters.push(filter);
    localStorage.setItem('activeFilters', JSON.stringify(activeFilters));
    return filter;
  }
);

export const deleteActiveFilter = createAsyncThunk(
  'appSettings/deleteActiveFilter',
  async (filter, { getState }) => {
    const state = getState();
    const activeFilters = state.appSettings.activeFilters.filter(
      (activeFilter) => activeFilter !== filter
    );
    localStorage.setItem('activeFilters', JSON.stringify(activeFilters));
    return filter;
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
      state.eventModalOpen = true;
    },
    eventClicked(state, action) {
      const eventID = action.payload;
      state.eventForEditID = eventID;
      state.eventModalOpen = 'edit';
    },
    eventModalClosed(state) {
      state.eventModalOpen = false;
    },
    filterReturned(state, action) {
      const filter = action.payload;
      state.availableColorFilters.push(filter);
    },
    filterRemoved(state, action) {
      const filter = action.payload;
      state.availableColorFilters = state.availableColorFilters.filter(
        (availableFilter) => availableFilter !== filter
      );
    },
    calendarFormToggled(state, action) {
      const toggle = action.payload;
      state.calendarFormOpen = toggle;
    },
    calendarEditClicked(state, action) {
      const calendarTitle = action.payload;
      state.calendarForEditTitle = calendarTitle;
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
        state.customCalendars.push(newCalendar);
        state.availableColorFilters = state.availableColorFilters.filter(
          (filter) => filter !== newCalendar.filter
        );
        state.activeFilters.push(newCalendar.title);
      })
      .addCase(editCustomCalendar.fulfilled, (state, action) => {
        const { customCalendars, activeFilterList } = action.payload;
        state.customCalendars = customCalendars;

        const customCalendarFilters = customCalendars.map(
          (calendar) => calendar.filter
        );
        state.availableColorFilters = state.availableColorFilters.filter(
          (filter) => !customCalendarFilters.includes(filter)
        );
        state.activeFilters = activeFilterList;
      })
      .addCase(deleteCustomCalendar.fulfilled, (state, action) => {
        const { customCalendars, activeFilterList } = action.payload;
        state.customCalendars = customCalendars;
        state.activeFilters = activeFilterList;
      })
      .addCase(setCustomFilters.fulfilled, (state, action) => {
        const availableFilters = action.payload;
        state.availableColorFilters = availableFilters;
      })
      .addCase(getActiveFilters.fulfilled, (state, action) => {
        const activeFilters = action.payload;
        state.activeFilters = activeFilters;
      })
      .addCase(addActiveFilter.fulfilled, (state, action) => {
        const filter = action.payload;
        state.activeFilters.push(filter);
      })
      .addCase(deleteActiveFilter.fulfilled, (state, action) => {
        const filter = action.payload;
        state.activeFilters = state.activeFilters.filter(
          (activeFilter) => activeFilter !== filter
        );
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
export const selectCustomCalendars = (state) =>
  state.appSettings.customCalendars;
export const selectEventModalOpen = (state) => state.appSettings.eventModalOpen;
export const selectEventForEditID = (state) => state.appSettings.eventForEditID;
export const selectDefaultCalendars = (state) =>
  state.appSettings.defaultCalendars;
export const selectActiveFilters = (state) => state.appSettings.activeFilters;
export const selectCalendarFormOpen = (state) =>
  state.appSettings.calendarFormOpen;
export const selectCalendarForEditTitle = (state) =>
  state.appSettings.calendarForEditTitle;

export const selectDefaultCalendarTitles = createSelector(
  selectDefaultCalendars,
  (defaultCalendars) => defaultCalendars.map((calendar) => calendar.title)
);

export const selectAllCalendars = createSelector(
  selectDefaultCalendars,
  selectCustomCalendars,
  (defaultCalendars, customCalendars) => {
    let calendarList = [];
    defaultCalendars.forEach((calendar) => calendarList.push(calendar));
    customCalendars.forEach((calendar) => calendarList.push(calendar));
    return calendarList;
  }
);

export const selectCalendarForEdit = createSelector(
  selectCalendarForEditTitle,
  selectCustomCalendars,
  (calendarForEditTitle, customCalendars) => {
    return customCalendars.filter(
      (calendar) => calendar.title === calendarForEditTitle
    )[0];
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
  eventClicked,
  eventModalClosed,
  filterReturned,
  filterRemoved,
  calendarFormToggled,
  calendarEditClicked,
} = appSettingsSlice.actions;

export default appSettingsSlice.reducer;
