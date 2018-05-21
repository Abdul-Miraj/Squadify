import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-home", 30),
    Icon.getImageSource("ios-musical-notes", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "squadify.Lobby",
          label: "Lobby",
          icon: sources[0]
        },

        {
          screen: "squadify.PlayerLayout",
          label: "Squadify",
          icon: sources[1]
        }
      ],
      tabsStyle: {
        tabBarButtonColor: "black",
        tabBarSelectedButtonColor: "black",
        tabBarBackgroundColor: "black",
        initialTabIndex: 0
      },

      animationType: "fade"
    });
  });
};

export default startTabs;
