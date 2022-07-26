import React from "react";
import TableLayout from "../TableLayout";

const TableWithRewardPoints = ({ transactionWithRewardPoints }) => {
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
      {/* map the months header */}
      {transactionWithRewardPoints.map((item) => {
        const customerIdArr = getCustomerId(item);
        return (
          <div key={item.key}>
            <h1>{item.key}</h1>
            {/* map the customer Id */}
            {customerIdArr.map((item) => {
              return (
                <TableLayout
                  key={item.key}
                  item={item}
                  getTotalAwardPoints={getTotalAwardPoints}
                >
                  {/* map the table rows */}
                  {item.value.map((item) => {
                    const { transactionId, purchase, date, rewardPoints } =
                      item;
                    return (
                      <tr key={transactionId}>
                        <td>{transactionId}</td>
                        <td>${purchase}</td>
                        <td>
                          {`${date.toLocaleString("en-US", {
                            month: "long",
                          })}  ${date.getDate()}`}
                        </td>
                        <td>{rewardPoints}</td>
                      </tr>
                    );
                  })}
                </TableLayout>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default TableWithRewardPoints;
