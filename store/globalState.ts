import {create} from 'zustand';
import { Employee, GlobalState } from '@/types';
import {toast} from 'react-toastify'

export const useGlobalState = create<GlobalState>((set) => ({
  selectedEmployee: null,
	handleSelectedEmployee: (employee: Employee | null) => {
		set({selectedEmployee: employee})
	}
}));

