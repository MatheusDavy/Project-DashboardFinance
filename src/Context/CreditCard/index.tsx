import { createContext, memo, ReactNode, useContext, useEffect, useReducer, useRef, useState } from "react"
import { ChildrenProviderProps, initalValues } from "./interfaces"
import { CreditCardContext } from "./context"
import { reducer } from "./reducer"
import { buildAction } from "./build_cations"

const intValues = initalValues

function CreditCardContextProvider({ children }: ChildrenProviderProps) {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [creditCard_API, dispatch] = useReducer(reducer, intValues)
    const actionCurrent = useRef(buildAction(dispatch)).current

    function openCloseCloseModal() {
        setIsOpenModal(!isOpenModal)
    }

    return (
        <CreditCardContext.Provider
            value={{
                actionCurrent,
                isOpenModal,
                creditCard_API,
                openCloseCloseModal,
            }}
        >
            {children}
        </CreditCardContext.Provider>
    )
}

export default memo(CreditCardContextProvider)

export const useCreditCardContext = ()=>{
    const context = useContext(CreditCardContext)

    if(typeof context === 'undefined'){
        throw new Error(
            "You have to use useCreditCardContext inside <CreditCardContextProvider />"
        )
    }

    return {...context}
}