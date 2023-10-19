import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24">
      <EmployeeList />
      <div className='flex flex-col w-full'>
        <div className='py-5 flex flex-col justify-center border  w-full p-2'>
          <div className="flex items-center justify-center">
            <h2 className='text-gray-800 font-bold p-5 text-center'>Employee Information</h2>
          </div>
          <EmployeeForm />
        </div>
      </div>
    </main>
  )
}
