import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-home", 30),
    Icon.getImageSource("ios-musical-notes", 30),
    Icon.getImageSource("ios-search", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "squadify.Lobby",
          label: "Home",
          icon: sources[0],
          navigatorStyle: { navBarHidden: true }
        },

        {
          screen: "squadify.PlayerLayout",
          label: "Squadify",
          icon: sources[1],
          navigatorStyle: { navBarHidden: true }
        },

        {
          screen: "squadify.Search",
          label: "Search",
          icon: sources[2],
          navigatorStyle: { navBarHidden: true }
        }
      ],
      tabsStyle: { 
        tabBarButtonColor: '#797a7e', 
        tabBarSelectedButtonColor: '#ffffff', 
        tabBarBackgroundColor: '#222327', 
        initialTabIndex: 1,
      },
      appStyle: {
        initialTabIndex: 1,
        tabBarButtonColor: '#797a7e', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
        tabBarSelectedButtonColor: '#ffffff', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
        tabBarBackgroundColor: '#222327', // optional, change the background color of the tab bar
        navigatorStyle: { navBarHidden: true }
      },
      animationType: 'fade'
    });
  });
};

export default startTabs;
