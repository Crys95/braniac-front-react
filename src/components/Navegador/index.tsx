import React, {useState} from 'react';
import Drawer from '@mui/material/Drawer';
import { AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styles';


const Navegador: React.FC = () => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState(false)
    const drawerWidth = 170;

    const openMenu = () => {
        if (menu === false) {
            setMenu(true)
        } else {
            setMenu(false)
        }
      }

    return (
        <>
        <Styled.Icon onClick={openMenu}><AiOutlineMenu /></Styled.Icon>
        <>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        top: '65px',
                    },
                }}
                BackdropProps={{ invisible: true }}
                anchor="left"
                open={menu}
                onClose={openMenu}
            >
                <Styled.ContainerNavegar  style={{padding: 0}}>
                    <Styled.Navegar>
                        <Styled.NavegarItens onClick={() => navigate('/Home')}>Inicio</Styled.NavegarItens>
                        <Styled.NavegarItens onClick={() => navigate('/RegisterClient')}>Registro</Styled.NavegarItens>
                        <Styled.NavegarItens>Editar</Styled.NavegarItens>
                        <Styled.NavegarItens>Cliente</Styled.NavegarItens>
                        <Styled.NavegarItens>Sobre</Styled.NavegarItens>
                        <Styled.NavegarItens onClick={() => navigate('/')}>Sair</Styled.NavegarItens>
                    </Styled.Navegar>
                </Styled.ContainerNavegar >
            </Drawer>
        </>
        </>
    );
};

export default Navegador;
