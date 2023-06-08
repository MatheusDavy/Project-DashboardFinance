import * as actionTypes from './action_types'
import { GoalsProps } from './interfaces'

export const buildAction = (dispatch: any) => {

    return {
        newGoals: (goalsValue: GoalsProps )=> (dispatch({type: actionTypes.NEW_GOALS, value: goalsValue})),
        deleteGoals: (goalsValue: GoalsProps) => (dispatch({type: actionTypes.DELETE_GOALS, value: goalsValue})),
        updateGoals: (goalsValue: GoalsProps) => (dispatch({type: actionTypes.UPDATE_GOALS, value: goalsValue})),
    }

}