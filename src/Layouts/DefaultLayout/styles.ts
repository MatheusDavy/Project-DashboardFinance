import styled from "styled-components";

export const LayoutContainer = styled.section`
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 30px;

    width: 95%;
    margin: 2.5vh auto;
    height: auto;
    position: relative;
`

export const ContainerLayoutMain = styled.main`
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    overflow: auto;
    position: relative;
`