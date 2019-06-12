import React, { Component } from 'react';
import { Container, Content, Input, Item, Label, Button, Text } from 'native-base';
import { NavigationActions, NavigationScreenConfigProps } from 'react-navigation';

export default class JadeChat extends Component<NavigationScreenConfigProps> {
    static navigationOptions = {
        title: 'Jade',
    };

    render() {
        const { navigation } = this.props;
        return (
            <Container>
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
                                routeName: 'Profile', // <==== this is Profile tabNavigator
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
