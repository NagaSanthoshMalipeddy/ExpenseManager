import './ExpenceList.css'
import ExpenceItem from './ExpenceItem';
const ExpenceList = (props) => {

    if(props.items.length==0){
        return <h1 className='expenses-list__fallback'>No Expenses Found</h1>;
    }

  return (
    <ul className="expenses-list">
      {props.items.map((expence) => (
        <ExpenceItem
          key={expence.id}
          title={expence.title}
          date={expence.date}
          amount={parseFloat(expence.amount)}
        ></ExpenceItem>
      ))}
    </ul>
  );
};

export default ExpenceList;
