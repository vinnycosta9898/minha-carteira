import React, { ReactNode } from "react";

import { Container, 
         TitleContainer, 
         Controllers } from './styles';

import SelectInput from "../SelectInput";

interface ContentHeaderProps{
    title: string;
    lineColor: string;
    children: ReactNode;
}

export default function ContentHeader({ title, lineColor, children } : ContentHeaderProps){

    return(
        <Container>
            <TitleContainer lineColor={lineColor}>
                <h1>{title}</h1>
            </TitleContainer>
            <Controllers>
                {children}
            </Controllers>
        </Container>
    )
}