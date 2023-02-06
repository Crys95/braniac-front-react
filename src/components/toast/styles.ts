import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ToastCont = styled(ToastContainer)`
 .Toastify__toast--info {
    background: 'rgb(51, 102, 255)';
    border-radius:16px;
    height:112px;
    width:360px;
    margin-left:-40px;
  }
.Toastify__toast--success {
    background:  #07D07C;
    border-radius:16px;
    height:112px;
    width:360px;
    margin-left:-40px;
  }
.Toastify__toast--warning {
    background: 'rgb(254, 255, 20)';
    border-radius:16px;
    height:112px;
    width:360px;
    margin-left:-40px;
  }
.Toastify__toast--error {
    background: #FB3C3C;
    border-radius:16px;
    height:112px;
    width:360px;
    margin-left:-40px;

  }

`;
export const Title = styled.p`
font-size:22px;
font-weight:bold;
margin:0;
`;

export const Container = styled.div`
display:flex;
margin-top:12px;
margin-left:4px;
`;

export const Icon = styled(FontAwesomeIcon)`
font-size:20px;
margin-right:10px;
margin-top:2px;
`;

export const Text = styled.p`
margin-top:10px;
margin-left:30px;
font-size:14px;
width:300px;
`;
export default ToastCont;