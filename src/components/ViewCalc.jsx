import React from "react";
import style from "./viewCalc.module.css";
import Expenses from "./Expenses";
import ExpenseForm from "./ExpenseForm";

//Redux
import { connect } from "react-redux";
import {
  deleteExpense,
  toggleEdit,
  editExpense
} from "../redux/actions/budgetActions.js";

const ViewCalc = ({
  expenses,
  budget,
  deleteExpense,
  toggleEdit,
  editExpense
}) => {
  return (
    <>
      <div className={style.viewCalc}>
        <div>
          <h4>Budget</h4>
          <p className="green">{budget}$</p>
        </div>
        <div>
          <h4>Expenses</h4>
          <p>0$</p>
        </div>
        <div>
          <h4>Balance</h4>
          <p className={budget >= 0 ? "green" : "red"}>${budget}</p>
        </div>
      </div>
      {expenses.map(expense => {
        return (
          <div key={expense.id}>
            {expense.isEdit === true ? (
              <ExpenseForm expense={expense} editExpense={editExpense} />
            ) : (
              <Expenses
                expense={expense}
                deleteExpense={deleteExpense}
                toggleEdit={toggleEdit}
              />
            )}
          </div>
        );
      })}
    </>
  );
};

const mapStateToProps = state => {
  return {
    budget: state.budget.budget,
    expenses: state.budget.expenses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteExpense: id => dispatch(deleteExpense(id)),
    toggleEdit: id => dispatch(toggleEdit(id)),
    editExpense: expense => dispatch(editExpense(expense))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewCalc);
