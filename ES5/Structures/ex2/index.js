const { HashTable } = require("../HashTable");

function Ticket(source, destination) {
  this.source = source;
  this.destination = destination;
}

function reconstructTrip(tickets, length) {
  let ht = new HashTable(length);
  let counter = 0;
  const path = new Array(length).fill(null);
  for (let ticket of tickets) {
    ht.insert(ticket.source, ticket.destination);
  }
  let current = ht.retrieve("NONE");
  if (!current) {
    return null;
  } else {
    while (counter < length) {
      path[counter] = current;
      current = ht.retrieve(current);
      counter++;
    }
  }
  return path;
}
module.exports = { Ticket, reconstructTrip };

// let ticket_1 = new Ticket("NONE", "PDX");
// let ticket_2 = new Ticket("PDX", "DCA");
// let ticket_3 = new Ticket("DCA", "NONE");

// let tickets = [ticket_1, ticket_2, ticket_3];

// let expected = ["PDX", "DCA", "NONE"];
// let result = reconstructTrip(tickets, 3);
// console.log(result);
