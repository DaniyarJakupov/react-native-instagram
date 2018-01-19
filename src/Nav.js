import { Navigation } from 'react-native-navigation';
//import Icon from 'react-native-vector-icons/Ionicons';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

export default class Nav {
  constructor() {
    this.initApp();
  }

  initApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Feed',
          screen: 'instagramApp.FeedScreen', // this is a registered name for a screen
          title: 'Feed'
        },
        {
          label: 'Two',
          screen: 'instagramApp.ExploreScreen',
          title: 'Explore'
        }
      ]
    });
  }
}
