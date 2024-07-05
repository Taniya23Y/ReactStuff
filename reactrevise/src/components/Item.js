import "../components/Item.css";

const Item = (props) => {
  const itemName = props.name;
  return (
    <div className="Item">
      <p className="nirma">{itemName}</p>
    </div>
  );
};

export default Item;
