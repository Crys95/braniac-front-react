import styled from 'styled-components';

export const ContainerNavegar = styled.div`
  text-align: center;
  left: 0;
`;

export const Icon = styled.div`
cursor: pointer;
font-size: 29px;
margin-left: 29px;
padding-top: 19px;
position: absolute;
`;

export const Navegar = styled.ul`
height: 100%;
padding-left: 0px;
`;

export const NavegarItens = styled.li`
cursor: pointer;
list-style-type: none;
font-size: 15px;
padding-top: 20px;
padding-bottom: 20px;
border-bottom: 1px solid #1ec3ff;
  &:hover {
    background-color: #1ec3ff;
  }
  &:active {
    background-color: #2230c9;
  }
`;





