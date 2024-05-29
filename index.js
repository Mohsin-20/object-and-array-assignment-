var people = {
    friends: []
};
///     02 
var friend1;
var friend2;
var friend3;
// no 3
people.friends.push();
// no 04
console.log(people);
//           //    ASSIGNMNT 02
//     scrambledarray
var scrambledarrray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
//    modify array
var rearrangearray = [];
rearrangearray.push(scrambledarrray[7]);
rearrangearray.push(scrambledarrray[4]);
rearrangearray.push(scrambledarrray[5]);
rearrangearray.push(scrambledarrray[0]);
rearrangearray.push(scrambledarrray[1]);
rearrangearray.push(scrambledarrray[6]);
///      output the result
console.log(rearrangearray.join(''));
///    ASSIGGHMENT 03
///  no 1  array define
var inventory = [];
// no 2  create three product
var product1 = {
    name: "bike",
    model: "honda cdi 2024",
    price: 140000,
    quantity: 10
};
var product2 = {
    name: "car",
    model: "honda civic 2022",
    price: 7000000,
    quantity: 2
};
var product3 = {
    name: "bike",
    model: "Unique 2024",
    price: 95000,
    quantity: 15
};
/// NO 3 add product object to inventory array
inventory.push(product1, product2, product3);
//   NO 4 accees quantity property 
console.log(inventory[2].quantity);
//  NO 5 access more property 
console.log(inventory[0].price);
console.log(inventory[1].model);
// STUDENT    LIST
var students = [
    {
        name: "ali",
        seniorstudent: false,
        completeassignment: true
    },
    {
        name: "rizwan",
        seniorstudent: true,
        completeassignment: false
    },
    { name: "hasnain",
        seniorstudent: false,
        completeassignment: false
    }
];
console.log(students);
