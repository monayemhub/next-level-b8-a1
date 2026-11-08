const multiplyValue = (value: number, multiplier?: number) => {
  if (typeof multiplier !== 'undefined') {
    return value * multiplier;
  }

  return value * 2;
};
