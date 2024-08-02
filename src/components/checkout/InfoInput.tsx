
import { useState } from "react";
type InputInfoProps = {
    label: string
    id: string
    placeholder: string
    caseType? : string
    type?: string
    errorMessage?: string
    isError?: boolean
}

export default function InfoInput( {label, id, placeholder, caseType = 'text', type = "text", errorMessage = "", isError = false} : InputInfoProps) {
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
            <label htmlFor={id} className="text-sm font-bold mb-1">
              <span>
              {label}
              </span>
              <span>
                {errorMessage}
              </span>
            </label>
            <input
              onChange={isNumeric ? handleChangeNumber : handleChange}
              id={id}
              type={type}
              placeholder={placeholder}
              className={isError ? 'border p-3 rounded outline-none border-red-500'   : 'border p-3 rounded outline-none' }
              value={inputValue}
            />
    </div>
  )
}
