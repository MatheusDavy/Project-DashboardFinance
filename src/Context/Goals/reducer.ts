import * as actionTypes from './action_types'
// Interfaces
import { DispatchProps, GoalsProps } from './interfaces'


export const reducer = (state: GoalsProps[], action: DispatchProps) => {
    switch (action.type) {
        case (actionTypes.NEW_GOALS): {
            console.log('add')
            return addNewGoals(state, action)
        }
        case (actionTypes.DELETE_GOALS): {
            console.log('delete')
            return deleteGoals(state, action)
        }
        case (actionTypes.UPDATE_GOALS): {
            console.log('update')
            return updateGoals(state, action)
        }
    }
}

function addNewGoals(state: GoalsProps[], action: DispatchProps) {
    let newArrayValue = state

    const percent = calcPercent(action.value.amountInitial, action.value.amountFinal)

    const updateActionValue = {
        ...action.value, percent: percent
    }

    newArrayValue.push(updateActionValue)

    return newArrayValue
}

function deleteGoals(state: GoalsProps[], action: DispatchProps) {
    const newArrayValue = state.filter(goals => {
        if (goals.id != action.value.id) {
            return goals
        }
    })

    return newArrayValue
}

function calcPercent(contain: string, goals: string) {
    const containReplace = contain.replace(/[^\d]/g, ''); //Remove all caracteres beyond numbers
    const containNumber = Number(containReplace.replace(/(\d{2})$/, '.$1')) //add '.' befores the two last numbers

    const goalsReplace = goals.replace(/[^\d]/g, ''); //Remove all caracteres beyond numbers
    const goalsNumber = Number(goalsReplace.replace(/(\d{2})$/, '.$1')) //add '.' befores the two last numbers

    const percent = (containNumber * 100) / goalsNumber
    return percent
}

function updateGoals(state: GoalsProps[], action: DispatchProps) {
    const newArrayValue = state.map(goal => {
        if (goal.id == action.value.id) {

            const percent = calcPercent(action.value.amountInitial, action.value.amountFinal)
            const updateActionValue = {
                ...action.value, percent: percent
            }

            return updateActionValue
        } else {
            return goal
        }
    })

    return newArrayValue
}