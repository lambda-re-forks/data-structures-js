const { reconstructTrip, Ticket } = require("./index");

describe("EX2", () => {
  it("should work on a short case", () => {
    let ticket_1 = new Ticket("NONE", "PDX");
    let ticket_2 = new Ticket("PDX", "DCA");
    let ticket_3 = new Ticket("DCA", "NONE");

    let tickets = [ticket_1, ticket_2, ticket_3];

    let expected = ["PDX", "DCA", "NONE"];
    let result = reconstructTrip(tickets, 3);

    expect(expected).toEqual(result);
  });
  it("should work on a long case", () => {
    let ticket_1 = new Ticket("PIT", "ORD");
    let ticket_2 = new Ticket("XNA", "SAP");
    let ticket_3 = new Ticket("SFO", "BHM");
    let ticket_4 = new Ticket("FLG", "XNA");
    let ticket_5 = new Ticket("NONE", "LAX");
    let ticket_6 = new Ticket("LAX", "SFO");
    let ticket_7 = new Ticket("SAP", "SLC");
    let ticket_8 = new Ticket("ORD", "NONE");
    let ticket_9 = new Ticket("SLC", "PIT");
    let ticket_10 = new Ticket("BHM", "FLG");

    let tickets = [
      ticket_1,
      ticket_2,
      ticket_3,
      ticket_4,
      ticket_5,
      ticket_6,
      ticket_7,
      ticket_8,
      ticket_9,
      ticket_10
    ];

    let expected = [
      "LAX",
      "SFO",
      "BHM",
      "FLG",
      "XNA",
      "SAP",
      "SLC",
      "PIT",
      "ORD",
      "NONE"
    ];
    let result = reconstructTrip(tickets, 10);

    expect(expected).toEqual(result);
  });
});
