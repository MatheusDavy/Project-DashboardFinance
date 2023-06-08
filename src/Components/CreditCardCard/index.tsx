//Components
import { ContainerHover, CreditCardContainer, CreditCardContainerHome, CreditCardFooter, CreditCardHeader } from "./styles";

// Icons
import { MdDelete } from 'react-icons/md'

// Context
import { useCreditCardContext } from "../../Context/CreditCard";

// Imagem
import visaFlag from '../../Assets/Images/CreditCard/flag-visa.png'
import eloFlag from '../../Assets/Images/CreditCard/flag-elo.png'
import expressFlag from '../../Assets/Images/CreditCard/flag-american-express.png'
import mastercardFlag from '../../Assets/Images/CreditCard/flag-mastercard.png'
import { useTranslation } from "react-i18next";


//Interfaces
interface CreditcardCardProps {
    flag: null | "express" | "elo" | "visa" | "mastercard"
    limit: number
    numberCard: string
    expirationDate: string
    name: string
    isAbleToEdit?: boolean
}

/*
    SUMARY
        1 - Context
        2 - Functions
        3 - Return
*/

export function CreditcardCard({ flag, limit, numberCard, expirationDate, name, isAbleToEdit = true }: CreditcardCardProps) {
    const { t } = useTranslation()

    /*--------------/ 1 - Context /---------------*/
    const { actionCurrent } = useCreditCardContext()

    /*--------------/ 2 - Functions /---------------*/
    function handleRemoveCard() {
        const creditCard = {
            flag: flag,
            limit: limit,
            numberCard: numberCard,
            expirationDate: expirationDate,
            name: name,
        }
        actionCurrent.deleteCreditCard(creditCard)
    }

    /*--------------/ 3 - Return /---------------*/
    return (
        <>
            {isAbleToEdit ? (
                <CreditCardContainer typeCardCredit={flag}>
                    <CreditCardHeader>
                        <div className="amount-container">
                            <span className="limit">{t('Limit')}</span>
                            <span className="amount">{limit}</span>
                        </div>

                        {flag === 'visa' && <img src={visaFlag} alt="" className="flag" />}
                        {flag === 'elo' && <img src={eloFlag} alt="" className="flag" />}
                        {flag === 'express' && <img src={expressFlag} alt="" className="flag" />}
                        {flag === 'mastercard' && <img src={mastercardFlag} alt="" className="flag" />}
                        {flag === null && ''}

                    </CreditCardHeader>

                    <h3 className="name--card">{name}</h3>

                    <CreditCardFooter>
                        <span className="number--card">{numberCard}</span>
                        <span className="expiration--date">{expirationDate}</span>
                    </CreditCardFooter>


                    <ContainerHover id='hover--data'>
                        <button onClick={handleRemoveCard}>
                            <MdDelete size={24} />
                        </button>
                    </ContainerHover>
                </CreditCardContainer>
            ) : (
                <CreditCardContainerHome typeCardCredit={flag} >
                    <>
                        <CreditCardHeader isHomeComponent={true}>

                            {flag === 'visa' && <img src={visaFlag} alt="" className="flag" />}
                            {flag === 'elo' && <img src={eloFlag} alt="" className="flag" />}
                            {flag === 'express' && <img src={expressFlag} alt="" className="flag" />}
                            {flag === 'mastercard' && <img src={mastercardFlag} alt="" className="flag" />}
                            {flag === null && ''}

                        </CreditCardHeader>

                        <h3 className="name--card">{name}</h3>
                    </>
                </CreditCardContainerHome>
            )}
        </>

        
    )
}