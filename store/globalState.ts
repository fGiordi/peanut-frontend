import {create} from 'zustand';
import {  GlobalState } from '@/types';
import {Employee, CreatedEmployee} from '@/types/models'

export const useGlobalState = create<GlobalState>((set) => ({
  selectedEmployee: null,
	handleSelectedEmployee: (employee: CreatedEmployee | null) => {
		set({selectedEmployee: employee})
	},
	addEmployeeCheck: false,
	handleEmployeeClick: () => {
		set({addEmployeeCheck: true})
	}
}));

