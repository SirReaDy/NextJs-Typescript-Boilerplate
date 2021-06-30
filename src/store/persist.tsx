import { PropsWithChildren, useEffect, useContext } from 'react'
import { INITIAL_STATE } from '../constants/initialState'
import { StoreContext } from './context'

const PersistGate = ({ children }: PropsWithChildren<unknown>) => {
  const { actions } = useContext(StoreContext)

  useEffect(() => {
    const storage = localStorage.getItem('template-2021')

    if (!storage) {
      localStorage.setItem('template-2021', JSON.stringify(INITIAL_STATE))
    }

    actions.setState(storage ? JSON.parse(storage) : INITIAL_STATE)
  }, [])

  return <>{children}</>
}

export default PersistGate
