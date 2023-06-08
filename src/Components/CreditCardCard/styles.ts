import styled, { css } from "styled-components";
import { fontTemplate } from "../../styles/templates/fonts";

/*

  SUMMARY
    1 - Interfaces
    2 - Functions
    3 - Styled
*/

/*-------------------/ 1 - Interfaces /-------------*/
interface CreditCardProps {
  typeCardCredit: null | "express" | "elo" | "visa" | "mastercard";
  isAbleToEdit?: boolean;
}

interface CreditCardHeaderProps {
  isHomeComponent?: boolean;
}

/*-------------------/ 2 - Functions /-------------*/
const changeBg = (typeFlag: string | null) => {
  let linearGradient = "";
  if (typeFlag == null) {
    linearGradient =
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 100%)";
  }

  if (typeFlag == "express") {
    linearGradient =
      "linear-gradient(90deg, rgba(62,62,62,1) 0%, rgba(144,144,144,1) 57%, rgba(75,75,75,1) 100%)";
  }

  if (typeFlag == "mastercard") {
    linearGradient = "linear-gradient(270deg, #21D4FD 0%, #B721FF 100%)";
  }
  if (typeFlag == "elo") {
    linearGradient = "linear-gradient(241deg, #08AEEA 0%, #2AF598 100%)";
  }

  if (typeFlag == "visa") {
    linearGradient = "linear-gradient(225deg, #183b54 36%, #7b7b7b 99%)";
  }

  return css`
    ${linearGradient}
  `;
};

/*-------------------/ 3 - Styled /-------------*/
// Credit Card Image
export const CreditCardContainer = styled.div<CreditCardProps>`
  ${({ theme, typeCardCredit }) => css`
    width: 100%;
    height: 250px;

    position: relative;
    overflow: hidden;

    background: ${changeBg(typeCardCredit)};

    border-radius: 30px;
    padding: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    transition: ${theme.transition};

    .name--card {
      ${fontTemplate("2rem", "1", 700, ``, "Arial")};
      color: ${theme.colorsStandard.white};
    }

    &:hover {
      #hover--data {
        opacity: 1;
    }
  `}
`;

export const CreditCardHeader = styled.div<CreditCardHeaderProps>`
  ${({ theme, isHomeComponent }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colorsStandard.white};

    .amount-container {
      display: flex;
      flex-direction: column;
      gap: 7px;

      .limit {
        ${fontTemplate("1.2rem", "1", 300, "", "Arial")}
      }
      .amount {
        ${fontTemplate("2rem", "1", 700, "", "Arial")}
      }
    }

    .flag {
      ${isHomeComponent
        ? css`
            width: 30px;
            height: 30px;
            object-fit: contain;
          `
        : css`
            width: 60px;
            height: 60px;
            object-fit: contain;
          `}
    }
  `}
`;

export const CreditCardFooter = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: ${theme.colorsStandard.white};

    .number--card {
      ${fontTemplate("2rem", "1", 300, "", "Arial")}
    }

    .expiration--date {
      ${fontTemplate("2rem", "1", 300, "", "Arial")}
    }
  `}
`;

// Pop Up (Remove - Data)
export const ContainerHover = styled.div`
  ${({ theme }) => css`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;

    background-color: rgb(255 255 255 / 20%);
    backdrop-filter: blur(5px);

    padding: 30px;

    transition: ${theme.transition};

    display: flex;
    flex-direction: column;
    gap: 20px;
  
    opacity: 0;

    button {
      width: 35px;
      height: 35px;
      border-radius: 5px;
      background-color: transparent;
      border: 0;

      color: ${theme.colors.secundary};
      cursor: pointer;
      transition: ${theme.transition};

      &:hover {
        color: ${theme.colorsStandard.red};
      }
    }  
  `}
`;

// Credit Card - Home
export const CreditCardContainerHome = styled.div<CreditCardProps>`
    ${({ theme, typeCardCredit }) => css`
    width: 100%;
    height: 80px;

    position: relative;
    overflow: hidden;

    background: ${changeBg(typeCardCredit)};

    border-radius: 20px;
    padding: 15px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
  

    transition: ${theme.transition};

    .name--card {
      ${fontTemplate("2rem", "1", 700, ``, "Arial")};
      color: ${theme.colorsStandard.white};
    }

    &:hover {
      #hover--data {
        transform: translateY(0);
      }
    }
  `}
`;
