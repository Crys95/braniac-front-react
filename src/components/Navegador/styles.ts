import styled from 'styled-components';

export const ContainerNavegar = styled.div`
  background-color: white;
  position: fixed;
  text-align: center;
  right: 0;
  top: 70px;
  width: 200px;
  height: 95%;
`;

export const Navegar = styled.ul`
padding-left: 0px;
`;

export const NavegarItens = styled.li`
cursor: pointer;
display:block;
list-style-type: none;
font-size: 25px;
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




