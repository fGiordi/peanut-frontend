'use client'

import { useEffect, useState } from 'react';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await fetch('api/employees')
				console.log('response', response)
        if (response.ok) {
          const data = await response.json();
          setEmployees(data);
        } else {
          console.error('Failed to fetch data from the API');
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }

    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {/* {employees.map((employee) => (
          <li key={employee.id}>{employee.name}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default EmployeeList;
