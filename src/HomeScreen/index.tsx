import React, { Component } from 'react';
import HomeScreen from './HomeScreen';
import MainScreenNavigator from '../ChatScreen/index.js';
import Profile from '../ProfileScreen/index.js';
import SideBar from '../SideBar/SideBar.js';
import { DrawerNavigator, DrawerItemsProps } from 'react-navigation';

const blah: React.FunctionComponent<DrawerItemsProps> = (props: React.PropsWithChildren<DrawerItemsProps>) => (
    <SideBar {...props} />
);
blah.displayName = 'contentComponent';

const HomeScreenRouter = DrawerNavigator(
    {
        Home: { screen: HomeScreen },
        Chat: { screen: MainScreenNavigator },
        Profile: { screen: Profile },
    },
    {
        contentComponent: blah,
    },
);
export default HomeScreenRouter;
