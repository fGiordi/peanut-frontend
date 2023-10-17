import EmployeeList from "./components/EmployeeList";
import {validateInput} from '../helpers'
import EmployeeForm from "./components/EmployeeForm";

export default function Home() {


  return (
    <main className="flex flex-col items-center justify-center p-24">
      {/* TABLE will go here */}
    <EmployeeList/>
      <div className='flex flex-col w-full'>
        <div className='py-5 flex flex-col justify-center border-2 border-black w-full p-2'>
          <div className="flex items-center justify-center">
          <h2 className='text-gray-800 font-bold p-5 text-center'>Employee Information</h2>

          </div>
          <div className="px-5 flex justify-end space-x-6 max-w-[1000px] mb-6">
            <button className="text-center px-3 text-[16px] text-black rounded-md bg-gray-200">Cancel</button>
            {/* TODO to change color of Save button based on selected color from DB */}
            <button className="text-center px-3 text-[16px] text-white rounded-md bg-blue-500">Save</button>
          </div>
          <EmployeeForm/>
        </div>
      </div>
    </main>
  )
}
