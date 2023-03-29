import { ITimeRegister } from 'interfaces';

export interface ICurrentHours {
  startDateTime: string;
  endDateTime: string | null;
}

export interface IEmployeeContext {
  code: string;
  currentHours: ICurrentHours | null;
  getCurrentHours: (code: string) => void;
  beforeDays: ITimeRegister[];
  isLoading: boolean;
  isError: boolean;
  error: string;
  getBeforeDays: (code: string) => void;
  startTimeRegister: (code: string) => void;
  endTimeRegister: (code: string) => void;
}

export interface IAxiosResponse<T> {
  result: T;
}
