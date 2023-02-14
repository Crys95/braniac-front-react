import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import * as Styled from './styles';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import Begins from '../../components/Begins';
import Button from '@mui/material/Button';
import { Signup } from '../../store/modules/login/thunk.store';
import { ShowToast } from '../../components/toast';

const Register: React.FC = () => {
  const dispatch = useDispatch<any>();
  const [nome, setNome] = useState('');
  const [emails, setEmails] = useState('');
  const [senha, setSenha] = useState('');
  const [eye, setEye] = useState('password')
  const [eyeConf, setEyeConf] = useState('password')
  const [senhacon, setSenhacon] = useState('');
  const navigate = useNavigate();

  const eyeFunction = () => {
    if (eye === 'password') {
      setEye('text')
    } else {
      setEye('password')
    }
  }

  const eyeFunction2 = () => {
    if (eyeConf === 'password') {
      setEyeConf('text')
    } else {
      setEyeConf('password')
    }
  }

  const Register = () => {
    if (senha !== senhacon) {
      return ShowToast('ERROR', 'Senha não confere');
    }
    if (senha.length !== 8) {
      return ShowToast('ERROR', 'Mínimo 8 Letras');
    } else {
      dispatch(Signup(
        {
          name: nome,
          email: emails,
          password: senha,
          confirm_password: senhacon,
          isAdmin: false,
        }))
        navigate('/')
    }
  };

  return (
    <Styled.Container>
      <Begins />
      <Styled.ContainerRigth>
        <Styled.Title>Registrar-se</Styled.Title>
        <Styled.DivInput>
          <TextField
            style={{ width: 300 }}
            label="Nome"
            variant="standard"
            value={nome}
            onChange={(e) => setNome(e.target.value)} />
        </Styled.DivInput>

        <Styled.DivInput>
          <TextField
            style={{ width: 300 }}
            label="E-mail"
            variant="standard"
            value={emails}
            onChange={(e) => setEmails(e.target.value)}
          />
        </Styled.DivInput>

        <Styled.DivInput>
          <TextField
            style={{ width: 300 }}
            label="Senha"
            variant="standard"
            type={eye}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Styled.Icon onClick={eyeFunction}>{eye === 'password' ? (<FaEye />) : (<FaEyeSlash />)}</Styled.Icon>
        </Styled.DivInput>

        <Styled.DivInput>
          <TextField
            style={{ width: 300 }}
            label="Confirmar Senha"
            variant="standard"
            type={eyeConf}
            value={senhacon}
            onChange={(e) => setSenhacon(e.target.value)}
          />
          <Styled.Icon onClick={eyeFunction2}>{eyeConf === 'password' ? (<FaEye />) : (<FaEyeSlash />)}</Styled.Icon>
        </Styled.DivInput>

        <Styled.DivBotton>
          <Button style={{ width: 120 }} variant="outlined" onClick={() => navigate('/')}>Voltar</Button>
          <Button style={{ width: 120 }} variant="contained" onClick={Register}>Registrar</Button>
        </Styled.DivBotton>
      </Styled.ContainerRigth>
    </Styled.Container>
  );
};

export default Register;
