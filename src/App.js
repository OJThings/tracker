import React, { useState, useEffect } from "react";
import IncomeForm from "./components/IncomeForm";
import Header from "./components/Header";
import IncomeList from "./components/IncomeList";

function App() {
  const [income, setIncome] = useState([]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < income.length; i++) {
      temp += parseInt(income[i].price);
    }

    setTotal(temp);
  }, [income]);
  return (
    <div className="App">
      <Header total={total} />
      <IncomeForm income={income} setIncome={setIncome} />
      {income.length > 0 ? income[0].desc : ""}
      <IncomeList income={income} setIncome={setIncome} />
    </div>
  );
}

export default App;
