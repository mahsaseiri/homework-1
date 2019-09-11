var hotel = { color: "white", floor: 20, height: 300, owner: "mahsa", star: 3 };
var property_name = prompt("enter the name of property to see value");
console.log(hotel[property_name]);
var answer = prompt("the value of " + property_name + " is " + hotel[property_name] + "  do you want to update this?(yes or no)");
(answer == "yes" && typeof hotel[property_name] == "number") ? hotel[property_name] = Number(prompt("enter the new value")): (answer == "yes" && typeof hotel[property_name] == "string") ? hotel[property_name] = prompt("enter the new value") : (answer == "yes" && typeof hotel[property_name] == "boolean") ? hotel[property_name] = Boolean(prompt("enter the new value")) : console.log("object did not change!");

console.log(hotel);