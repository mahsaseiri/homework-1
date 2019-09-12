var hotel = { color: "white", floor: 20, height: 300, owner: "mahsa", star: 3, state: true };
var value = "true";
var property_name = prompt("enter the name of property to see value");
var answer = prompt("the value of " + property_name + " is " + hotel[property_name] + "  do you want to update this?(yes or no)");
(answer == "yes" && typeof hotel[property_name] == "number") ? hotel[property_name] = Number(prompt("enter the new value")): (answer == "yes" && typeof hotel[property_name] == "string") ? hotel[property_name] = prompt("enter the new value") : (answer == "yes" && typeof hotel[property_name] == "boolean") ? hotel[property_name] = (value == prompt("enter the new value")) : false;

console.log(hotel);