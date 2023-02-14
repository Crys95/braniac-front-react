import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signin } from '../../store/modules/login/thunk.store';
import { useDispatch } from 'react-redux';
import * as Styled from './styles';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { TextField } from '@mui/material';
import Begins from '../../components/Begins';
import Button from '@mui/material/Button';

const Sign: React.FC = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const [emails, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [eye, setEye] = useState('password')

  const eyeFunction = () => {
    if (eye === 'password') {
      setEye('text')
    } else {
      setEye('password')
    }
  }

  const Login = () => dispatch(signin(
    {
      email: emails,
      password: senha,
    }));

  return (
    <Styled.Container>
      <Begins />
      <Styled.ContainerRigth>
        <Styled.Title>Bem-Vindo</Styled.Title>
        <Styled.DivInput>
          <TextField
            style={{ width: 300 }}
            label="Login"
            variant="filled"
            value={emails}
            onChange={(e) => setEmail(e.target.value)} />
        </Styled.DivInput>

        <Styled.DivInput>
          <TextField
            style={{ width: 300 }}
            label="Password"
            variant="filled"
            type={eye}
            value={senha}
            onChange={(e) => setSenha(e.target.value)} />
            <Styled.Icon onClick={eyeFunction}>{eye === 'password' ? (<FaEye />) : (<FaEyeSlash />)}</Styled.Icon>
        </Styled.DivInput>
        <Styled.DivBotton>
          <Button style={{ width: 120 }} variant="outlined" onClick={() => navigate('/Register')}>Registrar</Button>
          <Button style={{ width: 120 }} variant="contained" onClick={Login}>Conectar</Button>
        </Styled.DivBotton>
      </Styled.ContainerRigth>
    </Styled.Container>
  );
};

export default Sign;
