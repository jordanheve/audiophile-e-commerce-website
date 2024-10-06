import {useReducer, createContext, Dispatch, ReactNode, useEffect} from 'react'
import { PurchaseActions, PurchaseState, initialState, purchaseReducer } from '../../reducers/purchase-reducer';
import { useMemo, useState } from "react";
import { DeviceType } from '../../types';

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
    deviceType: DeviceType;
}

export const PurchaseContext = createContext<PurchaseContextProps>({} as PurchaseContextProps)

export default function PurchaseProvider({children} : PurchaseProviderProps) {
    const [state, dispatch] = useReducer(purchaseReducer, initialState)
    const totalPurchase = useMemo(() => state?.cart.reduce((acc, item) => acc + item.price * item.quantity, 0) ?? 0, [state?.cart])
    const shipping = 50;
    const vat = useMemo(() =>  Math.round(totalPurchase * 0.2) , [totalPurchase]);
    const [deviceType, setDeviceType] = useState<DeviceType>('mobile');
    const grandTotal = useMemo(() => totalPurchase + vat + shipping, [totalPurchase, vat, shipping])
    const determineDeviceType = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType('mobile');
      } else if (width < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };
    useEffect(() => {
        if (state) {
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    }, [state?.cart, state])

    useEffect(() => {
      determineDeviceType(); // Determina el tipo de dispositivo al cargar
      window.addEventListener('resize', determineDeviceType); // Actualiza en cambio de tamaño
  
      return () => {
        window.removeEventListener('resize', determineDeviceType); // Limpia el listener
      };
    }, []);


  return (
    <PurchaseContext.Provider value={{ state, dispatch, totalPurchase, shipping, vat, grandTotal, deviceType }}>
      {children}
    </PurchaseContext.Provider>
  )
}
