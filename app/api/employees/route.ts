import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from "next/server";

export const server = axios.create({
  baseURL: 'http://localhost:8080/api/v1/',
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

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const { firstName, lastName, profileColor, grossSalary, salutation, gender } = req.body;

    const response = await server.put(`employees/${id}`, {
      firstName,
      lastName,
      profileColor,
      grossSalary,
      salutation,
      gender,
    });

    const updatedEmployee = response.data;

    res.status(200).json(updatedEmployee);
  } catch (error) {
    console.error('Error updating employee:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function POST(req: any, res: NextApiResponse) {
  try {
    // Next API request missing .json()
    // so typescript throws an error
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



