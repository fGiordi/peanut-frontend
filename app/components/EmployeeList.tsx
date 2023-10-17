'use client'

import { useEmployeeStore } from '@/store/employee';
import { useEffect, useState } from 'react';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Employee } from '@/types';

type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
}

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
]

const columnHelper = createColumnHelper<Employee>()

const columns = [
  columnHelper.accessor('employeeNumber', {
    header: () => <span className='text-left bg-red-400'>Employee # </span>,
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.lastName, {
    id: 'firstName',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>First Name</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('lastName', {
    header: () => 'Last Name',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('visits', {
    header: () => <span>Visits</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('progress', {
    header: 'Profile Progress',
    footer: info => info.column.id,
  }),
]

const EmployeeList = () => {
	const {  data: employees, loading, error, fetchData } = useEmployeeStore();
	console.log('data', employees)


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

  const [data, setData] = useState(() => [...defaultData])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="w-full">
      <table className='w-full border'>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className='border'>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className=''>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className='border'>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        
      </table>
      <div className="h-4" />
    </div>
  )
};

export default EmployeeList;



