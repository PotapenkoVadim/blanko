import React, { ReactElement } from 'react';
import { IconColor } from '../../../types';
import { IconVariant } from '../../../enums';

export const Icon = ({
  variant,
  color,
}: {
  variant: IconVariant;
  color: IconColor;
}): ReactElement => {
  return <span className={`icon icon__${variant} icon_${color}`} />;
};
