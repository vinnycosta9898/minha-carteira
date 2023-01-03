import { Container } from './styles';

interface MessageBoxProps{
    title: string;
    description: string;
    footerText: string;
    icon: string;
}

export default function MessageBox({ title, 
                                    description, 
                                    footerText, 
                                    icon} : MessageBoxProps){
    return(
        <Container>
            <header>
                <h1>
                    {title}
                    <img src={icon} alt="Emoji"/>
                </h1>

                <p>
                    {description}
                </p>
            </header>
            <footer>
                <span>{footerText}</span>
            </footer>
        </Container>
    )
}