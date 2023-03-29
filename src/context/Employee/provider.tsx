import React, { createContext, useState } from 'react';
import { IAxiosResponse, IEmployeeContext } from './interfaces';
import instance from 'services';
import { ITimeRegister } from 'interfaces';
import { isAxiosError } from 'axios';

export const EmployeeContext = createContext<IEmployeeContext>(
  {} as IEmployeeContext
);
interface IEmployeeProvider {
  children: React.ReactNode;
}
export const EmployeeProvider = ({ children }: IEmployeeProvider) => {
  const [beforeDays, setBeforeDays] = useState<ITimeRegister[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('Ocorreu um erro inesperado');

  const getBeforeDays = async (code: string) => {
    try {
      setIsLoading(true);
      const response = await instance.get<IAxiosResponse>(
        `/time-register/${code}`
      );
      setBeforeDays(response.data.result);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      if (isAxiosError(error)) {
        setIsLoading(false);
        setError(error.message);
      }
    }
  };

  return (
    <EmployeeContext.Provider
      value={{ beforeDays, isLoading, isError, error, getBeforeDays }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
