import ExpenceForm from "./ExpenceForm";
import './NewExpence.css';
const NewExpence = (props) => {
    const expenceData = (data) => {
      const exp = {
        ...data,
        id: Math.random().toString()
      };
        props.onAddExpence(exp);
    }
  return (
    <div className="new-expense">
      <ExpenceForm onSetExpenceData = {expenceData}></ExpenceForm>
    </div>
  );
};

export default NewExpence;
