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

interface Params {
    name: string;
}

interface Prop {
    navigation: NavigationScreenProp<{}, Params>;
}

export default class NineChat extends Component<Prop> {
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
                        <Title>Nine Chat</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Item floatingLabel style={{ marginTop: 20 }}>
                        <Label>Nine Chat</Label>
                        <Input />
                    </Item>
                    <Button
                        rounded
                        danger
                        style={{ marginTop: 20, alignSelf: 'center' }}
                        onPress={() => {
                            const navigationAction = NavigationActions.navigate({
                                routeName: 'ProfileScreen',
                                params: { name: 'Nine' },
                            });
                            navigation.dispatch(navigationAction);
                        }}
                    >
                        <Text>Goto Nine Profile</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
