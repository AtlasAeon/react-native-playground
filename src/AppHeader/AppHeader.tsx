import { NavigationScreenProp, NavigationScene } from 'react-navigation';
import { Left, Button, Icon, Title, Body, Right, Header } from 'native-base';
import { View } from 'react-native';
import React from 'react';

export interface Prop {
    navigation: NavigationScreenProp<{}>;
    scene: NavigationScene;
}

const AppHeader = (props: Prop) => {
    const { navigation, options } = props.scene.descriptor;
    return (
        <View>
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.toggleDrawer()}>
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body>
                    <Title>{options.title}</Title>
                </Body>
                <Right />
            </Header>
        </View>
    );
};

export default AppHeader;
