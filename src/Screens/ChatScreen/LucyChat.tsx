import React, { Component } from 'react';
import { Container, Content, Input, Item, Label, Button, Text } from 'native-base';
import {
    NavigationActions,
    NavigationScreenConfigProps,
    NavigationScreenProp,
    NavigationRoute,
} from 'react-navigation';

export default class LucyChat extends Component<NavigationScreenConfigProps> {
    static navigationOptions = ({ navigation }: NavigationScreenConfigProps) => {
        const { params } = navigation.state;

        return { title: params ? (params.title ? params.title : 'Lucy Chat') : 'Lucy Chat' };
    };

    componentDidMount() {
        const { navigation } = this.props;
        let _title = 'Lucy Chat';
        navigation.setParams({ title: _title });
    }

    render() {
        const { navigation } = this.props;
        return (
            <Container>
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
                            navigation.dispatch(navigationAction);
                        }}
                    >
                        <Text>Goto Lucy Profile</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
