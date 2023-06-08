import * as actionTypes from './action_types'
import { CreditCardProps, DispatchProps } from './interfaces'


export const reducer = (state: CreditCardProps[], action: DispatchProps) => {
    switch (action.type) {
        case (actionTypes.ADD_CREDIT_CARD): {
            return newCreditCard(state, action)
        }
        case (actionTypes.DELETE_CREDIT_CARD): {
            return deleteCreditCard(state, action)
        }
    }
}

// Reducer Functions

function newCreditCard(state: CreditCardProps[], action: DispatchProps) {
    let newValue = state
    newValue.push(action.value)
    return newValue
}

function deleteCreditCard(state: CreditCardProps[], action: DispatchProps){
    const newValue = state.filter( cardProps => {
        if(cardProps.numberCard != action.value.numberCard){
            return cardProps
        }
    })

    return newValue
}