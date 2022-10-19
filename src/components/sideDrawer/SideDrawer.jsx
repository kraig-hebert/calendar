import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './styles';
import { AiFillCloseCircle } from 'react-icons/ai';
import {
  drawerCloseSelected,
  selectDrawerOpen,
} from '../../reducers/appSettings';

const SideDrawer = () => {
  console.log('render');
  const dispatch = useDispatch();
  const drawerOpen = useSelector(selectDrawerOpen);
  const [styles, setStyles] = useState({ display: 'block' });
  const classes = useStyles(styles);

  useEffect(() => {
    if (drawerOpen) setStyles({ display: 'block' });
    else setStyles({ display: 'none' });
  }, [drawerOpen]);

  return (
    <div className={classes.drawerContainer}>
      <AiFillCloseCircle
        className={classes.closeIcon}
        onClick={(e) => dispatch(drawerCloseSelected(false))}
      />
    </div>
  );
};

export default SideDrawer;
