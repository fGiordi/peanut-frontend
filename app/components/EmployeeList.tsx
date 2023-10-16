'use client'

import { useEmployeeStore } from '@/store/employee';
import { useEffect, useState } from 'react';

const EmployeeList = () => {
	const { data, loading, error, fetchData } = useEmployeeStore();
	console.log('data', data)


  // useEffect(() => {
  //   async function fetchEmployees() {
  //     try {
  //       const response = await fetch('api/employees')
	// 			console.log('response', response)
  //       if (response.ok) {
  //         const data = await response.json();
  //         setEmployees(data);
  //       } else {
  //         console.error('Failed to fetch data from the API');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error.message);
  //     }
  //   }

  //   fetchEmployees();
  // }, []);
	useEffect(() => {
    fetchData();
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
