import React, { ReactElement, ReactNode } from 'react';
import { ButtonColor } from '../../../types';

export const Button = ({
  children,
  onClick,
  color,
}: {
  children: ReactNode;
  onClick: () => void;
  color: ButtonColor;
}): ReactElement => {
  return (
    <button onClick={onClick} className={`button button_${color}`}>
      {children}
    </button>
  );
};
