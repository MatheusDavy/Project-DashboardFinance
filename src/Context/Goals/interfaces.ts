import { ReactNode } from "react"
import { Goals } from "../../Pages/Goals"

export interface GoalsProps {
    bgColor: string
    percent: number
    name: string
    date: string
    icon: string
    id: string
    amountFinal: string
    amountInitial: string
}

export interface DispatchProps {
    type: string;
    value: GoalsProps
}

export interface GoalsContextProps {
    isOpenModal: boolean
    openCloseModal: ()=> void
    actionCurrent: any
    goals_API: GoalsProps[]
    openCloseEditModal: (openModal: boolean, id: string)=> void
    isOpenEditModal: EditModalProps
}

export interface GoaslProviderProps {
    children: ReactNode
}

export interface EditModalProps {
    isOpenModal: boolean
    id_WillEdited: null | string
}
