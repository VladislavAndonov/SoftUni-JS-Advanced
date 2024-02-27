function ticketsManager(arr, criteria) {
  let result = [];

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
    static sort(arr, criteria) {
      return arr.sort((a, b) => {
        return criteria === "price"
          ? a[criteria] - b[criteria]
          : a[criteria].localeCompare(b[criteria]);
      });
    }
  }

  for (let el of arr) {
    let [destination, price, status] = el.split("|");
    result.push(new Ticket(destination, price, status));
  }

  return Ticket.sort(result, criteria);
}

let res = ticketsManager(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
);

console.log(res);