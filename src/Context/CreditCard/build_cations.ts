import * as actionTypes from './action_types'
import { CreditCardProps } from './interfaces'


export const buildAction = (dispatch: any) =>{
    return {
        newCreditCard: (creditCard: CreditCardProps)=> dispatch({type: actionTypes.ADD_CREDIT_CARD, value: creditCard}),
        deleteCreditCard: (creditCard: CreditCardProps)=> dispatch({type: actionTypes.DELETE_CREDIT_CARD, value: creditCard})
    }
}