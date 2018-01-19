import { Navigation } from 'react-native-navigation';

import FeedScreen from './FeedScreen';
import ExploreScreen from './ExploreScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('instagramApp.FeedScreen', () => FeedScreen);
  Navigation.registerComponent(
    'instagramApp.ExploreScreen',
    () => ExploreScreen
  );
}
