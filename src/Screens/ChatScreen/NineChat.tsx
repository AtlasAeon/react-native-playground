import React, { Component } from 'react';
import { Container, Content, Input, Item, Label, Button, Text } from 'native-base';
import { NavigationActions, NavigationScreenConfigProps } from 'react-navigation';

export default class NineChat extends Component<NavigationScreenConfigProps> {
    static navigationOptions = {
        title: 'Nine',
    };

    render() {
        const { navigation } = this.props;
        return (
            <Container>
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
                                routeName: 'Profile',
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
