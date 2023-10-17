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
          
          <EmployeeForm/>
        </div>
      </div>
    </main>
  )
}
