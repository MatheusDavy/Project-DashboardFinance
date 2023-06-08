import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global."
import { Router } from "./Routes/router"
import { useContext, useState } from "react"

import { light } from "./styles/themes/light"
import { dark } from "./styles/themes/dark"

import { ChangeThemeContext, ChangeThemeProvider } from "./Context/Theme"
import "./API/home"
import TransactionContextProvider from "./Context/Transaction"
import CreditCardContextProvider from "./Context/CreditCard"
import { GoalsContextProvider } from "./Context/Goals"

function App() {

  const { theme } = useContext(ChangeThemeContext)

  return (
    <ThemeProvider theme={theme}>

      <CreditCardContextProvider>
        <TransactionContextProvider>
         <GoalsContextProvider>
            <Router />
         </GoalsContextProvider>
        </TransactionContextProvider>
      </CreditCardContextProvider>

      <GlobalStyle />
    </ThemeProvider>


  )
}

export default App
