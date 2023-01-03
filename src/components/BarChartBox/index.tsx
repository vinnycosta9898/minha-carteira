import { Container, LegendContainer, Legend, SideLeft, SideRight } from "./styles"

import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts'

import formatCurrency from "../../utils/formatCurrency";

interface BarChartProps{
    title: string;
    data: {
        name: string;
        amount: number;
        percent: number;
        color: string
    }[],
}

export default function BarChartBox({ title, data } : BarChartProps){
    return(
        <Container>
            <SideLeft>
                <h2>{title}</h2>
                <LegendContainer>
                    {
                    data.map(indicator => (
                        <Legend key={indicator.name} color={indicator.color}>
                            <div>{indicator.percent}%</div>
                            <span>{indicator.name}</span>
                        </Legend>
                    ))
                    }
                </LegendContainer>
            </SideLeft>

            <SideRight>
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <Bar dataKey="amount" name="Valor">
                            {data.map((indicator) => (
                                <Cell
                                    key={indicator.name}
                                    cursor="pointer"
                                    fill={indicator.color}
                                />
                            ))}
                        </Bar>
                        <Tooltip 
                            label="valor"
                            cursor={{fill: "none"}}
                            formatter={(value) => formatCurrency(Number(value))}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </SideRight>
        </Container>
    )
}