import InfoInput from "../components/checkout/InfoInput";
import InfoRadio from "../components/checkout/InfoRadio";
import GoBack from "../components/GoBack";
import { useEffect, useMemo, useState } from "react";
import { usePurchase } from "../components/hooks/usePurchase";
import CartItems from "../components/header/CartItems";
import { formatCurrency } from "../helpers";
import { FormCheckout, FormErrors } from "../types";
export default function Checkout() {

  const [selectedPayment, setSelectedPayment] = useState('eMoney');
  const {state, dispatch, totalPurchase, shipping, vat, grandTotal} = usePurchase();
  const isEmpty = useMemo(() => state.cart.length == 0, [state.cart])
  const INITIAL_STATE = {
    name: "",
    email: "",
    phone: 0,
    address: "",
    zip: 0,
    city: "",
    country: "",
    payment: "eMoney",
    eMoneyNumber: 0,
    eMoneyPin: 0
  }
  const errors = {
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPin: ""
  }
  const [formCheckout, setFormCheckout] = useState<FormCheckout>(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState(errors)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    const isNumeric = ['zip', 'phone', 'eMoneyNumber', 'eMoneyPin'].includes(name);
    const sanitizedValue = isNumeric ? value.replace(/\D/g, '') : value;
    setFormCheckout({...formCheckout, [name] : isNumeric ? +sanitizedValue : sanitizedValue })
  }
  useEffect( () => {
    setFormCheckout({...formCheckout, payment: selectedPayment})
  }, [selectedPayment, formCheckout])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let isValid = true;
    const fields = ['name', 'email', 'phone', 'address', 'zip', 'city', 'country'];
    const newErrors = { ...errors };
    fields.forEach(field => {
      const value = formCheckout[field as keyof FormCheckout];
      if (typeof value === 'string' && value.trim() === "" || typeof value === 'number' && value === 0) {
        newErrors[field as keyof FormErrors] = "Required"
        isValid = false;
      } else {
        newErrors[field as keyof FormErrors]  = '';
      }
    });
    if(formCheckout.payment == 'eMoney'){
      if(formCheckout.eMoneyNumber == 0){
        newErrors.eMoneyNumber = "Required"
        isValid = false;
      }else {
        newErrors.eMoneyNumber = '';
      }
      if(formCheckout.eMoneyPin == 0){
        newErrors.eMoneyPin = "Required"
        isValid = false;
      }else {
        newErrors.eMoneyPin = '';
      }
    }
    if (newErrors.email != 'Required'){
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formCheckout.email);
      if(!isValidEmail){
        newErrors.email = "Wrong Format"
      }else{
        newErrors.email = '';
      }
    }
    setFormErrors(newErrors)
    if(isValid){
      dispatch({type: 'clear-cart'})
    }
  }

  return (
    <div >
      <form action="" onSubmit={handleSubmit} className="p-4 pt-28 bg-zinc-50 flex flex-col gap-4">
      <GoBack />
        <div className="bg-white flex flex-col gap-4 p-4 rounded-xl">
          <h2 className="uppercase font-semibold text-3xl mb-2">Checkout</h2>
          <h4 className="text-custom-orange font-semibold uppercase text-md mt-2">
            Billing Details
          </h4>
          <InfoInput label="Name" placeholder="Alexei Ward" id="name" value={formCheckout.name} handleValue={handleChange} errorMessage={formErrors.name} required/>
          <InfoInput label="Email Address" placeholder="alexei@mail.com" id="email" type="text" value={formCheckout.email} handleValue={handleChange} errorMessage={formErrors.email} required/>
          <InfoInput label="Phone Number" placeholder="+1 202-555-0136" id="phone"  value={formCheckout.phone} handleValue={handleChange} errorMessage={formErrors.phone} required/>
          
          <h4 className="text-custom-orange font-semibold uppercase text-md mt-2">
            Shipping Info
          </h4>
          <InfoInput label="Your Address" placeholder="1137 Williams Avenue" id="address" value={formCheckout.address} handleValue={handleChange} errorMessage={formErrors.address} required/>
          <InfoInput label="ZIP Code" placeholder="10001" id="zip" maxLength={5} value={formCheckout.zip} handleValue={handleChange} errorMessage={formErrors.zip} required/>
          <InfoInput label="City" placeholder="New York" id="city" value={formCheckout.city} handleValue={handleChange} errorMessage={formErrors.city} required/>
          <InfoInput label="Country" placeholder="United States" id="country"  value={formCheckout.country} handleValue={handleChange} errorMessage={formErrors.country} required/>

          <h4 className="text-custom-orange font-semibold uppercase text-md mt-2">
            Payment Details
          </h4>
          <fieldset className="flex flex-col gap-2">
          <legend className="font-semibold mb-2">Payment Method</legend>
          <InfoRadio id="eMoney" name="payment" label="e-Money" defaultChecked={true} setPaymentId={setSelectedPayment}/>
          <InfoRadio id="cash" name="payment" label="Cash on Delivery" setPaymentId={setSelectedPayment} />

          {selectedPayment == 'eMoney' && (
            <div className="mt-4 flex flex-col gap-2" id="moneyInfo">
          <InfoInput label="e-Money Number"  id="eMoneyNumber" placeholder="238521993"  value={formCheckout.eMoneyNumber} handleValue={handleChange} errorMessage={formErrors.eMoneyNumber} required={selectedPayment == 'eMoney'}/>
          <InfoInput label="e-Money Pin"  id="eMoneyPin" placeholder="6891" maxLength={4} value={formCheckout.eMoneyPin} handleValue={handleChange} errorMessage={formErrors.eMoneyPin} required={selectedPayment == 'eMoney'}/>
          </div>
            )
          }

          </fieldset>
        </div>
        <div className="bg-white flex flex-col gap-4 p-4 rounded-xl">
        <h2 className="uppercase font-semibold text-xl mb-2">Summary</h2>
        <div className="mb-6 flex flex-col gap-4">
        {isEmpty ? (
              <div>
              <p className="text-center text-xl py-10 font-semibold">There are no items in your cart</p>
              </div>
            ) : (
            <>
             { state.cart.map(item => (
             <CartItems key={item.id} item={item} justshow={true}/>
            )) }
            </>
            )}
        </div>
        <div className="flex justify-between leading-3">
          <span className="uppercase text-zinc-500 ">Total</span>
          <span className="font-semibold">{formatCurrency(totalPurchase)}</span>
        </div>
        <div className="flex justify-between leading-3">
          <span className="uppercase text-zinc-500">shipping</span>
          <span className="font-semibold">{formatCurrency(isEmpty ? 0 : shipping)}</span>
        </div>
        <div className="flex justify-between leading-3">
          <span className="uppercase text-zinc-500">Vat (included)</span>
          <span className="font-semibold">{formatCurrency(vat)}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="uppercase text-zinc-500">Total</span>
          <span className="font-semibold text-custom-orange">{formatCurrency(isEmpty ? 0 : grandTotal)}</span>
        </div>
        
              <button disabled={isEmpty} type="submit" className=" disabled:opacity-70 uppercase w-full bg-custom-orange text-white py-3 tracking-wider text-sm">
              Continue & Pay
              </button>
        </div>
        
      </form>
    </div>
  );
}
