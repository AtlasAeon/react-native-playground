import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Icon, Button, Text } from 'native-base';
import { NavigationScreenProp } from 'react-navigation';

interface Params {
    name: string;
}

interface Prop {
    navigation: NavigationScreenProp<{}, Params>;
}

export default class Profile extends Component<Prop> {
    static navigationOptions = ({ navigation }: Prop) => {
        return {
            header: (
                <Header>
                    <Left>
                        <Button transparent onPress={() => navigation.openDrawer()}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Profile</Title>
                    </Body>
                    <Right />
                </Header>
            ),
        };
    };

    componentDidMount() {
        const name = this.props.navigation.getParam('name', 'NameNotFound');
        if (name !== 'NameNotFound') {
            Alert.alert('User found', name);
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Icon active name="paper-plane" />
                            <Text>Show User profiles here</Text>
                            <Right>
                                <Icon name="close" />
                            </Right>
                        </CardItem>
                    </Card>
                    <Button full rounded primary style={{ marginTop: 10 }} onPress={() => navigate('EditScreenOne')}>
                        <Text>Goto EditScreen One</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
