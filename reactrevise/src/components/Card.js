import "./Card.css";

const Card = (props) => {
  /*In React, props.children is a special prop that allows you to pass 
  components as data to other components. It represents any content that 
  is placed between the opening and closing tags of a component.*/
  return <div className="card">{props.children}</div>;
};

export default Card;
