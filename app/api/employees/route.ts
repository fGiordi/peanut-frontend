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

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;

    const response = await server.delete(`employees/${id}`, {});

    if (response.status === 204) {
      NextResponse.json({})
    } else {
      console.error('Failed to delete employee');
      res.status(500).json({ error: 'Internal server error' });
    }
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { firstName, lastName, profileColor, grossSalary, salutation, gender } = req.body;

    const response = await server.put(`employees`, {
      firstName,
      lastName,
      profileColor,
      grossSalary,
      salutation,
      gender,
    });

    const newEmployee = response.data;

    res.status(200).json(newEmployee);
  } catch (error) {
    console.error('Error creating employee:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}



