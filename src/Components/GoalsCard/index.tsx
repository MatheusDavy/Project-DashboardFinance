import { useEffect, useState } from "react";

//Components
import { ContainerCard, ContentInfo, FooterCard, HeaderCard, IconBg, MiddleCard } from "./styles";

// Context
import { iconsAvailble } from "../../Context/Goals/datas";
import { converteCurrencyToCurremtLanguage } from "../../Context/Utils/ConverteCurrency";
import { useGoalsContext } from "../../Context/Goals";
import { useTranslation } from "react-i18next";

// Interfaces
import { GoalsProps } from "../../Context/Goals/interfaces";

interface Props extends GoalsProps {
    isAbleToEdit?: boolean
}

// Icons
import { MdDelete, MdEdit } from 'react-icons/md'
import { t } from "i18next";

/*
    SUMMARY
    1 - States / Context / Const
    2 - UseEffect
    3 - Functions
    4 - Return
*/



export function GoalsCard({ bgColor, percent, name, date, icon, id, amountFinal, amountInitial, isAbleToEdit = true }: Props) {

    /*-------------/ 1 - States / Context /-------------*/
    const { i18n } = useTranslation()
    const currentLanguage = i18n.language

    const { actionCurrent, openCloseEditModal } = useGoalsContext()
    const [iconElement, setIcon] = useState<any>(null)

    const newPercent = percent.toFixed(2)
    const newAmountInital = converteCurrencyToCurremtLanguage(amountInitial, currentLanguage, false)
    const newAmountFinal = converteCurrencyToCurremtLanguage(amountFinal, currentLanguage, false)

    /*-------------/ 2 - UseEffect /-------------*/
    useEffect(() => {
        let iconData
        iconsAvailble.forEach((iconArray: any) => {
            if (iconArray.name == icon) {
                iconData = iconArray.icon
            }
        })

        setIcon(iconData)
    }, [icon])

    /*-------------/ 3 - Functions /-------------*/
    function handleOpenEditModal() {
        openCloseEditModal(true, id)
    }

    function handleDeleteGoals() {
        const goalData = {
            id: id,
            bgColor: bgColor,
            percent: percent,
            name: name,
            icon: icon,
            amountFinal: amountFinal,
            amountInitial: amountInitial,
            date: date,
        }
        actionCurrent.deleteGoals(goalData)
    }

    /*-------------/ 4 - Return /-------------*/
    return (
        <ContainerCard key={id}>
            <HeaderCard>
                <IconBg bgColor={bgColor}>
                    {iconElement}
                </IconBg>
                <h3 className="title">{name}</h3>
            </HeaderCard>

            <MiddleCard percentConcluded={newPercent}>
                <ContentInfo className="content__info">
                    <div className="content--date">
                        <p className="description">{t('Final target data')}</p>
                        <span className="date">{date}</span>
                    </div>

                    <span className="content--percentAmount">{newPercent}%</span>
                </ContentInfo>

                <div className='percent--bar'>
                    <div className="percent--fill"></div>
                </div>

                <p className="amount--compare">
                    R$ {newAmountInital} / {newAmountFinal}
                </p>
            </MiddleCard>

            {isAbleToEdit && (
                <FooterCard>

                    <button onClick={handleOpenEditModal}><MdEdit size={20} /></button>

                    <button className="btn--delete" onClick={handleDeleteGoals}><MdDelete size={20} /></button>


                </FooterCard>
            )}

        </ContainerCard>
    )
}