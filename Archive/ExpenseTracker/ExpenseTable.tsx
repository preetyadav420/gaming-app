import "bootstrap/dist/css/bootstrap.css";
import React from "react";

function ExpenseTable(props: any) {
  const { expenses, onDelete } = props;
  const [selectedValue, setSelectedValue] = React.useState("");

  const filteredExpenses = expenses.filter(
    (expense: any) => !selectedValue || expense.category === selectedValue
  );

  return (
    <>
      <select
        className="form-select mb-3"
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        <option value="" selected>
          All Category
        </option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense: any, index: number) => (
            <tr key={index}>
              <td>{expense.description}</td>
              <td>{expense.Amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          {filteredExpenses.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center">
                NO DATA
              </td>
            </tr>
          ) : (
            <tr>
              <td colSpan={3} className="text-end">
                Total:
              </td>
              <td>
                {expenses
                  .filter(
                    (expense: any) =>
                      !selectedValue || expense.category === selectedValue
                  )
                  .reduce(
                    (total: number, expense: any) =>
                      total + parseInt(expense.Amount),
                    0
                  )}
              </td>
            </tr>
          )}
        </tfoot>
      </table>
    </>
  );
}

export default ExpenseTable;
