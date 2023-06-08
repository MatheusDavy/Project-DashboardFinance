// Commons
import { FormEvent, useContext, useState } from "react";
import gsap from 'gsap'
import nextId from "react-id-generator";

// Components
import { MessageError, MessageSuccess, ModalContainer, ModalHeader, ModalLayer, FormContainer, InputAmountContainer, InputDescriptionContainer, TypeTransactionContainer, SubmitButton } from "./styles";

// Icons
import { IoMdClose } from 'react-icons/io'
import { RiFileList3Line, RiErrorWarningFill } from 'react-icons/ri'
import { MdSwapVerticalCircle } from 'react-icons/md'
import { TransactionContext } from "../../../Context/Transaction/context";
import { maskInputCurrency } from "../../../Context/Utils/maskCurrency";
import { useTranslation } from "react-i18next";

export function TransactionsModal() {
    const {t} = useTranslation()
    const { isOpenModal, actionCurrent, openCloseModal } = useContext(TransactionContext)

    const [inputAmount, setInputAmount] = useState('')
    const [inputDescribe, setInputDescribe] = useState('')
    const [inputType, setInputType] = useState("")

    function callMessageError(txt: string) {
        const errorMessagText = document.getElementById('message-error-transactions-text') as HTMLInputElement
        errorMessagText.innerHTML = txt

        const errorMessageElement = document.getElementById('message-error-transactions') as HTMLInputElement
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
        openCloseModal()
    }

    function handlesetInputAmount(value: string) {
        const newValue = maskInputCurrency(value)
        setInputAmount(newValue)
    }

    function handleSetInputDescribe(value: string) {
        setInputDescribe(value)
    }

    function handleSetTypeTransactions(value: string) {
        setInputType(value)
    }

    function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        let error = false
        if ((!inputAmount || inputAmount[0] == '0') && !error) {
            error = true
            callMessageError(`${t("Value cannot be 0")}`)
            return 0
        }
        if (!inputDescribe && !error) {
            error = true
            callMessageError(`${t("Enter a description")}`)
            return 0
        }
        if (!inputType && !error) {
            error = true
            callMessageError(`${t("Select transaction type")}`)
            return 0
        }

        // Send data
        if (!error) {
            const dateNow = new Date().toLocaleDateString()

            const dataInput = {
                id: nextId(),
                description: inputDescribe,
                date: dateNow,
                amount: inputAmount,
                type: inputType,
            }
            actionCurrent.newTransaction(dataInput)
            handleCloseModal()
            event.target.reset()
            // Reset forms
            return 0
        }
    }

    return (
        <ModalLayer isOpen={isOpenModal}>

            <ModalContainer>
                <ModalHeader>
                    <h1 className="title">{t('Transactions')}</h1>
                    <button className="btn--close-modal-transactions" onClick={handleCloseModal}>
                        <IoMdClose size={24} />
                    </button>
                </ModalHeader>

                <FormContainer onSubmit={(event) => handleSubmitForm(event)}>
                    <InputAmountContainer>
                        <MdSwapVerticalCircle size={24} />
                        <span className="currency--type">R$</span>
                        <input
                            placeholder="0,00"
                            value={inputAmount}
                            onChange={(event) => handlesetInputAmount(event.target.value)}
                        />



                    </InputAmountContainer>

                    <InputDescriptionContainer>
                        <RiFileList3Line size={24} />
                        <input
                            placeholder={`${t("Description")}`}
                            value={inputDescribe}
                            onChange={(event) => handleSetInputDescribe(event.target.value)}
                        />



                    </InputDescriptionContainer>

                    <TypeTransactionContainer>
                        <button type="button" className={inputType == 'income' ? 'income' : ''} onClick={() => handleSetTypeTransactions('income')}>{t("INCOME")}</button>
                        <button type="button" className={inputType == 'expense' ? 'expense' : ''} onClick={() => handleSetTypeTransactions('expense')}>{t("EXPENSE")}</button>
                    </TypeTransactionContainer>

                    <SubmitButton type="submit">
                        {t("Save")}
                    </SubmitButton>
                </FormContainer>

            </ModalContainer>

            <MessageError id="message-error-transactions">
                <RiErrorWarningFill />
                <span id='message-error-transactions-text'></span>
            </MessageError>

        </ModalLayer>
    )
}