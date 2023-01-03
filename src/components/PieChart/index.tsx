import { Container ,
         SideLeft, 
         Legend, 
         LegendContainer, 
         SideRight, 
        } from "./styles";

import { Pie, 
        PieChart,
        Cell, 
        ResponsiveContainer
       } from 'recharts'

interface PieChartProps{
    data: {
        name: string;
        value: number;
        percent: number;
        color: string;
    }[]
}

export default function PieChartBox({ data } : PieChartProps){
    return(
        <Container>
            <SideLeft>
                <h2>Relação</h2>
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
                    <PieChart>
                        <Pie data={data} dataKey="percent">
                            {
                                data.map((indicator) => (
                                    <Cell key={indicator.name} fill={indicator.color}/>
                                ))
                            }
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </SideRight>
        </Container>
    )
}