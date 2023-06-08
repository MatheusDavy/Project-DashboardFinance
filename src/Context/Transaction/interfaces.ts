import { ReactNode } from "react";

export interface ChildrenProps {
    children: ReactNode
}

export interface TransactionsProps {
    income: number
    expense: number
    totalAmount: number
    transactionAPI: TransactionProps[]
}

export interface TransactionProps {
    id: string
    description: string
    date: string
    amount: string
    type: "income" | "expense"
}

export interface DispatchProps {
    type: string;
    value: TransactionProps
}

export interface ContextProps {
    actionCurrent: any
    transactions_API: TransactionsProps
    openCloseModal: ()=> void
    isOpenModal: boolean
}