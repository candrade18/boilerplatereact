import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native'
import { Container, ContainerFlatList } from './styles'

import Api from '~/services/api'
import Card from '~/components/card'


class ListCards extends Component {

    state = {
      listas: []
    };

  componentDidMount() {
    this.getListMovie()
  }

  getListMovie = () => {
    Api.getFilmes().then( resp => {
      let result = resp
      this.setState({
        listas: result
      })
    })
  }


  render () {
    return (
      <Container>
            <FlatList 
              numColumns={2}
              data={this.state.listas}
              renderItem={({item}) => <Card movie={ item }>
              <Text>{item.title}</Text>
            </Card>  }
            />
      </Container>
    )
  }
}


export default ListCards