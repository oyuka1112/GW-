// Create a variable called "fullName" that holds a string
var fullName = "John D";
// Create a variable called "country" that holds a string
var country = "US";
// Create a variable called "age" that holds an integer
var age = 22;
// Create a variable called "hourlyWage" that holds an integer
var hourly_wage = 15;
// Calculate the "dailyWage" for the user
var daily_wage = hourly_wage * 8 
// Create a variable that holds a number as a string
var weekly_hours = "40";
// Create a variable called 'weeklyWage' that converts a string into an integer
weekly_wage = hourly_wage * parseInt(weekly_hours);
// Create a variable called "satisfied" that holds a boolean
var satisfied = true;
// Print out "Hello <name>!"
console.log(`Hello ${fullName}!`)
//print(f" Hello, {fullName}!")
// Print out what country the user entered
console.log(`Country:  ${country}`)
// Print out the user's age
console.log(` You are ${age} years old`)
// Print out the daily wage that was calculated
console.log(`Your daily wage is ${daily_wage}`)
// Print out the weekly wage that was calculated
console.log(`Your weekly wage is ${weekly_wage}`)
// Using an IF statement to print out whether the users were satisfied
if (satisfied){
    console.log(`${fullName} is satisfied`)
}else{
    console.log(`${fullName} is not satisfied`)
}