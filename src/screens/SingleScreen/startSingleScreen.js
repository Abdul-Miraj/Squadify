import { Navigation } from "react-native-navigation";

const startSS = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: "squadify.LogInScreen",
      navigatorStyle: { navBarHidden: true }
    },
    animationType: "none"
  });
};

export default startSS;
