//import { Product } from "../types";

export type PurchaseActions = 
{type: 'close-menu' } |
{ type: 'open-menu' } |
{ type: 'open-cart'} |
{type: 'close-cart'} 

export type PurchaseState = {
    menuOpen: boolean;
    cartOpen: boolean;
}

export const initialState : PurchaseState = {
    menuOpen: false,
    cartOpen: false
}

export const purchaseReducer = ( state: PurchaseState = initialState,  actions: PurchaseActions ) =>{
    switch(actions.type){
        case 'close-menu':
            return {...state, menuOpen: false }
        case 'open-menu':
            return {...state, menuOpen: true }
        case 'open-cart':
            return {...state, cartOpen: true }
        case 'close-cart':
            return {...state, cartOpen: false }
        default:
            return state
    }
}