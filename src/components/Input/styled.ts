import styled from 'styled-components';

export const CustomInput = styled.input <{
  dimension?: 'small' | 'medium' | 'large' | 'extra'|'modal' | 'signup' | 'modal2';
  italic?: number;
  error?:string;
}>`
  width: ${({ dimension }) => {
    switch (dimension) {
      case 'small':
        return '10vw';
      case 'medium':
        return '22vw';
      case 'large':
        return '35vw';
      case 'extra':
        return '73vw';
      case 'modal':
        return '300px';
      case 'signup':
        return '18vw';
      case 'modal2':
        return '1069px';
      default:
        return '22vw';
    }
  }};
height:48px;
border-radius:16px;
border:${({ error }) => {
    if (error === 'true') return '1px solid #FE5757';
    return '1px solid #DEDEDE';
  }};
font-size:16px;
color:#585858;
padding-left:12px;
font-style:${({ italic }) => {
    if (italic === 1) return 'italic';
    if (italic === 0) return 'normal';
    return 'normal';
  }};
  &:focus {
    border: 1px solid #CE397D;
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  &:read-only {
    background-color:rgb(232, 240, 254) !important;
  }
  @media (max-width:700px) {
    width: ${({ dimension }) => {
    switch (dimension) {
      case 'small':
        return '130px';
      case 'medium':
        return '200px';
      case 'large':
        return '35vw';
      case 'extra':
        return '73vw';
      case 'modal':
        return '300px';
      case 'signup':
        return '18vw';
      case 'modal2':
        return '1069px';
      default:
        return '22vw';
    }
  }};
  }
`;
export const CustomLabel = styled.label<{ italic?: number }>`
  font-size: 16px;
  margin-bottom: 9px;
  font-style: ${({ italic }) => {
    if (italic === 1) return 'italic';
    if (italic === 0) return 'normal';
    return 'normal';
  }};
`;
export const ContainerInput = styled.div`
display:flex;
flex-direction:column;


`;
export const Asterisk = styled.span`
color:#CE397D;
font-size:16px;


`;
