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
      throw new Error('Invalid ID');
    }
    return NextResponse.json({message: 'Delete', status: 'success'})
  } catch (error) {
    console.error('Error deleting employee:', error);
    return NextResponse.json({message: 'Delete', status: 'error'})
  }
}