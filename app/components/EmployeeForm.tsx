'use client'

import { validateInput, formatNumber, handleFormattedInput } from '@/helpers';
import { useEmployeeStore } from '@/store/employee';
import { TSalutation, salutationOptions, TGender } from '@/types';
import {  useState, } from 'react';

const EmployeeForm = () => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [employeeNumber, setEmployeeNumber] = useState<number | undefined>()
	const [grossSalary, setGrossSalary] = useState<number | undefined>(0)
  const [salutation, setSalutation] = useState<TSalutation>('Mr.')

  const isMale = salutation === 'Mr.'
  const isFemale = salutation === 'Mrs.'
  const isUnspecified = salutation === 'Mx.'

  const fullName = `${firstName} ${lastName}`


  return (
      <div className="flex justify-between items-start">
          <div className="flex flex-col items-start justify-start w-full space-y-4">
            <div className="flex space-x-2 items-center justify-center">
              <h5>First Name(s) * </h5>
              <input type="text" className="w-[200px] py-4 h-3 border-2 border-black"
                onInput={(e) => validateInput(e.target, 'alphabets')}
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </div>
            <div className="flex space-x-7 items-center justify-center">
              <h5>Last Name * </h5>
              <input type="text" className="w-[200px] py-4 h-2 border-2 border-black" 
              onInput={(e) => validateInput(e.target, 'alphabets')}
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              />
            </div>
            <div className="flex space-x-9 items-center justify-center">
              <label htmlFor="cars">
                <h5>Salutation * </h5>
              </label>
              <select className='w-[200px] py-1 border-2 border-black' name="salutation" id="salutation" onChange={(e) => setSalutation(e.target.value as TSalutation) }>
                {salutationOptions.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  )
                )}
                
              </select>
            </div>
            <div className="flex items-center gap-16 w-full">
              <h5>Gender</h5>
              <div className='space-x-1'>
                <input type="radio" name="gender" value={"Male"} id="male" checked={isMale}  />
                <label htmlFor="male" className='pr-8 text-black font-medium' >Male</label>
                <input type="radio" name="gender" value={"Female"} id="female" checked={isFemale} />
                <label htmlFor="female" className='pr-8 text-black font-medium'>Female</label>
                <input type="radio" name="gender" value={"Unspecified"} id="unspecified" checked={isUnspecified} />
                <label htmlFor="unspecified" className='text-black font-medium'>Unspecified</label>
              </div>
            </div>
            <div className="flex space-x-7 items-center justify-center">
              <h5>Employee # * </h5>
              <input type="text" className="w-[200px] py-4 h-3 border-2 border-black text-right"
                onInput={(e) => validateInput(e.target, 'numbers')}
                onChange={(e) => setEmployeeNumber(Number(e.target.value))}
                value={employeeNumber}
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full space-y-4">
            <div className="flex space-x-10 w-[80%] items-center justify-between">
              <h5>Full name * </h5>
              <input type="text" className="w-full py-4 h-3 border-2 border-black"
              disabled
                value={fullName}
              />
            </div>
            <div className="flex  w-[80%] items-center justify-between">
              <h5>Gross Salary $PY</h5>
              <input type="string" className="w-full py-4 h-2 border-2 border-black text-right" 
                onInput={(e) => validateInput(e.target, 'numbers')}
                onChange={(e) => {
                  const numberValue = handleFormattedInput(e.target)
                  setGrossSalary(Number(numberValue));

                }}
                value={formatNumber(String(grossSalary))}
              />
            </div>
            <div className="flex space-x-9 items-center justify-center">
              <label htmlFor="cars">
                <h5>Salutation * </h5>
              </label>
              <select className='w-[200px] py-1 border-2 border-black' name="salutation" id="salutation" onChange={(e) => setSalutation(e.target.value as TSalutation) }>
                {salutationOptions.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  )
                )}
                
              </select>
            </div>
          </div>
         
        </div>
  );
};

export default EmployeeForm;
