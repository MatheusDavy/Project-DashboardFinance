import { memo, useContext, useEffect, useReducer, useRef, useState } from "react";
import { TransactionContext } from "./context";
import { reducer } from "./reducer";
import { buildAction } from "./build_actions";
import { ChildrenProps, TransactionsProps } from "./interfaces";


const initalValues: TransactionsProps | null = {
    income: 0,
    expense: 0,
    totalAmount: 0,
    transactionAPI: []
}

function TransactionContextProvider({ children }: ChildrenProps) {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const [transactions_API, dispatch] = useReducer(reducer, initalValues)
    const actionCurrent = useRef(buildAction(dispatch)).current

    function openCloseModal() {
        setIsOpenModal(!isOpenModal)
    }

    return (
        <TransactionContext.Provider
            value={{
                actionCurrent,
                transactions_API,
                isOpenModal,
                openCloseModal
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}

export default memo(TransactionContextProvider)

export const useTrsactionContext = () => {
  const context = useContext(TransactionContext);

  if (typeof context === "undefined") {
    throw new Error(
      "You have to use useTransactionContext inside <TransactionContextProvider />"
    );
  }

  return {...context};
};