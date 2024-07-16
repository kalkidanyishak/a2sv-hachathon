import { useParams } from "react-router-dom"
const labelClass='block text-sm font-medium text-gray-700'
const inputClass='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'

const InfantForm=()=>{
    const params=useParams()
    console.log(params)
    return (
<div className="bg-gray-100 flex items-center justify-center min-h-screen">
  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
    <h1 className="text-2xl font-bold mb-6 text-center text-emerald-700">Infant Child Health Form</h1>
    <form className="space-y-4">
      <div>
        <label htmlFor="checkup-date" className={labelClass}>Checkup Date</label>
        <input type="date" id="checkup-date" name="checkup-date" required className={inputClass}/>
      </div>

      <div>
        <label htmlFor="weight" className={labelClass}>Weight (kg)</label>
        <input type="number" id="weight" name="weight" step="0.1" required className={inputClass}/>
      </div>

      <div>
        <label htmlFor="height" className={labelClass}>Height (cm)</label>
        <input type="number" id="height" name="height" step="0.1" required className={inputClass}/>
      </div>

      <div>
        <label htmlFor="head-circumference" className={labelClass}>Head Circumference (cm)</label>
        <input type="number" id="head-circumference" name="head-circumference" step="0.1" required className={inputClass}/>
      </div>

      <div>
        <label htmlFor="developmental-milestone" className={labelClass}>Developmental Milestone</label>
        <textarea id="developmental-milestone" name="developmental-milestone" rows="4" cols="50" required className={inputClass}></textarea>
      </div>

      <div>
        <label htmlFor="immunization" className={labelClass}>Immunization</label>
        <textarea id="immunization" name="immunization" rows="4" cols="50" required className={inputClass}></textarea>
      </div>

      <div>
        <label htmlFor="nutrition" className={labelClass}>Nutrition</label>
        <textarea id="nutrition" name="nutrition" rows="4" cols="50" required className={inputClass}></textarea>
      </div>

      <div>
        <label htmlFor="place" className={labelClass}>Place</label>
        <input type="text" id="place" name="place" required className={inputClass}/>
      </div>

      <div>
        <label htmlFor="child" className={labelClass}>Child's Name</label>
        <input value={params.name} type="text" id="child" name="child" required className={inputClass}/>
      </div>

      <div>
        <label htmlFor="surveyor" className={labelClass}>Surveyor's Name</label>
        <input type="text" id="surveyor" name="surveyor" required className={inputClass}/>
      </div>

      <div>
        <input type="submit" value="Submit" className="mt-4 w-full bg-emerald-500 text-white p-2 rounded-md shadow-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 cursor-pointer"/>
      </div>
    </form>
  </div>
</div>
    )
}
export default InfantForm