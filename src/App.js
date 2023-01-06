import React from "react";
import Expences from "./components/Expences/Expences";
import NewExpence from "./components/NewExpences/NewExpence";
import { useState } from "react";
import AddExpenseButton from "./components/NewExpences/AddExpenceButton";
import ExpenceChart from "./components/Expences/ExpencesChart";
const dummy_expences = [
  { id: 1, date: new Date(2020, 2, 20), amount: 500, title: "movies" },
  { id: 2, date: new Date(2020, 3, 23), amount: 100, title: "grocerries" },
  {
    id: 3,
    date: new Date(2020, 4, 22),
    amount: 200,
    title: "home appliances",
  },
  { id: 4, date: new Date(2020, 5, 21), amount: 300, title: "charges" },
];
const App = () => {
  const [expences, setExpences] = useState(dummy_expences);
  const [year, setYear] = useState(2021);
  const [btnflag,setbtnflag] = useState(true);

  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement(Expences, { items: expences })
  // );

  console.log(expences);
  const addExpence = (data) => {
    setExpences((prev) => {
      return [data, ...prev];
    });
    setbtnflag(!btnflag);
  };

  const getYear = (year) => {
    setYear(year);
  };

  const btnClick = ()=> {
    setbtnflag(!btnflag);
  }

  return (
    <div className="App">
     {btnflag && <AddExpenseButton onButClick = {btnClick}></AddExpenseButton>}
     {!btnflag && <NewExpence onAddExpence={addExpence}></NewExpence>}
     <ExpenceChart expences = {expences.filter((exp) => exp.date.getFullYear() == year)}></ExpenceChart>
      <Expences
        items={expences.filter((exp) => exp.date.getFullYear() == year)}
        year={getYear}
      ></Expences>
    </div>
  );
};

export default App;
