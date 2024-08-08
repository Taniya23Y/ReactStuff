import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    state: "",
    city: "",
    zipCode: "",
    comments: true,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function formHandler(event) {
    console.log(formData);

    const { name, value, type, checked } = event.target;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);

    let info = Object.keys(formData).map((key) => `${key} = ${formData[key]}`);
    // join() returns an array as a string
    info = info.join("\n");
    alert("Your Information \n \n " + info);
  }

  return (
    <div className="FormBox bg-[#c9cf76] w-full h-full p-5 overflow-hidden">
      <h1 className="text-center p-2 text-[#000] text-2xl ">
        <span className="underline font-bold">Fill the Form</span> ✏️
      </h1>
      <div className="formBar bg-[#ffff] w-3/6 text-black drop-shadow-xl rounded-md mx-auto flex items-center justify-center p-2">
        <form
          action=""
          onSubmit={submitHandler}
          className="w-full p-5 flex flex-col text-black"
        >
          {/* firstName field  */}
          <br />
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="taniya"
            onChange={formHandler}
            value={formData.firstName}
            className="bg-[#dee1e6] p-1 rounded-md"
          />
          <br />
          {/* lastName field  */}
          <label htmlFor="firstName">Last Name: </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="yadav"
            onChange={formHandler}
            value={formData.lastName}
            className="bg-[#dee1e6] p-1 rounded-md"
          />
          <br />
          {/* Email address field  */}
          <label htmlFor="firstName">Email address: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="taniya@gmail.com"
            onChange={formHandler}
            value={formData.email}
            className="bg-[#dee1e6] p-1 rounded-md"
          />
          <br />
          {/* country selection field  */}
          <label htmlFor="country">Select Your Country</label>
          <select
            name="country"
            id="country"
            onChange={formHandler}
            value={formData.country}
            className="bg-[#dee1e6] p-1 rounded-md"
          >
            <option value="India">India</option>
            <option value="Russia">Russia</option>
            <option value="USA">USA</option>
            <option value="Japan">Japan</option>
            <option value="England">England</option>
          </select>
          <br />
          {/* state selection field  */}
          <label htmlFor="state">Select Your State / Province</label>
          <select
            name="state"
            id="state"
            onChange={formHandler}
            value={formData.state}
            className="bg-[#dee1e6] p-1 rounded-md"
          >
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Andhra Pradesh">Arunachal Pradesh </option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh"> Himachal Pradesh </option>
            <option value="Jharkhand">Jharkhand</option>/
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Tripura">Tripura</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh </option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
          <br />
          {/* city selection field  */}
          <label htmlFor="city">Select Your City</label>
          <select
            name="city"
            id="city"
            onChange={formHandler}
            value={formData.city}
            className="bg-[#dee1e6] p-1 rounded-md"
          >
            <option value="Balaghat">Balaghat</option>
            <option value="Barwani">Barwani</option>
            <option value="Betul">Betul</option>
            <option value="Bharhut">Bharhut</option>
            <option value="Bhind">Bhind</option>
            <option value="Bhojpur">Bhojpur</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Burhanpur">Burhanpur</option>
            <option value="Chhatarpur">Chhatarpur</option>
            <option value="Chhindwara">Chhindwara</option>
            <option value="Damoh">Damoh</option>
            <option value="Dewas">Dewas</option>
            <option value="Gwalior">Gwalior</option>
            <option value="Hoshangabad">Hoshangabad</option>
            <option value="Indore">Indore</option>
            <option value="Itarsi">Itarsi</option>
            <option value="Jabalpur">Jabalpur</option>
            <option value="Jhabua">Jhabua</option>
            <option value="Khajuraho">Khajuraho</option>
            <option value="Sheopur">Sheopur</option>
            <option value="Shivpuri">Shivpuri</option>
            <option value="Ujjain">Ujjain</option>
            <option value="Vidisha">Vidisha</option>
          </select>
          <br />
          {/* street address field  */}
          <label htmlFor="streetAddress">Street address:</label>
          <textarea
            className="bg-[#dee1e6] p-1 rounded-md"
            name="streetAddress"
            id="streetAddress"
            onChange={formHandler}
            value={formData.streetAddress}
            placeholder="Vijay nagar, Indore India"
          ></textarea>
          <br />
          {/* zip / postal code field  */}
          <label htmlFor="zipCode">Zip | Postal code</label>
          <input
            type="text"
            name="zipCode"
            id="zipCode"
            placeholder="451335"
            onChange={formHandler}
            value={formData.zipCode}
            className="bg-[#dee1e6] p-1 rounded-md"
          />
          <br />
          <div className="mb-4">
            {/* fieldset and legend */}
            <label className="font-medium text-sm">By Email</label>

            <div className="flex items-start gap-4 mt-2">
              <div>
                <input
                  type="checkbox"
                  id="comments"
                  name="comments"
                  onChange={formHandler}
                  checked={formData.comments}
                  className="w-4 h-4 mt-[6px]"
                />
              </div>
              <div>
                <label htmlFor="comments" className="font-medium text-sm">
                  Comments
                </label>
                <p className="text-sm text-gray-500">
                  Get notified when someones posts a comment on a posting.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mt-2">
              <div>
                <input
                  type="checkbox"
                  id="candidates"
                  name="candidates"
                  onChange={formHandler}
                  checked={formData.candidates}
                  className="w-4 h-4 mt-[6px]"
                />
              </div>
              <div>
                <label htmlFor="candidates" className="font-medium text-sm">
                  Candidates
                </label>
                <p className="text-sm text-gray-500">
                  Get notified when a candidate applies for a job.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mt-2">
              <div>
                <input
                  type="checkbox"
                  id="offers"
                  name="offers"
                  onChange={formHandler}
                  checked={formData.offers}
                  className="w-4 h-4 mt-[6px]"
                />
              </div>
              <div>
                <label htmlFor="offers" className="font-medium text-sm">
                  Offers
                </label>
                <p className="text-sm text-gray-500">
                  Get notified when a candidate accepts or rejects an offer.
                </p>
              </div>
            </div>
          </div>

          <br />

          {/* push notification - radio */}
          <div className="mb-4">
            <label className="font-medium text-sm">Push Notifications</label>
            <p className="text-sm text-gray-500">
              These are delivered via SMS to your mobile phone.
            </p>

            <div className="flex gap-4 items-center mt-2">
              <input
                type="radio"
                id="radio1"
                name="pushNotifications"
                value="everything"
                onChange={formHandler}
                className="w-4 h-4"
              />
              <label htmlFor="radio1" className="font-medium text-sm">
                Everything
              </label>
            </div>

            <div className="flex gap-4 items-center mt-2">
              <input
                type="radio"
                id="radio2"
                name="pushNotifications"
                value="Same as email"
                onChange={formHandler}
                className="w-4 h-4"
              />
              <label htmlFor="radio2" className="font-medium text-sm">
                Same as email
              </label>
            </div>

            <div className="flex gap-4 items-center mt-2">
              <input
                type="radio"
                id="radio3"
                name="pushNotifications"
                value="No push notifications"
                onChange={formHandler}
                className="w-4 h-4"
              />
              <label htmlFor="radio3" className="font-medium text-sm">
                No push notifications
              </label>
            </div>
          </div>
          <br />
          <button
            type="submit"
            onChange={submitHandler}
            className="bg-blue-600 rounded-sm w-1/6 p-2"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
