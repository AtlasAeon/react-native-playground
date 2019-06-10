import React from 'react';
import HomeScreen from './HomeScreen';
import MainScreenNavigator from '../ChatScreen/index';
import Profile from '../ProfileScreen/index';
import SideBar from '../SideBar/SideBar';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

const HomeScreenRouter = createDrawerNavigator(
    {
        Home: HomeScreen,
        Chat: MainScreenNavigator,
        Profile: Profile,
    },
    {
        /* eslint-disable react/display-name */
        contentComponent: props => <SideBar {...props} />,
    },
);

export default HomeScreenRouter;
