import './Card.css'
const Card = (props) => {
    const cs = 'card '+props.className;
  return <div className={cs}>{props.children}</div>;
}

export default Card;