import styled, { css } from "styled-components";
import { fontTemplate } from "../../styles/templates/fonts";

export const TransactionsContainer = styled.div`
  ${({}) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
  `}
`;

interface TypeTransactionsProps {
  type: "income" | "expense";
}

export const TransactionsDescription = styled.div<TypeTransactionsProps>`
  ${({ theme, type }) => css`
    display: flex;
    align-items: center;
    gap: 20px;

    svg {
      color: ${type == "income"
        ? theme.colorsStandard.green
        : theme.colorsStandard.red};
    }

    .content__text {
      display: flex;
      flex-direction: column;
      gap: 7px;
      &--title {
        ${fontTemplate("1.5rem", "1", 800, `${theme.colors.thirth}`, "Arial")}
      }

      &--date {
        ${fontTemplate("1.2rem", "1", 400, `${theme.colors.thirth}`, "Arial")}
      }
    }
  `}
`;

export const TransactionsAmount = styled.div<TypeTransactionsProps>`
  ${({ theme, type }) => css`
    ${fontTemplate("1.5rem", "1", 800, ``, "Arial")}
    color: ${type == "income"
      ? theme.colors.secundary
      : theme.colorsStandard.red};
  `}
`;

export const ButtonDelete = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    svg {
      transition: 0.4s;
      color: ${theme.colorsStandard.gray};
    }
    &:hover {
      svg {
        color: ${theme.colorsStandard.red};
      }
    }
  `}
`;
