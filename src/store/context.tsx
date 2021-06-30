import { createContext, PropsWithChildren, useReducer } from 'react'

import { INITIAL_STATE } from '../constants/initialState'
import { useActions } from './actions'
import { reducer } from './reducer'

export const StoreContext = createContext({
  state: INITIAL_STATE,
  // eslint-disable-next-line no-console
  actions: useActions((value: any) => console.log(`Called action: ${JSON.stringify(value)}`))
})

export const StoreContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const actions = useActions(dispatch)

  return (
    <StoreContext.Provider value={{ state, actions }} >
      {children}
    </StoreContext.Provider>
  )
}
