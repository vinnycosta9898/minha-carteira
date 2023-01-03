import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        html, border-style, #root{
            height: 100%
        }

        *, button, input{
            border: 0;
            outline: none;
            font-family: "Roboto", sans-serif;
        }

        button{
            cursor: pointer;
            
        }
`;
