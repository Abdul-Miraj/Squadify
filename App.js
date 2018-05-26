import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux'

import startSingleScreen from "./src/screens/SingleScreen/startSingleScreen";

import LobbyScreen from "./src/screens/Lobby/Lobby";
import PlayerLayout from './src/screens/PlayerLayout/PlayerLayout';
import SearchLayout from './src/screens/SearchLayout/SearchLayout';

import configureStore from "./src/store/configureStore";

const store = configureStore();

Navigation.registerComponent("squadify.Lobby", () => LobbyScreen, store, Provider);
Navigation.registerComponent("squadify.PlayerLayout", () => PlayerLayout, store, Provider);
Navigation.registerComponent("squadify.Search", () => SearchLayout, store, Provider);

startSingleScreen();