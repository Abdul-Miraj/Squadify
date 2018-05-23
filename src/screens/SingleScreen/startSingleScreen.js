import { Navigation } from "react-native-navigation";

const startSS = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: "squadify.Lobby",
      navigatorStyle: { navBarHidden: true }
    },
    animationType: "none"
  });
};

export default startSS;
