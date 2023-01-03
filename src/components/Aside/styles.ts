import styled from 'styled-components';

export const Container = styled.div`
        grid-area: AS;
        background-color: ${props => props.theme.colors.secondary};
        padding-left: 20px;
        border-right: 1px solid ${props => props.theme.colors.gray};

        a{
            color: ${props => props.theme.colors.info};
            margin: 7px 0;
            display: flex;
            align-items: center;
            text-decoration: none;
            transition: opacity .3s;

             &:hover{
                opacity: .7;
             }

              > svg {
                font-size: 18px;
                margin-right: 5px;
             }
        }
`;

export const Header = styled.header`
        display: flex;
        align-items: center;
        height: 70px;

`;

export const LogoImg = styled.img`
        height: 40px;
        width: 40px;
`;

export const Title = styled.h3`
        color: ${ props => props.theme.colors.white};
        margin-left: 10px;
`;

export const MenuContainer = styled.nav`
        display: flex;
        flex-direction: column;

        margin-top: 50px;
`;

export const MenuItemButton = styled.button`
        color: ${props => props.theme.colors.info};
        font-size: 16px;

        border: none;
        background: none;
        
        margin: 7px 0;
        display: flex;
        align-items: center;

        transition: opacity .3s;

        &:hover{
                opacity: .7;
        }

        > svg {
                font-size: 18px;
                margin-right: 5px;
        }
`