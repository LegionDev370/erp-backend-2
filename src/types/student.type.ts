export type StudentGender = "male" | "female";

export type StudentStatus =
  "NEW" | "ACTIVE" | "FROZEN" | "GRADUATED" | "DROPPED";

export interface IStudent {
  fullName: string;
  phoneNumber: string;
  email?: string;
  avatar_url?: string;
  birth_date?: Date;
  gender: StudentGender;
  address: string;
  status: StudentStatus;
  balance?: number;
  notes?: string;
}
