import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  drawerCloseSelected,
  drawerOpenSelected,
} from '../reducers/appSettings';

const useSideDrawerToggle = (toggle) => {
  const dispatch = useDispatch();

  const toggleSideDrawer = useCallback(() => {
    if (toggle) dispatch(drawerOpenSelected());
    else dispatch(drawerCloseSelected());
  }, [toggle]);

  return toggleSideDrawer;
};

export default useSideDrawerToggle;
