import { Container, Tag } from "./styles";

interface HistoryFincanceCardProps{
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

export default function HistoryFinanceCard({ tagColor, title, subtitle, amount } :HistoryFincanceCardProps ){
    return(
        <Container>
            <Tag color={tagColor}/>
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <h3>{amount}</h3>
        </Container>
    )
}