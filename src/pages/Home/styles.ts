import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
`;

export const ContainerNavegar = styled.div`
  background-color: white;
  position: absolute;
  text-align: center;
  right: 0;
  top: 100px;
  width: 12%;
  height: 85%;
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
`;




