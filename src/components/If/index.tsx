import React from 'react';

interface IIf {
  children: React.ReactNode;
  test: boolean;
}

export const If = ({ children, test }: IIf) => {
  if (test) return children;
  return null;
};
