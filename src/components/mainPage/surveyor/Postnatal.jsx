import { useParams } from "react-router-dom"

const labelClass='block text-sm font-medium text-gray-700'
const inputClass='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'


const Postnatal = () => {
    const params = useParams()
    console.log(params)
    return (
            <div className="bg-gray-100 flex items-center justify-center min-h-screen">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6 text-center text-emerald-700">Postnatal Care Form</h1>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="visit-date" className={labelClass}>Visit Date</label>
                            <input type="date" id="visit-date" name="visit-date" required className={inputClass} />
                        </div>

                        <div>
                            <label htmlFor="health-assessment" className={labelClass}>Health Assessment</label>
                            <textarea id="health-assessment" name="health-assessment" rows="4" cols="50" required className={inputClass}></textarea>
                        </div>

                        <div>
                            <label htmlFor="breastfeeding-support" className={labelClass}>Breastfeeding Support</label>
                            <textarea id="breastfeeding-support" name="breastfeeding-support" rows="4" cols="50" required className={inputClass}></textarea>
                        </div>

                        <div>
                            <label htmlFor="place" className={labelClass}>Place</label>
                            <input type="text" id="place" name="place" required className={inputClass} />
                        </div>

                        <div>
                            <label htmlFor="mother" className={labelClass}>Mother's Name</label>
                            <input value={params.name} type="text" id="mother" name="mother" required className={inputClass} />
                        </div>

                        <div>
                            <input type="submit" value="Submit" className="mt-4 w-full bg-emerald-500 text-white p-2 rounded-md shadow-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 cursor-pointer" />
                        </div>
                    </form>
                </div>
            </div>
    )
}
export default Postnatal