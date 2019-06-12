import {
  GET_BUDGET,
  GET_EXPENSES,
  DELETE_EXPENSE,
  TOGGLE_EDIT,
  EDIT_EXPENSE
} from "../types";
import uuidv4 from "uuid/v4";

const initialState = {
  budget: 0,
  expenses: [],
  expAmount: 0,
  expense: 0
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUDGET:
      return {
        ...state,
        budget: action.payload
      };
    case GET_EXPENSES:
      return {
        ...state,
        expenses: [
          ...state.expenses,
          {
            expense: action.payload.expense,
            expAmount: action.payload.expAmount,
            id: uuidv4()
          }
        ],
        expense: action.payload.expense,
        expAmount: action.payload.expAmount
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(expense => {
          return expense.id !== action.id;
        })
      };
    case TOGGLE_EDIT:
      return {
        ...state,
        expenses: state.expenses.map(expense => {
          if (expense.id === action.id) {
            expense = {
              ...expense,
              isEdit: !expense.isEdit
            };
          }
          return expense;
        })
      };

    case EDIT_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.map(expense => {
          if (expense.id === action.payload.id) {
            expense = {
              ...action.payload,
              isEdit: false
            };
          }
          return expense;
        }),
        expense: action.payload.expense,
        expAmount: action.payload.expAmount
      };

    default:
      return state;
  }
};

export default budgetReducer;
