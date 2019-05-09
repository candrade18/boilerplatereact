import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window')


export const Container = styled.View`
  
`;

export const HeaderLogin = styled.ImageBackground`
    align-items: center;
    justify-content: center;
    height: 256px;
    width: ${width};
`;

export const HeaderLogo = styled.Image`
    
`;

export const FormLoginContainer = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    padding: 0 54px;
`;

export const FormLoginTitle = styled.Text`
    color: #58595b;
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: bold;
    text-align: center;
    width: 100%;
`;

export const FormLoginInput= styled.TextInput`
    border-radius: 11px;
    border: solid 1px #dbdbdb;
    margin-bottom: 10px;
    height: 56px;
    width: 253px;
`;


export const FormLoginButton= styled.View`
    background-color: #663350;
    align-items: center;
    justify-content: center;
    border-radius: 11px;
    height: 56px;
    width: 253px;
`;

export const FormLoginButtonText= styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;

