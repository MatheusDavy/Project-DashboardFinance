import styled, { css } from "styled-components";
import { fontTemplate } from "../../../../styles/templates/fonts";

/*---------------/ Credit Card /---------------*/
export const CreditCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 450px;
    
    background: linear-gradient(127.09deg, rgb(${(props) => props.theme.colors.primary}, 0.94) 19.41%, rgb(${(props) => props.theme.colors.primary}, 0.49) 76.65%) border-box;
    backdrop-filter: blur(30px);
    padding: 17px;

    border-radius: 20px;
    height: fit-content;
`

export const CreditCardHeader = styled.div`
   ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title{
        ${fontTemplate('1.6rem', '1', 300, theme.texts.title, 'Arial')}
    }

    .btn--add-cc{
        width: 35px;
        height: 35px;
        
        display: flex;
        align-items: center;
        justify-content: center;

        color: ${theme.colorsStandard.white};

        background-color: ${theme.colors.secundary};
        border: 0;
        border-radius: 8px;

        cursor: pointer;
        transition: ${theme.transition};

        &:hover{
            background-color: rgb(${theme.buttons.hovers});
            color: ${theme.colors.secundary};
        }
    }
   `}
`
