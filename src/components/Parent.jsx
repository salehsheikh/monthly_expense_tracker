import React, { useState } from 'react';
import Form from './Form';
import { Cards } from './Cards';

const ParentComponent = () => {
  const [budget, setBudget] = useState(0);
  const [inputBudget, setInputBudget] = useState(0);

  const handleBudgetChange = (e) => {
    setInputBudget(e.target.value);
  };

  const handleSetBudget = () => {
    setBudget(inputBudget);
  };

  return (
    <div>
      <Form handleBudgetChange={handleBudgetChange} handleSetBudget={handleSetBudget} />
      <Cards budget={budget} />
    </div>
  );
};

export default ParentComponent;
