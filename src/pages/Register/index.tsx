import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import * as Styled from './styles';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import Begins from '../../components/Begins';
import Button from '@mui/material/Button';
import { Signup } from '../../store/modules/login/thunk.store';

const Register: React.FC = () => {
  const dispatch = useDispatch<any>();
  const [nome, setNome] = useState('');
  const [emails, setEmails] = useState('');
  const [senha, setSenha] = useState('');
  const [senhacon, setSenhacon] = useState('');
  const navigate = useNavigate();

  const Register = () => dispatch(Signup(
    {
      name: nome,
      email: emails,
      password: senha,
      confirm_password: senhacon,
      isAdmin: false,
    }));

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
            type="text"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </Styled.DivInput>

        <Styled.DivInput>
          <TextField
            style={{ width: 300 }}
            label="Confirmar Senha"
            variant="standard"
            type="text"
            value={senhacon}
            onChange={(e) => setSenhacon(e.target.value)}
          />
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
