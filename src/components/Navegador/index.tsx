import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styles';

const Navegador: React.FC = () => {
    const navigate = useNavigate();



    return (
            <Styled.ContainerNavegar>
                    <Styled.Navegar>
                        <Styled.NavegarItens onClick={() => navigate('/')} style={{ marginTop: 36 }}>Inicio</Styled.NavegarItens>
                        <Styled.NavegarItens>Registro</Styled.NavegarItens>
                        <Styled.NavegarItens>Editar</Styled.NavegarItens>
                        <Styled.NavegarItens>Cliente</Styled.NavegarItens>
                        <Styled.NavegarItens>Sobre</Styled.NavegarItens>
                    </Styled.Navegar>
            </Styled.ContainerNavegar>
    );
};

export default Navegador;
