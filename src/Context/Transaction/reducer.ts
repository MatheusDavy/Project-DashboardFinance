import * as actionTypes from './action_types'
import { DispatchProps, TransactionProps, TransactionsProps } from './interfaces'

export const reducer = (state: TransactionsProps, action: DispatchProps) => {
    switch (action.type) {
        case actionTypes.ADD_TRANSACTION: {
            return newTransaction(state, action)
        };
        case actionTypes.DELETE_TRANSACTION: {
            return deleteTransaction(state, action)
        }
    }
}


// Reducer Functions
const deleteTransaction = (state: TransactionsProps, action: DispatchProps) => {
    const newArrayValues = state.transactionAPI.filter(transaction => {
        if (transaction.id != action.value.id) {
            return transaction
        }
    })

    const newIncome = updateIncome(newArrayValues)
    const newExpense = updateExpense(newArrayValues)
    const newAmount = updateAmount(newIncome, newExpense)

    return {
        income: newIncome.toFixed(2),
        expense: newExpense.toFixed(2),
        totalAmount: newAmount.toFixed(2),
        transactionAPI: newArrayValues
    }
}

const newTransaction = (state: TransactionsProps, action: DispatchProps) => {
    let newArrayValues: TransactionProps[] = state.transactionAPI
    newArrayValues.push(action.value)

    const newIncome = updateIncome(newArrayValues)
    const newExpense = updateExpense(newArrayValues)
    const newAmount = updateAmount(newIncome, newExpense)

    const returnNewTransaction = {
        income: newIncome.toFixed(2),
        expense: newExpense.toFixed(2),
        totalAmount: newAmount.toFixed(2),
        transactionAPI: newArrayValues
    }

    return returnNewTransaction

}

const updateIncome = (newValue: TransactionProps[],) => {
    let newIncome = 0
    newValue.map(transaction => {
        let { amount, type } = transaction
        amount = amount.replace(/[^\d]/g, ''); //Remove all caracteres beyond numbers
        let newAmount = Number(amount.replace(/(\d{2})$/, '.$1')) //add '.' befores the two last numbers
        if (type == 'income') {
            newIncome += newAmount
        }
    })
    return newIncome
}

const updateExpense = (newValue: TransactionProps[],) => {
    console.log(newValue)
    let newExpense = 0
    newValue.map(transaction => {
        let { amount, type } = transaction
        amount = amount.replace(/[^\d]/g, ''); //Remove all caracteres beyond numbers
        let newAmount = Number(amount.replace(/(\d{2})$/, '.$1')) //add '.' befores the two last numbers
        if (type == 'expense') {
            newExpense += newAmount
        }
    })
    return newExpense
}

const updateAmount = (income: number, expense: number) => {
    const newAmount: number = income - expense
    return newAmount
}

