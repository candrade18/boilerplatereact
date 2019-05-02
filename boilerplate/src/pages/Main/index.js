import React, { Component } from 'react';
import { Container, TextContainer, ButtonName, InputText, TextName } from './styles'

import ListCards from '~/components/ListCards'

/* CONECTANDO A STORE DO REDUX */
import { connect } from 'react-redux';

import * as UserActions from '../../store/actions/user'


class Main extends Component {

   state = {
    text: null
  };

  mudarNome = (value) => {
    this.setState({
      text: value
    })
  };

  render () {

    let user = this.props.user;
    let dispatch = this.props.dispatch

    return (
      <Container>
            {/* <TextContainer>Bem vindo ao BoilerPlate { user }</TextContainer>
            <ButtonName title="Mudar nome" onPress={ () => dispatch(UserActions.changeNome()) }></ButtonName>
            <InputText onChangeText={ (value) => this.mudarNome(value) }/>
            <TextName> { this.state.text } </TextName> */}
            <ListCards />
      </Container>
    )
  }
}


export default connect(state => ({ user: state.user.name }))(Main)