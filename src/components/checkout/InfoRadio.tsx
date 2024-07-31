import { useMemo } from "react"

type InputInfoProps = {
    id: string
    name: string
    label: string
    checked?: boolean
}

export default function InfoRadio({ id, name, label }: InputInfoProps) {

  return (
    <>
      <label className="relative flex items-center p-3  cursor-pointer gap-4  border rounded-md font-semibold checkbox-label w-full" htmlFor={id}>
        <div className="relative flex items-center cursor-pointer gap-4 ">
          <input
            name={name}
            type="radio"
            className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-custom-orange transition-all  checked:border-zinc-400"
            id={id}
            
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
  )
}
