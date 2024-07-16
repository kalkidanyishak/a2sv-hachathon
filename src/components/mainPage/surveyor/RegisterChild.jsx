const labelClass='block text-sm font-medium text-gray-700'
const inputClass='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'


const RegisterChild = () => {
    return (
        <>

            <div className="bg-gray-100 flex items-center justify-center min-h-screen">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                    <h1 className="text-2xl font-bold mb-6 text-center text-emerald-700">Child Info Form</h1>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className={labelClass}>Name</label>
                            <input type="text" id="name" name="name" required className={inputClass} />
                        </div>

                        <div>
                            <label htmlFor="dob" className={labelClass}>Date of Birth</label>
                            <input type="date" id="dob" name="dob" required className={inputClass} />
                        </div>

                        <div>
                            <label htmlFor="birth-weight" className={labelClass}>Birth Weight (kg)</label>
                            <input type="number" id="birth-weight" name="birth-weight" step="0.1" required className={inputClass} />
                        </div>

                        <div>
                            <label htmlFor="mother" className={labelClass}>Mother's Name</label>
                            <input type="text" id="mother" name="mother" required className={inputClass} />
                        </div>

                        <div>
                            <label htmlFor="location" className={labelClass}>Location</label>
                            <input type="text" id="location" name="location" required className={inputClass} />
                        </div>

                        <div>
                            <input type="submit" value="Submit" className="mt-4 w-full bg-emerald-500 text-white p-2 rounded-md shadow-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 cursor-pointer" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="bg-gray-100 flex items-center justify-center min-h-screen">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                    <h1 className="text-2xl font-bold mb-6 text-center text-emerald-700">Neonatal Health Form</h1>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="apgar-score" className={labelClass}>Apgar Score</label>
                            <input type="number" id="apgar-score" name="apgar-score" step="0.1" required className={inputClass} />
                        </div>

                        <div>
                            <label htmlFor="newborn-screening" className={labelClass}>Newborn Screening Results</label>
                            <textarea id="newborn-screening" name="newborn-screening" rows="4" cols="50" required className={inputClass}></textarea>
                        </div>

                        <div>
                            <label htmlFor="congenital-conditions" className={labelClass}>Congenital Conditions</label>
                            <textarea id="congenital-conditions" name="congenital-conditions" rows="4" cols="50" required className={inputClass}></textarea>
                        </div>

                        <div>
                            <label htmlFor="child" className={labelClass}>Child's Name</label>
                            <input type="text" id="child" name="child" required className={inputClass} />
                        </div>

                        <div>
                            <input type="submit" value="Submit" className="mt-4 w-full bg-emerald-500 text-white p-2 rounded-md shadow-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 cursor-pointer" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default RegisterChild