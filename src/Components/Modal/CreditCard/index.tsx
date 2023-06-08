// Default
import { ChangeEvent, FormEvent, JSXElementConstructor, useContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// Components
import {FormsContainer, ModalContainer, ModalContent, ModalHeader, ModalLayer, MessageError, MessageSuccess } from "./styles";

// Icons
import { IoMdClose } from 'react-icons/io'
import { RiErrorWarningFill } from 'react-icons/ri'
import { FaCheckCircle } from 'react-icons/fa'

// Input Mask
import InputMask from "react-input-mask";

// Imagem
import visaFlag from '../../../Assets/Images/CreditCard/flag-visa.png'
import eloFlag from '../../../Assets/Images/CreditCard/flag-elo.png'
import expressFlag from '../../../Assets/Images/CreditCard/flag-american-express.png'
import mastercardFlag from '../../../Assets/Images/CreditCard/flag-mastercard.png'

// Interfaces
import { CreditcardCard } from "../../CreditCardCard";

// Context
import { useCreditCardContext } from "../../../Context/CreditCard";
import { CreditCardProps } from "../../../Context/CreditCard/interfaces";
import { useTranslation } from "react-i18next";

const defaultValues = {
    name: 'Jane',
    numberCard: '0000 0000 0000 0000',
    expirationDate: '00/0',
    limit: 45353,
    flag: null
}

export function ModalAddCreditCard() {
    const { isOpenModal, openCloseCloseModal, creditCard_API, actionCurrent } = useCreditCardContext()
    const [valuesCard, setValuesCard] = useState<CreditCardProps>(defaultValues)
    const {t} = useTranslation() 

    function callMessageError(txt: string) {
        const errorMessagText = document.getElementById('message-error-creditcard-text') as HTMLInputElement
        errorMessagText.innerHTML = txt

        const errorMessageElement = document.getElementById('message-error-creditcard') as HTMLInputElement
        gsap.to(errorMessageElement, {
            opacity: 1,
            duration: 1,
            onComplete: () => {
                gsap.to(errorMessageElement, {
                    opacity: 0,
                    duration: 1,
                    delay: 4,
                })
            }
        })
    }

    function handleCloseModal() {
        openCloseCloseModal()
    }

    function handleUpdateValuesCard(event: ChangeEvent<HTMLInputElement>) {
        let newValueCard = valuesCard
        const inputName = event.target.name
        const inputValue = event.target.value

        // Flag
        if (inputName == 'numberCard') {
            switch (inputValue[0]) {
                case '3': {
                    newValueCard = { ...newValueCard, flag: 'express' }
                    break
                }
                case '4': {
                    newValueCard = { ...newValueCard, flag: 'visa' }
                    break
                }

                case '5': {
                    newValueCard = { ...newValueCard, flag: 'mastercard' }
                    break
                }

                case '6': {
                    newValueCard = { ...newValueCard, flag: 'elo' }
                    break
                }
                case undefined || '_': {
                    newValueCard = { ...newValueCard, flag: null }
                    break
                }
            }
        }

        // Value Inputs
        switch (inputName) {
            case 'name': {
                if (inputValue == '') {
                    newValueCard = { ...newValueCard, name: defaultValues.name }
                } else {
                    newValueCard = { ...newValueCard, name: inputValue }
                }
                break
            }
            case 'numberCard': {
                if (inputValue[0] == '_') {
                    newValueCard = { ...newValueCard, numberCard: defaultValues.numberCard }
                } else {
                    newValueCard = { ...newValueCard, numberCard: inputValue }
                }
                break
            }
            case 'limit': {
                if (inputValue == '') {
                    newValueCard = { ...newValueCard, limit: defaultValues.limit }
                } else {
                    newValueCard = { ...newValueCard, limit: Number(inputValue) }
                }
                break
            }
            case 'expirationDate': {
                if (inputValue == '') {
                    newValueCard = { ...newValueCard, expirationDate: defaultValues.expirationDate }
                } else {
                    newValueCard = { ...newValueCard, expirationDate: inputValue }
                }
                break
            }

        }

        setValuesCard(newValueCard)
    }
    
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const name = event.target.name.value
        const numCard = event.target.numberCard.value
        const limit = event.target.limit.value
        const expDate = event.target.expirationDate.value
        let error = false

        // Forms Validation
        if (!name) {
            error = true
            callMessageError(`${t("Invalid card name")}`)
            return 0
        }
        if (!numCard || numCard[numCard.length - 1] == '_') {
            error = true
            callMessageError(`${t("Invalid card number")}`)
            return 0
        }
        creditCard_API?.forEach(array => {
            if (array.numberCard == numCard) {
                error = true
                callMessageError(`${t("Card number already registered")}`)
                return 0
            }
        })
        if (!limit || limit.lenght > 10) {
            error = true
            callMessageError(`${t("Invalid card limit")}`)
            return 0
        }
        if (!expDate || expDate[expDate.length - 1] == '_') {
            error = true
            callMessageError(`${t("Invalid card validation")}`)
            return 0
        }
        // Send data
        if (!error) {
            actionCurrent.newCreditCard(valuesCard)
            // Call Success Message
            handleCloseModal()
            // Reset forms
            event.target.reset()
            setValuesCard(defaultValues)
            return 0
        }
    }

    return (
        <ModalLayer isOpen={isOpenModal}>
            <ModalContainer>
                <ModalHeader>
                    <h1 className="title">{t("Credit Cards")}</h1>
                    <button className="btn--close-modal-cc" onClick={handleCloseModal}>
                        <IoMdClose size={24} />
                    </button>
                </ModalHeader>

                <ModalContent>

                    <CreditcardCard
                        flag={valuesCard.flag}
                        limit={valuesCard.limit}
                        numberCard={valuesCard.numberCard}
                        expirationDate={valuesCard.expirationDate}
                        name={valuesCard.name}
                    />

                    <FormsContainer onSubmit={handleSubmit}>

                        <label htmlFor="name">{t('Name')}</label>
                        <input type='text' id="name" name="name" placeholder="Jane" onChange={handleUpdateValuesCard} />

                        <label htmlFor="numberCard">{t("Number Card")}</label>
                        <InputMask type='text' mask={'9999 9999 9999 9999'} id="numberCard" name="numberCard" placeholder="0000 0000 0000 0000" onChange={handleUpdateValuesCard} />

                        <label htmlFor="limit">{t("Limit")}</label>
                        <input id="limit" name="limit" placeholder="1000" type='number' onChange={handleUpdateValuesCard} />

                        <label htmlFor="expirationDate">{t("Expiration Date")}</label>
                        <InputMask type='text' mask={'99/99'} id="expirationDate" name="expirationDate" placeholder="00/0" onChange={handleUpdateValuesCard} />

                        <button type="submit">{t("Save")}</button>

                    </FormsContainer>

                </ModalContent>
            </ModalContainer>


            <MessageError id="message-error-creditcard">
                <RiErrorWarningFill />
                <span id='message-error-creditcard-text'>{t("Invalid card name")}</span>
            </MessageError>

        </ModalLayer>
    )
}