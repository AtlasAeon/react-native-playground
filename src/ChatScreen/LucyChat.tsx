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
import { NavigationScreenProp, NavigationActions, NavigationState } from 'react-navigation';

interface Prop {
    navigation: NavigationScreenProp<NavigationState>;
}

export default class LucyChat extends Component<Prop> {
    static navigationOptions = {
        Title: 'Lucy',
    };

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
                        <Title>Lucy Chat</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Item floatingLabel style={{ marginTop: 20 }}>
                        <Label>Lucy Chat</Label>
                        <Input />
                    </Item>
                    <Button
                        rounded
                        danger
                        style={{ marginTop: 20, alignSelf: 'center' }}
                        onPress={() => {
                            const navigationAction = NavigationActions.navigate({
                                routeName: 'Profile',
                                params: { name: 'Lucy' },
                            });
                            this.props.navigation.dispatch(navigationAction);
                        }}
                    >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
