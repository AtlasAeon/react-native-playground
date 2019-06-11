/* eslint-disable react/display-name */
import React from 'react';
import HomeScreen from './HomeScreen';
import MainScreenNavigator from '../ChatScreen/index';
import Profile from '../ProfileScreen/index';
import AppHeader, { Prop } from '../AppHeader/AppHeader';
import SideBar from '../SideBar/SideBar';
import {
    createDrawerNavigator,
    NavigationRouteConfigMap,
    DrawerNavigatorConfig,
    createStackNavigator,
    NavigationScreenConfig,
    NavigationScreenOptions,
} from 'react-navigation';

let headerDefaultNavigationConfig: NavigationScreenConfig<NavigationScreenOptions> = {
    header: (props: Prop) => <AppHeader {...props} />,
    headerStyle: {
        backgroundColor: 'transparent',
    },
};

// const Tab2 = createStackNavigator(
//     {
//         Tab2: {
//             screen: Tab2Screen,
//             navigationOptions: {
//                 headerLeft: null,
//                 headerTitle: 'Tab 2 Screen',
//             },
//         },
//     },
//     {
//         navigationOptions: {
//             ...headerDefaultNavigationConfig,
//         },
//     },
// );

const Home = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: { headerTitle: 'Home' },
        },
    },
    {
        navigationOptions: {
            ...headerDefaultNavigationConfig,
        },
    },
);

const routeMap: NavigationRouteConfigMap = {
    Home: Home,
    Chat: { screen: MainScreenNavigator },
    Profile: Profile,
};

const config: DrawerNavigatorConfig = {
    navigationOptions: {
        header: (props: Prop) => <AppHeader {...props} />,
        headerStyle: { backgroundColor: 'transparent' },
        headerTintColor: '',
        animationEnabled: true,
    },
    drawerBackgroundColor: '#005B94',
    contentComponent: props => <SideBar {...props} />,
};

const HomeScreenRouter = createDrawerNavigator(routeMap, config);

export default HomeScreenRouter;
