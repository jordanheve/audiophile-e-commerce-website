import {useReducer, createContext, Dispatch, ReactNode} from 'react'
import { PurchaseActions, PurchaseState, initialState, purchaseReducer } from '../../reducers/purchase-reducer';


type PurchaseProviderProps = {
    children: ReactNode
  }

type PurchaseContextProps = {
    state: PurchaseState;
    dispatch: Dispatch<PurchaseActions>;
  
}

export const PurchaseContext = createContext<PurchaseContextProps>({} as PurchaseContextProps)

export default function PurchaseProvider({children} : PurchaseProviderProps) {
    const [state, dispatch] = useReducer(purchaseReducer, initialState)



  return (
    <PurchaseContext.Provider value={{ state, dispatch }}>
      {children}
    </PurchaseContext.Provider>
  )
}
