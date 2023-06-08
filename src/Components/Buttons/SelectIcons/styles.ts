import styled, { css } from "styled-components";
interface ButtonProps {
  active: boolean
} 

export const Button = styled.button<ButtonProps>`
  ${({ theme, active}) => css`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    border: 0;

    background-color: 'gray';
    transition: ${theme.transition};

    ${active == true && css`
        background-color: ${theme.colors.secundary};
        color: white;
    `}
  `}
`;
