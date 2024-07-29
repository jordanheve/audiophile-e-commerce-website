
import { useState } from "react";
type InputInfoProps = {
    label: string
    id: string
    placeholder: string
    caseType? : string
}

export default function InfoInput( {label, id, placeholder, caseType = 'text'} : InputInfoProps) {
    const [inputValue, setInputValue] = useState('');

    const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Remove any non-numeric characters from the input value
        const numericValue = value.replace(/[^0-9]/g, '');
        setInputValue(numericValue)
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
      };
    const isNumeric :boolean = caseType == 'numeric';
    return (
    <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-bold mb-1">
              {label}
            </label>
            <input
              onChange={isNumeric ? handleChangeNumber : handleChange}
              id={id}
              type="text"
              placeholder={placeholder}
              className='border p-3 rounded outline-none'
              value={inputValue}
            />
    </div>
  )
}
