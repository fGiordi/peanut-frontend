import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from "next/server";

export const server = axios.create({
  baseURL: 'https://fc1g67o1ej.execute-api.eu-north-1.amazonaws.com/prod/api/v1/',
});
 
export async function GET(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
    try {
      const response = await server.get('employees')
      return NextResponse.json({employees: response.data});
    } catch (error) {
      console.error('Error fetching employees:', error);
      // @ts-ignore
      res.status(500).json({ error: error.message });
    }
  }
}

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const body = await req.json()

    const { firstName, lastName, profileColor, grossSalary, salutation, gender,employeeNumber } = body;

    const response = await server.post(`employees`, {
      firstName,
      lastName,
      profileColor,
      grossSalary,
      salutation,
      gender,
      employeeNumber
    });

    const newEmployee = response.data;

    return NextResponse.json(newEmployee)
  } catch (error) {
    // @ts-ignore
    console.error('Error creating employee:', error.message);
    res.status(500).json({ error: 'Internal server error' });
    // @ts-ignore
    return NextResponse.json({error: error.message})
  }
}



