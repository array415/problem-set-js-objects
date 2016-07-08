/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

// YOUR CODE HERE
function daysBetween(date){
    if(typeof(date) !== 'string'){
      alert('Please enter a valid Date string eg. "12/16/1988"');
      return;
    }else{
      var dateString = new Date(date);
      var actualDays = Math.round((dateString - Date.now())/864000);
      return actualDays + " " + "Days between then and now!";
    }
}


function birthdayReminder(objArr){
  var endArray = [];
  for(var i = 0; i < objArr.length; i++){
    var whoIsIt = objArr[i].name;
    var dateOfBirth = objArr[i].dob;
    endArray.push(whoIsIt + "'s" + " " + "birthday is in" + " " + 200 + "days");          // 200 is a placeholder need to compare date with dob.  I need to remove the year from DOB.
  }
 console.log(endArray);
}
