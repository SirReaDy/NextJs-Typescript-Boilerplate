import match from 'conditional-expression'

import { AnyAction } from '../types'
import { State } from '../types/state'
import { ACTIONS } from '../constants/actions'

export const reducer = (state: State, { type, payload }: AnyAction): State => {
  const newState =
    match(type)
      .equals(ACTIONS.testAction).then({ ...state, temp: { text: payload } })
      .equals(ACTIONS.setState).then({ ...state, ...payload as State })
      .else(state)

  localStorage.setItem('template-2021', JSON.stringify(newState))

  return newState
}