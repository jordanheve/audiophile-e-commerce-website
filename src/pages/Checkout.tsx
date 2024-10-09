import React, { useRef, useEffect, useState, useMemo } from "react";
import InfoInput from "../components/checkout/InfoInput";
import InfoRadio from "../components/checkout/InfoRadio";
import GoBack from "../components/GoBack";
import { usePurchase } from "../components/hooks/usePurchase";
import CartItems from "../components/header/CartItems";
import { formatCurrency } from "../helpers";
import { FormCheckout, FormErrors } from "../types";
import OrderSuccess from "../components/checkout/OrderSuccess";
import { CartProduct } from "../types";

type FieldRefs = {
  [key: string]: React.RefObject<HTMLInputElement> | null;
};

export default function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState("eMoney");
  const { state, dispatch, totalPurchase, shipping, vat, grandTotal } =
    usePurchase();
  const [firstProduct, setFirstProduct] = useState<CartProduct | null>(null);
  const [totalCheckout, setTotalCheckout] = useState(0);
  const [itemsQuantity, setItemsQuantity] = useState(0);
  const isEmpty = useMemo(() => state.cart.length === 0, [state.cart]);
  const [isOpenCheckout, setIsOpenCheckout] = useState<boolean>(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const zipRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const eMoneyNumberRef = useRef<HTMLInputElement>(null);
  const eMoneyPinRef = useRef<HTMLInputElement>(null);

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
    eMoneyPin: 0,
  };

  const errors = {
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  };

  const [formCheckout, setFormCheckout] = useState<FormCheckout>(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState(errors);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const isNumeric = ["zip", "phone", "eMoneyNumber", "eMoneyPin"].includes(
      name
    );
    const sanitizedValue = isNumeric ? value.replace(/\D/g, "") : value;
    setFormCheckout({
      ...formCheckout,
      [name]: isNumeric ? +sanitizedValue : sanitizedValue,
    });
  };

  useEffect(() => {
    setFormCheckout({ ...formCheckout, payment: selectedPayment });
  }, [selectedPayment]);


  const fieldRefs: FieldRefs = {
    name: nameRef,
    email: emailRef,
    phone: phoneRef,
    address: addressRef,
    zip: zipRef,
    city: cityRef,
    country: countryRef,
    eMoneyNumber: eMoneyNumberRef,
    eMoneyPin: eMoneyPinRef,
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let isValid = true;
    const fields = [
      "name",
      "email",
      "phone",
      "address",
      "zip",
      "city",
      "country",
    ];
    const newErrors = { ...errors };
    let firstErrorRef: React.RefObject<HTMLInputElement> | null = null;

    fields.forEach((field) => {
      const value = formCheckout[field as keyof FormCheckout];
      if (
        (typeof value === "string" && value.trim() === "") ||
        (typeof value === "number" && value === 0)
      ) {
        newErrors[field as keyof FormErrors] = "Required";
        isValid = false;
        if (!firstErrorRef) {
          firstErrorRef = fieldRefs[field] || null;
        }
      } else {
        newErrors[field as keyof FormErrors] = "";
      }
    });

    if (formCheckout.payment === "eMoney") {
      if (formCheckout.eMoneyNumber === 0) {
        newErrors.eMoneyNumber = "Required";
        isValid = false;
        if (!firstErrorRef) {
          firstErrorRef = eMoneyNumberRef;
        }
      } else {
        newErrors.eMoneyNumber = "";
      }
      if (formCheckout.eMoneyPin === 0) {
        newErrors.eMoneyPin = "Required";
        isValid = false;
        if (!firstErrorRef) {
          firstErrorRef = eMoneyPinRef;
        }
      } else {
        newErrors.eMoneyPin = "";
      }
    }

    if (newErrors.email !== "Required") {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formCheckout.email
      );
      if (!isValidEmail) {
        newErrors.email = "Wrong Format";
        isValid = false;
        if (!firstErrorRef) {
          firstErrorRef = emailRef;
        }
      } else {
        newErrors.email = "";
      }
    }

    setFormErrors(newErrors);

    if (isValid) {
      setFirstProduct(state.cart[0]);
      setTotalCheckout(grandTotal);
      setIsOpenCheckout(true);
      setItemsQuantity(state.cart.length - 1);
      window.scrollTo(0, 0);
      dispatch({ type: "clear-cart" });
    } else if (firstErrorRef && firstErrorRef.current) {
      firstErrorRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      firstErrorRef.current.focus();
    }
  };

  return (
    <div className="bg-zinc-50 py-24">
      <form className="max-lg:p-4 lg:pt-16 max-w-[1110px] mx-auto flex flex-col gap-4 ">
        <GoBack />
        <div className="flex flex-col gap-4 flex-grow lg:flex-row">
          <div className="bg-white flex flex-col gap-4 p-4 rounded-xl lg:basis-2/3">
            <h2 className="uppercase font-semibold text-3xl mb-2">Checkout</h2>
            <h4 className="text-custom-orange font-semibold uppercase text-md mt-2">
              Billing Details
            </h4>
            <InfoInput
              ref={nameRef}
              label="Name"
              placeholder="Alexei Ward"
              id="name"
              value={formCheckout.name}
              handleValue={handleChange}
              errorMessage={formErrors.name}
              required
            />
            <InfoInput
              ref={emailRef}
              label="Email Address"
              placeholder="alexei@mail.com"
              id="email"
              type="text"
              value={formCheckout.email}
              handleValue={handleChange}
              errorMessage={formErrors.email}
              required
            />
            <InfoInput
              ref={phoneRef}
              label="Phone Number"
              placeholder="+1 202-555-0136"
              id="phone"
              inputMode="tel"
              value={formCheckout.phone}
              handleValue={handleChange}
              errorMessage={formErrors.phone}
              required
            />
            <h4 className="text-custom-orange font-semibold uppercase text-md mt-2">
              Shipping Info
            </h4>
            <InfoInput
              ref={addressRef}
              label="Your Address"
              placeholder="1137 Williams Avenue"
              id="address"
              value={formCheckout.address}
              handleValue={handleChange}
              errorMessage={formErrors.address}
              required
            />
            <InfoInput
              ref={zipRef}
              label="ZIP Code"
              placeholder="10001"
              id="zip"
              maxLength={5}
              inputMode="numeric"
              value={formCheckout.zip}
              handleValue={handleChange}
              errorMessage={formErrors.zip}
              required
            />
            <InfoInput
              ref={cityRef}
              label="City"
              placeholder="New York"
              id="city"
              value={formCheckout.city}
              handleValue={handleChange}
              errorMessage={formErrors.city}
              required
            />
            <InfoInput
              ref={countryRef}
              label="Country"
              placeholder="United States"
              id="country"
              value={formCheckout.country}
              handleValue={handleChange}
              errorMessage={formErrors.country}
              required
            />
            <h4 className="text-custom-orange font-semibold uppercase text-md mt-2">
              Payment Details
            </h4>
            <fieldset className="flex flex-col gap-2">
              <legend className="font-semibold mb-2">Payment Method</legend>
              <InfoRadio
                id="eMoney"
                name="payment"
                label="e-Money"
                defaultChecked={true}
                setPaymentId={setSelectedPayment}
              />
              <InfoRadio
                id="cash"
                name="payment"
                label="Cash on Delivery"
                setPaymentId={setSelectedPayment}
              />
              {selectedPayment === "eMoney" && (
                <div className="mt-4 flex flex-col gap-2" id="moneyInfo">
                  <InfoInput
                    ref={eMoneyNumberRef}
                    label="e-Money Number"
                    id="eMoneyNumber"
                    placeholder="238521993"
                    inputMode="numeric"
                    value={formCheckout.eMoneyNumber}
                    handleValue={handleChange}
                    errorMessage={formErrors.eMoneyNumber}
                    required={selectedPayment === "eMoney"}
                  />
                  <InfoInput
                    ref={eMoneyPinRef}
                    label="e-Money Pin"
                    id="eMoneyPin"
                    placeholder="6891"
                    maxLength={4}
                    inputMode="numeric"
                    value={formCheckout.eMoneyPin}
                    handleValue={handleChange}
                    errorMessage={formErrors.eMoneyPin}
                    required={selectedPayment === "eMoney"}
                  />
                </div>
              )}
            </fieldset>
          </div>

          <div className="bg-white flex flex-col gap-4 p-4 rounded-xl flex-grow h-fit">
            <h2 className="uppercase font-semibold text-xl mb-2">Summary</h2>
            <div className="mb-6 flex flex-col gap-4">
              {isEmpty ? (
                <div>
                  <p className="text-center text-xl py-10 font-semibold">
                    There are no items in your cart
                  </p>
                </div>
              ) : (
                <>
                  {state.cart.map((item) => (
                    <CartItems key={item.id} item={item} justshow={true} />
                  ))}
                </>
              )}
            </div>
            <div className="flex justify-between leading-3">
              <span className="uppercase text-zinc-500">Total</span>
              <span className="font-semibold">
                {formatCurrency(totalPurchase)}
              </span>
            </div>
            <div className="flex justify-between leading-3">
              <span className="uppercase text-zinc-500">Shipping</span>
              <span className="font-semibold">
                {formatCurrency(isEmpty ? 0 : shipping)}
              </span>
            </div>
            <div className="flex justify-between leading-3">
              <span className="uppercase text-zinc-500">VAT (included)</span>
              <span className="font-semibold">{formatCurrency(vat)}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="uppercase text-zinc-500">Grand Total</span>
              <span className="font-semibold text-custom-orange">
                {formatCurrency(isEmpty ? 0 : grandTotal)}
              </span>
            </div>
            <button
              disabled={isEmpty}
              onClick={handleSubmit}
              type="button"
              className="disabled:opacity-70 uppercase w-full bg-custom-orange text-white py-3 tracking-wider text-sm hover:opacity-90"
            >
              Continue {selectedPayment === "eMoney" && "& Pay"}
            </button>
          </div>
        </div>
      </form>

      <OrderSuccess
        isOpen={isOpenCheckout}
        total={totalCheckout}
        product={firstProduct}
        itemsQuantity={itemsQuantity}
      />
    </div>
  );
}
