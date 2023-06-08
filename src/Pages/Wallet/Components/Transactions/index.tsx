// Components
import { TransactionsContainer, TransactionsHeader } from "./style";
import { TransactionsTable } from "../../../../Components/TransactionsCard";
// icons
import { IoMdAddCircle } from 'react-icons/io'
import { TransactionsModal } from "../../../../Components/Modal/Transacrions";
import { TransactionContext } from "../../../../Context/Transaction/context";
import { useTrsactionContext } from "../../../../Context/Transaction";
import { useTranslation } from "react-i18next";


export function Transactions() {
  const {t} = useTranslation()
  const { openCloseModal, transactions_API } = useTrsactionContext()
  function handleOpenModal() {
    openCloseModal()
  }

  return (
    <>
      <TransactionsContainer>
        <TransactionsHeader>
          <h1 className="title">{t('Transactions')}</h1>
          <button className="btn--add-transations" onClick={handleOpenModal}>
            <IoMdAddCircle size={24} />
          </button>
        </TransactionsHeader>

        {transactions_API.transactionAPI?.map(transaction => (
          <div key={transaction.id}>
            <TransactionsTable
              key={transaction.id}
              id={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              description={transaction.description}
              date={transaction.date}
            />
          </div>
        ))}



      </TransactionsContainer>

      <TransactionsModal />
    </>
  );
}
