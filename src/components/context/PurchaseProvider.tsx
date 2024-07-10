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
    shipping: number;
    vat: number;
    grandTotal: number;
}

export const PurchaseContext = createContext<PurchaseContextProps>({} as PurchaseContextProps)

export default function PurchaseProvider({children} : PurchaseProviderProps) {
    const [state, dispatch] = useReducer(purchaseReducer, initialState)
    const totalPurchase = useMemo(() => state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0), [state.cart])
    const shipping = 50;
    const vat = useMemo(() =>  Math.round(totalPurchase * 0.2) , [totalPurchase]);
    const grandTotal = useMemo(() => totalPurchase + vat + shipping, [totalPurchase, vat, shipping])
  return (
    <PurchaseContext.Provider value={{ state, dispatch, totalPurchase, shipping, vat, grandTotal }}>
      {children}
    </PurchaseContext.Provider>
  )
}
