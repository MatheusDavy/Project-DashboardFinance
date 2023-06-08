import styled, { css } from "styled-components";
import { fontTemplate } from "../../styles/templates/fonts";


interface ModalLayerProps {
    isOpen: boolean;
}

export const ModalLayer = styled.div<ModalLayerProps>`
  ${({ isOpen, theme }) => css`
    position: fixed;
    inset: 0;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgb(0, 0, 0, 0.8);
    transition: ${theme.transition};

    opacity: ${isOpen ? 1 : 0};
    z-index: ${isOpen ? 10000 : -100};
  `}
`;

export const ContainerGoals = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
    gap: 30px; 
`

export const GoalsHeader = styled.div`
    ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(127.09deg, rgb(${(props) => props.theme.colors.primary}, 0.94) 19.41%, rgb(${(props) => props.theme.colors.primary}, 0.49) 76.65%) border-box;
    padding: 17px;
    border-radius: 20px;

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

export const GoalsContent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    gap: 30px;
`
