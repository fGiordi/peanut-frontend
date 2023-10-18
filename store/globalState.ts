import {create} from 'zustand';
import { CreatedEmployee, Employee, GlobalState } from '@/types';

export const useGlobalState = create<GlobalState>((set) => ({
  selectedEmployee: null,
	handleSelectedEmployee: (employee: CreatedEmployee | null) => {
		set({selectedEmployee: employee})
	}
}));

