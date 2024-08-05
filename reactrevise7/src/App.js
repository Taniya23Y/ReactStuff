import "./App.css";
import { useState } from "react";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);

  // function changeFirstHandler(event) {
  //   console.log("Printing First Name");
  //   setFirstName(event.target.value); // prints all value which is written in input
  //   // console.log(event.target); // prints particular element(input element)
  // }

  // function changeSecondHandler(event) {
  //   console.log("Printing Second Name");
  //   setLastName(event.target.value); // prints all value which is written in input
  //   // console.log(event.target); // prints particular element(input element)
  // }

  //* objects
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  console.log(formData.firstName);
  console.log(formData.lastName);
  console.log(formData.email);

  function changeHandler(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="App ">
      <form action="">
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          // onChange={changeFirstHandler}
          onChange={changeHandler}
        />
        <br />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="last name"
          // onChange={changeSecondHandler}
          onChange={changeHandler}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="abc@gmail.com"
          onChange={changeHandler}
        />
      </form>
    </div>
  );
}

export default App;
