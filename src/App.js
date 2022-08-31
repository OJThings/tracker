import React, { useState, useEffect } from "react";
import IncomeForm from "./components/IncomeForm";
import Header from './components/Header'

function App() {
  const [income, setIncome] = useState([]);

  const [total, setTotal] = useState(0);


  return (
  
    
    <div className="App">

      <Header total={total}/>
      <IncomeForm income={income} setIncome={setIncome}/>
      {(income.length > 0) ? income[0].desc: ''}
    </div>
  
  
  
    )
}

export default App;
