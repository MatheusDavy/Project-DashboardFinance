import styled, { css } from "styled-components";
import { fontTemplate } from "../../styles/templates/fonts";
import { defaultClassActiveError } from "../../Context/Utils/FormValidate/type-validate";

/*
    SUMMARY
    0 - Functions
    1 - Interfaces
    2 - Styled Components
      2.1 - Container
      2.2 - Inputs
      2.3 - Error Message

*/
/* ----------/ 0 - Functions /---------*/
const InputTypeFormat = (typeFormat: string, theme: any) => {
  switch (typeFormat) {
    case "currency": {
      return css`
        ${fontTemplate("2rem", "1", 300, theme.texts.title, "Arial")}
        &::placeholder {
          ${fontTemplate("2rem", "1", 300, theme.texts.title, "Arial")}
        }
      `;
    }

    case "default": {
      return css`
        ${fontTemplate("1.5rem", "1", 300, "", "Arial")};
        color: ${theme.texts.paragraph};
        &::placeholder {
          ${fontTemplate("1.5rem", "1", 300, theme.texts.title, "Arial")};
          color: ${theme.texts.paragraph};
        }
      `;
    }
  }
};

/* ----------/ 1 - Interfaces /---------*/
interface InputContainerProps {
  borderBottom: boolean;
}

interface InputProps {
  typeFormat: "default" | "currency";
}

/* ----------/ 2 - Styled Components /---------*/
// 2.1 - Container
export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 5px;
  `}
`;
// 2.2 - Inputs
//Label
export const Label = styled.label`
  ${({ theme }) => css`
    ${fontTemplate("1.2rem", "1", 300, "", "Arial")}
    color: ${theme.texts.paragraph}
  `}
`;
//Container
export const InputContainer = styled.div<InputContainerProps>`
  ${({ theme, borderBottom }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    min-height: 30px;

    ${borderBottom == true &&
    css`
      border-bottom: 1px solid ${theme.colors.secundary};
      padding-bottom: 2px;
    `}

    svg {
      color: ${theme.colors.secundary};
    }
  `}
`;
//Input
export const Input = styled.input<InputProps>`
  ${({ theme, typeFormat }) => css`
    flex: 1;
    background-color: transparent;
    border: 0;

    ${InputTypeFormat(typeFormat, theme)}
  `}
`;
// 2.3 - Error Message
export const MessageError = styled.span`
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
