import { useEffect, useState } from 'react'
import { DropdownContainer, LanguageContainer, AnotherLanguagesContainer } from './styles'

//All Languages
import { languages } from '../../../translate/languages'

// i18next
import { useTranslation } from 'react-i18next'

// Interfaces
import { LanguageProps } from '../../../translate/languages'
interface Props {
    closePopUp : ()=> void
}

export function Languages({closePopUp} : Props) {
    const { i18n } = useTranslation()

    //Open Menu Dropdown
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    function HandleOpenMenu() {
        const actualState = isOpenMenu
        setIsOpenMenu(!actualState)
        console.log(actualState)
    }

    //Change to selected language
    const [currentLanguage, setCurrentLnaguage] = useState<LanguageProps[]>(languages)
    function handleChangeLanguage(codeClicked: string) {
        const newArrayCurrentLangues = currentLanguage.map(language => {
            if (language.lngBrand === codeClicked) {
                return { ...language, active: true }
            } else {
                return { ...language, active: false };
            }
        })

        setCurrentLnaguage(newArrayCurrentLangues)

        // Close Dropdown
        HandleOpenMenu()
        closePopUp()
        
    }

    //Change Language
    useEffect(() => {

        let activeLanguage
        currentLanguage.map(lgn => {
            if (lgn.active) {
                activeLanguage = lgn.lngBrand
            }
        })

        i18n.changeLanguage(activeLanguage)
    }, [currentLanguage])

    return (
        <DropdownContainer onClick={HandleOpenMenu}>

                {currentLanguage.map(elementLanguages => {
                    if (elementLanguages.active) {
                        return (
                            <LanguageContainer key={elementLanguages.lngBrand}>
                                <img src={elementLanguages.flag} alt="" />
                                {elementLanguages.code}
                            </LanguageContainer>
                        )
                    }
                })}

            <AnotherLanguagesContainer className={isOpenMenu ? 'active' : ''}>

                    {currentLanguage.map(elementLanguages => {

                        if (elementLanguages.active === false) {
                            return (
                                <LanguageContainer onClick={()=>{handleChangeLanguage(elementLanguages.lngBrand)}} key={elementLanguages.lngBrand}>
                                    <img src={elementLanguages.flag} alt="" />
                                    {elementLanguages.code}
                                </LanguageContainer>
                            )
                        }
                    })}

            </AnotherLanguagesContainer>

        </DropdownContainer>
    )
}


