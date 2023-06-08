import { CreditCardContainer, CreditCardHeader } from "./styles";

// Context
import { useCreditCardContext } from "../../../../Context/CreditCard";

// Icons
import { IoMdAddCircle } from 'react-icons/io'

// Components
import { CreditcardCard } from "../../../../Components/CreditCardCard";
import { useTranslation } from "react-i18next";



export function CreditCards() {
    const {t} = useTranslation()
    const { openCloseCloseModal, creditCard_API } = useCreditCardContext()

    function handleOpenModal() {
        openCloseCloseModal()
    }

    return (
        <CreditCardContainer>
            <CreditCardHeader>
                <h1 className="title">{t('Credit Cards')}</h1>
                <button className="btn--add-cc" onClick={handleOpenModal}>
                    <IoMdAddCircle size={24} />
                </button>
            </CreditCardHeader>


       
                {creditCard_API?.map(valuesCard => (
                    <div key={valuesCard.numberCard}>
                        <CreditcardCard
                        flag={valuesCard.flag}
                        limit={valuesCard.limit}
                        numberCard={valuesCard.numberCard}
                        expirationDate={valuesCard.expirationDate}
                        name={valuesCard.name}
                    />
                    </div>
                ))}
          

        </CreditCardContainer>
    )
}