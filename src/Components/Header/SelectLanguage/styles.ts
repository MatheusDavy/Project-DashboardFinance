import styled from "styled-components";

type ChildrenProps = {
    children?: React.ReactNode
};
  

export const DropdownContainer = styled.div<ChildrenProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    background-color: ${props => props.theme.buttons.background};
    border-radius: 6px;
`

export const LanguageContainer = styled.button`
    display: flex;
    flex-direction: row;
    gap: 20px;
    cursor: pointer;

    display: flex;
    align-items: center;

    width: max-content;
    background-color: transparent;
    border: 0;

    padding: 10px 15px;

    img{
        width: 15px;
        height: auto;
    }

    font-size: 10px;
    text-transform: uppercase;
    color: ${props => props.theme.colors.secundary};
    font-weight: bold;
    
`

export const AnotherLanguagesContainer = styled.div<ChildrenProps>`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 0;
    display: flex;
    flex-direction: column;

    background-color: ${props => props.theme.buttons.background};
    border-radius: 6px;

    transition: 0.4s;

    &.active{
        height: auto;
    }
`
