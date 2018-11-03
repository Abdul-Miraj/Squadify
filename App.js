import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import startSingleScreen from './src/screens/SingleScreen/startSingleScreen';

import LogInScreen from './src/screens/LogInScreen/LogInScreen';
import UserAccountScreen from './src/screens/UserAccountScreen/UserAccountScreen';
import SquadifyPlayerScreen from './src/screens/SquadifyPlayerScreen/SquadifyPlayerScreen';


import configureStore from './src/store/configureStore';

const store = configureStore();

Navigation.registerComponent('squadify.LogInScreen', () => LogInScreen, store, Provider);
Navigation.registerComponent('squadify.UserAccountScreen', () => UserAccountScreen, store, Provider);
Navigation.registerComponent('squadify.SquadifyPlayerScreen', () => SquadifyPlayerScreen, store, Provider);

startSingleScreen();