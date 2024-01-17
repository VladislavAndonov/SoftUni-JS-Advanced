function previousDate(year, month, date) {
  let myDate = new Date(year, month, date);
  myDate.setDate(myDate.getDate() - 1);
  console.log(
    `${myDate.getFullYear()}-${myDate.getMonth()}-${myDate.getDate()}`
  );
}
previousDate(2016, 9, 30);
