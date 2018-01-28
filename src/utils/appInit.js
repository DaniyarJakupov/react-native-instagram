import { AsyncStorage } from 'react-native';

import { startLogin, startMainApp } from '../Nav';
import { iconsLoaded } from './themes';

const appInit = async () => {
  await iconsLoaded(); // load icons

  const token = await AsyncStorage.getItem('@instagram/token'); // get token

  if (!token) {
    startLogin();
  } else {
    startMainApp();
  }
};

export default appInit;
