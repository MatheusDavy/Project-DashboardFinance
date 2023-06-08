import { useContext, useState } from "react"
import { ChangeThemeContainer } from "./styles"
import {BsMoonStarsFill, BsFillSunFill} from 'react-icons/bs'
import { ChangeThemeContext } from "../../../Context/Theme"

export function ChangeTheme(){
    const {theme, changeTheme} = useContext(ChangeThemeContext)


    function handleChangeTheme(){
       changeTheme()
    }

    return(
        <ChangeThemeContainer onClick={handleChangeTheme} variant={theme.title}>

            <div>

            

            {theme.title === 'light' ? 
            (
                <BsFillSunFill size={10}/>
            )
            : 
            (
                <BsMoonStarsFill size={10}/> 
            )
            }
            </div>
        </ChangeThemeContainer>
    )

}