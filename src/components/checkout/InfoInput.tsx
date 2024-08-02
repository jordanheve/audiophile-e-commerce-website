

type InputInfoProps = {
    label: string
    id: string
    placeholder: string
    type?: string
    errorMessage?: string
    isError?: boolean
    value: string | number
    maxLength?: number
    handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InfoInput( {label, id, placeholder, type = "text", errorMessage = "", isError = false, value, handleValue, maxLength = 100} : InputInfoProps) {


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
              onChange={handleValue}
              value={value == 0 ? "" : value}
              id={id}
              type={type}
              name={id}
              maxLength={maxLength}
              placeholder={placeholder}
              className={isError ? 'border p-3 rounded outline-none border-red-500'   : 'border p-3 rounded outline-none' }
              
            />
    </div>
  )
}
