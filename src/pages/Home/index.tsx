import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styles';
import Topo from '../../components/Topo';
import Footer from '../../components/Footer';
import Navegador from '../../components/Navegador';
import { useAppSelector } from '../../store/hooks';

const Sign: React.FC = () => {
    const navigate = useNavigate();
    const { name } = useAppSelector((state) => state.auth);

    return (
        <Styled.Container>
            <Topo Title={`Seja Bem Vindo ${name}`} />
            <Navegador />
            <Footer />
        </Styled.Container>
    );
};

export default Sign;
