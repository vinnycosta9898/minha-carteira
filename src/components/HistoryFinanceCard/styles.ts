import styled from 'styled-components';


interface TagProps{
    color: string;
}

export const Container = styled.li`
    background-color: ${props => props.theme.colors.tertiary};
    list-style: none;
    border-radius: 10px;
    margin: 10px 0;
    padding: 12px 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
    transition: all .3s;

    position: relative;

    &:hover{
        opacity: .7;
        transform: translateX(10px);
    }

    > div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding-left: 10px;
    }

    > div span{
        font-size: 22px;
        font-weight: 500;
    }
`;

export const Tag = styled.div<TagProps>`
    width: 13px;
    height: 100%;

    background-color: ${props => props.color};
    position: absolute;
    left: 0;

`;
