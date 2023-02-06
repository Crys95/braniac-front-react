import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './styles';
import Foot from '../../components/Foot';
import Header from '../../components/Header';

const Sign: React.FC = () => {
  const navigate = useNavigate();

  return (
      <Styled.Container>
        <Header />
        <Styled.Title></Styled.Title>
        <Styled.ContainerSub>
        <Styled.ContainerButton>
        </Styled.ContainerButton>
        <Styled.ContainerButton>
        </Styled.ContainerButton>
      </Styled.ContainerSub>
        <Foot />
     </Styled.Container>
  );
};

export default Sign;
