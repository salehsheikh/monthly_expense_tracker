import React, { useState, useEffect } from "react";
import Form from "./Form";
import { Cards } from "./Cards";
import ExpenseForm from "./ExpenseForm";
const Parent = () => {
  const [budget, setBudget] = useState(0);
  const [inputBudget, setInputBudget] = useState(0);
  const [expense, setExpense] = useState(0);
  const [inputExpense, setInputExpense] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [incomeName, setIncomeName] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  // Update remaining budget whenever budget or expense changes
  useEffect(() => {
    const remaining = budget - expense;
    setRemainingBudget(remaining);
  }, [budget, expense]);

  const handleBudgetChange = (e) => {
    setInputBudget(e.target.value);
  };

  const handleSetBudget = (e) => {
    setBudget(inputBudget);
  };

  //for updating
  const handleNameChange = (e) => {
    setIncomeName(e.target.value);
  };

  const handleAmountChange = (e) => {
    setIncomeAmount(e.target.value);
  };
  // Handler for adding income
  const handleAddIncome = () => {
    // Convert incomeAmount and current budget to numbers
    const currentBudget = parseFloat(budget);
    const income = parseFloat(incomeAmount);

    // Add income to the budget
    setBudget(currentBudget + income);

    // Clear input fields
    setIncomeName("");
    setIncomeAmount("");
  };

  //handler for adding  expense
  const handleExpenseChange = (e) => {
    setInputExpense(e.target.value);
  };

  const handleSetExpense = (e) => {
    setExpense(inputExpense);
  };

  const handleResetBudget=()=>{
    setBudget("");
    setIncomeAmount("");
  }

  return (
    <div>
      <Cards
        budget={budget}
        expense={expense}
        remainingBudget={remainingBudget}
        incomeAmount={incomeAmount}
      />
      <Form
        handleBudgetChange={handleBudgetChange}
        handleSetBudget={handleSetBudget}
        handleAddIncome={handleAddIncome}
        handleAmountChange={handleAmountChange}
        handleNameChange={handleNameChange}
        incomeAmount={incomeAmount}
        incomeName={incomeName}
        handleResetBudget={handleResetBudget}
      />
      <ExpenseForm
        handleExpenseChange={handleExpenseChange}
        handleSetExpense={handleSetExpense}
      />
    </div>
  );
};

export default Parent;
