/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View } from 'react-native';

// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//     android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
// });

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
// });

// //interface Props {}
// export default class App extends Component<{}> {
//     private blah = this.props;
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.welcome}>Welcome to React Native!</Text>
//                 <Text style={styles.instructions}>To get started, edit App.tsx</Text>
//                 <Text style={styles.instructions}>{instructions}</Text>
//             </View>
//         );
//     }
// }

import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './src/HomeScreen/index';
import React, { Component } from 'react';
import { Text } from 'react-native';

interface State {
    isReady: boolean;
}

const AppNavigator = createStackNavigator(
    {
        Home: { screen: HomeScreen },
    },
    {
        initialRouteName: 'Home',
    },
);

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
