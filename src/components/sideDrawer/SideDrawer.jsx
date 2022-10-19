import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';
import { AiFillCloseCircle } from 'react-icons/ai';
import useSideDrawerToggle from '../../utils/useSideDrawerToggle';

import {
  drawerCloseSelected,
  selectDrawerOpen,
} from '../../reducers/appSettings';

const SideDrawer = () => {
  const drawerOpen = useSelector(selectDrawerOpen);
  const [styles, setStyles] = useState({ display: 'block' });
  const classes = useStyles(styles);
  const toggleSideDrawer = useSideDrawerToggle(false);

  useEffect(() => {
    if (drawerOpen) setStyles({ display: 'block' });
    else setStyles({ display: 'none' });
  }, [drawerOpen]);
  return (
    <div className={classes.drawerContainer}>
      <AiFillCloseCircle
        className={classes.closeIcon}
        onClick={(e) => toggleSideDrawer()}
      />
    </div>
  );
};

export default SideDrawer;
