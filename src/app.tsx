import React, { ReactElement } from 'react';

export const App = (): ReactElement => {
  return (
    <h1
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        color: 'green',
        zIndex: 999,
      }}
    >
      Hello React App!
    </h1>
  );
};
