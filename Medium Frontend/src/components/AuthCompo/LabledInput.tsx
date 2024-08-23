import { ChangeEvent } from "react"

interface labeld {
    label: string;
    placeholder: string;
    onchange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

const LabledInput = ({ label, placeholder, onchange, type}: labeld) => {
    return (
        <div className="pt-1">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label>
                <input onChange={onchange} type= {type||"text"} id="first_name" className="bg-gray-50 border font-semibold border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
            </div>
        </div>
    )
}

export default LabledInput