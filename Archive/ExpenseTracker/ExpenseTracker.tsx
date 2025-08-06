import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState<any>([]);

  return (
    <div className="container">
      <h1 className="text-center my-4">Expense Tracker</h1>
      <ExpenseForm onSubmit={(data: any) => setExpenses([...expenses, data])} />
      <ExpenseTable
        expenses={expenses}
        onDelete={(index: number) => {
          setExpenses(expenses.filter((item: any, i: number) => i !== index));
        }}
      />
    </div>
  );
}

export default ExpenseTracker;
