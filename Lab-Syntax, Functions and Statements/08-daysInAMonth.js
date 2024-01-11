function month(month, year) {
  let numDays = new Date(year, month, 0).getDate();
  console.log(numDays);
}
month(1, 2012);
