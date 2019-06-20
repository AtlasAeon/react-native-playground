import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationScreenProp, NavigationActions } from 'react-navigation';
import { Container, Input, Form, Item, Label, Button, Text, H1 } from 'native-base';
import { ScreenName } from 'src/shared/enums';
import { styles } from './styles';
import { signIn } from 'src/shared/auth';

interface Props {
    forms: any[];
    navigation: NavigationScreenProp<{}>;
}

const loginHandler = (username: string, password: string, navigation: NavigationScreenProp<{}>) => {
    signIn(username, password)
        .then(() => {
            navigation.dispatch(
                NavigationActions.navigate({
                    routeName: ScreenName.Applications,
                }),
            );
        })
        .catch(console.log);
};

const Login = ({ navigation }: Props) => {
    const [errorMessage, setErrorMessage] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    useEffect(() => StatusBar.setBarStyle('light-content'));
    return (
        <Container style={styles.container}>
            <View style={styles.content}>
                <H1 style={styles.header}>Welcome. Please sign in.</H1>
                <Form style={styles.loginForm}>
                    <Item floatingLabel>
                        <Label style={styles.input}>Username</Label>
                        <Input
                            style={styles.input}
                            textContentType={'username'}
                            autoCapitalize={'none'}
                            autoCompleteType={'username'}
                            onChangeText={setUsername}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label style={styles.input}>Password</Label>
                        <Input
                            style={styles.input}
                            textContentType={'password'}
                            autoCapitalize={'none'}
                            autoCompleteType={'password'}
                            secureTextEntry
                            onChangeText={setPassword}
                        />
                    </Item>
                    <Button
                        style={styles.signInButton}
                        rounded
                        onPress={() => loginHandler(username, password, navigation)}
                    >
                        <Text>Sign In</Text>
                    </Button>
                </Form>
            </View>
        </Container>
    );
};

export const LoginScreen = Login;
