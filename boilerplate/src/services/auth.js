// import { AsyncStorage } from 'react-native';

// export const TOKEN_KEY = "@RocketSeat:token";

// export const onSignIn = () => AsyncStorage.setItem(TOKEN_KEY, "true");

// export const onSignOut = () => AsyncStorage.removeItem(TOKEN_KEY);

// export const isSignedIn = async () => {
//   const token = await AsyncStorage.getItem(TOKEN_KEY);

//   return (token !== null) ? true : false;
// };

import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

  const API_URL = "http://nossaforcaapi-hml.azurewebsites.net"
  const Client = 'client_id=00000&grant_type=password'



export const onSignIn = () => AsyncStorage.setItem('user');

export const onSignOut = () => AsyncStorage.removeItem('user');

export const isSignedIn = async () => {

  const token = await AsyncStorage.getItem('user');

  return (token !== null) ? true : false;
};

  
  
  const Api = {
    LoginUser: (user) => new Promise((resolve, reject) => {
      let data = `${Client}&username=${user.cpf}&password=${user.senha}`
      Axios
          .post(`${API_URL}/token`, data)
          .then(
              (resp) => {
                  console.log(resp)
                  AsyncStorage.setItem('user', resp)
                  resolve(resp)
              },
              (error) => {
                  reject(error.response)
              }
          )
    }), 
  };
  
  
  
export default Api;
  