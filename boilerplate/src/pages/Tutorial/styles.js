import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window')


export const Mask = styled.ImageBackground`
    height: 164px;
`;

export const Wrapper = styled.View`
    flex: 1;
    flex-direction: column;
    background: #fff;
    height: 100%
`

export const MaskContainer = styled.View`
  position: absolute;
  top: 80px;
  height: 164px;
  right: 0;
  left: 0
`
export const BulletsContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 95%;
`

export const Bullets = styled.View`
    background: transparent;
    border: solid 1px #4b178b;
    border-radius: 30px;
    height: 10px;
    margin-left: 10px;
    width: 10px;
`

export const Slide = styled.View`
    background: #fff;
    flex: 1;
    align-items: center;
    width: ${width};
    height: 100%;
`;

export const SlideImage = styled.Image`
    height: 208px;
    margin-bottom: 70px;
    width: ${width};
`;

export const SlideTitle = styled.Text`
    color: #58595b;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 15px;
    width: 50%;
`
export const SlideSubtitle = styled.Text`
    color: #58595b;
    font-size: 13px;
    text-align: center;
    width: 70%;
`


export const ContainerButton = styled.View`
    justify-content: center;
    margin: 60px auto 0 auto;
    width: 269px;
`

export const ButtonSlide = styled.View`
    background-color:#663350;
    border-radius: 11px;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 100%;
`

export const ButtonSlideText = styled.Text`
    color: #ffffff;
    font-weight: bold;
    font-size: 18px;
`
