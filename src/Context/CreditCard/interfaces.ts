import { ReactNode } from "react"

export interface CreditCardProps {
    name: string
    numberCard: string
    expirationDate: string
    limit: number
    flag: null | "express" | "elo" | "visa" | "mastercard"
}

export interface ChildrenProviderProps {
    children: ReactNode
}

export interface ContextProps {
    actionCurrent: any
    isOpenModal: boolean
    creditCard_API: CreditCardProps[]
    openCloseCloseModal: () => void
}

export interface DispatchProps {
    type: string;
    value: CreditCardProps
}

export const initalValues: CreditCardProps[] = []
