import './AddExpenseButton.css';
const AddExpenseButton = (props) => {

    const flagChange = ()=> {
        props.onButClick();
    }

    return <button className="btn-style" onClick={flagChange}>ADD EXPENCE</button>

}

export default AddExpenseButton;