import { CreatedEmployee, Employee } from "./models";

export type TSalutation = 'Mr.' | 'Dr.' | 'Ms.' | 'Mrs.' | 'Mx.';
export type TGender = 'Male' | 'Female' | 'Unspecified';
export type TColor = 'Green' | 'Blue' | 'Red' | 'Default';

export const genderOptions = ['Male', 'Female', 'Unspecified'] as const
export const salutationOptions = ['Mr.', 'Dr.', 'Ms.', 'Mrs.', 'Mx.'] as const
export const colorOptions = ['Green', 'Blue', 'Red', 'Default']

export interface DataStoreState {
  data: Employee[] | CreatedEmployee[];
  loading: boolean;
  error: Error | null;
  createEmployee: (employee: Employee) => Promise<void>
  fetchData: () => void
  selectedEmployee: null  | Employee
  deleteEmployee: (employeeId: string) => Promise<void>
  updateEmployee: (employeeId: string, data: Employee) => Promise<void>
}

export interface GlobalState {
	selectedEmployee: null | CreatedEmployee
  handleSelectedEmployee: (employee: CreatedEmployee | null) => void
  addEmployeeCheck: boolean
  handleEmployeeClick: () => void
}