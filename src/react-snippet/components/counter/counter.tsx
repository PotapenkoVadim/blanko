import React, { ReactElement } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { incremented, decremented, reseted } from '../../store/counter-slice';
import { Button } from '../button/button';
import styles from './counter.module.scss';

export const Counter = (): ReactElement => {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  function handleIncrement(): void {
    dispatch(incremented());
  }

  function handleDecrement(): void {
    dispatch(decremented());
  }

  function handleReset(): void {
    dispatch(reseted());
  }

  return (
    <div className={styles['counter']}>
      <div className={styles['counter_title']}>Count is {value}</div>

      <div className={styles['counter_actions']}>
        <Button onClick={handleIncrement} color="white">
          Add
        </Button>

        <Button onClick={handleDecrement} color="white">
          Remove
        </Button>

        <Button onClick={handleReset} color="black">
          Reset
        </Button>
      </div>
    </div>
  );
};
