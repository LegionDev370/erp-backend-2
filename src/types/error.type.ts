export interface IERROR {
  status_code: number;
  status: boolean;
  error: {
    message: string;
    details: any;
  };
}
