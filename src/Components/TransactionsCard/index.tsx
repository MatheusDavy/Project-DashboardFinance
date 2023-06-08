import { useContext } from "react";
import { TransactionsDescription, TransactionsContainer, TransactionsAmount, ButtonDelete } from "./styles";

// Icons
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
// import { TransactionsContext } from "../../Context/Transactions";
import { TransactionContext } from "../../Context/Transaction/context";
import { useTrsactionContext } from "../../Context/Transaction";
import { converteCurrencyToCurremtLanguage } from "../../Context/Utils/ConverteCurrency";
import { useTranslation } from "react-i18next";

interface TransactionsTableProps {
    type: "income" | "expense"
    amount: number | string
    description: string
    date: string
    id: string
    isAbleToEdit?: boolean
}

export function TransactionsTable({ type, amount, description, date, id, isAbleToEdit = true }: TransactionsTableProps) {
    const { transactions_API, actionCurrent } = useTrsactionContext();
    const { i18n } = useTranslation()
    const currentLanguage = i18n.language
    console.log(amount)

    function handleRemoveTransaction() {
        const cardProps = {
            id: id,
            date: date,
            amount: amount,
            type: type,
            description: description
        }
        actionCurrent.deleteTransaction(cardProps)
    }

    const newAmountFinal = converteCurrencyToCurremtLanguage(amount, currentLanguage, false)

    return (
        <TransactionsContainer>

            <TransactionsDescription type={type}>
                {type == "income" && <BsArrowUpCircle size={23} />}

                {type == "expense" && <BsArrowDownCircle size={23} />}

                <div className="content__text">
                    <h3 className="content__text--title">{description}</h3>
                    <h4 className="content__text--date">{date}</h4>
                </div>
            </TransactionsDescription>



            <TransactionsAmount type={type}>
                {type == "income" && (`${newAmountFinal}`)}

                {type == "expense" && (`- ${newAmountFinal}`)}
            </TransactionsAmount>

            {!!isAbleToEdit && (
                <ButtonDelete onClick={handleRemoveTransaction}>
                    <MdDelete size={24} />
                </ButtonDelete>
            )}
        </TransactionsContainer>
    )
}