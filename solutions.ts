const multiplyValue = (value: number, multiplier?: number) => {
  if (typeof multiplier !== 'undefined') {
    return value * multiplier;
  }

  return value * 2;
};

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === 'string') {
    return value.trim().toLowerCase();
  }

  if (typeof value === 'number') {
    return value * 10;
  }

  return value ? 'Active' : 'Inactive';
};
