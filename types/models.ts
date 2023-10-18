import { TSalutation, TGender, TColor } from ".";

export interface Employee {
  firstName: string;
  lastName: string;
  salutation: TSalutation;
  gender: TGender;
  employeeNumber: number;
  grossSalary: number;
  profileColor: TColor
}

export interface CreatedEmployee extends Employee {
  _id: string
}