// Types
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Explicit data type
var message = "hello";
console.log(message);
// Implicit data type
var message1 = "hello";
console.log(message1);
// Function
function getNumber() {
    return 1;
}
console.log(getNumber());
var a = 1, b = 2;
function getAddition(a, b) {
    return a + b;
}
console.log(getAddition(a, b));
// Class
var Person = /** @class */ (function () {
    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Person.prototype.getFullName = function () {
        return this.firstname + " " + this.lastname;
    };
    Person.prototype.displayFullName = function () {
        console.log("Full Name is : " + this.getFullName());
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstname, lastname, studentID) {
        var _this = _super.call(this, firstname, lastname) || this;
        _this.studentID = studentID;
        return _this;
    }
    Student.prototype.getStudentID = function () {
        return this.studentID;
    };
    Student.prototype.showData = function () {
        _super.prototype.displayFullName.call(this);
        console.log("Student ID : " + this.studentID);
    };
    return Student;
}(Person));
var stud1 = new Student("A", "B", 1);
stud1.showData();
