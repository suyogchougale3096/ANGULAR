// Types

// Explicit data type
let message: string = "hello";
console.log(message);

// Implicit data type
let message1 = "hello";
console.log(message1);

// Function

function getNumber(): number {
  return 1;
}

console.log(getNumber());

let a = 1,
  b = 2;
function getAddition(a: number, b: number) {
  return a + b;
}

console.log(getAddition(a, b));

// Class

class Person {
  public firstname: string;
  public lastname: string;

  constructor(firstname: string, lastname: string) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  private getFullName(): string {
    return this.firstname + " " + this.lastname;
  }

  protected displayFullName(): void {
    console.log("Full Name is : " + this.getFullName());
  }
}

class Student extends Person {
  private studentID: number;

  constructor(firstname: string, lastname: string, studentID: number) {
    super(firstname, lastname);
    this.studentID = studentID;
  }

  private getStudentID(): number {
    return this.studentID;
  }

  public showData(): void {
    super.displayFullName();
    console.log("Student ID : " + this.studentID);
  }
}

const stud1 = new Student("A", "B", 1);
stud1.showData();

// Steps
// 1. tsc EXP1.ts
// 2. node EXP1.js
