import { Navigation } from 'react-native-navigation';
import { iOSColors } from 'react-native-typography';

import { registerScreens } from './screens';
import { iconsLoaded, iconsMap } from './utils/icons';
import { navBarStyle } from './utils/navBarStyle';

registerScreens();

export default class Nav {
  constructor() {
    iconsLoaded.then(() => this.initApp());
  }

  initApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Feed',
          screen: 'instagramApp.FeedScreen', // this is a registered name for a screen
          title: 'Feed',
          icon: iconsMap['ios-home'],
          navigatorStyle: navBarStyle
        },
        {
          label: 'Explore',
          screen: 'instagramApp.ExploreScreen',
          title: 'Explore',
          icon: iconsMap['ios-search'],
          navigatorStyle: navBarStyle
        }
      ],
      tabsStyle: {
        // iOS
        tabBarButtonColor: iOSColors.midGray,
        tabBarSelectedButtonColor: iOSColors.black,
        tabBarBackgroundColor: iOSColors.white,
        tabBarHideShadow: false,
        initialTabIndex: 0
      },
      appStyle: {
        // Android
        tabBarBackgroundColor: iOSColors.white,
        tabBarButtonColor: iOSColors.midGray,
        tabBarSelectedButtonColor: iOSColors.black,
        tabBarTranslucent: false,
        tabFontFamily: 'Avenir-Medium'
      }
    });
  }
}
