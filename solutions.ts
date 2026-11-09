const multiplyValue = (value: number, multiplier?: number): number => {
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

const formatCoordinate = (
  location: readonly [number, number, string],
): string => {
  return `Location: ${location[2]} (${location[0]}, ${location[1]})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const combinedArray: T[] = [];

  arrays.forEach((array) => {
    array.forEach((element) => combinedArray.push(element));
  });

  return combinedArray;
};
