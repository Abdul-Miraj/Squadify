import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux'

import LobbyScreen from "./src/screens/Lobby/Lobby";
import PlayerLayout from './src/screens/PlayerLayout/PlayerLayout';

import configureStore from "./src/store/configureStore";

const store = configureStore();

Navigation.registerComponent("squadify.Lobby", () => LobbyScreen, store, Provider);
Navigation.registerComponent("squadify.PlayerLayout", () => PlayerLayout, store, Provider);
Navigation.registerComponent("squadify.Search", () => PlayerLayout, store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: "squadify.Lobby",
    navigatorStyle: { navBarHidden: true }
  },
  animationType: "fade"
});
