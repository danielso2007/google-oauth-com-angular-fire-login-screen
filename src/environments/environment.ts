import { firebaseConfigDev } from '../../.env';

export const environment = {
  production: false,
  defaultLoginRoute: '/login',
  defaultRouteAfterLogout: '/home',
  fireBaseConfig: {
    apiKey: firebaseConfigDev.apiKey,
    authDomain: firebaseConfigDev.authDomain,
    databaseURL: firebaseConfigDev.databaseURL,
    projectId: firebaseConfigDev.projectId,
    storageBucket: firebaseConfigDev.storageBucket,
    messagingSenderId: firebaseConfigDev.messagingSenderId
  }
};