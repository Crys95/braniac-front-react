import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import Topo from '../../components/Topo';
import Footer from '../../components/Footer';
import Navegador from '../../components/Navegador';
import { useAppSelector } from '../../store/hooks';
import Input from '../../components/Input';
import { Button } from '@mui/material';

const RegisterClient: React.FC = () => {
    const [tipo, setTipo] = useState('cliente');

    const Employee = () => {
        setTipo('funcionario');
      }

      const Client = () => {
        setTipo('cliente');
      }

    return (
        <Styled.Container>
            <Topo Title={`Registrar`} />
            <Styled.Topo></Styled.Topo>
            <Styled.ContainerRegister>
                <Styled.ContainerFuncionario>
                    <Styled.Label>Você gostaria de registrar</Styled.Label>
                    <Button onClick={Client} variant="contained" color="success" size="large">
                        Cliente
                    </Button>
                    <Button onClick={Employee} variant="contained" color="success" size="large">
                        Funcionario
                    </Button>
                </Styled.ContainerFuncionario>

                {tipo === 'cliente' ? (
                    <Styled.ContainerCliente>
                        <Styled.Texto>Cliente</Styled.Texto>
                        <Input dimension='large' placeholder='Nome'></Input>
                        <Input dimension='large' placeholder='RG ou CPF'></Input>
                        <Input dimension='large' placeholder='Telefone'></Input>
                        <Button style={{ width: 120 }} variant="contained">Registrar</Button>
                    </Styled.ContainerCliente>
                ) : (

                    <Styled.ContainerCliente>
                        <Styled.Texto>Funcionario</Styled.Texto>
                        <Input dimension='large' placeholder='Nome'></Input>
                        <Input dimension='large' placeholder='RG ou CPF'></Input>
                        <Input dimension='large' placeholder='Endereço'></Input>
                        <Input dimension='large' placeholder='Telefone'></Input>
                        <Button style={{ width: 120 }} variant="contained">Registrar</Button>
                    </Styled.ContainerCliente>
                )}
            </Styled.ContainerRegister>
            <Navegador />
            <Footer />
        </Styled.Container>
    );
};

export default RegisterClient;
