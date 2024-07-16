const labelClass='block text-sm font-medium text-gray-700'
const inputClass='mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm'

const RegisterMother = () => {
    return (
        <>
            <div className="bg-gray-100 flex items-center justify-center min-h-screen">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                    <h1 className="text-2xl font-bold mb-6 text-center text-emerald-700">Mother's Information Form</h1>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className={labelClass}>Name</label>
                            <input type="text" id="name" name="name" required className={inputClass}/>
                        </div>

                        <div>
                            <label htmlFor="age" className={labelClass}>Age</label>
                            <input type="number" id="age" name="age" required className={inputClass}/>
                        </div>

                        <div>
                            <label htmlFor="marital-status" className={labelClass}>Marital Status</label>
                            <select id="marital-status" name="marital-status" required className={inputClass}>
                                <option value="">Select...</option>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="divorced">Divorced</option>
                                <option value="widowed">Widowed</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="education-level" className={labelClass}>Education Level</label>
                            <input type="text" id="education-level" name="education-level" required className={inputClass}/>
                        </div>

                        <div>
                            <label htmlFor="socioeconomic-status" className={labelClass}>Socioeconomic Status</label>
                            <input type="text" id="socioeconomic-status" name="socioeconomic-status" required className={inputClass}/>
                        </div>

                        <div>
                            <label htmlFor="residence" className={labelClass}>Residence</label>
                            <input type="text" id="residence" name="residence" required className={inputClass}/>
                        </div>

                        <div>
                            <input type="submit" value="Submit" className="mt-4 w-full bg-emerald-500 text-white p-2 rounded-md shadow-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 cursor-pointer" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="bg-gray-100 flex items-center justify-center min-h-screen">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                    <h1 className="text-2xl font-bold mb-6 text-center text-emerald-700">Obstetric History Form</h1>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="previous-pregnancies" className={labelClass}>Previous Pregnancies</label>
                            <input type="number" id="previous-pregnancies" name="previous-pregnancies" required className={inputClass}/>
                        </div>

                        <div>
                            <label htmlFor="live-births" className={labelClass}>Live Births</label>
                            <input type="number" id="live-births" name="live-births" required className={inputClass}/>
                        </div>

                        <div>
                            <label htmlFor="stillbirths" className={labelClass}>Stillbirths</label>
                            <input type="number" id="stillbirths" name="stillbirths" required className={inputClass}/>
                        </div>

                        <div>
                            <label htmlFor="miscarriages" className={labelClass}>Miscarriages</label>
                            <input type="number" id="miscarriages" name="miscarriages" required className={inputClass}/>
                        </div>

                        <div>
                            <label htmlFor="complications" className={labelClass}>Complications</label>
                            <textarea id="complications" name="complications" rows="4" required className={inputClass}></textarea>
                        </div>

                        <div>
                            <label htmlFor="place" className={labelClass}>Place</label>
                            <input type="text" id="place" name="place" required className={inputClass}/>
                        </div>

                        <div>
                            <label htmlFor="mother" className={labelClass}>Mother's Name</label>
                            <input type="text" id="mother" name="mother" required className={inputClass}/>
                        </div>


                        <div>
                            <input type="submit" value="Submit" className="mt-4 w-full bg-emerald-500 text-white p-2 rounded-md shadow-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 cursor-pointer" />
                        </div>
                    </form>
                </div>
            </div>

            <div className="bg-gray-100 flex items-center justify-center min-h-screen">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                    <h1 className="text-2xl font-bold mb-6 text-center text-emerald-700">Labor Delivery Form</h1>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="delivery-date" className={labelClass}>Delivery Date</label>
                            <input type="date" id="delivery-date" name="delivery-date" required className={inputClass}/>
                        </div>

                        <div>
                            <label htmlFor="place-of-delivery" className={labelClass}>Place of Delivery</label>
                            <input type="text" id="place-of-delivery" name="place-of-delivery" required className={inputClass}/>
                        </div>

                        <div>
                            <label htmlFor="type-of-delivery" className={labelClass}>Type of Delivery</label>
                            <select id="type-of-delivery" name="type-of-delivery" required className={inputClass}>
                                <option value="">Select...</option>
                                <option value="vaginal">Vaginal</option>
                                <option value="cesarean">Cesarean</option>
                                <option value="forceps">Forceps</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="birth-attendant" className={labelClass}>Birth Attendant</label>
                            <input type="text" id="birth-attendant" name="birth-attendant" required className={inputClass}/>
                        </div>

                        <div>
                            <label htmlFor="complications" className={labelClass}>Complications</label>
                            <textarea id="complications" name="complications" rows="4" required className={inputClass}></textarea>
                        </div>

                        <div>
                            <label htmlFor="place" className={labelClass}>Place</label>
                            <input type="text" id="place" name="place" required className={inputClass}/>
                        </div>

                        <div>
                            <label htmlFor="mother" className={labelClass}>Mother's Name</label>
                            <input type="text" id="mother" name="mother" required className={inputClass}/>
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
export default RegisterMother