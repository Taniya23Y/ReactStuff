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
    comments: "",
    isVisible: false,
    mode: "",
    favSubject: "",
  });

  // console.log(formData.firstName);
  // console.log(formData.lastName);
  // console.log(formData.email);

  console.log(formData);

  function changeHandler(event) {
    // jis bhi element ke liye hua hai use likh lete hain
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    // Send or Print
    console.log("finally printing the entireForm Data");
  }

  return (
    <div className="App ">
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          // onChange={changeFirstHandler}
          onChange={changeHandler}
          value={formData.firstName} //* controlled Components = [maintain state inside the components]
        />
        <br />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="last name"
          // onChange={changeSecondHandler}
          onChange={changeHandler}
          value={formData.lastName} //* controlled Components = [maintain state inside the components]
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="abc@gmail.com"
          onChange={changeHandler}
          value={formData.email} //* controlled Components = [maintain state inside the components]
        />

        <br />
        <br />
        <textarea
          name="comments"
          onChange={changeHandler}
          placeholder="Enter Your Comments!"
          value={formData.comments}
        />

        <br />
        <br />

        <input
          type="checkbox"
          id="isVisible"
          name="isVisible"
          onChange={changeHandler}
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am I Visible ?</label>

        <br />
        <br />
        <fieldset>
          <legend>Mode:</legend>
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="online-mode"
            id="online-mode"
          />
          <label htmlFor="online-mode">Online Mode</label>

          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="offline-mode"
            id="offline-mode"
            checked={formData.mode === "offline-mode"}
          />
          <label htmlFor="offline-mode">Offline Mode</label>
        </fieldset>

        <br />

        <label htmlFor="favSubject">Choice Your Favourite Subject: </label>
        <select
          name="favSubject"
          id="favSubject"
          value={formData.favSubject}
          onChange={changeHandler}
        >
          <option value="Science">Science</option>
          <option value="Social-study">Social-study</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Maths">Maths</option>
        </select>

        <br />
        {/* <button type="submit">Submit</button> */}
        <input value="submit" type="submit" />
      </form>
    </div>
  );
}

export default App;
