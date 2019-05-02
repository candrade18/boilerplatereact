import React from 'react';

import { Container, TextContainer } from './styles'

/* CONECTANDO A STORE DO REDUX */
import { connect } from 'react-redux'


const Main = () => {
  return (
    <Container>
          <TextContainer>Bem vindo ao BoilerPlate</TextContainer>
    </Container>
  )
}


const mapStateToProps = function(state) {
  return {
    user: state.name,
  }
}

export default connect(mapStateToProps)(Main)