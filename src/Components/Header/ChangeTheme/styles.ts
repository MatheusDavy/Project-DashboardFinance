import { ReactNode } from "react";
import styled from "styled-components";

interface ChangeThemeContainerProps {
    variant: 'light' | 'dark'
    child?: ReactNode
}

export const ChangeThemeContainer = styled.button<ChangeThemeContainerProps>`
    height: 20px;
    width: 38px;

    background-color: ${props => props.theme.buttons.background};
    
    border: 0;
    border-radius: 100px;
    position: relative;

    cursor: pointer;

    div{
        max-width:18px;
        max-height: 18px;
        min-width: 18px;
        min-height: 18px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;

        background-color: ${props => props.theme.colors.secundary };
        color: ${props => props.theme.colorsStandard.white};


        transform: ${props => props.variant === 'light' ? 'translateX(0)' : "translateX(100%)" };
        transition: 0.4s;


        position: absolute;
        left: 2px;
        top: 2px;

    }
`