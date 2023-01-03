import { Container , 
         Header, 
         LogoImg, 
         MenuContainer,
         MenuItemButton, 
         Title } from './styles';

import { MdDashboard, 
         MdArrowDownward, 
         MdArrowUpward, 
         MdExitToApp } from 'react-icons/md';

import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth'

import logoImg from '../../assets/logo.svg';

export default function Aside(){

    const { signOut } = useAuth();
    
    return(
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="logo minha carteira"/>
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>

                <Link to="/">
                    <MdDashboard/> DashBoard
                </Link>
                
                <Link to="/list/entry-balance">
                    <MdArrowUpward/> Entradas
                </Link>
                

                <Link to="/list/exit-balance">
                    <MdArrowDownward/>Saidas
                </Link>

                <Link to="/">
                    <MenuItemButton onClick={signOut}>
                        <MdExitToApp/>Sair  
                    </MenuItemButton>
                </Link>
            </MenuContainer>
        </Container>
    )
}