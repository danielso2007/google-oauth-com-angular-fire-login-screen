import { firebaseConfig } from '../../.env';

export const environment = {
  production: true,
  defaultLoginRoute: '/login',
  defaultRouteAfterLogout: '/home',
  fireBaseConfig: {
    apiKey: firebaseConfig.apiKey,
    authDomain: firebaseConfig.authDomain,
    databaseURL: firebaseConfig.databaseURL,
    projectId: firebaseConfig.projectId,
    storageBucket: firebaseConfig.storageBucket,
    messagingSenderId: firebaseConfig.messagingSenderId
  }
};
