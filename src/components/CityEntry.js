import React, { useState } from 'react';
import axios from 'axios';
import Categories from './Categories';

export default function CityEntry({ budget, setBudget }) {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Now you can use the state variables country, city, budget, dateFrom, and dateTo
    // to perform any further actions, such as making API requests.
    
    // Define your request body
    const requestBody = {
      country: country,
      city: city,
      budget: budget,
      dateFrom: dateFrom,
      dateTo: dateTo
    };

    console.log(requestBody);

    // Make your API request here
    // axios.post('http://192.168.90.239:5000', requestBody)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  };

  return (
    <>
      <form className='form-box' onSubmit={handleSubmit}>
        <div className='country-grid'>
          <div className='align-inputs'>
            <h4 htmlFor="countries">Country</h4>
            <select
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
            </select>
          </div>

          <div className='align-inputs'>
            <h4>City</h4>
            <input
              type="text"
              placeholder="e.g. Lisbon"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              style={{ width: '120px' }}
            />
          </div>
        </div>

        <div>
          <h4 style={{ marginLeft: '1rem' }}>Date Range</h4>
          <div className='country-grid'>
            <div className='align-inputs'>
              <h4>From:</h4>
              <input
                type="date"
                placeholder="From Date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}

              />
            </div>
            <div className='align-inputs'>
              <h4>To:</h4>
              <input
                type="date"
                placeholder="To Date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className='align-inputs'>
          <h4>Budget Allocation</h4>
          <input
            type="text"
            placeholder="e.g 10000€"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            style={{ width: '308px' }}
          />
        </div>
        
        <div className='categories-container'>
          <Categories />
        </div>

        <button style={{ marginTop: '1rem' }}>Submit</button>
      </form>
    </>
  )
}