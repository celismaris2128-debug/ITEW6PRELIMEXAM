const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchStudents = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch student data');
    }
    const data = await response.json();
    
    // Mapping JSONPlaceholder data to Student structure
    return data.map(user => ({
      id: user.id,
      name: user.name,
      course: user.company.bs.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '), // Mocking a course name
      yearLevel: `${(user.id % 4) + 1}${getOrdinal((user.id % 4) + 1)} Year`
    }));
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

const getOrdinal = (n) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
};

export const fetchStudentById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Student not found');
    }
    const user = await response.json();
    return {
      id: user.id,
      name: user.name,
      course: user.company.bs,
      yearLevel: `${(user.id % 4) + 1} Year`
    };
  } catch (error) {
    console.error('Error fetching student:', error);
    throw error;
  }
};