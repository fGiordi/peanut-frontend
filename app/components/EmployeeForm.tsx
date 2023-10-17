'use client'

import { validateInput } from '@/helpers';
import { useEmployeeStore } from '@/store/employee';
import { useEffect, useState } from 'react';

const EmployeeForm = () => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')

  return (
      <div className="flex justify-between items-center">
            <div className="flex flex-col items-start justify-start w-full space-y-4">
              <div className="flex space-x-2 items-center justify-center">
                <h5>First Name(s) * </h5>
                <input type="text" className="w-[200px] py-4 h-3 border-2 border-black"
                    onInput={(e) => validateInput(e.target)}
										onChange={(e) => setFirstName(e.target.value)}
										value={firstName}
                />
              </div>
              <div className="flex space-x-7 items-center justify-center">
                <h5>Last Name * </h5>
                <input type="text" className="w-[200px] py-4 h-2 border-2 border-black" 
								onInput={(e) => validateInput(e.target)}
								onChange={(e) => setLastName(e.target.value)}
								value={lastName}
								/>
              </div>
              <div className="flex space-x-9 items-center justify-center">
								<label htmlFor="cars">
                	<h5>Salutation * </h5>
								</label>

								<select className='w-[200px] py-2  border-2 border-black' name="cars" id="cars">
									<option value="volvo">Volvo</option>
									<option value="saab">Saab</option>
									<option value="mercedes">Mercedes</option>
									<option value="audi">Audi</option>
								</select>
              </div>
              <div className="flex items-center gap-16 w-full">
                <h5>Gender</h5>
                <div className='space-x-2'>
								<input type="radio" name="gender" value={"Male"} id="male"  />
								<label htmlFor="male">Male</label>
                <input type="radio" name="gender"  value={"Female"} id="female"/>
								<label htmlFor="female">Female</label>
                <input type="radio" name="gender" value={"Unspecified"} id="unspecified"/>
								<label htmlFor="unspecified">Unspecified</label>
								</div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full space-y-4">
              <div className="flex space-x-2 items-center justify-center">
                <h5>Gender</h5>
                <input type="text" className="w-[200px] py-4 h-3 border-2 border-black" />
              </div>
            </div>  
          </div>
  );
};

export default EmployeeForm;
