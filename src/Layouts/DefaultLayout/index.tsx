import { Outlet } from "react-router-dom";
import { Asidebar } from "../../Components/Asidebar";
import { Header } from "../../Components/Header";

import { ContainerLayoutMain, LayoutContainer } from "./styles";

export function DefaultLayout(){

    return(

        <LayoutContainer>
            <Asidebar />
            <ContainerLayoutMain>
                <Header /> 
                <Outlet />
            </ContainerLayoutMain>
        </LayoutContainer>

    )

}