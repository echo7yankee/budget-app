import React from "react";
import BudgetForm from "./components/BudgetForm";
import ExpenseForm from "./components/ExpenseForm";
import ViewCalc from "./components/ViewCalc";

import { expense } from "./components/types";

function App() {
  return (
    <div className="container">
      <div className="center-container">
        <h4>Easy budget</h4>
      </div>
      <BudgetForm />
      <ExpenseForm expense={expense} />
      <span className="border" />
      <ViewCalc />
    </div>
  );
}

export default App;
