import Profile from './Profile';
import EditScreenOne from './EditScreenOne';
import EditScreenTwo from './EditScreenTwo';
import { createStackNavigator } from 'react-navigation';

const DrawNav = createStackNavigator({
    Profile: { screen: Profile },
    EditScreenOne: { screen: EditScreenOne },
    EditScreenTwo: { screen: EditScreenTwo },
});

export default DrawNav;
