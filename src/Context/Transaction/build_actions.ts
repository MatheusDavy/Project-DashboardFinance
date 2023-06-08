import * as actionTypes from './action_types'
import { TransactionProps } from './interfaces'


export const buildAction = (dispatch: any) => {

    return { 
        newTransaction: (transaction: TransactionProps) => dispatch({ type: actionTypes.ADD_TRANSACTION, value: transaction }),
        deleteTransaction: (transaction: TransactionProps) => dispatch({ type: actionTypes.DELETE_TRANSACTION, value: transaction })
    }

}