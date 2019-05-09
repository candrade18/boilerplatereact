import React from 'react';
import { isSignedIn } from "./services/auth";
import { createRootNavigator } from './routes';
import { createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  state = {
    signed: false,
    signLoaded: false,
  };

  componentWillMount() {
    isSignedIn()
      .then(res => this.setState({ signed: res, signLoaded: true }))
      .catch(err => alert("Erro"));
  }

  render() {
    const { signLoaded, signed } = this.state;

    if (!signLoaded) {
      return null;
    }

    const Layout = createAppContainer(createRootNavigator(signed));
    return <Layout />;
  }
}