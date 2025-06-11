import { isUndefined } from 'lodash';

export const numberWithCommas = (x: any, digit?: number) => {
  return !isUndefined(x)
    ? new Intl.NumberFormat('en-US', {
        maximumFractionDigits: digit ?? 2,
      }).format(Number(x))
    : 0;
};
