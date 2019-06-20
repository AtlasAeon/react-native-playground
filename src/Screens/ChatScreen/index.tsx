import React, { FunctionComponent } from 'react';
import LucyChat from './LucyChat';
import JadeChat from './JadeChat';
import NineChat from './NineChat';
import { createBottomTabNavigator, BottomTabBarProps, NavigationRouteConfigMap } from 'react-navigation';
import { Button, Text, Icon, Footer, FooterTab } from 'native-base';

const footerTab: FunctionComponent<BottomTabBarProps> = (props: BottomTabBarProps) => {
    const { navigate } = props.navigation;
    const { index } = props.navigation.state;
    return (
        <Footer>
            <FooterTab>
                <Button vertical active={index === 0} onPress={() => navigate('LucyChat')}>
                    <Icon name="bowtie" />
                    <Text>Lucy</Text>
                </Button>
                <Button vertical active={index === 1} onPress={() => navigate('JadeChat')}>
                    <Icon name="headset" />
                    <Text>Jade</Text>
                </Button>
                <Button vertical active={index === 2} onPress={() => navigate('NineChat')}>
                    <Icon name="briefcase" />
                    <Text>Nine</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
};

const routeConfig: NavigationRouteConfigMap = {
    LucyChat: {
        screen: LucyChat,
        navigationOptions: {
            headerTitle: 'Lucy Chat',
            HeaderTitle: 'Lucy Chat',
        },
    },
    JadeChat: JadeChat,
    NineChat: NineChat,
};

const MainScreenNavigator = createBottomTabNavigator(routeConfig, {
    swipeEnabled: true,
    animationEnabled: true,
    tabBarPosition: 'bottom',
    tabBarComponent: footerTab,
});

export const ChatScreen = MainScreenNavigator;
