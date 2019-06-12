/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import { createAppContainer, createStackNavigator, HeaderProps } from 'react-navigation';
import HomeScreen from './src/Screens/HomeScreen/index';
import React, { Component } from 'react';
import { Text } from 'react-native';

interface State {
    isReady: boolean;
}

const AppNavigator = HomeScreen;

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component<{}, State> {
    state = { isReady: false };
    async componentWillMount() {
        // await Expo.Font.loadAsync({
        //     Roboto: require('native-base/Fonts/Roboto.ttf'),
        //     Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        //     Ionicons: require('native-base/Fonts/Ionicons.ttf'),
        // });
        this.setState({ isReady: true });
    }
    render() {
        if (!this.state.isReady) {
            return <Text>Loading...</Text>;
        }
        return <AppContainer />;
    }
}
