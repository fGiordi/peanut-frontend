import { NextResponse } from "next/server";
import { server } from '../route';

interface IParams {
  id?: string
} 

export async function DELETE(req: Request, { params }: { params: IParams }) {
  try {
    const response = await server.delete(`employees/${params.id}`, {});
    if (response.status === 204) {
      NextResponse.json({})
    } else {
      console.error('Failed to delete employee');
      NextResponse.json({ error: 'Internal server error' });
    }
    return NextResponse.json({message: 'Delete', status: 'success'})
  } catch (error) {
    console.error('Error deleting employee:', error);
    return NextResponse.json({message: 'Delete', status: 'error'})
  }
}

export async function PUT(req: Request, { params }: { params: IParams }) {
  try {
    const { firstName, lastName, profileColor, grossSalary, salutation, gender, employeeNumber } = await req.json()

    const response = await server.put(`employees/${params.id}`, {
      firstName,
      lastName,
      profileColor,
      grossSalary,
      salutation,
      gender,
      employeeNumber
    });

    const updatedEmployee = response.data;

    return NextResponse.json(updatedEmployee)

  } catch (error) {
    // @ts-ignore
    console.error('Error updating employee:', error.message);
    // @ts-ignore
    return NextResponse.json({message: error.message})
  }
}
