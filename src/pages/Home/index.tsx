import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styles';
import Topo from '../../components/Topo';
import Footer from '../../components/Footer';
import Navegador from '../../components/Navegador';

const Sign: React.FC = () => {
    const navigate = useNavigate();



    return (
        <Styled.Container>
            <Topo Title='Seja Bem vindo' />
            <Navegador />
            <Footer />
        </Styled.Container>
    );
};

export default Sign;
