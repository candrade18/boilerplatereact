import React, { Component } from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';


import { Wrapper, 
  MaskContainer, 
  BulletsContainer, 
  Mask, SlideTitle, 
  SlideSubtitle, 
  Slide, 
  SlideImage, 
  Bullets, 
  ContainerButton, 
  ButtonSlide, 
  ButtonSlideText } from './styles'


const { width } = Dimensions.get('window')

const renderPagination = (index, total, context) => {

    return (
      <MaskContainer>
        <Mask source={require('~/assets/bg-mask.png')} />
        <BulletsContainer>
          <TouchableOpacity>
            <Bullets />
          </TouchableOpacity>
          <TouchableOpacity>
            <Bullets />
          </TouchableOpacity>
          <TouchableOpacity>
            <Bullets />
          </TouchableOpacity>
          <TouchableOpacity>
            <Bullets />
          </TouchableOpacity>
        </BulletsContainer>
      </MaskContainer>
    )
  }


export default class Tutorial extends Component {


  constructor(props) {
    super(props);

    console.log(props.navigation)

    this.state = {
      idxActive: 0,
    }
  }

  render() {
    return (
      <Wrapper>
        <Swiper style={styles.wrapper} showsButtons={false} renderPagination={renderPagination} loop={false}>
          <Slide>
            <SlideImage resizeMode="cover" source={require('~/assets/bg-slide1.png')} />
            <SlideTitle>Faça parte dessa revolução :)</SlideTitle>
            <SlideSubtitle>Placas solares transformam a luz solar em energia. Feito isso, os conversores irão transformá-la em corrente elétrica para sua casa.</SlideSubtitle>
          </Slide>
          <Slide>
            <SlideImage resizeMode="cover" source={require('~/assets/bg-slide2.png')} />
            <SlideTitle>Lorem ipsum dolor sit amet 2</SlideTitle>
            <SlideSubtitle>De toda sua produção, pode sobrar uma quantidade de energia razoável que é devolvida para a concessionária.</SlideSubtitle>
          </Slide>
          <Slide>
            <SlideImage resizeMode="cover" source={require('~/assets/bg-slide3.png')} />
            <SlideTitle>Lorem ipsum dolor sit amet 3</SlideTitle>
            <SlideSubtitle>A partir de então, sua residência passa a funcionar como uma verdadeira usina, produzindo sua própria energia.</SlideSubtitle>
          </Slide>
          <Slide>
            <SlideImage resizeMode="cover" source={require('~/assets/bg-slide3.png')} />
            <SlideTitle>Lorem ipsum dolor sit amet 4</SlideTitle>
            <SlideSubtitle>A partir de então, sua residência passa a funcionar como uma verdadeira usina, produzindo sua própria energia.</SlideSubtitle>
            <ContainerButton>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                <ButtonSlide>
                  <ButtonSlideText>Começar</ButtonSlideText>
                </ButtonSlide>
              </TouchableOpacity>
            </ContainerButton>
          </Slide>
        </Swiper>
      </Wrapper>
    )
  }
}

var styles = {
  wrapper: {
    flex: 1,
    background: '#fff',
    width: width
  },
  image: {
    height: 208,
    marginBottom: 160,
    width: width
  },

  activeBullet: {
    background: '#4b178b',
  },

  defaultBullet: {
    background: 'transparent',
  },

  paginationStyle: {
    position: 'absolute',
    top: 80,
    height: 164,
    right: 0,
    left: 0
  },

  ButtonSlide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#663350',
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 60,
    marginBottom: 20,
    borderRadius: 11,
    height: 56,
    alignSelf: 'stretch',
    width: 269
  },

  textGradient: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
}
