import { useContext } from 'react';
import { IEmployeeContext } from '../interfaces';
import { EmployeeContext } from '../provider';

export function useEmployee(): IEmployeeContext {
  const context = useContext(EmployeeContext);

  if (!context) {
    throw new Error('useEmployee must be used within a EmployeeProvider');
  }

  return context;
}
