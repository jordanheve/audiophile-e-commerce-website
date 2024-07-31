import InfoInput from "../components/checkout/InfoInput";
import InfoRadio from "../components/checkout/InfoRadio";
import GoBack from "../components/GoBack";

export default function Checkout() {
  return (
    <div className="p-4 pt-28 bg-zinc-50 flex flex-col gap-4">
      <GoBack />
      <form action="">
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
          <InfoRadio id="eMoney" name="payment" label="e-Money" />
          <InfoRadio id="cash" name="payment" label="Cash on Delivery" />

          </fieldset>
        </div>
        
      </form>
    </div>
  );
}
