import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './components/Home'
import Trees from './components/Trees';

const AppNavigator = createStackNavigator({
    Home: Home,
    Trees: Trees
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#0000ca'
        },
        headerTitle: "First React App",
        headerTintColor: '#fff'

    }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
