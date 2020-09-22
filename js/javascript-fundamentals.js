(function() {  // wrapping your JavaScript file in a IIFE ("iffy") will prevent issues with globally scoped
               // variables when multiple .js files are being used.
    "use strict"; // using 'strict' mode allow JvavScript's 'silent' errors to be shown.  This makes a more
                  // restrictive check against code, allowing for high quality code.
//
//     // PRIMITIVE DATA TYPES
//     // Examples of Numbers ----
//     // 99.9 is an example of a number. JavaScript does not distinguish between types of numbers like some other
//     // programming languages.
//     console.log("Data type of 99.9: ", typeof 99.9);
//     console.log("Data type of 0: ", typeof 0);
//     console.log("Data type of 5: ", typeof 5);
//     console.log("Data type of 3.125e7: ", typeof 3.125e7)
//
//     // Examples of Strings ----
//     // including characters in quotations will creat a string data type.
//     console.log("Data type of 'banana'", typeof 'banana');
//     console.log("Data type of '0': ", typeof '0');
//     console.log("Data type of 'false': ", typeof 'false');
//     console.log("Data type of 'true'", typeof 'true');
//
//     // Examples of Booleans
//     // 'false' is an example of a string. false (not in quotes) is an example of a boolean. the same is true for
//     // 'true' and true.
//     console.log("Data type of false: ", typeof false);
//     console.log("Data type of true: ", typeof true);
//
//     //------------------------------------------------------------------------------------------------------------------
//
//     // OPERATORS
//     // typeof is a special type of operator that produces a string revealing the type of operand it was used on...
//     // see above examples.
//
//     // Examples of Arithmetic Operators --- operators used exclusively on numbers.
//     // Arithmetic expressions follow the mathematical rule for order of operations, unless specified by parentheses.
//     console.log("Addition Operator: 1 + 1 = ", (1 + 1));
//     console.log("Subtraction Operator: 6 - 3 = ", (6 - 3));
//     console.log("Multiplication Operator: 5 * 5 = ", (5 * 5));
//     console.log("Division Operator: 5 / 2 = ", (5 / 2));
//     console.log("Modulus Operator: 5 % 2 = ", (5 % 2));
//     console.log("Normal Order of Operations - No parentheses: 2 + 3 * 4 = ", (2 + 3 * 4));
//     console.log("Using parentheses to change order of operations: (2 + 3) * 4 = ", ((2 + 3) * 4));
//
//     // Examples of String Concatenation
//     console.log("String Concatenation:", "Hello, " + "World!");
//     // String concatenation can be unintentional...
//     console.log("Potentially unintended string concatenation: ", "Hello, World" + 23456);
//
//     // Examples of Boolean Operators ---
//     // The AND operator --- true is both/all operands are true, otherwise false
//     console.log(true && true);
//     console.log(true && false);
//     console.log(false && true);
//     console.log(false && false);
//
//     // The OR operator --- true is either/any operand is true, otherwise false.
//     console.log(true || true);
//     console.log(true || false);
//     console.log(false || true);
//     console.log(false || false);
//
//     // The NOT operator will produce the opposite boolean value.
//     console.log(!true);
//     console.log(!false)
//
//     // Examples of Comparison Operators ---- they produce a boolean value. >, <, <=, >= are also used to compare
//     // numbers.
//     console.log(4 == '4');   // returns true (equal in value)
//     console.log(4 == 5);     // returns false (not equal in value)
//     console.log(4 === 4);    // returns true (equal in value and type)
//     console.log(4 === '4');  // returns false (equal in value, but not type)
//     console.log(4 != 5);     // returns true (not (not equal in value))
//     console.log(4 != '4');   // returns false (not (equal in value))
//     console.log(4 !== '4');  // returns true (not (not equal in value AND type))
//     console.log(4 !== 4);    // returns false (not (equal in value AND type))
//
//     //------------------------------------------------------------------------------------------------------------------
//
//     // VARIABLES
//     // JavaScript is a dynamically typed language, so typed information is associated with a value and not the
//     // variable itself.  This means that a variable will take on the type of the value assigned to it.  Variables
//     // must be created using the 'var' keyword.
//
//     var someVariable = "this is a string."; // initially assigned a string.
//     console.log(someVariable);
//
//     someVariable = 456;                     // same variable reassigned a number.
//     console.log(someVariable);
//
//     someVariable = true;                    // same variable reassigned a boolean.
//     console.log(someVariable);
//
//
//     const someConstant = 666;               // initially assigned to a number.
//     console.log(someConstant);
//
//     //someConstant = 456;                     // same constant cannot be reassigned... unless 'recreating' using the
//     // const keyword. (uncomment the above line to see the error.)
//     console.log(someVariable);
//
//     //------------------------------------------------------------------------------------------------------------------
//
//     // WORKING WITH DATA TYPES, OPERATORS AND VARIABLES
//
//     // Examples of Shorthand Assignment Operators
//     var someNumber = 100;                                    // created variable for examples.
//     console.log("Using the += operator:", someNumber += 1) // equivalent to someNumber = someNumber + 1
//
//     someNumber = 100;
//     console.log("Using the -= operator:", someNumber -= 2) // equivalent to someNumber = someNumber - 2
//
//     someNumber = 100;
//     console.log("Using the *= operator:", someNumber *= 3) // equivalent to someNumber = someNumber * 3
//
//     someNumber = 100;
//     console.log("Using the /= operator:", someNumber /= 4) // equivalent to someNumber = someNumber / 4
//
//     someNumber = 100;
//     console.log("Using the %= operator:", someNumber %= 5) // equivalent to someNumber = someNumber % 5
//
//     // Examples of Unary Operators
//
//     someVariable = "100";           // variable assigned to a string
//     console.log(+someVariable);     // adding + to variable will convert to number.
//     someVariable = "100";
//     console.log(-someVariable);     // adding - to variable will convert to number.
//
//     someNumber = 100;
//     someNumber++;
//     console.log(someNumber);     // adding ++ to variable will increment a number.
//     someNumber = 100;
//     someNumber--;
//     console.log(someNumber);     // adding -- to variable will decrement a number.
//
//     // Converting between strings and numbers
//
//     someVariable = 3.14;
//
//     // A number can be converted to a string with the 'toString()' or 'toFixed()' methods.  'toString()' will convert
//     // the number to a string, while 'toFixed()' allow for decimal precision.
//     console.log(typeof someVariable, someVariable);
//     console.log(typeof someVariable.toString(), someVariable.toString());
//     console.log(typeof someVariable.toFixed(1), someVariable.toFixed(1));
//     console.log(typeof someVariable.toFixed(3), someVariable.toFixed(3));
//
//     // The built-in 'Number()' function will convert a string (of numbers) to a number data type.
//     someVariable = "45676";
//     console.log(typeof someVariable, someVariable);
//     console.log(typeof Number(someVariable), Number(someVariable));
//
//     // Passing a 'string' (not number) into the 'Number' function results in a value of NaN (not-a-number).
//     // Curiously, typeof reveals a data type of 'number'.
//     someVariable = "string";
//     console.log(typeof Number(someVariable), Number(someVariable));
//
//     // Use built-in isNan() function to determine whether a VALUE is NaN, or to determine whether a string can be
//     // converted to a number.
//     console.log(isNaN('123'));       // returns false; '123' is NOT NaN; '123' is a number in value.
//     console.log(isNaN('abc'));       // returns true; 'abc' is NaN; 'abc' is not a number in value.
//     console.log(isNaN(123));         // returns false; 123 is NOT NaN; 123 is a number in value.
//     console.log(isNaN(Number('abc'))); // returns true; passing a string into Number() produces a value of NaN.
//
//     // In addition, parseInt() and parseFloat() will attempt to convert a string to an integer or decimal (floating
//     // point) respectively.  see examples:
//
//     // Examples of parseInt()
//     console.log(parseInt("123"));
//     console.log(parseInt("123abc"));
//     console.log(parseInt("abc123"));
//     console.log(parseInt("123.4567"));
//     console.log(parseInt("123.4567abc"));
//
//     //Examples of parseFloat()
//     console.log(parseFloat("123"));
//     console.log(parseFloat("123abc"));
//     console.log(parseFloat("abc123"));
//     console.log(parseFloat("123.4567"));
//     console.log(parseFloat("123.4567abc"));
//
//     // Examples of some functions used to work with strings.  The methods below will not modify the original string,
//     // due to something called string immutability.  That's why the results need to be reassigned to the original
//     // variable.
//
//     // .length  --- property that describes the number of characters in a string.
//     var someString = "Elephant";
//     console.log(someString.length);
//
//     // .indexOf(char) --- returns the index of a particular character in a string.
//     console.log(someString.indexOf("p"));
//
//     // .replace(find, replace) --- returns a copy of the string after performing a substitution.
//     console.log(someString.replace('Eleph', 'inf'));
//
//     // .substring(fromIndex, toIndex) --- returns a subset of the original string based on the provided indices.
//     console.log(someString.substring(5, 8));
//
//     // .toUpperCase() --- returns a copy of the string in all upper case.
//     console.log(someString.toUpperCase());
//
//     // .toLowerCase() --- returns a copy of the string in all lower case.
//     console.log(someString.toLowerCase());
//
//     // .trim() --- returns a copy of a string with any white spaces removed from the beginning or end of the string.
//     someString = "   Hello, World.    ";
//     console.log(someString);          // without .trim()
//     console.log(someString.trim());   // with .trim()
//
//     //------------------------------------------------------------------------------------------------------------------
//     // JAVASCRIPT WITH HTML
//     // Examples of user interactions
//
//     // Alerts will simply display a message in a dialog box.
//     alert("This is an alert message.");
//
//     // Confirms will allow a user to answer a yes/no question--a boolean is returned.
//     var confirmResult = confirm("Do you want to confirm?");
//     console.log(confirmResult);
//
//     // Prompts will aloow a user to enter some information--a string is returned.
//     var promptResult = prompt("Enter some information.");
//     console.log(promptResult);
//
//     //------------------------------------------------------------------------------------------------------------------
//     // FUNCTIONS
//     // Using function
//     // Functions are called by name followed by ()... arguments can be passed inside the parentheses.
//     // Arguments vs. Parameters --- a function is defined with zero or more parameters (referring to the actual
//     // values), but called with zero or more arguments.
//     // Functions produce a return value that can be stored in a variable outside the function.
//     // Scope --- functions create their own scopes.  Variables used inside functions are referred to as 'local';
//     // variables used outside of a functions are 'global'.  Globally scoped variables are accessible inside
//     // functions; however, locally scoped variables are not accessible outside of the function.
//
//     // see also additional information on Function Expressions vs. Function Declarations
//     // see also additional information on Hoisting.
//
//     // Defining Functions --- the following two functions work exactly the same... two methods for writing them.
//     function myFunction(input) {
//         var output = input /* do something to calculate an output.  In this case we just assigned the input argument to
//          output. */
//         return output;
//     }
//     console.log(myFunction(6));
//
//     // Anonymous Functions
//     var myFunction = function(input) {
//         var output = input; /* do something to calculate an output.  In this case we just assigned the input argument to
//          output. */
//         return output;
//     }
//     console.log(myFunction(6));
//
//     // Example of an Immediately-Invoked Function Expression (IIFE -- pronounced "iffy")
//
//     (function () {
//         var iffeVar = "I'm local to the IFFE";
//     })();
//
//     //------------------------------------------------------------------------------------------------------------------
//     // CONDITIONALS
//     // 'if' statements --- allows you to execute code based on certain conditions.  The condition results in a boolean
//     // value
//     var condition = true;
//
//     if (condition) {
//         console.log("this condition was true"); // execute this code if the condition is true, otherwise continue.
//     }
//     console.log("this represents the rest of the code.");
//
//
//
//     // 'if / else' statements --- else statement will execute if the condition is false.
//     condition = false;
//
//     if (condition) {
//         console.log("this condition was true"); // execute this code if the condition is true.
//     } else {
//         console.log("this condition was false"); //execute this code if the condition is false.
//     }
//     console.log("this represents the rest of the code.");
//
//
//
//     // 'if / else if / else' statements --- 'else if' is used to chain several conditions together.  But if more
//     // than one of the conditions ARE true, only the code for the first condition encountered will execute.
//     var conditionA = true;
//     var conditionB = true;
//     var conditionC = false;
//
//     if (conditionA) {
//         console.log("conditionA is true");// execute code associated with conditionA.
//     } else if (conditionB) {
//         console.log("conditionB is true");// execute code associated with conditionB.
//     } else if (conditionC) {
//         console.log("conditionC is true");// execute code associated with conditionB.
//     } else {
//         console.log("none of the conditions are true");// execute this code if no conditions are met.
//     }
//     console.log("this represents the rest of the code.");
//
//
//     // Ternary Operator (Shorthand 'if / else')
//     condition = true;
//     var result = (condition) ? "condition is true" : "condition is false";
//     console.log(result);
//
//     // 'switch' statements --- these statements can achieve any result that the 'if / else if / else' statements
//     // can.  However, if you have a long list of conditions, the 'switch' statement can make your code more readable.
//     var expression = "item3";
//
//     switch (expression) {
//         case "item1":
//             console.log("item1 is true");
//             break;
//         case "item2":
//             console.log("item2 is true");
//             break;
//         case "item3":
//             console.log("item3 is true");
//             break;
//         default:
//             console.log("none of the cases are true");
//             break;
//     }
//     console.log("This represents the rest of the code following the switch statement");
//
//
//     //------------------------------------------------------------------------------------------------------------------
//     // LOOPS --- allow you to repeatedly run the same code
//     // 'while' and 'do / while' are good to use if you want to repeat something while some condition is true; 'for'
//     // loops are good to use if you want to do something a specific number of times.  Having said that, both can be
//     // using to achieve the same results.
//
//     // 'while' loops
//     var i = 0;                                       // set iteration variable
//
//     console.log("this represents code prior to while loop");
//     while (i < 10) {                                  // set the condition to keep looping. **if this condition is
//                                                       // ALWAYS true, an infinite loop will be created
//         console.log("while loop iteration #" + i);    // this is code to repeat (i times)
//         i++;                                          // increment the iteration variable **NOT DOING THIS MAY
//                                                       // RESULT IN AN INFINITE LOOP.
//     }
//     console.log("this represents code after to while loop");
//
//
//     // 'do / while' loops --- the only difference between this an a 'while' loop, is that in a 'do / while' loop,
//     // the condition is evaluated at the end of the loop.  So, any code will execute at least once.  This might be
//     // useful if you need to make sure a user is prompted for info at least once.
//     console.log("this represents code prior to while loop");
//     i = 11;                                                    // set iteration variable
//
//     do {
//         console.log("this code will execute at least once");   // this is the code to repeat, but once at minimum.
//         i++;                                                   // increment the iteration variable **NOT DOING THIS MAY
//                                                                // RESULT IN AN INFINITE LOOP.
//     } while (i < 10);                                          // set the condition to keep looping. **if this
//                                                                // condition is ALWAYS true, an infinite loop will
//                                                                // be created
//     console.log("this represents code after to while loop");
//
//
//     // 'for' loops
//     console.log("this represents code prior to 'for' loop");
//     for (var n = 0; n < 10; n++) {
//         console.log("'for' loop iteration #" + n);
//     }
//     console.log("this represents code after to 'for' loop");
//
//
//     // 'break' and 'continue'
//     // 'break' will allow you to exit a loop at anytime, regardless if all iterations have completed.
//     var numberToStopAt = 5;
//
//     for (i = 1; i < 100; i++) {
//
//         console.log("Loop counter is: " + i);
//         if (i === numberToStopAt) {
//             console.log("we have reached the stopping point: break!");
//             break;
//             console.log("You will never see this line of code");
//         }
//         console.log("this represents other code in the loop");
//     }
//     console.log("this represents code after the loop")
//
//     // 'continue' will allow you to continue iterating through a loop without completing an entire loop code block.
//     for (var i = 1; i < 100; i++) {
//         if (i % 2 !== 0) {
//             console.log("i = " + i + " CONTINUE!")// execute some code if the condition is met and then continue
//             // iterating
//             continue;
//         }
//         console.log("Here is a lovely even number: " + i);
//     }
//
//
//     //------------------------------------------------------------------------------------------------------------------
//     // ARRAYS --- a data structure that holds an ordered list of items; each item can be of a different data type.
//     // Declaring an array
//     var someArray = [1, 2, 3, 4, 5];
//     var someOtherArray = ["one", "two", "three", "four", "five"];
//     var yetAnotherArray = [1, "two", [3, 4, "five"]];
//
//     // Counting array items
//     //using the 'length' property will allow you to see the number of items in an array.
//     console.log(someArray.length);
//     console.log(someOtherArray.length);
//     console.log(yetAnotherArray.length); // the the last item in this array is another array, counted as one item.
//
//     // Accessing array elements
//     // access array items using an index; much the same way you access a particular character of a string.
//     var someNumbers = [1, 2, 3, 4];
//     console.log(someNumbers[0]);
//     console.log(someNumbers[1]);
//     console.log(someNumbers[2]);
//     console.log(someNumbers[3]);
//
//     // Iterating arrays
//     // Using 'for' loop
//     var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
//     // loop through the array and log the values
//     for (var i = 0; i < shapes.length; i++) {
//         console.log('The shape at index ' + i + ' is: ' + shapes[i]);
//     }
//
//
//     // Using 'forEach' loop
//     var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
//     // loop through the array and log the values
//     shapes.forEach(function(shape) {
//         console.log('Here is a lovely shape: ' + shape + '.');
//     });
//
//     // MANIPULATING ARRAYS
//     var daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday"];
//     // Adding elements. Arguments can be passed as follows:
//     // Use 'unshift' to add elements to the beginning of an array.
//     console.log(daysOfTheWeek);
//     daysOfTheWeek.unshift("Sunday");
//     console.log(daysOfTheWeek);
//     // Use 'push' to add elements to the end of an array.
//     daysOfTheWeek.push("Friday", "Saturday");
//     console.log(daysOfTheWeek);
//
//     // Removing elements
//     // Use 'shift' to remove the first element of an array. NO ARGS!
//     daysOfTheWeek.shift();
//     console.log(daysOfTheWeek);
//     // Use 'push' to remove the last element from of an array. NO ARGS!
//     daysOfTheWeek.pop();
//     console.log(daysOfTheWeek);
//
//     // Locating array elements
//     // 'indexOf'
//     var index = daysOfTheWeek.indexOf('Tuesday');
//     console.log(index);
//     //
//     var index = daysOfTheWeek.lastIndexOf('Thursday');
//     console.log(index);
//
//     // Slicing
//     var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//
//     var slice = colors.slice(2, 4);
//
//     console.log(colors); // colors is unchanged
//     // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
//
//     console.log(slice); // ['yellow', 'green']
//
//     slice = colors.slice(3);
//     console.log(slice); // ['green', 'blue', 'indigo', 'violet']
//
//     // Reversing
//     colors.reverse();
//
//     console.log(colors);
//     // ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']
//
//     // Sorting
//     var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//
//     console.log(colors);
//     // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
//
//     console.log('Sorting the colors array.');
//
//     colors.sort();
//
//     console.log(colors);
//     // ['blue', 'green', 'indigo', 'orange', 'red', 'violet', 'yellow']
//
//     // Converting between strings and arrays
//     // Splitting
//     var namesString = "Joe,Bob,Sally";
//
//     console.log(namesString);
//     // Joe,Bob,Sally
//
//     var namesArray = namesString.split(',');
//
//     console.log(namesArray);
//
//     //Joining
//     var namesArray = ['Joe', 'Bob', 'Sally'];
//
//     console.log(namesArray);
//     // ['Joe', 'Bob', 'Sally']
//
//     var namesString = namesArray.join(',');
//
//     console.log(namesString);
//     // Joe,Bob,Sally
//
//     // O B J E C T S
//     // CUSTOM OBJECTS
//     // New Object Instance
//     var car = new Object();
//     console.log(typeof car);
//
//     // Object Literal Notation
//     var auto ={};
//     console.log(typeof auto);
//
//     // SETTING PROPERTIES ON A CUSTOM OBJECT
//     // Using 'Dot Notation' ---------- THIS IS PREFERRED
//     car.make = "Toyota";
//     console.log(car.make);
//
//     // Using Array Notation
//     car["model"] = "Camry";
//     console.log(car.model);
//     console.log(car);
//
//     // Properties can be assigned when the object is created
//     var auto = {
//         make: "Ford",
//         model: "Escort"
//     };
//     console.log(auto);
//
//     // ACCESSING PROPERTIES ON AN OBJECT
//     // use array notation to access "make" property
//     console.log("The car make is: " + car["make"]);
//
//     // use dot notation to access "model" property
//     console.log("The car model is: " + car.model);
//
//     // NESTED VALUES
//     var cars = [
//         {
//             make: "Toyota",
//             model: "Camry",
//             features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
//             owner: {
//                 name: "Jane Doe",
//                 age: 30
//             }
//         },
//         {
//             make: "Honda",
//             model: "Accord",
//             features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
//             owner: {
//                 name: "John Doe",
//                 age: 31
//             }
//         }
//     ];
//
//     console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
//     console.log("The owner of the second car is " + cars[1].owner.name + ".");
//
//     console.log("Here are all the features of all the cars:");
//     cars.forEach(function(car) {
//         car.features.forEach(function(feature) {
//             console.log(feature);
//         });
//     });
//
//     // ASSIGNING FUNCTIONALITY TO AN OBJECT
//     car.honk = function () {
//         alert("Honk! Honk!");
//     };
//
//     car.honk();
//
//     //THE 'this' KEYWORD
//     // create a logMakeModel method on the car object
//     car.logMakeModel = function () {
//         console.log("Car make/model is: " + this.make + " " + this.model);
//     };
//
//     car.logMakeModel();     // log the make/model
//
//     // M A T H   O B J E C T
//     // JavaScript provides a built-in Math object with a variety of helpful properties and methods. One thing that is
//     // unique about the Math object is that all of its properties and methods are static. This means that you will
//     // always access the properties and methods by using Math.property-or-method, and that you will never use var math = new Math();.
//
//     // METHODS
//
//     // Math.random()
//     // Returns a random integer between min and max.
//     function getRandomInt(min, max) {
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     }
//
//     console.log(getRandomInt(2, 20));
//
//     // Math.round() - The Math.round() function returns the value of a number rounded to the
//     // nearest integer.
//     Math.round(20.49);  // 20
//     Math.round(20.5);   // 21
//     Math.round(-20.5);  // -20
//     Math.round(-20.51); // -21
//
//     // Math.floor() - The Math.floor() function returns the largest integer less than or
//     // equal to a number.
//     Math.floor( 45.95); //  45
//     Math.floor(-45.95); // -46
//
//     // Math.ceil() - The Math.ceil() function returns the smallest integer greater than
//     // or equal to a number.
//     Math.ceil(.95);   // 1
//     Math.ceil(4);     // 4
//     Math.ceil(7.004); // 8
//
//     // Math.sqrt() - The Math.sqrt() function returns the square root of a number.
//     Math.sqrt(9);  // 3
//     Math.sqrt(2);  // 1.414213562373095
//     Math.sqrt(1);  // 1
//     Math.sqrt(0);  // 0
//     Math.sqrt(-1); // NaN
//
//     // CONSTANTS
//     // Math.E - The Math.E property represents the base of natural logarithms, e, approximately 2.718.
//     console.log(Math.E);
//
//     // Math.PI - The Math.PI property represents the ratio of the circumference of a circle to its
//     // diameter, approximately 3.14159.
//     console.log(Math.PI);

    // B O M  & D O M
    // Browser Object Model (BOM)


    // Document Object Model (DOM)


    //... JAVASCRIPT II
    // ES6



    // MAP, FILTER, REDUCE


    // PROMISES




})();