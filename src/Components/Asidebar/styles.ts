import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { fontTemplate } from "../../styles/templates/fonts";



export const AsidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 80px;

  width: 100%;
  padding: 30px;

  height: 95vh;

  background: linear-gradient(127.09deg, rgb(${(props) => props.theme.colors.primary}, 0.94) 19.41%, rgb(${(props) => props.theme.colors.primary}, 0.49) 76.65%) border-box;
  backdrop-filter: blur(30px);

  transition: 0.4s;

  border-radius: 20px;
`;

// Logo Container
export const LogoContainer = styled.div`

  ${({ theme }) => css`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 15px;

      ${fontTemplate('1.6rem', '2rem', 300, theme.texts.title, 'Arial', 'center')}
  `}
`;

// Links Container
export const LinksContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 15px;

  overflow-y: auto;

  padding-bottom: 30px;

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  & {
    scrollbar-width: auto;
    scrollbar-color: ${(props) => props.theme.colors.secundary} #ffffff;
  }

  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secundary};
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
`;


// List
export const LinksNavContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7px;
`

// NavLink Component
export const Links = styled(NavLink)`
  
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    padding: 10px 16px;
    border-radius: 9px;
    gap: 10px;
    
    transition: ${theme.transition};
    
    text-decoration: none;
    ${fontTemplate('1.6rem', '1', 400, theme.texts.title, 'Arial', 'center')};


    .icon--container{
        width: 35px;
        height: 35px;
        border-radius: 8px;
        
        background-color: rgb(${theme.buttons.hovers});
        color: ${theme.colors.secundary};

        display: flex;
        align-items: center;
        justify-content: center;
        transition: ${theme.transition};
    }

    &.active, &:hover{
      background-color: rgb(${theme.buttons.hovers});

      .icon--container{
        color: ${theme.colorsStandard.white};
        background-color: ${theme.colors.secundary};
      }
    }

  `}

`
