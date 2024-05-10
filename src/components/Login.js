import React, { useState } from 'react';
import axios from 'axios';
//import Categories from './Categories';

export default function Login() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
//   const [food, setDateTo] = useState('');
//   const [food, setDateTo] = useState('');

  const handleSubmit = (event) => {

    console.log('Submit button clicked');
    event.preventDefault(); // Prevents the default form submission behavior

    // Now you can use the state variables country, city, budget, dateFrom, and dateTo
    // to perform any further actions, such as making API requests.
    
    // Define your request body
    const requestBody = {
      email: email, 
      password: password,
    };

    const url = 'http://192.168.90.151:5000'

    console.log(requestBody);

    //Make your API request here                            //ver qual a api dos users
    axios.post(url + '/signup', requestBody)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('_________Error:', error);
      });
  };

  return (
    <>
      <form className='form-box' onSubmit={handleSubmit}>
        <div className='align-inputs'>
            <h4>Email</h4>
            <input
              type="text"
              placeholder="e.g. Johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}     /* verificar*/
              style={{ width: '308px' }}
            />
        </div>
        <div className='align-inputs'>
            <h4>Password</h4>
            <input
              type="password"
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}     /* verificar e por estilo de password*/
              style={{ width: '308px' }}
            />
        </div>
       
          {/* <div className='align-inputs'> */}
     

          <button style={{ display: 'flex' ,  justifycontent: 'center' , borderRadius:'6px' , backgroundColor:'#014748' , color:'#FFFFFF' , marginTop: '1rem' , width: '100px' , height:'40px'}} onClick={handleSubmit}>Submit</button>
        
      </form>
    </>
  )
}