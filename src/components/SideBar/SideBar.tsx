import React, { Component, PropsWithChildren } from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import { Container, Content, Text, List, ListItem, Drawer } from 'native-base';
import { DrawerItemsProps } from 'react-navigation';

const routes: string[] = ['Home', 'Chat', 'Profile'];
const styles = StyleSheet.create({
    drawerCover: {
        height: 120,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 80,
        width: 70,
    },
});

export default class SideBar extends Component<PropsWithChildren<DrawerItemsProps>> {
    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Content>
                    <ImageBackground
                        source={{
                            uri:
                                'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png',
                        }}
                        style={styles.drawerCover}
                    >
                        <Image
                            style={styles.logo}
                            source={{
                                uri:
                                    'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png',
                            }}
                        />
                    </ImageBackground>
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
