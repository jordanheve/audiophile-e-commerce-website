
type InputInfoProps = {
  id: string;
  name: string;
  label: string;
  defaultChecked?: boolean;
  setPaymentId : React.Dispatch<React.SetStateAction<string>>
}

export default function InfoRadio({ id, name, label, defaultChecked = false, setPaymentId }: InputInfoProps) {
  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>)  => {
    setPaymentId(e.target.id);
  };
  return (
    <>
      <label className="relative flex items-center p-3 cursor-pointer gap-4 border rounded-md font-semibold checkbox-label w-full" htmlFor={id}>
        <div className="relative flex items-center cursor-pointer gap-4">
          <input
            name={name}
            type="radio"
            className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-custom-orange transition-all checked:border-zinc-400"
            id={id}
            defaultChecked={defaultChecked} 
            onChange={handleInputChange}
          />
          <span
            className="absolute text-custom-orange transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5" viewBox="0 0 16 16" fill="currentColor">
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
            </svg>
          </span>
        </div>
        <span>{label}</span>
      </label>
    </>
  );
}
