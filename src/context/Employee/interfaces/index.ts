import { ITimeRegister } from 'interfaces';

export interface IEmployeeContext {
  beforeDays: ITimeRegister[];
  isLoading: boolean;
  isError: boolean;
  error: string;
  getBeforeDays: (code: string) => void;
}

export interface IAxiosResponse {
  result: ITimeRegister[];
}
