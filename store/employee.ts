import axios from 'axios';
import {create} from 'zustand';
import { DataStoreState } from '@/types';
import {Employee, CreatedEmployee} from '@/types/models'
import {toast} from 'react-toastify'


export const useEmployeeStore = create<DataStoreState>((set) => ({
  data: [],
  loading: false,
  error: null,
  selectedEmployee: null,
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
      toast('Employee Updated', {type: 'success'})
      set((state) => ({
        data: state.data.map((employee) =>
          employee._id === employeeId ? response.data : employee
        ),
        loading: false,
      }));
    } catch (error) {
			// @ts-ignore
      console.log('error', error.message)
      set({ error, loading: false });
      toast('Unable up update', {type: 'error'})
    }
  },
  // Delete an employee
  deleteEmployee: async (employeeId: string): Promise<void> => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`/api/employees/${employeeId}`);
      toast('Employee Removed', {type: 'success'})

      set((state) => ({
        data: state.data.filter((employee) => employee._id !== employeeId),
        loading: false,
      }));
    } catch (error) {
			// @ts-ignore
      set({ error, loading: false });
      // @ts-ignore
      console.log('error', error.message)
      // @ts-ignore
      toast('Error Removing Employee', {type: 'error'})

    }
  },
}));

