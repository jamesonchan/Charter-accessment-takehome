import { useMemo } from "react";
import "./App.css";
import TableWithRewardPoints from "./components/TableWIthRewardPoints";
import { useLoadingWithDataFetch } from "./transactionHooks/hooks";

// A retailer offers a rewards program to its customers, awarding points based on each recorded
// purchase.
// A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point
// for every dollar spent over $50 in each transaction
// (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
// Given a record of every transaction during a three month period, calculate the reward points
// earned for each customer per month and total.
// · Use React JS (do not use TypeScript)
// · Simulate an asynchronous API call to fetch data
// · Make up a data set to best demonstrate your solution
// · Check solution into GitHub

function App() {
  // use custom hook for fetching and loading
  const { isLoading, transaction } = useLoadingWithDataFetch();
  // get the total reward points
  const getTotalRewardPoints = (purchase) => {
    if (purchase < 50) return 0;
    else if (purchase > 100) return (Math.floor(purchase) - 100) * 2 + 50;
    else return purchase - 50;
  };

  // use map to categorize by Months and customers
  // also use memoization to avoid reduntant updates
  // map structure: {july: { 101:[{transactionId:1, customerId:101, purchase:100, date:july}...]}, june: { 102:[{}...]}}
  const transactionDataWithRewardPoints = useMemo(() => {
    const transactionMap = new Map();
    const resultArr = [];

    // filter by month
    const filterByMonth = (trans) => {
      return transaction.filter((item) => {
        return item.date.getMonth() === trans.date.getMonth();
      });
    };

    // filter by customer Id
    const filterByCustomerId = (arr, trans) => {
      return arr.filter((item) => {
        return item.customerId === trans.customerId;
      });
    };

    // calculate reward points
    const calculateRewardPoints = (arr) => {
      return arr.map((item) => {
        return {
          ...item,
          rewardPoints: getTotalRewardPoints(item.purchase),
        };
      });
    };

    // categorize by month
    for (let trans of transaction) {
      const tempMap = new Map();
      const filteredByMonthArray = filterByMonth(trans);
      // categorize by customerId with nested obj in the map
      for (let trans of filteredByMonthArray) {
        const filteredByCustomerArray = filterByCustomerId(
          filteredByMonthArray,
          trans
        );
        // calculate the reward points
        const customerArrayWithRewardPoints = calculateRewardPoints(
          filteredByCustomerArray
        );
        // use an inner map to categorize customerId
        tempMap.set(trans.customerId, customerArrayWithRewardPoints);

        transactionMap.set(
          trans.date.toLocaleString("en-US", { month: "long" }),
          tempMap
        );
      }
    }

    for (let [key, value] of transactionMap) {
      resultArr.push({ key, value });
    }
    return resultArr;
  }, [transaction]);

  return (
    <div className="App">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <TableWithRewardPoints
          transactionWithRewardPoints={transactionDataWithRewardPoints}
        />
      )}
    </div>
  );
}

export default App;
