import { InputHTMLAttributes } from 'react'

import { Container } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input( { ...rest }: InputProps){
    return(
         <Container { ...rest}>

         </Container>
    )
}