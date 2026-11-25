export type EmployeeRole =
  | "SUPER_ADMIN"
  | "BRANCH_MANAGER"
  | "ADMIN"
  | "SALES_MANAGER"
  | "TEACHER"
  | "ASSISTANT"
  | "ACCOUNTANT";

export type EmployeeSalaryType = "FIXED" | "PERCENTAGE" | "PER_HOUR" | "HYBRID";

export type EmployeeStatus = "ACTIVE" | "BLOCKED";

export interface IEmployee {
  fullName: string;
  phone: string;
  email?: string | null;
  avatarUrl?: string | null;
  role: EmployeeRole;
  position: string;
  specialization: string | null;
  bio?: string | null;
  hireDate: string;
  salaryType: EmployeeSalaryType;
  baseSalary: string;
  percentageRate: string;
}
