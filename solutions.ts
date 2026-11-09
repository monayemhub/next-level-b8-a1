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

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  const newCourses = courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );

  return newCourses;
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  const pluckedValues = items.map((item) => item[key]);

  return pluckedValues;
};

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails() {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo() {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  const accessPromise = new Promise<string>((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => resolve('Access Granted'), 1000);
    } else {
      reject(new Error('Access Denied: Must be 18 or older'));
    }
  });

  try {
    return await accessPromise;
  } catch (error) {
    return error instanceof Error
      ? `Error: ${error.message}`
      : 'Error: Access Denied: Must be 18 or older';
  }
};
