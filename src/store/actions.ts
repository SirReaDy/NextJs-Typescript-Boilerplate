import { Dispatch } from 'react'

import { ACTIONS } from '../constants/actions'
import { AnyAction } from '../types'
import { State } from '../types/state'

export const useActions = (dispatch: Dispatch<AnyAction>) => ({
  testAction: (value: string) => dispatch({ type: ACTIONS.testAction, payload: value }),
  setState: (value: State) => dispatch({ type: ACTIONS.setState, payload: value }),
})
