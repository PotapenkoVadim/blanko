import React, { ReactElement } from 'react';
import { IconVariant } from '../../../enums';
import { Icon } from '../icon/icon';
import styles from './wrapper.module.scss';

export const WrapperHeader = (): ReactElement => {
  return (
    <div className={styles['wrapper_header']}>
      <Icon variant={IconVariant.ATTENTION} color="white" />

      <h3 className={styles['wrapper_title']}>Example React App</h3>
    </div>
  );
};
