/* eslint-disable react/display-name */
import React from 'react';
import HomeScreen from './HomeScreen';
import MainScreenNavigator from '../ChatScreen/index';
import ProfileScreen from '../ProfileScreen/index';
import SideBar from '../../components/SideBar/SideBar';
import {
    createDrawerNavigator,
    NavigationRouteConfigMap,
    DrawerNavigatorConfig,
    createStackNavigator,
    HeaderProps,
} from 'react-navigation';
import AppHeader from '../../components/AppHeader/AppHeader';

const Home = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: (props: HeaderProps) => <AppHeader {...props} />,
            headerTitle: 'Home',
            headerTransparent: true,
        },
    },
});

const Chat = createStackNavigator(
    {
        Chat: {
            screen: MainScreenNavigator,
            navigationOptions: {
                header: (props: HeaderProps) => <AppHeader {...props} />,
                headerTitle: 'Chat',
                headerTransparent: true,
            },
        },
    },
    {
        navigationOptions: {
            header: (props: HeaderProps) => <AppHeader {...props} />,
            headerTitle: 'Chat',
            headerTransparent: true,
        },
    },
);

const Profile = createStackNavigator({
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            header: (props: HeaderProps) => <AppHeader {...props} />,
            headerTitle: 'Profile',
            headerTransparent: true,
        },
    },
});

const routeMap: NavigationRouteConfigMap = {
    Home: Home,
    Chat: Chat,
    Profile: Profile,
};

const config: DrawerNavigatorConfig = {
    drawerBackgroundColor: '#005B94',
    contentComponent: props => <SideBar {...props} />,
};

const HomeScreenRouter = createDrawerNavigator(routeMap, config);

export default HomeScreenRouter;
