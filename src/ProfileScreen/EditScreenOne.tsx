import React from 'react';
import { Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button } from 'native-base';
import { NavigationScreenProp } from 'react-navigation';

interface Prop {
    navigation: NavigationScreenProp<{}>;
}

export default class EditScreenOne extends React.Component<Prop> {
    static navigationOptions = ({ navigation }: Prop) => {
        const { goBack } = navigation;
        return {
            header: (
                <Header>
                    <Left>
                        <Button transparent onPress={() => goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>EditScreenOne</Title>
                    </Body>
                    <Right />
                </Header>
            ),
        };
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Icon active name="paper-plane" />
                            <Text>Edit Screen 1</Text>
                            <Right>
                                <Icon name="close" />
                            </Right>
                        </CardItem>
                    </Card>
                    <Button full rounded primary style={{ marginTop: 10 }} onPress={() => navigate('EditScreenTwo')}>
                        <Text>Goto EditScreenTwo</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
