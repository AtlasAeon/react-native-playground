import React, { Component } from 'react';
import {
    Container,
    Body,
    Content,
    Header,
    Left,
    Right,
    Icon,
    Title,
    Input,
    Item,
    Label,
    Button,
    Text,
} from 'native-base';
import { NavigationScreenProp, NavigationActions } from 'react-navigation';

interface Prop {
    navigation: NavigationScreenProp<{}>;
}

export default class JadeChat extends Component<Prop> {
    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => navigation.openDrawer()}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Jade Chat</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Item floatingLabel style={{ marginTop: 20 }}>
                        <Label>Jade Chat</Label>
                        <Input />
                    </Item>
                    <Button
                        rounded
                        success
                        style={{ marginTop: 20, alignSelf: 'center' }}
                        onPress={() => {
                            const navigationAction = NavigationActions.navigate({
                                routeName: 'ProfileScreen', // <==== this is Profile tabNavigator
                                action: NavigationActions.navigate({
                                    routeName: 'Profile', // <===== this is defaultScreen for Porfile
                                    params: { name: 'Jade' },
                                }),
                            });
                            navigation.dispatch(navigationAction);
                        }}
                    >
                        <Text>Goto Jade Profile</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
