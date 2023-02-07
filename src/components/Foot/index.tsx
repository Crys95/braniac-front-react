import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './styles';

const Foot: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Styled.Container>
      <Styled.Title>Ações rápidas</Styled.Title>
      <Styled.ContainerSub>
        <Styled.ContainerButton>
          Contratar Motorista
        </Styled.ContainerButton>
        <Styled.ContainerButton>
        </Styled.ContainerButton>
      </Styled.ContainerSub>
    </Styled.Container>
  );
};

export default Foot;
