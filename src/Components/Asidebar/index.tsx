import { AsidebarContainer, LinksContainer, LogoContainer, LinksNavContainer, Links } from "./styles"

// Datas
import { linksNav } from "../../Data/Asidebar"
import { useTranslation } from "react-i18next"


export function Asidebar() {
    const {t} = useTranslation()

    return (
        <AsidebarContainer>

            <LogoContainer>
                DASHBOARD
            </LogoContainer>

            <LinksContainer>

                <LinksNavContainer>
                    {linksNav.map((link) => (
                        <li key={link.name}>
                            <Links to={link.link}>
                                <div className="icon--container">
                                    {link.icone}
                                </div>

                                <span>{t(`${link.name}`)}</span>
                            </Links>
                        </li>
                    ))}
                </LinksNavContainer>

            </LinksContainer>

        </AsidebarContainer>
    )
}