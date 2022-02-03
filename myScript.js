//1st Task
function getName(Name, Surname, Group){
  return (Name + " " + Surname + " " + Group);
}
function displayName(){
  var result;
  var esim = document.getElementById("Name").value;
  var fam = document.getElementById("Surname").value;
  var gr = document.getElementById("Group").value;
  result = getName(esim, fam, gr);
  document.getElementById("h30ut").innerHTML = result;
}


//2nd task
function zeros(value){
    if (value < 10){
        value='0'+value;
    }
    return value;
}

function year(){
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  return "Year: "+year;
}
//setinterval для того, чтобы счетчик обновлялся на странице
setInterval(function () {
  document.getElementById('year').innerHTML = year();
}, 1000);

function weekday(){
  var currentDate = new Date();
  var weekday = currentDate.getDay();
  var weekdays = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
  }
  const weekdayName = weekdays[weekday];

  return "Today is: "+weekdayName;
} setInterval(function () {
  document.getElementById('weekday').innerHTML = weekday();
}, 1000);


function day(){
  var currentDate = new Date();
  var day = zeros(currentDate.getDate());
  return " Current Date: "+day;
} setInterval(function () {
  document.getElementById('day').innerHTML = day();
}, 1000);


function month(){
  var currentDate = new Date();
  var month = currentDate.getMonth();
  var months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  }
  const monthName = months[month];

  return "Month: "+ monthName;
} setInterval(function () {
  document.getElementById('month').innerHTML = month();
}, 1000);

function time(){
  var currentDate = new Date();
  var hours = zeros(currentDate.getHours());
  var minutes = zeros(currentDate.getMinutes());
  var seconds = zeros(currentDate.getSeconds());

  return "Current Time: " + hours+":"+minutes+":"+seconds;
} setInterval(function () {
  document.getElementById('time').innerHTML = time();
}, 1000);


//3rd task
function calculateDays() {

  let today = new Date().toISOString().slice(0, 10)

  const startDate  = '2022-02-03';
  const endDate    = '2024-06-30';

  const diffInMs   = new Date(endDate) - new Date(startDate)
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

return diffInDays + " days left until freedom!";
}setInterval(function () {
  document.getElementById('result').innerHTML = calculateDays();
}, 1000);


//4th Task
function getMult(Number1, Number2){
  return (Number1 * Number2);
}
function multiplyNum(){
  var result;
  var num1 = document.getElementById("Number1").value;
  var num2 = document.getElementById("Number2").value;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  result = getMult(num1, num2);
  document.getElementById("multipl").innerHTML = result;
}

function getDiv(Number1, Number2){
  return (Number1 / Number2);
}
function divideNum(){
  var result;
  var num1 = document.getElementById("Number1").value;
  var num2 = document.getElementById("Number2").value;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  result = getDiv(num1, num2);
  document.getElementById("division").innerHTML = result;
}
