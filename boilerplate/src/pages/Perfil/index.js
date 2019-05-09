import React, { Component } from 'react';
import { onSignOut } from "~/services/auth";
import { TouchableOpacity, Text } from 'react-native';

import { Container, ButtonLogout, ButtonLogoutText } from './styles'

export default class Perfil extends Component {
  render() {
    return (
      <Container>
         <Text>Meu Perfil</Text>
         <TouchableOpacity onPress={onSignOut}>
            <ButtonLogout>
              <ButtonLogoutText>Deslogar</ButtonLogoutText>
            </ButtonLogout>
          </TouchableOpacity>
      </Container>
    );
  }
}
