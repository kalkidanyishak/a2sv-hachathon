import { useParams } from "react-router-dom"

const labelClass='block text-sm font-medium text-gray-700'
const inputClass='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'


const Antenatal = () => {
    const params = useParams()
    console.log(params)
    return (
            <div className="bg-gray-100 flex items-center justify-center min-h-screen">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6 text-center text-emerald-700">Antenatal Care Form</h1>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="visit-date" className={labelClass}>Visit Date</label>
                            <input type="date" id="visit-date" name="visit-date" required className={inputClass}/>
                        </div>

                        <div>
                            <label htmlFor="blood-pressure" className={labelClass}>Blood Pressure</label>
                            <input type="text" id="blood-pressure" name="blood-pressure" placeholder="e.g., 120/80" required className={inputClass}/>
                        </div>

                        <div>
                            <label htmlFor="weight" className={labelClass}>Weight (kg)</label>
                            <input type="number" id="weight" name="weight" step="0.1" required className={inputClass}/>
                        </div>

                        <div>
                            <label htmlFor="hemoglobin" className={labelClass}>Hemoglobin Level (g/dL)</label>
                            <input type="number" id="hemoglobin" name="hemoglobin" step="0.1" required className={inputClass}/>
                        </div>

                        <div>
                            <label htmlFor="screening-results" className={labelClass}>Screening Results</label>
                            <textarea id="screening-results" name="screening-results" rows="4" cols="50" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"></textarea>
                        </div>

                        <div>
                            <label htmlFor="immunizations" className={labelClass}>Immunizations</label>
                            <textarea id="immunizations" name="immunizations" rows="4" cols="50" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"></textarea>
                        </div>

                        <div>
                            <label htmlFor="place" className={labelClass}>Place</label>
                            <input type="text" id="place" name="place" required className={inputClass}/>
                        </div>

                        <div>
                            <label htmlFor="mother" className={labelClass}>Mother's Name</label>
                            <input value={params.name} type="text" id="mother" name="mother" required className={inputClass}/>
                        </div>

                        <div>
                            <input type="submit" value="Submit" className="mt-4 w-full bg-emerald-500 text-white p-2 rounded-md shadow-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 cursor-pointer" />
                        </div>
                    </form>
                </div>
            </div>
    )
}
export default Antenatal