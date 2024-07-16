const labelClass='block text-sm font-medium text-gray-700'
const inputClass='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'

const InputLable = ({htmlfor, type, id, required}) => {
    return (
        <div>
            <label htmlFor={htmlfor} className={labelClass}>Visit Date</label>
            <input type={type} id={id} name={id} required={required} className={inputClass} />
        </div>
    )
}
export default InputLable