import ExpenceItem from "./ExpenceItem";
import "./ExpenceItem.css";
import ExpensesFilter from "../UI/ExpenceFilter";
import Card from "../UI/Card";
import "../UI/Card.css";
import ExpenceList from "./ExpenceList";
const Expences = (props) => {
  const sendYear = (data) => {
    props.year(data);
  };

  console.log(props.items);

  return (
    <Card className="expenses">
      <ExpensesFilter onGetYear={sendYear}></ExpensesFilter>
      <ExpenceList items={props.items}></ExpenceList>
    </Card>
  );
};

export default Expences;
