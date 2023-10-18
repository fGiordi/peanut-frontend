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


const columnHelper = createColumnHelper<Employee>()

const columns = [
  columnHelper.accessor('employeeNumber', {
    header: () => <span className='text-left '>Employee # </span>,
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('firstName', {
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>First Name</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('lastName', {
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('salutation', {
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Salutation</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('profileColor', {
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Profile Color</span>,
    footer: info => info.column.id,
  }),
]

const EmployeeList = () => {
	const {  data: employees, loading, error, fetchData } = useEmployeeStore();

	useEffect(() => {
    fetchData();
  }, []);

  const [data, setData] = useState(() => [...employees])

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
        <tbody className='border'>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className='border'>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className='border hover:cursor-pointer'>
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



