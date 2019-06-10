import React, { Component, PropsWithChildren } from 'react';
import { Image } from 'react-native';
import { Container, Content, Text, List, ListItem } from 'native-base';
import { DrawerItemsProps } from 'react-navigation';

const routes: string[] = ['Home', 'Chat', 'Profile'];

export default class SideBar extends Component<PropsWithChildren<DrawerItemsProps>> {
    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Content>
                    <Image
                        source={{
                            uri:
                                'https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png',
                        }}
                        style={{
                            height: 120,
                            alignSelf: 'stretch',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    ></Image>
                    <Image
                        style={{ height: 80, width: 70 }}
                        source={{
                            uri:
                                'https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png',
                        }}
                    />
                    <List
                        dataArray={routes}
                        renderRow={data => {
                            return (
                                <ListItem button onPress={() => navigation.navigate(data)}>
                                    <Text>{data}</Text>
                                </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }
}
