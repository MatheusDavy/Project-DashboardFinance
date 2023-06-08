import styled, { css } from "styled-components";

interface ButtonProps {
  bgColor?: string;
  selected?: boolean;
  active?: boolean
}

export const Button = styled.button<ButtonProps>`
    ${({ theme, bgColor, active }) => css`
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      border: 0;
  
      background-color: ${bgColor};
      display: flex;
      align-items: center;
      justify-content: center;
  
      svg{
        display: none;
        color: ${theme.colorsStandard.white}
      }

      ${active == true && css`
         svg{
          display: block;
        }
      `}
    `}
  `;
