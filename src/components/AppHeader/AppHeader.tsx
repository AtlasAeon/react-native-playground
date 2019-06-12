import { Left, Button, Icon, Title, Body, Right, Header } from 'native-base';
import { View } from 'react-native';
import React from 'react';
import { HeaderProps } from 'react-navigation';

const AppHeader = (props: HeaderProps) => {
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
                    <Title>{options.headerTitle}</Title>
                </Body>
                <Right />
            </Header>
        </View>
    );
};

export default AppHeader;
