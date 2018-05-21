import { Navigation } from "react-native-navigation";

import LobbyScreen from "./src/screens/Lobby/Lobby";
import PlayerLayout from './src/components/PlayerLayout/PlayerLayout';

Navigation.registerComponent("squadify.Lobby", () => LobbyScreen);
Navigation.registerComponent("squadify.PlayerLayout", () => PlayerLayout);

Navigation.startSingleScreenApp({
  screen: {
    screen: "squadify.Lobby",
    navigatorStyle: { navBarHidden: true }
  },
  animationType: "fade"
});
