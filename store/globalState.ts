import {create} from 'zustand';
import {  GlobalState } from '@/types';
import { CreatedEmployee} from '@/types/models'
import {toast} from 'react-toastify'

export const useGlobalState = create<GlobalState>((set) => ({
  selectedEmployee: null,
	handleSelectedEmployee: (employee: CreatedEmployee | null) => {
		set({selectedEmployee: employee})
	},
	addEmployeeCheck: false,
	handleEmployeeClick: () => {
		set({addEmployeeCheck: true})
		toast('Proceed with filling in the form now', {type: 'info'})
	}
}));

