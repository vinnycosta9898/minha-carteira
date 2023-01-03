import { useCallback, useMemo, useState } from 'react';

import { Container, Content } from './styles';

import ContentHeader from '../../components/ContentHeader';

import SelectInput from '../../components/SelectInput';

import WalletBox from '../../components/WalletBox';

import listOfMonths from '../../utils/months';

import expenses  from '../../repositories/expenses';

import gains from '../../repositories/gains';

import MessageBox from '../../components/MessageBox';

import PieChartBox from '../../components/PieChart';

import HistoryBox from '../../components/HistoryBox';

import BarChartBox from '../../components/BarChartBox';

import happyImg from '../../assets/happy.svg'

import grinningImg from '../../assets/grinning.svg'

import sadImg from '../../assets/sad.svg'


export function DashBoard(){
    const [monthSelected, setMonthSelected] = useState<number>(2020);
    const [yearSelected, setYearSelected] = useState<number>(2020);

    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        });
    }, [])

    const years = useMemo(() => {
        let uniqueYears: number[] = [];
        
        [...expenses, ...gains].forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)){
                uniqueYears.push(year)
            }
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year,
            }
        })
    }, [])

    const totalExpenses = useMemo(() => {
        let total : number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date)
            const year = date.getFullYear()
            const month = date.getMonth() + 1

            if(month === monthSelected && year === yearSelected){
                try{
                    total += Number(item.amount)
                }catch{
                    throw new Error("Invalid amount!")
                }
            }
        });

        return total;
    }, [monthSelected, yearSelected])

    const totalGains = useMemo(() => {
        let total : number = 0;

        gains.forEach(item => {
            const date = new Date(item.date)
            const year = date.getFullYear()
            const month = date.getMonth() + 1

            if(month === monthSelected && year === yearSelected){
                try{
                    total += Number(item.amount)
                }catch{
                    throw new Error("Invalid amount!")
                }
            }
        });

        return total;
    }, [monthSelected, yearSelected])

    const totalBalance = useMemo(() => {
        return totalGains - totalExpenses
    }, [monthSelected, yearSelected])

    const message = useMemo(() => {
        if(totalBalance < 0){
            return {
                title: "Que triste!",
                description: "Neste mês, você gastou mais do que deveria.",
                footerText: "Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
                icon: sadImg
            }
        }      
        else if(totalGains === 0 && totalExpenses === 0){
            return {
                title: "Op's!",
                description: "Neste mês, não há registros de entradas ou saídas.",
                footerText: "Parece que você não fez nenhum registro no mês e ano selecionado.",
                icon: sadImg
            }
        }
        else if(totalBalance === 0){
            return {
                title: "Ufaa!",
                description: "Neste mês, você gastou exatamente o que ganhou.",
                footerText: "Tenha cuidado. No próximo tente poupar o seu dinheiro.",
                icon: grinningImg
            }
        }
        else{
            return {
                title: "Muito bem!",
                description: "Sua carteira está positiva!",
                footerText: "Continue assim. Considere investir o seu saldo.",
                icon: happyImg
            }
        }

    },[totalBalance, totalGains, totalExpenses]);

    const relationExpensesVersusGains = useMemo(() => {
        
        const total = totalGains + totalExpenses;

        const percentGains = (totalGains/total) * 100

        const percentExpenses = (totalExpenses/total) * 100

        const data = [
            {
                name: "Entradas",
                value: totalGains,
                percent: Number(percentGains.toFixed(1)),
                color: "#E44C4E"
            },

            {
                name: "Saídas",
                value: totalExpenses,
                percent: Number(percentExpenses.toFixed(1)),
                color: "#F7931B"
            },
        ];

        return data

    }, [totalGains, totalExpenses])

    const relationExpensesRecurrentVersusEventual = useMemo(() => {
        let expenseAmountRecurrent = 0;
        let expenseAmountEventual = 0;

        expenses.filter((expense) => {
            const date = new Date(expense.date)
            const year = date.getFullYear()
            const month = date.getMonth() + 1

            return month === monthSelected && year === yearSelected
        })
        .forEach((expense) => {
            if(expense.frequency === "recorrente"){
                return expenseAmountRecurrent += Number(expense.amount);
            }

            if(expense.frequency === "eventual"){
                return expenseAmountEventual += Number(expense.amount)
            }
        });

        const total = expenseAmountRecurrent + expenseAmountEventual

        const recurrentPercent =  Number(((expenseAmountRecurrent / total) * 100).toFixed(1))

        const eventualPercent =  Number(((expenseAmountEventual / total) * 100).toFixed(1))

        return [
            {
                name: "Recorrente",
                amount: expenseAmountRecurrent,
                percent: recurrentPercent ? recurrentPercent : 0,
                color: "#F7931B"
            },

            {
                name: "Eventual",
                amount: expenseAmountEventual,
                percent: eventualPercent ? eventualPercent : 0,
                color: "#E44C4E"
            },
        ]
    }, [monthSelected, yearSelected])

    const relationGainsRecurrentVersusEventual = useMemo(() => {
        let gainsAmountRecurrent = 0;
        let gainsAmountEventual = 0;

        gains.filter((gain) => {
            const date = new Date(gain.date)
            const year = date.getFullYear()
            const month = date.getMonth() + 1

            return month === monthSelected && year === yearSelected
        })
        .forEach((gain) => {
            if(gain.frequency === "recorrente"){
                return gainsAmountRecurrent += Number(gain.amount);
            }

            if(gain.frequency === "eventual"){
                return gainsAmountEventual += Number(gain.amount)
            }
        });

        const total = gainsAmountRecurrent + gainsAmountEventual

        const recurrentPercent = Number(((gainsAmountRecurrent / total) * 100).toFixed(1));

        const eventualPercent = Number(((gainsAmountEventual / total) * 100).toFixed(1));

        return [
            {
                name: "Recorrente",
                amount: gainsAmountRecurrent,
                percent: recurrentPercent ? recurrentPercent: 0,
                color: "#F7931B"
            },

            {
                name: "Eventual",
                amount: gainsAmountEventual,
                percent: eventualPercent ? eventualPercent : 0,
                color: "#E44C4E"
            },
        ]
    }, [monthSelected, yearSelected])

    const historyData = useMemo(() => {
        return listOfMonths.map((_, month) => {
            let amountEntry = 0;
            gains.forEach(gain => {
                const date = new Date(gain.date);
                const gainMonth = date.getMonth();
                const gainYear = date.getFullYear();

                if(gainMonth === month && gainYear === yearSelected){
                    try{
                        amountEntry += Number(gain.amount)
                    }catch{
                        throw new Error("Amount entry is invalid!")
                    }
                }
            });

            let amountOutput = 0;
            expenses.forEach(expense => {
                const date = new Date(expense.date);
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();

                if(expenseMonth === month && expenseYear === yearSelected){
                    try{
                        amountOutput += Number(expense.amount)
                    }catch{
                        throw new Error("Amount OutPut is invalid!")
                    }
                }
            })

            return {
                monthNumber: month,
                month: listOfMonths[month].substr(0, 3),
                amountEntry,
                amountOutput

            }
        }).filter(item => {
            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();

            return (yearSelected == currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear)

        });
    }, [yearSelected])


    const handleMonthSelected = useCallback((month: string) => {
        try{
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        }catch{
            throw new Error("Invalid Month value!")
        }
    }, []);

    const handleYearSelected = useCallback((year: string) => {
        try{
            const parseYear = Number(year);
            setYearSelected(parseYear);
        }catch{
            throw new Error("Invalid Year value!")
        }
    }, []); 

    return(
        <Container>
            <ContentHeader title="DashBoard" lineColor="#F7931B">
            <SelectInput 
                    options={months}
                    onChange={(e) => handleMonthSelected(e.target.value)} 
                    defaultValue={monthSelected}
                 />
                
                <SelectInput 
                    options={years} 
                    onChange={(e) => handleYearSelected(e.target.value)}
                    defaultValue={yearSelected}
                 />
            </ContentHeader>

            <Content>
                <WalletBox
                    title="Saldo"
                    amount={totalBalance}
                    footerLabel="Atualizado com base nas entradas e saídas"
                    icon="dollar"
                    color="#4E41F0"
                />

                <WalletBox
                    title="Entradas"
                    amount={totalGains}
                    footerLabel="Atualizado com base nas entradas e saídas"
                    icon="arrowUp"
                    color="#F7931B"
                />

                <WalletBox
                    title="Saídas"
                    amount={totalExpenses}
                    footerLabel="Atualizado com base nas entradas e saídas"
                    icon="arrowDown"
                    color="#E44C4E"
                />

                <MessageBox
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />

                <PieChartBox data={relationExpensesVersusGains}/>

                <HistoryBox 
                    data={historyData}
                    lineColorAmountEntry="#F7931B"
                    lineColorAmountOutput="#E44C4E"
                />

                <BarChartBox
                    data={relationExpensesRecurrentVersusEventual}
                    title="Saídas"
                />

                <BarChartBox
                    data={relationGainsRecurrentVersusEventual}
                    title="Entradas"
                />
            </Content>
        </Container>
    )
}