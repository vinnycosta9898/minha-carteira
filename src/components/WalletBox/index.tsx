import { useMemo } from 'react';

import CountUp from 'react-countup';

import dollarImg from '../../assets/dollar.svg';

import arrowUpImg from '../../assets/arrow-up.svg';

import arrowDownImg from '../../assets/arrow-down.svg';

import { Container } from './styles';


interface WalletBoxProps{
    title: string;
    amount: number;
    footerLabel: string;
    icon: "dollar" | "arrowUp" | "arrowDown"
    color: string;
}

export default function WalletBox({title,
                                   amount, 
                                   footerLabel, 
                                   icon, 
                                   color } : WalletBoxProps){

    const iconSelected = useMemo(() => {
        if(icon === "dollar"){
            return dollarImg;
        }

        if(icon === "arrowUp"){
            return arrowUpImg
        }

        if(icon === "arrowDown"){
            return arrowDownImg
        }
    }, [icon]);
    
    return(
        <Container color={color}>
            <span>{title}</span>
            <h1>
                <CountUp
                    end={amount}
                    prefix={"R$ "}
                    separator="."
                    decimal=","
                    decimals={2}
                />
            </h1>
            <small>{footerLabel}</small>
            <img src={iconSelected} alt={title} />
        </Container>
    )
}