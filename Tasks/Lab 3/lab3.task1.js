
class Person {
  constructor(name = "Unknown", age = 0, address = "Not Provided") {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
  }
}



class Student extends Person {
  constructor(name, age, address, studentID) {
    super(name, age, address);
    this.studentID = studentID;
    this.courses = [];
  }

  enrollCourse(course) {
    this.courses.push(course);
  }

  getStudentInfo() {
    return `${this.getDetails()}, Student ID: ${this.studentID}, Courses: ${this.courses.map(c => c.courseName).join(", ")
      }`;
  }
}



class Employee extends Person {
  constructor(name, age, address, department, designation, salary) {
    super(name, age, address);
    this.department = department;
    this.designation = designation;
    this.salary = salary;
  }

  getEmployeeInfo() {
    return `${this.getDetails()}, Department: ${this.department}, Designation: ${this.designation}, Salary: $${this.salary}`;
  }
}



class Teacher extends Employee {
  constructor(name, age, address, department, salary, subject) {
    super(name, age, address, department, "Teacher", salary);
    this.subject = subject;
    this.courses = [];
  }

  assignCourse(course) {
    this.courses.push(course);
  }

  getTeacherInfo() {
    return `${this.getEmployeeInfo()}, Subject: ${this.subject}, Courses: ${this.courses.map(c => c.courseName).join(", ")
      }`;
  }
}


// =======================
// Staff Class
// =======================
class Staff extends Employee {
  constructor(name, age, address, department, salary, role) {
    super(name, age, address, department, "Staff", salary);
    this.role = role;
  }

  getStaffInfo() {
    return `${this.getEmployeeInfo()}, Role: ${this.role}`;
  }
}



class Course {
  constructor(courseName, courseCode) {
    this.courseName = courseName;
    this.courseCode = courseCode;
  }

  getCourseInfo() {
    return `Course: ${this.courseName}, Code: ${this.courseCode}`;
  }
}


// =======================
// Testing
// =======================

// Create Courses
const js = new Course("JavaScript", "JS101");
const react = new Course("ReactJS", "REACT201");

// Create Student
const student1 = new Student("Ali", 21, "Lahore", "S1001");
student1.enrollCourse(js);
student1.enrollCourse(react);

// Create Teacher
const teacher1 = new Teacher("Sir Ahmed", 40, "Karachi", "Computer Science", 80000, "Programming");
teacher1.assignCourse(js);

// Create Staff
const staff1 = new Staff("Usman", 35, "Islamabad", "Administration", 50000, "Clerk");

// Display Output
console.log(student1.getStudentInfo());
console.log(teacher1.getTeacherInfo());
console.log(staff1.getStaffInfo());
