/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import AWSAppSyncClient from 'aws-appsync';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { Rehydrated } from 'aws-appsync-react';

import { createAppContainer, createStackNavigator, HeaderProps } from 'react-navigation';
import React, { Component } from 'react';
import { Text } from 'react-native';

import HomeScreen from './Screens/HomeScreen/index';

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
        return (
            <ApolloProvider client={client}>
                <AppContainer />
            </ApolloProvider>
        );
    }
}
