import React, { memo } from "react";

const TableWithRewardPoints = memo(({ parsedTransaction }) => {
  //   get each customer id to render
  const getCustomerId = (item) => {
    const result = [];
    for (let [key, value] of Object.values(item)[1]) {
      result.push({ key, value });
    }
    return result;
  };

  //   calculate total reward points for each customer
  const getTotalAwardPoints = (item) => {
    return item.value
      .map((item) => item.rewardPoints)
      .reduce((value, count) => value + count, 0);
  };

  return (
    <>
      {parsedTransaction.map((item) => {
        const customerIdArr = getCustomerId(item);
        return (
          <div key={item.key}>
            <h1>{item.key}</h1>
            {customerIdArr.map((item) => {
              return (
                <div key={item.key}>
                  <h2>Customer Id:{item.key}</h2>
                  <h3>Total Reward Points: {getTotalAwardPoints(item)}</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Transaction Id</th>
                        <th>Purchase</th>
                        <th>Date</th>
                        <th>Reward Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.value.map((item) => {
                        return (
                          <tr key={item.transactionId}>
                            <td>{item.transactionId}</td>
                            <td>${item.purchase}</td>
                            <td>
                              {`${item.date.toLocaleString("en-US", {
                                month: "long",
                              })}  ${item.date.getDate()}`}
                            </td>
                            <td>{item.rewardPoints}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
});

export default TableWithRewardPoints;
