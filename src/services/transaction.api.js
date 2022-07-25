const transaction = [
  {
    transactionId: 1,
    customerId: 101,
    purchase: 100,
    date: new Date("July 20, 69 00:20:18"),
  },
  {
    transactionId: 2,
    customerId: 103,
    purchase: 60,
    date: new Date("June 10, 69 00:20:18"),
  },
  {
    transactionId: 3,
    customerId: 101,
    purchase: 203,
    date: new Date("May 12, 69 00:20:18"),
  },
  {
    transactionId: 4,
    customerId: 102,
    purchase: 300.5,
    date: new Date("July 20, 69 00:20:18"),
  },
  {
    transactionId: 5,
    customerId: 102,
    purchase: 376.9,
    date: new Date("June 02, 69 00:20:18"),
  },
  {
    transactionId: 6,
    customerId: 104,
    purchase: 418.9,
    date: new Date("June 07, 69 00:20:18"),
  },
  {
    transactionId: 7,
    customerId: 105,
    purchase: 117.9,
    date: new Date("May 03, 69 00:20:18"),
  },
  {
    transactionId: 8,
    customerId: 106,
    purchase: 41,
    date: new Date("May 12, 69 00:20:18"),
  },
  {
    transactionId: 9,
    customerId: 105,
    purchase: 115.9,
    date: new Date("May 02, 69 00:20:18"),
  },

  {
    transactionId: 10,
    customerId: 103,
    purchase: 112.9,
    date: new Date("June 04, 69 00:20:18"),
  },
];

export const fetchTransactionData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(transaction);
    }, 1000);
  });
};
