import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  drawerCloseSelected,
  drawerOpenSelected,
} from '../reducers/appSettings';

/* 
  toggles the side drawer between open and close
  by dispatching the action based on toggle being true/false
*/
const useSideDrawerToggle = (toggle) => {
  const dispatch = useDispatch();

  const toggleSideDrawer = useCallback(() => {
    if (toggle) dispatch(drawerOpenSelected());
    else dispatch(drawerCloseSelected());
  }, [toggle]);

  return toggleSideDrawer;
};

export default useSideDrawerToggle;
