import { CartProduct, Product } from "../types";


export type PurchaseActions = 
{type: 'close-menu' } |
{ type: 'open-menu' } |
{type: 'add-to-cart', payload: {product: Product, quantity: number}} |
{type: 'remove-from-cart', payload: {id: Product['id']} } |
{type: 'increase-quantity', payload: {id: Product['id']} } |
{type : 'decrease-quantity', payload: {id: Product['id']}} |
{type : 'clear-cart'}
export type PurchaseState = {
    menuOpen: boolean;
    cartOpen: boolean;
    cart: CartProduct[]
}

const initialCart = (): CartProduct[] =>  JSON.parse(localStorage.getItem('cart') || '[]')


export const initialState : PurchaseState = {
    menuOpen: false,
    cartOpen: false,
    cart: initialCart()
}

const MIN_QUANTITY = 1;
export const purchaseReducer = ( state: PurchaseState = initialState,  actions: PurchaseActions ) =>{
    switch(actions.type){
        case 'close-menu':
            return {...state, menuOpen: false }
        case 'open-menu':
            return {...state, menuOpen: true }
        case 'add-to-cart':{
            const existingItem = state.cart.find(item => item.id === actions.payload.product.id)
            const quantity = actions.payload.quantity
            if(existingItem){
                return {
                    ...state,
                    cart: state.cart.map(item => item.id === actions.payload.product.id? {...item, quantity: item.quantity + quantity}: item)
                }
            }
            return {...state, cart: [...state.cart, {...actions.payload.product, quantity }] }
        }
        case 'remove-from-cart':
            return {...state, cart: state.cart.filter(item => item.id!== actions.payload.id) }
        case 'increase-quantity':
            return {...state, cart: state.cart.map(item => item.id === actions.payload.id ? {...item, quantity: item.quantity + 1}: item) }
        case 'decrease-quantity':
            return {...state, cart: state.cart.map(item => item.id === actions.payload.id && item.quantity > MIN_QUANTITY ? {...item, quantity: item.quantity - 1}: item) }
        case 'clear-cart':
            return {...state, cart: [] }
        default:
            return state
    }
}