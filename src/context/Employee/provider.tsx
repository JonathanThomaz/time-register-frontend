import React, { createContext, useState } from 'react';
import { IAxiosResponse, ICurrentHours, IEmployeeContext } from './interfaces';
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
  const [code, setCode] = useState('');
  const [currentHours, setCurrentHours] = useState<ICurrentHours | null>(null);
  const [beforeDays, setBeforeDays] = useState<ITimeRegister[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('Ocorreu um erro inesperado');

  const getBeforeDays = async (code: string) => {
    try {
      setIsLoading(true);
      const response = await instance.get<IAxiosResponse<ITimeRegister[]>>(
        `/time-register/${code}`
      );
      setBeforeDays(response.data.result);
      setCode(code);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      if (isAxiosError(error)) {
        setIsLoading(false);
        setError(error.message);
      }
    }
  };
  const getCurrentHours = async (code: string) => {
    try {
      setIsLoading(true);
      const response = await instance.get<IAxiosResponse<ICurrentHours>>(
        `/time-register/${code}/current`
      );
      setCurrentHours(response.data.result);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      if (isAxiosError(error)) {
        setIsLoading(false);
        setError(error.message);
      }
    }
  };

  const startTimeRegister = async (code: string) => {
    try {
      setIsLoading(true);
      const response = await instance.post<IAxiosResponse<ICurrentHours>>(
        `/time-register/${code}/start`,
        {
          dateTime: new Date().toISOString()
        }
      );
      setCurrentHours(response.data.result);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      if (isAxiosError(error)) {
        setIsLoading(false);
        setError(error.message);
      }
    }
  };
  const endTimeRegister = async (code: string) => {
    try {
      setIsLoading(true);
      const response = await instance.post<IAxiosResponse<ICurrentHours>>(
        `/time-register/${code}/end`,
        {
          dateTime: new Date().toISOString()
        }
      );
      setCurrentHours(response.data.result);
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
      value={{
        code,
        currentHours,
        getCurrentHours,
        beforeDays,
        isLoading,
        isError,
        error,
        getBeforeDays,
        startTimeRegister,
        endTimeRegister
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
