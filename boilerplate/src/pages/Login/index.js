import React from 'react';
import { Component } from 'react';
import Api from '~/services/auth'
import AsyncStorage from '@react-native-community/async-storage';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { Container, HeaderLogin, HeaderLogo, FormLoginContainer, FormLoginTitle, FormLoginInput, FormLoginButton, FormLoginButtonText } from './styles';
import { withFormik } from 'formik';


class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      dataLogin: {
        cpf: '',
        senha: ''
      }
    }
  }

  render() {

    return (
      <ScrollView>
        <Container>
          <HeaderLogin source={require('~/assets/bg-login.png')}>
            <HeaderLogo source={require('~/assets/logo.png')} />
          </HeaderLogin>
          <FormLoginContainer>
            <FormLoginTitle>
              Utilize seus dados do
              Mundo Caixa para acessar:
          </FormLoginTitle>
            <View>
              <FormLoginInput placeholder="CPF" value={this.props.values.cpf}
                onChangeText={text => this.props.setFieldValue('cpf', text)} />
              <FormLoginInput placeholder="Senha" value={this.props.values.senha}
                onChangeText={text => this.props.setFieldValue('senha', text)} />
            </View>
            <TouchableOpacity onPress={this.props.handleSubmit}>
              <FormLoginButton>
                <FormLoginButtonText>Começar</FormLoginButtonText>
              </FormLoginButton>
            </TouchableOpacity>
          </FormLoginContainer>
        </Container>
      </ScrollView>
    );
  }
}



export default withFormik({
  
  mapPropsToValues: () => ({ cpf: '', senha: '' }),

  handleSubmit: (values) => {


    console.log(values)

    Api.LoginUser(values).then(resp => {

      if(resp) {
        AsyncStorage.setItem('user', resp.data.access_token);
      }

      

    }).catch(error => console.log(error));

  }

})(Login);