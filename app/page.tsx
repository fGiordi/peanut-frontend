import EmployeeList from "./components/EmployeeList";

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
          <div className="px-5 flex justify-end space-x-6 max-w-[700px] mb-6">
            <button className="text-center px-3 text-[16px] text-black rounded-md bg-gray-200">Cancel</button>
            {/* TODO to change color of Save button based on selected color from DB */}
            <button className="text-center px-3 text-[16px] text-white rounded-md bg-blue-500">Save</button>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-start justify-start w-full space-y-4">
              <div className="flex space-x-2 items-center justify-center">
                <h5>First Name(s) * </h5>
                <input type="text" className="w-[200px] py-4 h-3 border-2 border-black" />
              </div>
              <div className="flex space-x-7 items-center justify-center">
                <h5>Last Name * </h5>
                <input type="text" className="w-[200px] py-4 h-2 border-2 border-black" />
              </div>
              <div className="flex space-x-9 items-center justify-center">
                <h5>Salutation * </h5>
                <input type="text" className="w-[200px] py-4 h-3 border-2 border-black" />
              </div>
              <div className="flex gap-16 items-center justify-center">
                <h5>Gender</h5>
                <input type="text" className="w-[200px] py-4 h-3 border-2 border-black" />
                <input type="radio" name="gender"  />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full space-y-4">
              <div className="flex space-x-2 items-center justify-center">
                <h5>Gender  </h5>
                <input type="text" className="w-[200px] py-4 h-3 border-2 border-black" />
              </div>
            </div>  
          </div>
        </div>
      </div>
    </main>
  )
}
