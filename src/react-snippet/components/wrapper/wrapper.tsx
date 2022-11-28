import React, { ReactElement } from 'react';
import { Counter } from '../counter/counter';
import styles from './wrapper.module.scss';
import { WrapperHeader } from './_header';

export const Wrapper = (): ReactElement => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper_content']}>
        <WrapperHeader />

        <Counter />
      </div>
    </div>
  );
};
