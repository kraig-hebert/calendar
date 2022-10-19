import React from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import { selectDrawerOpen } from '../../reducers/appSettings';
import useSideDrawerToggle from '../../utils/useSideDrawerToggle';

const Main = () => {
  const classes = useStyles();
  const drawerOpen = useSelector(selectDrawerOpen);
  const toggleSideDrawer = useSideDrawerToggle(true);

  return (
    <main className={classes.main}>
      {!drawerOpen && (
        <GiHamburgerMenu
          className={classes.hamburger}
          onClick={(e) => toggleSideDrawer()}
        />
      )}
    </main>
  );
};

export default Main;
