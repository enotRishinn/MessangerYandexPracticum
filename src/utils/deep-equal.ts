import type { TProps } from '../types/common';

export function deepEqual(obj1: TProps, obj2: TProps): boolean {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return obj1 === obj2;
  }

  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) {
      return false;
    }
    for (let i = 0; i < obj1.length; i++) {
      if (!deepEqual(obj1[i], obj2[i])) {
        return false;
      }
    }
    return true;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key] as TProps, obj2[key] as TProps)) {
      return false;
    }
  }

  return true;
}
