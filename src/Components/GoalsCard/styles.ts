import styled, { css } from "styled-components";
import { fontTemplate } from "../../styles/templates/fonts";

export const ContainerCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
    border-radius: 20px;
    background: linear-gradient(
        127.09deg,
        rgb(${(props) => props.theme.colors.primary}, 0.94) 19.41%,
        rgb(${(props) => props.theme.colors.primary}, 0.49) 76.65%
      )
      border-box;
    width: 100%;
    border: 1px solid ${theme.colors.secundary};
  `}
`;

export const HeaderCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 15px;
    align-items: center;


    .title{
        ${fontTemplate('2rem', '1', 700, '', 'Arial')}
            color: ${theme.colors.secundary};
    }
  `}
`;

interface IconBgProps {
    bgColor: string
}

export const IconBg = styled.div<IconBgProps>`
    ${({ theme, bgColor }) => css`
        width: 40px;
        height: 40px;
        border-radius: 50%;
        
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${bgColor};
        color: ${theme.colorsStandard.white};
    `}
`

interface MiddleCardProps {
    percentConcluded: number | string
}

export const MiddleCard = styled.div<MiddleCardProps>`
    ${({ theme, percentConcluded }) => css`
        display: flex;
        flex-direction: column;
        gap: 15px;

        

        .percent--bar{
            width: 100%;
            height: 15px;
            background-color: gray;
            border-radius: 100px;
            overflow: hidden;
            .percent--fill{
                width: ${percentConcluded}%;
                height: 100%;
                background-color: rgb(${theme.colors.thirth});
                border-radius: 0px 100px 100px 0px;
            }
        }

        .amount--compare{
            ${fontTemplate('1.1rem', '1', 700, '', 'Arial')}
            color: rgb(${theme.colors.thirth});
        }
    `}
`

export const ContentInfo = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .content--date{
            display: flex;
            flex-direction: column;
            gap: 5px;

            .description{
                ${fontTemplate('1.6rem', '1', 200, theme.texts.title, 'Arial')}
            }

            .date{
                ${fontTemplate('1.4rem', '1', 200, theme.texts.title, 'Arial')}
            }
        }

        .content--percentAmount {
            ${fontTemplate('2rem', '1', 700, '', 'Arial')}
            color: ${theme.colors.secundary};
        
        }
    `}
`

export const FooterCard = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        gap: 15px;
        justify-content: flex-end;

        button{
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: transparent;
            border: 0;
            transition:${theme.transition} ;

            color: rgb(${theme.colors.primary});
            color: ${theme.colors.secundary};

            &:hover{
                color: rgb(${theme.colors.thirth});
            }

            &.btn--delete:hover{
                color: ${theme.colorsStandard.red};
            }

            cursor: pointer;
        }
    `}
`

