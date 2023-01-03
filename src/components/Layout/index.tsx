import { Container } from './styles';

import  Header  from '../Header';

import Aside from '../Aside';

import Content from '../Content'

import { ReactNode } from 'react';

interface LayoutProps{
    children: ReactNode;
}

export function Layout({ children } : LayoutProps){
    return(
        <Container>
            <Header/>
            <Aside/>
            <Content>
                { children }
            </Content>
        </Container>
    )
}