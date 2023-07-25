let students = [
  {
    name: Rohit,
    rollnumber: 24,
    marks: 54,
  },
  {
    name: Vikas,
    rollnumber: 34,
    marks: 65,
  },
  {
    name: rummy,
    rollnumber: 84,
    marks: 76,
  },
  {
    name: sweety,
    rollnumber: 94,
    marks: 55,
  },
  {
    name: taran,
    rollnumber: 14,
    marks: 98,
  },
];

let names = [];

//Using for loop

for (i = 0; i < students.length; i++) {
  names.push(students[i].name.toUpperCase());
}

console.log(names);

// using map

const Names = students.map((e) => e.name.toUpperCase());
console.log(Names);

// print info of those students who has marks more than 60 and roll no. greator than 60

const details = students.filter((e) => e.marks > 60 && e.rollnumber > 60);
console.log(details);

// calculate the sum of all the marks obtained by students

const sum = students.reduce((acc, curr) => acc + curr.marks, 0);
console.log(sum);

// print only the names of students who score marks more than 60

const stu = students.filter((e) => e.marks > 60).map((e) => e.name);
console.log(stu);

// Return totala marks of students with marks greator than 60 after 20 marks added to those who scored less than 60

const totalMarks = students
  .map((e) => {
    if (e.marks < 60) {
      e.marks = e.marks + 20;
    }
    return e;
  })
  .filter((e) => e.marks > 60)
  .reduce((acc, curr) => acc + curr.marks, 0);

console.log(totalMarks);
