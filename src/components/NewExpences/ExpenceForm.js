import "./ExpenseForm.css";
import { useState } from "react";
const ExpenceForm = (props) => {
  const [titleChange, setTitleChange] = useState("");
  const [amountChange, setAmountChange] = useState("");
  const [dateChange, setDateChange] = useState("");
  // const [userInput, setUserInput] = useState({
  //     titleChange: '',
  //     amountChange:'',
  //     dateChange:''
  // })

  const titleChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //     titleChange:event.target.value
    // })
    setTitleChange(event.target.value);

    //     // setUserInput((prev)=>{
    //     //     return {...prev,titleChange:event.target.value}                // use this syntax if current state depends on previous state
    //     // })
  };
  const amountChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //     amountChange:event.target.value
    // })
    setAmountChange(event.target.value);
  };
  const dateChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //     dateChange:event.target.value
    // })
    setDateChange(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const expenceData = {
      title: titleChange,
      amount: +amountChange,
      date: new Date(dateChange),
    };
    if (titleChange != "" && amountChange != "" && dateChange != "") {
      props.onSetExpenceData(expenceData);
      setTitleChange("");
      setAmountChange("");
      setDateChange("");
    }
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={titleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2000-1-1"
            max="3000-12-31"
            onChange={dateChangeHandler}
            value={dateChange}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Insert Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenceForm;
