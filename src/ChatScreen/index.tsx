import React from 'react';
import LucyChat from './LucyChat';
import JadeChat from './JadeChat';
import NineChat from './NineChat';
import {
    createBottomTabNavigator,
    DrawerNavigatorConfig,
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';
import { Button, Text, Icon, Footer, FooterTab } from 'native-base';

interface State {
    index: number;
}

interface Props {
    navigation: NavigationScreenProp<State>;
}

const MainScreenNavigator = createBottomTabNavigator(
    {
        LucyChat: LucyChat,
        JadeChat: JadeChat,
        NineChat: NineChat,
    },
    {
        tabBarPosition: 'bottom',
        /* eslint-disable react/display-name */
        tabBarComponent: (props: Props) => {
            const { navigate, state } = props.navigation;
            return (
                <Footer>
                    <FooterTab>
                        <Button vertical active={state.index === 0} onPress={() => navigate('LucyChat')}>
                            <Icon name="bowtie" />
                            <Text>Lucy</Text>
                        </Button>
                        <Button vertical active={state.index === 1} onPress={() => navigate('NineChat')}>
                            <Icon name="briefcase" />
                            <Text>Nine</Text>
                        </Button>
                        <Button vertical active={state.index === 2} onPress={() => navigate('JadeChat')}>
                            <Icon name="headset" />
                            <Text>Jade</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        },
    },
);

export default MainScreenNavigator;
