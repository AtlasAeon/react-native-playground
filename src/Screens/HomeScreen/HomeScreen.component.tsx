import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from 'native-base';
import { NavigationScreenProp } from 'react-navigation';

interface State {}

interface Props {
    navigation: NavigationScreenProp<State>;
    children: never;
}
export default class HomeScreenComponent extends Component<Props, State> {
    navigationOptions = {
        headerTitle: 'Home',
    };

    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <StatusBar barStyle="light-content" backgroundColor="#4F6D7A" />
                {/* <Header>
                    <Left>
                        <Button transparent onPress={() => navigation.openDrawer()}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Home</Title>
                    </Body>
                    <Right />
                </Header> */}
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>Chat App to talk some awesome people!</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Button full rounded dark style={{ marginTop: 10 }} onPress={() => navigation.navigate('Chat')}>
                        <Text>Chat With People</Text>
                    </Button>
                    <Button
                        full
                        rounded
                        primary
                        style={{ marginTop: 10 }}
                        onPress={() => navigation.navigate('Profile')}
                    >
                        <Text>Goto Profiles</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
