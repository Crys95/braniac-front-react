import styled from 'styled-components';

export const ContainerNavegar = styled.div`
  background-color: white;
  position: fixed;
  text-align: center;
  left: 0;
  top: 70px;
  width: 150px;
  height: 95%;
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

export const NavegarItensEnd = styled.li`
cursor: pointer;
position: absolute;
width: 100%;
list-style-type: none;
font-size: 15px;
padding-top: 20px;
padding-bottom: 20px;
border-bottom: 1px solid #1ec3ff;
bottom:13%;
  &:hover {
    background-color: #1ec3ff;
  }
  &:active {
    background-color: #2230c9;
  }
`;




