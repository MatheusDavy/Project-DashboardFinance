import { memo, useContext, useReducer, useRef, useState } from "react"
import { reducer } from "./reducer"
import { buildAction } from "./build_action"
import { GoalsContext } from "./context"
import { EditModalProps, GoalsProps, GoaslProviderProps } from "./interfaces"

const initalValuesReducer: GoalsProps[] = []

const initalValuesEditModal: EditModalProps = {
    isOpenModal: false,
    id_WillEdited: null
}

export function GoalsContextProvider({ children }: GoaslProviderProps) {

    const [isOpenModal, setOpenModal] = useState(false)
    const [isOpenEditModal, setEditModal] = useState(initalValuesEditModal)
    const [goals_API, dispatch] = useReducer(reducer, initalValuesReducer)
    const actionCurrent = useRef(buildAction(dispatch)).current

    function openCloseModal() {
        setOpenModal(!isOpenModal)
    }

    function openCloseEditModal(openModal: boolean, id: string) {
        setEditModal({
            isOpenModal: openModal,
            id_WillEdited: id,
        })
    }

    return (
        <GoalsContext.Provider
            value={{
                isOpenModal,
                openCloseModal,
                actionCurrent,
                goals_API,
                openCloseEditModal,
                isOpenEditModal,
            }}
        >
            {children}
        </GoalsContext.Provider>
    )
}

export default memo(GoalsContextProvider)

export const useGoalsContext = () => {
    const context = useContext(GoalsContext);

    if (typeof context === "undefined") {
        throw new Error(
            "You have to use useGoalsContext inside <GoalsContextProvider />"
        );
    }

    return { ...context };
};