import "./ExpenceItem.css";
import ExpenceDate from "./ExpenceDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenceItem = (props) => {

  const [title, setTitle] = useState(props.title);
  //console.log(title);
  // const butclick = () => {
  //   setTitle('updated!!!');
  //   console.log("Clicked!!!");
  // };
  //console.log('hii');

  return (
    <div>
      <Card className="expense-item">
      <div>
        <ExpenceDate date={props.date}></ExpenceDate>
      </div>
      <div className="expense-item__description">
        <h1>{props.title}</h1>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      {/* <button onClick={butclick}>Click</button> */}
    </Card>
    </div>
    
  );
};

export default ExpenceItem;
