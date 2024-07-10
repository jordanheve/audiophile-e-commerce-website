import {useReducer, createContext, Dispatch, ReactNode} from 'react'
import { PurchaseActions, PurchaseState, initialState, purchaseReducer } from '../../reducers/purchase-reducer';
import { useMemo } from "react";

type PurchaseProviderProps = {
    children: ReactNode
  }

type PurchaseContextProps = {
    state: PurchaseState;
    dispatch: Dispatch<PurchaseActions>;
    totalPurchase: number;
}

export const PurchaseContext = createContext<PurchaseContextProps>({} as PurchaseContextProps)

export default function PurchaseProvider({children} : PurchaseProviderProps) {
    const [state, dispatch] = useReducer(purchaseReducer, initialState)
    const totalPurchase = useMemo(() => state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0), [state.cart])


  return (
    <PurchaseContext.Provider value={{ state, dispatch, totalPurchase }}>
      {children}
    </PurchaseContext.Provider>
  )
}
