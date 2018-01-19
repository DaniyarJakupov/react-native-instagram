import { Navigation } from 'react-native-navigation';
// import Icon from 'react-native-vector-icons/Ionicons';

import { registerScreens } from './screens';
import { iconsLoaded, iconsMap } from './utils/icons';

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
          icon: iconsMap['ios-home']
        },
        {
          label: 'Explore',
          screen: 'instagramApp.ExploreScreen',
          title: 'Explore',
          icon: iconsMap['ios-search']
        }
      ]
    });
  }
}
