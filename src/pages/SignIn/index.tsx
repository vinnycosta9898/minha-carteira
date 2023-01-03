import { useState } from 'react';

import { Container, Logo, Form, FormTitle } from './styles'

import Input from '../../components/Input'

import Button from '../../components/Button'

import { useAuth } from '../../hooks/auth'

import logoImg from '../../assets/logo.svg'

export default function SignIn(){

    const [email, setEmail] = useState<string>("");
    
    const [password, setPassword] = useState<string>("");
    
    const { signIn } = useAuth();
    
    return(
        <Container>
            <Logo>
                <img src={logoImg} alt="Minha Carteira"/>
                <h3>Minha Carteira</h3>
            </Logo>

            <Form onSubmit={() => signIn(email, password)}>
                <FormTitle>Entrar</FormTitle>

                <Input
                    placeholder="Email"
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />

               <Button type="submit">Acessar</Button>
            </Form>
        </Container>
    )
}