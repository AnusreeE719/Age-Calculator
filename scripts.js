let dateInput = document.getElementById("date");
// let result = document.getElementById("result");
let yr = document.getElementById("year");
let mn = document.getElementById("month");
let dy = document.getElementById("days")

dateInput.max = new Date().toISOString().split("T")[0];

function ageCalculate() {
  let birthDate = new Date(dateInput.value);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;
  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  // result.innerHTML = `Age  : ${y3} years ${m3} months ${d3} days`;
  yr.innerHTML = `${y3}`;
  mn.innerHTML = `${m3}`;
  dy.innerHTML = `${d3}`;

}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
