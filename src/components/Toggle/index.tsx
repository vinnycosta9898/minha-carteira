import React from "react";

import { Container, ToggleLabel, ToggleSelector } from './styles';

interface ToggleProps{
    labelLeft: string;
    labelRight: string;
    checked: boolean;
    onChange(): void;

}

export default function Toggle({ labelLeft,
                                 labelRight, 
                                 checked, 
                                 onChange } : ToggleProps){
    return(
        <Container>
            <ToggleLabel>{labelLeft}</ToggleLabel>
            <ToggleSelector
            checked
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={onChange}

            />
            <ToggleLabel>{labelRight}</ToggleLabel>
        </Container>
    )
}