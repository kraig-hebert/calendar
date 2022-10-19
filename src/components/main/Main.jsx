import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  drawerOpenSelected,
  selectDrawerOpen,
} from '../../reducers/appSettings';

const Main = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const drawerOpen = useSelector(selectDrawerOpen);

  return (
    <main className={classes.main}>
      {!drawerOpen && (
        <GiHamburgerMenu
          className={classes.hamburger}
          onClick={(e) => dispatch(drawerOpenSelected(true))}
        />
      )}
    </main>
  );
};

export default Main;
