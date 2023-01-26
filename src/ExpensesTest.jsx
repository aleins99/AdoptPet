import { expenses } from "./expenseList";
import React from "react";
import Expense from "./Expense";
const ExpenseTest = () => {
  return (
    <div className="search">
      {!expenses.length ? (
        <h1>No expenses found</h1>
      ) : (
        expenses.map((expense) => (
          <Expense
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))
      )}
    </div>
  );
};

export default ExpenseTest;
