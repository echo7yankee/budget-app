import uuidv4 from "uuid/v4";

export const expense = () => {
  return {
    expense: "",
    expAmount: "",
    id: uuidv4(),
    isEdit: false
  };
};
