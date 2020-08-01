(function() {  // wrapping your JavaScript file in a IIFE ("iffy") will prevent issues with globally scoped
               // variables when multiple .js files are being used.
    "use strict"; // using 'strict' mode allow JvavScript's 'silent' errors to be shown.  This makes a more
                  // restrictive check against code, allowing for high quality code.

    // PRIMITIVE DATA TYPES
    // Examples of Numbers ----
    // 99.9 is an example of a number. JavaScript does not distinguish between types of numbers like some other
    // programming languages.
    console.log("Data type of 99.9: ", typeof 99.9);
    console.log("Data type of 0: ", typeof 0);
    console.log("Data type of 5: ", typeof 5);
    console.log("Data type of 3.125e7: ", typeof 3.125e7)

    // Examples of Strings ----
    // including characters in quotations will creat a string data type.
    console.log("Data type of 'banana'", typeof 'banana');
    console.log("Data type of '0': ", typeof '0');
    console.log("Data type of 'false': ", typeof 'false');
    console.log("Data type of 'true'", typeof 'true');

    // Examples of Booleans
    // 'false' is an example of a string. false (not in quotes) is an example of a boolean. the same is true for
    // 'true' and true.
    console.log("Data type of false: ", typeof false);
    console.log("Data type of true: ", typeof true);

    //------------------------------------------------------------------------------------------------------------------

    // OPERATORS
    // typeof is a special type of operator that produces a string revealing the type of operand it was used on...
    // see above examples.

    // Examples of Arithmetic Operators --- operators used exclusively on numbers.
    // Arithmetic expressions follow the mathematical rule for order of operations, unless specified by parentheses.
    console.log("Addition Operator: 1 + 1 = ", (1 + 1));
    console.log("Subtraction Operator: 6 - 3 = ", (6 - 3));
    console.log("Multiplication Operator: 5 * 5 = ", (5 * 5));
    console.log("Division Operator: 5 / 2 = ", (5 / 2));
    console.log("Modulus Operator: 5 % 2 = ", (5 % 2));
    console.log("Normal Order of Operations - No parentheses: 2 + 3 * 4 = ", (2 + 3 * 4));
    console.log("Using parentheses to change order of operations: (2 + 3) * 4 = ", ((2 + 3) * 4));

    // Examples of String Concatenation
    console.log("String Concatenation:", "Hello, " + "World!");
    // String concatenation can be unintentional...
    console.log("Potentially unintended string concatenation: ", "Hello, World" + 23456);

    // Examples of Boolean Operators ---
    // The AND operator --- true is both/all operands are true, otherwise false
    console.log(true && true);
    console.log(true && false);
    console.log(false && true);
    console.log(false && false);

    // The OR operator --- true is either/any operand is true, otherwise false.
    console.log(true || true);
    console.log(true || false);
    console.log(false || true);
    console.log(false || false);

    // The NOT operator will produce the opposite boolean value.
    console.log(!true);
    console.log(!false)

    // Examples of Comparison Operators ---- they produce a boolean value. >, <, <=, >= are also used to compare
    // numbers.
    console.log(4 == '4');   // returns true (equal in value)
    console.log(4 == 5);     // returns false (not equal in value)
    console.log(4 === 4);    // returns true (equal in value and type)
    console.log(4 === '4');  // returns false (equal in value, but not type)
    console.log(4 != 5);     // returns true (not (not equal in value))
    console.log(4 != '4');   // returns false (not (equal in value))
    console.log(4 !== '4');  // returns true (not (not equal in value AND type))
    console.log(4 !== 4);    // returns false (not (equal in value AND type))

    //------------------------------------------------------------------------------------------------------------------

    // VARIABLES
    // JavaScript is a dynamically typed language, so typed information is associated with a value and not the
    // variable itself.  This means that a variable will take on the type of the value assigned to it.  Variables
    // must be created using the 'var' keyword.

    var someVariable = "this is a string."; // initially assigned a string.
    console.log(someVariable);

    someVariable = 456;                     // same variable reassigned a number.
    console.log(someVariable);

    someVariable = true;                    // same variable reassigned a boolean.
    console.log(someVariable);


    const someConstant = 666;               // initially assigned to a number.
    console.log(someConstant);

    //someConstant = 456;                     // same constant cannot be reassigned... unless 'recreating' using the
    // const keyword. (uncomment the above line to see the error.)
    console.log(someVariable);

    //------------------------------------------------------------------------------------------------------------------

    // WORKING WITH DATA TYPES, OPERATORS AND VARIABLES

    // Examples of Shorthand Assignment Operators
    var someNumber = 100;                                    // created variable for examples.
    console.log("Using the += operator:", someNumber += 1) // equivalent to someNumber = someNumber + 1

    someNumber = 100;
    console.log("Using the -= operator:", someNumber -= 2) // equivalent to someNumber = someNumber - 2

    someNumber = 100;
    console.log("Using the *= operator:", someNumber *= 3) // equivalent to someNumber = someNumber * 3

    someNumber = 100;
    console.log("Using the /= operator:", someNumber /= 4) // equivalent to someNumber = someNumber / 4

    someNumber = 100;
    console.log("Using the %= operator:", someNumber %= 5) // equivalent to someNumber = someNumber % 5

    // Examples of Unary Operators

    someVariable = "100";           // variable assigned to a string
    console.log(+someVariable);     // adding + to variable will convert to number.
    someVariable = "100";
    console.log(-someVariable);     // adding - to variable will convert to number.

    someNumber = 100;
    someNumber++;
    console.log(someNumber);     // adding ++ to variable will increment a number.
    someNumber = 100;
    someNumber--;
    console.log(someNumber);     // adding -- to variable will decrement a number.

    // Converting between strings and numbers

    someVariable = 3.14;

    // A number can be converted to a string with the 'toString()' or 'toFixed()' methods.  'toString()' will convert
    // the number to a string, while 'toFixed()' allow for decimal precision.
    console.log(typeof someVariable, someVariable);
    console.log(typeof someVariable.toString(), someVariable.toString());
    console.log(typeof someVariable.toFixed(1), someVariable.toFixed(1));
    console.log(typeof someVariable.toFixed(3), someVariable.toFixed(3));

    // The built-in 'Number()' function will convert a string (of numbers) to a number data type.
    someVariable = "45676";
    console.log(typeof someVariable, someVariable);
    console.log(typeof Number(someVariable), Number(someVariable));

    // Passing a 'string' (not number) into the 'Number' function results in a value of NaN (not-a-number).
    // Curiously, typeof reveals a data type of 'number'.
    someVariable = "string";
    console.log(typeof Number(someVariable), Number(someVariable));

    // Use built-in isNan() function to determine whether a VALUE is NaN, or to determine whether a string can be
    // converted to a number.
    console.log(isNaN('123'));       // returns false; '123' is NOT NaN; '123' is a number in value.
    console.log(isNaN('abc'));       // returns true; 'abc' is NaN; 'abc' is not a number in value.
    console.log(isNaN(123));         // returns false; 123 is NOT NaN; 123 is a number in value.
    console.log(isNaN(Number('abc'))); // returns true; passing a string into Number() produces a value of NaN.

    // In addition, parseInt() and parseFloat() will attempt to convert a string to an integer or decimal (floating
    // point) respectively.  see examples:

    // Examples of parseInt()
    console.log(parseInt("123"));
    console.log(parseInt("123abc"));
    console.log(parseInt("abc123"));
    console.log(parseInt("123.4567"));
    console.log(parseInt("123.4567abc"));

    //Examples of parseFloat()
    console.log(parseFloat("123"));
    console.log(parseFloat("123abc"));
    console.log(parseFloat("abc123"));
    console.log(parseFloat("123.4567"));
    console.log(parseFloat("123.4567abc"));

    // Examples of some functions used to work with strings.  The methods below will not modify the original string,
    // due to something called string immutability.  That's why the results need to be reassigned to the original
    // variable.

    // .length  --- property that describes the number of characters in a string.
    var someString = "Elephant";
    console.log(someString.length);

    // .indexOf(char) --- returns the index of a particular character in a string.
    console.log(someString.indexOf("p"));

    // .replace(find, replace) --- returns a copy of the string after performing a substitution.
    console.log(someString.replace('Eleph', 'inf'));

    // .substring(fromIndex, toIndex) --- returns a subset of the original string based on the provided indices.
    console.log(someString.substring(5, 8));

    // .toUpperCase() --- returns a copy of the string in all upper case.
    console.log(someString.toUpperCase());

    // .toLowerCase() --- returns a copy of the string in all lower case.
    console.log(someString.toLowerCase());

    // .trim() --- returns a copy of a string with any white spaces removed from the beginning or end of the string.
    someString = "   Hello, World.    ";
    console.log(someString);          // without .trim()
    console.log(someString.trim());   // with .trim()

    //------------------------------------------------------------------------------------------------------------------
    // JAVASCRIPT WITH HTML
    // Examples of user interactions

    // Alerts will simply display a message in a dialog box.
    alert("This is an alert message.");

    // Confirms will allow a user to answer a yes/no question--a boolean is returned.
    var confirmResult = confirm("Do you want to confirm?");
    console.log(confirmResult);

    // Prompts will aloow a user to enter some information--a string is returned.
    var promptResult = prompt("Enter some information.");
    console.log(promptResult);

    //------------------------------------------------------------------------------------------------------------------
    // FUNCTIONS
    // Using function
    // Functions are called by name followed by ()... arguments can be passed inside the parentheses.
    // Arguments vs. Parameters --- a function is defined with zero or more parameters (referring to the actual
    // values), but called with zero or more arguments.
    // Functions produce a return value that can be stored in a variable outside the function.
    // Scope --- functions create their own scopes.  Variables used inside functions are referred to as 'local';
    // variables used outside of a functions are 'global'.  Globally scoped variables are accessible inside
    // functions; however, locally scoped variables are not accessible outside of the function.

    // see also additional information on Function Expressions vs. Function Declarations
    // see also additional information on Hoisting.

    // Defining Functions --- the following two functions work exactly the same... two methods for writing them.
    function myFunction(input) {
        var output = input /* do something to calculate an output.  In this case we just assigned the input argument to
         output. */
        return output;
    }
    console.log(myFunction(6));

    // Anonymous Functions
    var myFunction = function(input) {
        var output = input; /* do something to calculate an output.  In this case we just assigned the input argument to
         output. */
        return output;
    }
    console.log(myFunction(6));

    // Example of an Immediately-Invoked Function Expression (IIFE -- pronounced "iffy")

    (function () {
        var iffeVar = "I'm local to the IFFE";
    })();

    //------------------------------------------------------------------------------------------------------------------
    // CONDITIONALS
    // 'if' statements


    // 'if / else' statements


    // 'if / else if / else' statements


    // Ternary Operator (Shorthand 'if / else')


    // 'switch' statements


    //------------------------------------------------------------------------------------------------------------------
    // LOOPS
    // 'while' loops


    // 'do / while' loops


    // 'for' loops


    // 'break' and 'continue'


    //------------------------------------------------------------------------------------------------------------------
    // ARRAYS
    // Declaring an array


    // Counting array items


    // Accessing array elements


    // Iterating arrays
    // Using 'for' loop


    // Using 'forEach' loop


    // MANIPULATING ARRAYS
    // Adding elements


    // Removing elements


    // Locating array elements


    // Slicing


    // Reversing


    // Sorting


    // Converting between strings and arrays
    // Splitting


    //Joining





})();