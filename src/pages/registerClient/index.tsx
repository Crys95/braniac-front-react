import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import Topo from '../../components/Topo';
import Footer from '../../components/Footer';
import Navegador from '../../components/Navegador';
import { useAppSelector } from '../../store/hooks';
import Input from '../../components/Input';
import { Button } from '@mui/material';

const RegisterClient: React.FC = () => {
    const navigate = useNavigate();
    const { name } = useAppSelector((state) => state.auth);

    return (
        <Styled.Container>
            <Topo Title={`Registrar`} />
            <Styled.Topo></Styled.Topo>
            <Styled.ContainerRegister>
                <Styled.ContainerFuncionario>
                    <Styled.Texto>Funcionario</Styled.Texto>
                    <Input dimension='large' placeholder='Nome'></Input>
                    <Input dimension='large' placeholder='RG ou CPF'></Input>
                    <Input dimension='large' placeholder='Endereço'></Input>
                    <Input dimension='large' placeholder='Telefone'></Input>
                    <Button style={{ width: 120 }} variant="contained">Registrar</Button>
                </Styled.ContainerFuncionario>
                <Styled.ContainerCliente>
                    <Styled.Texto>Cliente</Styled.Texto>
                    <Input dimension='large' placeholder='Nome'></Input>
                    <Input dimension='large' placeholder='RG ou CPF'></Input>
                    <Input dimension='large' placeholder='Telefone'></Input>
                    <Button style={{ width: 120 }} variant="contained">Registrar</Button>
                </Styled.ContainerCliente>
            </Styled.ContainerRegister>
            <Navegador />
            <Footer />
        </Styled.Container>
    );
};

export default RegisterClient;
