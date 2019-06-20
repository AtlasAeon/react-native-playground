import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { ScreenName } from 'src/shared/enums';
import { LoginScreen } from 'src/screens';

export const MainNavigator = createSwitchNavigator(
    {
        [ScreenName.Main]: createStackNavigator({
            [ScreenName.Applications]: ApplicationsScreen,
        }),
        [ScreenName.Login]: LoginScreen,
    },
    {
        initialRouteName: ScreenName.Login,
    },
);
