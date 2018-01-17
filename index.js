//LEVEL 0

//get value of seconds, minutes, hours, days, months, years based on different time
var date = new Date()
var second = date.getSeconds()
var minute = date.getMinutes()
var hour = date.getHours()
var intDate = date.getDate()
var month = date.getMonth()
var year = date.getFullYear()

// LEVEL 1
console.log(`seconds = ${second}`);
console.log(`minutes = ${minute}`);
console.log(`hours = ${hour}`);

console.log(`full date = ${date}`);
console.log(`date = ${intDate}`);
console.log(`month = ${month}`);
console.log(`year = ${year}`);

//LEVEL 2

function getStringMonthFromDate(date) {
  month = date.getMonth()
  monthLists = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
  return monthLists[month]
}

console.log(getStringMonthFromDate(date));

//LEVEL 3
function getMonth(date) {
  month = date.getMonth()

  return month;
}

function getStringMonthFromInt(int) {
  monthLists = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
  return monthLists[int];
}

console.log(getStringMonthFromInt(getMonth(date)));