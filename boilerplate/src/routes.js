import { createStackNavigator } from 'react-navigation';

import Tutorial from './pages/Tutorial';
import Perfil from './pages/Perfil';
import Login from './pages/Login';


export const SignedOutRoutes = createStackNavigator({
  Tutorial: {
    screen: Tutorial,
    navigationOptions: {
      title: "Tutorial"
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  },
});

export const SignedInRoutes = createStackNavigator({
  Perfil: {
        screen: Perfil,
        navigationOptions: {
          title: "Perfil"
        }
    },
});

export const createRootNavigator = (signedIn = false) => {
    return createStackNavigator({
      SignedIn: { screen: SignedInRoutes },
      SignedOut: { screen: SignedOutRoutes }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut",
      navigationOptions: {
        gesturesEnabled: false
      }
    });
    
};



