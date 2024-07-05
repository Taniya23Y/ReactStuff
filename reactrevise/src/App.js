import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";

const App = () => {
  const itemTwoName = "SurfExcel";

  const response = [
    {
      itemName: "Nirma",
      itemDate: 20,
      itemMonth: "June",
      itemYear: 1998,
    },
    {
      itemName: "Nirma",
      itemDate: 20,
      itemMonth: "June",
      itemYear: 1998,
    },
    { itemName: "Nirma", itemDate: 20, itemMonth: "June", itemYear: 1998 },
  ];
  return (
    <div>
      <Item name="Nirma"></Item>
      <ItemDate day="20" month="June" year="1998"></ItemDate>
      <Item name={itemTwoName}></Item>
      <ItemDate day="22" month="July" year="1999"></ItemDate>
      <Item name="Fena"></Item>
      <ItemDate day="24" month="August" year="2000"></ItemDate>
      <div className="App">Hello ReactFolio</div>;
    </div>
  );
};

export default App;
