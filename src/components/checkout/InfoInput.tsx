

type InputInfoProps = {
    label: string
    id: string
    placeholder: string
    type?: string
    errorMessage?: string
    required?: boolean
    value: string | number
    maxLength?: number
    handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InfoInput( {label, id, placeholder, type = "text", errorMessage = "", value, handleValue, maxLength = 100, required} : InputInfoProps) {


    return (
    <div className="flex flex-col">
            <label htmlFor={id} className="text-sm font-bold mb-1 flex justify-between items-center">
              <span>
              {label}
              </span>
              <span className="text-xs text-red-500">
                {errorMessage}
              </span>
            </label>
            <input
              onChange={handleValue}
              value={value == 0 ? "" : value}
              id={id}
              type={type}
              name={id}
              maxLength={maxLength}
              placeholder={placeholder}
              required={required}
              className={errorMessage ? 'border p-3 rounded outline-none border-red-500'   : 'border p-3 rounded outline-none' }
              
            />
    </div>
  )
}
