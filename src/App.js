import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "India",
    streetAddress: "", city: "", state: "", postalCode: "",
    comments: false, candidates: false, offers: false, pushNotifications: ""
  })


  function changeHandler(e) {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(formData); 
  }

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={submitHandler}>

        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="firstName"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
        />

        <br />

        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="lastName"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline"
        />

        <br />

        <label htmlFor="email">Email Address</label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="email"
          value={formData.email}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline"
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <br />
        <label htmlFor="streetAddress">Street Address</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="streetAddress"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="city"
          value={formData.city}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <label htmlFor="state">State / Province</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="state"
          value={formData.state}
          onChange={changeHandler}
          className="outline"
        />
        <br />
        <label htmlFor="postalCode">Zip / Postal Code</label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="postalCode"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline"
        />

<br /><br />

        <fieldset>
          <legend>By Email</legend>

          <div className="flex">
            <input
              id="comments"
              type="checkbox"
              name="commets"
              value={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someones posts a comment one a posting</p>
            </div>
          </div>


          <div className="flex">
            <input
              id="candidates"
              type="checkbox"
              name="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job</p>
            </div>
          </div>
          
          
          <div className="flex">
            <input
              id="offers"
              type="checkbox"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or reject an offer</p>
            </div>
          </div>
        </fieldset>

<br /><br />

        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delived via SMS to your mobile phone.</p>

          <input
          type="radio"
          id="pushEverthing"
          name="pushNotifications"
          value="Everything"
          onChange={changeHandler}
          />
          <label htmlFor="pushEverthing">Everything</label>
          
          <br />
           
          <input
          type="radio"
          id="pushEmail"
          name="pushNotifications"
          value="Same as Email"
          onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Same as Email</label>
          
          <br />

          <input
          type="radio"
          id="pushNothing"
          name="pushNotifications"
          value="No Push Notification"
          onChange={changeHandler}
          />
          <label htmlFor="pushNothing">No Push Notification</label>
        </fieldset>

        <br />

        <button className="bg-blue-500 text-white font-bold rounded py-2 px-4 ">Save</button>

      </form>
    </div>
  );
}

export default App;
