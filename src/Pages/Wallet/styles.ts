import styled, { css } from "styled-components";
import { fontTemplate } from "../../styles/templates/fonts";

export const WalletContainer = styled.main`
    ${({ }) => css`
        width: 100%;
        display: grid;
        gap: 30px;
        grid-template-columns: 450px 1fr;

        padding-top: 30px;

        
    `}
`

export const ContainerContent = styled.div`
    ${({})=> css`
        width: 100%;
        

    `}
`
