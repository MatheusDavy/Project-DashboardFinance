import styled, { css } from "styled-components";
import { fontTemplate } from "../../../styles/templates/fonts";

/*
    SUMMARY
    1 - Interfaces
    2 - Styled Components
      2.1 - Modal Layer / Container
      2.2 - Modal Inside Content
    3 - Error Message
*/

/* ----------/ 1 - Interfaces /---------*/
interface ModalLayerProps {
  isOpen: boolean;
}
 
/* ----------/ 2 - Styled Components /---------*/
// 2.1 - Modal Layer / Container
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

  width: 90%;
  max-width: 600px;
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

// 2.2 - Modal Inside Content
export const ModalHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      ${fontTemplate("1.6rem", "1", 300, theme.texts.title, "Arial")}
    }

    .btn--close-modal-goals {
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
// Forms
export const FormsContainer = styled.form`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: auto;

    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  `}
`;

export const GroupButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 5px;

    span {
      ${fontTemplate("1.2rem", "1", 300, "", "Arial")}
      color: ${theme.texts.paragraph}
    }
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  `}
`;

//Submit Button
export const ButtonSubmit = styled.button`
  ${({ theme }) => css`
    width: 100%;
    max-width: 150px;
    align-self: end;
    padding: 15px 0px;

    ${fontTemplate("1.4rem", "1", 300, "", "Arial", "center")};
    color: ${theme.colorsStandard.white};
    background-color: ${theme.colors.secundary};
    cursor: pointer;
    transition: ${theme.transition};
    border-radius: 8px;
    border: 0;
  `}
`;

/* ----------/ 3 - Error Message /---------*/
export const MessageError = styled.div`
  ${({ theme }) => css`
    ${fontTemplate("1.2rem", "1", 300, "", "Arial")}
    color: ${theme.colorsStandard.red};
    display: none;

  &.show--error {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  `}
`;

