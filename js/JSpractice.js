(function () {
    "use strict";

    var daysOfTheWeek = ['Mon', 'Tue', 'Wed', 'Thur'];
    daysOfTheWeek.push('Fri'); // 'push()' will add the element passed to the end of the array.
    console.log(daysOfTheWeek);

    daysOfTheWeek.push('Sat'); // 'push()' will add the element passed to the end of the array.
    console.log(daysOfTheWeek);

    daysOfTheWeek.unshift('Sun'); // 'unshift()' will add the element passed to the beginning of the array.
    console.log(daysOfTheWeek);

    daysOfTheWeek.pop(); // 'pop()' will remove the last item from the array (no args needed).
    console.log(daysOfTheWeek);

    daysOfTheWeek.shift(); // 'shift()' will remove the first item from the array (no args needed).
    console.log(daysOfTheWeek);

    console.log(daysOfTheWeek.indexOf('Tue')); // returns -1 when element is not found.













})();