import { createGlobalStyle } from 'styled-components';

const Theme = createGlobalStyle`
*{
  font-family: 'Cabin', sans-serif;
}
body{
  margin:0;
  padding:0;
  box-sizing:border-box;
  outline:0;
  background-color:#F7F7F7;
  width:100%;
  height:100%;
}
`;

export default Theme;
