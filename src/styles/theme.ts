import { DefaultTheme } from 'styled-components';
//DefaultTheme로 정의한 interface 타입들을 theme.ts에서 사용
export const darkTheme: DefaultTheme = {
  bgColor: '#1E1E1E',
  textColor: '#f5f6fa',
  bgAccentColor: '#2f3640',
  accentColor: '#487eb0',
};

export const lightTheme: DefaultTheme = {
  bgColor: 'white',
  textColor: '2f3640',
  bgAccentColor: 'whiteSmoke',
  accentColor: '#487eb0',
};
