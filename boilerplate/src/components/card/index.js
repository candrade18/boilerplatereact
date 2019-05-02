import React, { Component } from 'react';

import { Text } from 'react-native';

 import { CardContainer, ImagemMovie, CardTitle } from './styles';



class Card extends Component {

  constructor (props) {
    super(props)

    this.state = {
        movie: this.props.movie,
        url: 'https://image.tmdb.org/t/p/w500/'
    }
  }

  componentDidMount () {
      console.log(`${this.state.url + this.state.movie.backdrop_path}`)
  }

  render() {
    
    return (
        <CardContainer>
            <ImagemMovie  source={{uri: `${this.state.url + this.state.movie.backdrop_path}` }}  />
            <CardTitle>{ this.state.movie.title  } </CardTitle>
        </CardContainer>
    );
  }
}


export default Card