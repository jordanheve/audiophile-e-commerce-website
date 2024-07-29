import GoBack from "../components/GoBack";

export default function Checkout() {
  const inputClass = " border p-3 rounded outline-none";
  return (
    <div className="p-4 pt-28 bg-zinc-50 flex flex-col gap-4">
      <GoBack />
      <form action="">
        <div className="bg-white flex flex-col gap-4 p-4 rounded-xl">
          <h2 className="uppercase font-semibold text-3xl mb-2">Checkout</h2>
          <h4 className="text-custom-orange font-semibold uppercase text-md">
            Billing Details
          </h4>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-bold mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Alexei Ward"
              className={inputClass}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-bold mb-1">
              Name
            </label>
            <input
              id="name"
              type="email"
              placeholder="Alexei Ward"
              className={inputClass}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
