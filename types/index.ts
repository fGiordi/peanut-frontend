export type TSalutation = 'Mr.' | 'Dr.' | 'Ms.' | 'Mrs.' | 'Mx.';
export type TGender = 'Male' | 'Female' | 'Unspecified';
export type TColor = 'Green' | 'Blue' | 'Red' | 'Default';

export const genderOptions = ['Male', 'Female', 'Unspecified'] as const
export const salutationOptions = ['Mr.', 'Dr.', 'Ms.', 'Mrs.', 'Mx.'] as const
export const colorOptions = ['Green', 'Blue', 'Red', 'Default']

export interface Employee {
  firstName: string;
  lastName: string;
  salutation: TSalutation;
  gender: TGender;
  employeeNumber: number;
  grossSalary: number;
  profileColor: TColor
}