import InfoInput from "../components/checkout/InfoInput";
import InfoRadio from "../components/checkout/InfoRadio";
import GoBack from "../components/GoBack";
import { useMemo, useState } from "react";
import { usePurchase } from "../components/hooks/usePurchase";
import CartItems from "../components/header/CartItems";
import { formatCurrency } from "../helpers";
export default function Checkout() {

  const [selectedPayment, setSelectedPayment] = useState('eMoney');
  const {state, dispatch, totalPurchase, shipping, vat, grandTotal} = usePurchase();
  const isEmpty = useMemo(() => state.cart.length == 0, [state.cart])
  const initialState = {
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    eMoneyNumber: "",
    eMoneyPin: ""
    
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
          <InfoInput label="Name" placeholder="Alexei Ward" id="name"/>
          <InfoInput label="Email Address" placeholder="alexei@mail.com" id="email" type="email"/>
          <InfoInput label="Phone Number" placeholder="+1 202-555-0136" id="phone" caseType="numeric"/>
          
          <h4 className="text-custom-orange font-semibold uppercase text-md mt-2">
            Shipping Info
          </h4>
          <InfoInput label="Your Address" placeholder="1137 Williams Avenue" id="address"/>
          <InfoInput label="ZIP Code" placeholder="10001" id="zip"/>
          <InfoInput label="City" placeholder="New York" id="city"/>
          <InfoInput label="Country" placeholder="United States" id="country"/>

          <h4 className="text-custom-orange font-semibold uppercase text-md mt-2">
            Payment Details
          </h4>
          <fieldset className="flex flex-col gap-2">
          <legend className="font-semibold mb-2">Payment Method</legend>
          <InfoRadio id="eMoney" name="payment" label="e-Money" defaultChecked={true} setPaymentId={setSelectedPayment}/>
          <InfoRadio id="cash" name="payment" label="Cash on Delivery" setPaymentId={setSelectedPayment} />

          {selectedPayment == 'eMoney' && (
            <div className="mt-4 flex flex-col gap-2" id="moneyInfo">
          <InfoInput label="e-Money Number"  id="eMoneyNumber" placeholder="238521993" />
          <InfoInput label="e-Money Pin"  id="eMoneyPin" placeholder="6891" />
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
          <span className="font-semibold">{formatCurrency(shipping)}</span>
        </div>
        <div className="flex justify-between leading-3">
          <span className="uppercase text-zinc-500">Vat (included)</span>
          <span className="font-semibold">{formatCurrency(vat)}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="uppercase text-zinc-500">Total</span>
          <span className="font-semibold text-custom-orange">{formatCurrency(grandTotal)}</span>
        </div>
        
              <button type="submit" className="uppercase w-full bg-custom-orange text-white py-3 tracking-wider text-sm">
              Continue & Pay
              </button>
        </div>
        
      </form>
    </div>
  );
}
