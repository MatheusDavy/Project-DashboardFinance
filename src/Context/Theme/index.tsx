import { createContext, ReactNode, useState } from "react";
import { light } from "../../styles/themes/light";
import { dark } from "../../styles/themes/dark";


interface ChangeThemeProviderProps {
  children: ReactNode;
}

interface ChangeThemeType {
  theme: any
  changeTheme: () => void
}

interface ThemeProp {
  title: string
}

export const ChangeThemeContext = createContext({} as ChangeThemeType)

export function ChangeThemeProvider({ children }: ChangeThemeProviderProps ){

  const [theme, setTheme] = useState<ThemeProp>(light)

  function changeTheme() {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ChangeThemeContext.Provider value={{
      theme,
      changeTheme,
    }}>
      {children}
    </ChangeThemeContext.Provider>
  )
}
