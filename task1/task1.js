// Question 1:
// You are given an object book with the properties title, author, and yearPublished. Perform the following operations:
// 1.	Access the author property and print it.
// 2.	Modify the yearPublished property to 2022.
// 3.	Add a new property genre to the book object with the value “Fiction”.
// 4.	Delete the title property from the book object.
var obj={
    "title":"harry potter",
    "author":"r.k.jowling",
    "yearpublished":"1997",
}
console.log(obj);
console.log(obj.author);
obj['yearpublished']="2022";
console.log(obj);
obj['book']="fictional";
console.log(obj);
delete obj.title;
console.log(obj);
// Question 2:
// You are given an object employee with the properties name, age, position, and salary. Perform the following operations:
// 1.	Access the position property and print it.
// 2.	Modify the salary property to 50000.
// 3.	Add a new property department to the employee object with the value “HR”.
// 4.	Delete the age property from the employee object.

var employee={
    "name":"pawan",
    "age":"40",
    "position":"manager",
    "salary":"70k",

}
console.log(employee);
console.log(employee.position);
employee ['position']="1L";
console.log(employee);
employee['new employee']="HR";
console.log(employee);
delete employee.age;
console.log(employee);
// Question 3:
// You are given an object product with the properties id, name, price, and category. Perform the following operations:
// 1.	Access the price property and print it.
// 2.	Modify the category property to “Electronics”.
// 3.	Add a new property inStock to the product object with the value true.
// 4.	Delete the id property from the product object.
var product={
    "id":"202",
    "name":"vivo",
    "price":"20k",
    "category":"mobile",
}
console.log(product);
console.log(product.price);
product ['category']= "electronics";
console.log(product);
product['instock']="true";
console.log(product);
delete product.id;
console.log(product);
// Question 4:
// You are given an object car with the properties make, model, year, and color. Perform the following operations:
// 1.	Access the make property and print it.
// 2.	Modify the color property to “Black”.
// 3.	Add a new property engineType to the car object with the value “V6”.
// 4.	Delete the year property from the car object.
var car={
    "make":"metal",
    "model":"thor",
    "year":"2020",
    "color":"black"
}
console.log(car);
console.log(car.make);
car['color']="Black";
console.log(car);
car['enginetype']="v6";
console.log(car);
delete car.year;
console.log(car);
// Question 5:
// You are given an object student with the properties name, age, grade, and school. Perform the following operations:
// 1.	Access the school property and print it.
// 2.	Modify the grade property to 95.
// 3.	Add a new property hobbies to the student object with the value ["reading", "sports"].
// 4.	Delete the age property from the student object.
var student={
    "name":"Afreen",
    "age":"16",
    "grade":"100",
    "school":"sri krishnaveni high school",
}
console.log(student);
console.log(student.school);
student['grade']= "95";
console.log(student);
student['hobbies']="reading,sports";
console.log(student);
delete student.age;
console.log(student);
// Question 6:
// You are given an object user with the following structure:
const user = {
  username: "john_doe",
  profile: {
    firstName: "John",
    lastName: "Doe",
    age: 28,
    address: {
      street: "456 Elm St",
      city: "Gotham",
      zip: "54321"
    }
  },
  preferences: {
    theme: "dark",
    notifications: true
  }
};
// Perform the following operations:
// 1.	Access the city property from the address object and print it.
// 2.	Modify the theme property in the preferences object to “light”.
// 3.	Add a new property phone to the profile object with the value “555-9876”.
// 4.	Delete the zip property from the address object.
console.log(user);
console.log(user. profile.address.city);
user['theme']="light";
console.log(user);
user.profile.phone="555-9876";
console.log(user);
delete user.profile.address.zip;
console.log(user);
// Question 7:
// You are given an object company with the following structure:
const company = {
  name: "Tech Solutions",
  employees: [
    {
      name: "Alice",
      position: "Developer",
      contact: {
        email: "alice@tech.com",
        phone: "555-2345"
      }
    },
    {
      name: "Bob",
      position: "Manager",
      contact: {
        email: "bob@tech.com",
        phone: "555-6789"
      }
    }
  ],
  location: "New York"
};
// Perform the following operations:
// 1.	Access the email of the second employee (Bob) and print it.
// 2.	Modify the phone number of Alice to “555-1111”.
// 3.	Add a new property department with the value “Engineering” to the first employee (Alice).
// 4.	Delete the location property from the company object.
console.log(company.employees[1].contact.email);
company.employees[0].contact.phone="555-1111";
company.employees[0].department="Engineering";
delete company.location;
console.log(company);