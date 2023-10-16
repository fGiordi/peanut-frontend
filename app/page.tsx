import EmployeeList from "./components/EmployeeList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* TABLE will go here */}
    <EmployeeList/>
      <div className='flex flex-col w-full'>
        <div className='p-5 flex items-center justify-center'>
          <h2 className='text-gray-800 font-bold'>Employee Information</h2>
        </div>
      </div>
    </main>
  )
}
