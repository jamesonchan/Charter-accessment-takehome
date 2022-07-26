import React from "react";

const TableLayout = (props) => {
  const { item, children, getTotalAwardPoints } = props;
  return (
    <div>
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
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default TableLayout;
