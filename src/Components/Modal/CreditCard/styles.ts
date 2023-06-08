import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { fontTemplate } from "../../../styles/templates/fonts";

interface ModalLayerProps {
  isOpen: boolean
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

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  width: 100%;
  max-width: 800px;
  height: auto;

  padding: 17px;

  background: linear-gradient(
      127.09deg,
      rgb(${(props) => props.theme.colors.primary}, 0.94) 19.41%,
      rgb(${(props) => props.theme.colors.primary}, 0.49) 76.65%
    )
    border-box;
  backdrop-filter: blur(30px);

  border-radius: 20px;
`;

export const ModalHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      ${fontTemplate("1.6rem", "1", 300, theme.texts.title, "Arial")}
    }

    .btn--close-modal-cc {
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

      &:hover {
        background-color: rgb(${theme.buttons.hovers});
        color: ${theme.colors.secundary};
      }
    }
  `}
`;

export const ModalContent = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 400px 1fr;
  gap: 30px;
`;


/*------------/ Forms Credit Card /---------------*/
export const FormsContainer = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    label {
      ${fontTemplate("1.4rem", "1", 700, theme.texts.title, "Arial")}
      margin-bottom: 7px;
    }

    input {
      ${fontTemplate("1.4rem", "1", 500, "", "Arial")}
      margin-bottom: 21px;

      border: none;
      background-color: ;
      padding: 10px 20px;
      border-radius: 8px;

      background-color: rgb(${theme.colors.secundary});
      color: ${theme.colors.primary};

      &::placeholder {
        ${fontTemplate("1.4rem", "1", 500, "", "Arial")};
        color: ${theme.colors.primary};
      }

      &:focus{
        background-color: ${theme.colorsStandard.white};
      }
    }

    button {
      width: 100%;
      padding: 10px;
      color: ${theme.colorsStandard.white};
      background-color: ${theme.colors.secundary};
      border: 0;
      border-radius: 8px;
    }
  `}
`;


/*-----------/ Error Message /-----------------------*/

export const MessageError = styled.div`
  ${({theme})=> css`
      display: flex;
      align-items: center;

      gap: 15px;
      background-color: rgb(${theme.colors.primary});
      padding: 15px 20px;

      position: absolute;
      right: 20px;
      bottom: 20px;
      opacity: 0;

      color: ${theme.colors.secundary};

      ${fontTemplate("1.4rem", "1", 700, theme.texts.title, "Arial")}

      border-radius: 8px;
  `}
`


export const MessageSuccess = styled.div`
  ${({theme})=> css`
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      gap: 25px;
      background-color: rgb(${theme.colors.primary});
      padding: 15px 20px;
      opacity: 0;

      position: absolute;
      left: 50%;
      top: 30px;
      transform: translateX(-50%);

      color: ${theme.colors.secundary};

      ${fontTemplate("2rem", "1", 700, theme.texts.title, "Arial")}

      border-radius: 8px;
  `}
  


`