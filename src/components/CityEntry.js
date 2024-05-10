import React, { useState } from "react";
import axios from "axios";
import Categories from "./Categories";

export default function CityEntry({ mainBudget, setMainBudget }) {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [budget, setBudget] = useState("");

  const [dailyValue, setDailyValue] = useState("");
  const [trip, setTrip] = useState(null);

  const handleDailyValue = (event) => {
    setDailyValue(event.target.value);
  }

  const changeBudget = (event) => {
    event.preventDefault();
    setBudget(budget - dailyValue);
    setMainBudget(mainBudget - dailyValue);
  }

  const handleSubmit = (event) => {
    console.log("Submit button clicked");
    event.preventDefault(); // Prevents the default form submission behavior

    // Now you can use the state variables country, city, budget, dateFrom, and dateTo
    // to perform any further actions, such as making API requests.

    // Define your request body
    const requestBody = {
      tp: budget,
      loc: city,
      sd: dateFrom,
      ed: dateTo,
    };

    console.log(requestBody);

    //Make your API request here
    axios
      .post("http://192.168.90.55:5000/trips?email=stuff@com", requestBody)
      .then((response) => {
        console.log(response.data);
        setMainBudget(mainBudget + budget);

        setTrip(response.data)

      })
      .catch((error) => {
        console.error("_________Error:", error);
      });
  };

  return (
    <>
      <form className="form-box" onSubmit={handleSubmit}>
        <div className="country-grid">
          <div className="align-inputs">
            <h4 htmlFor="countries">Country</h4>
            { trip ? 
            <p style={{color:'gray'}}>Portugal</p>
             : <select
              name="countries"
              id="countries"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Select a country</option>
              <option value="portugal">Portugal</option>
              <option value="spain">Spain</option>
              <option value="uk">United Kingdom</option>
              <option value="germany">Germany</option>
              <option value="france">France</option>
              <option value="brazil">Brazil</option>
              <option value="usa">USA</option>
            </select>}
            
          </div>

          <div className="align-inputs">
            <h4>City</h4>

            { trip ? 
            <p style={{color:'gray'}}>{trip.location}</p>
             : <input
             type="text"
             placeholder="e.g. Lisbon"
             value={city}
             onChange={(e) => setCity(e.target.value)}
             style={{ width: "120px" }}
           />
            }

            
          </div>
        </div>

        <div>
          <h4 style={{ marginLeft: "1rem" }}>Date Range</h4>
          <div className="country-grid">
            <div className="align-inputs">
              <h4>From:</h4>
              { trip ? 
            <p style={{color:'gray'}}>{trip.startDate}</p> : 
              <input
                type="date"
                placeholder="From Date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
            }
            </div>
            <div className="align-inputs">
              <h4>To:</h4>
              { trip ? 
            <p style={{color:'gray'}}>{trip.endDate}</p> : 
              <input
                type="date"
                placeholder="To Date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />}
            </div>
          </div>
        </div>

        <div className="align-inputs">
          <h4>Budget Allocation</h4>
          { trip ? 
            <p style={{color:'gray'}}>{trip.Totalprice} €</p> : 
          <input
            type="text"
            placeholder="e.g 10000€"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            style={{ width: "308px" }}
          />
        }
        </div>

        <div className="categories-container">
          <Categories />
        </div>

        <button style={{ marginTop: "1rem" }} onClick={handleSubmit}>
          Submit
        </button>
      </form>


    <form>
        <input onChange={handleDailyValue}/>
        <button style={{ marginTop: "1rem" }} onClick={changeBudget}>
          Add Daily Value
        </button>
    </form>

    </>
  );
}
