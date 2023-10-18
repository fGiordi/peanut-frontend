import axios from 'axios';
import {create} from 'zustand';
import { Employee } from '@/types';
import {toast} from 'react-toastify'

interface DataStoreState {
  data: Employee[];
  loading: boolean;
  error: Error | null;
  createEmployee: (employee: Employee) => Promise<void>
  fetchData: () => Promise<void>
}

export const useEmployeeStore = create<DataStoreState>((set) => ({
  data: [],
  loading: false,
  error: null,
  // Fetch all employees
  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get<Employee[]>('/api/employees')
			// @ts-ignore
			const result = response.data.employees
      set({ data: result.employees, loading: false });
    } catch (error) {
			// @ts-ignore
      set({ error, loading: false });
    }
  },
  // Create a new employee
  createEmployee: async (employeeData: Employee): Promise<void> => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post<Employee>('/api/employees', employeeData);
      toast('Employee Created', {type: 'success'})
      set((state) => ({ data: [...state.data, response.data], loading: false }));
    } catch (error) {
			// @ts-ignore
      set({ error, loading: false });
      toast('Error on creating employee', {type: 'error'})
    }
  },
  // Update an existing employee
  updateEmployee: async (employeeId: string, updatedData: Employee) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.put<Employee>(`/api/employees/${employeeId}`, updatedData);
      set((state) => ({
        data: state.data.map((employee) =>
          employee.id === employeeId ? response.data : employee
        ),
        loading: false,
      }));
    } catch (error) {
			// @ts-ignore
      set({ error, loading: false });
    }
  },
  // Delete an employee
  deleteEmployee: async (employeeId: string) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`/api/employees/${employeeId}`);
      set((state) => ({
        data: state.data.filter((employee) => employee.id !== employeeId),
        loading: false,
      }));
    } catch (error) {
			// @ts-ignore
      set({ error, loading: false });
    }
  },
}));

