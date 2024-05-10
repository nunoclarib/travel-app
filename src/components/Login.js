import React, { useState } from 'react';
import axios from 'axios';
//import Categories from './Categories';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import styled from "styled-components";


export default function Login() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
//   const [food, setDateTo] = useState('');
//   const [food, setDateTo] = useState('');

const navigate = useNavigate();

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
    axios.get(url + '/users?email=' + requestBody.email + '&password=' + requestBody.password)
      .then((response) => {
        console.log(response.data);
        navigate("/");
    })
      .catch((error) => {
        console.error('_________Error:', error);
      });
  };

  return (
    <>
    <Navbar/>
      <form className='form-box' onSubmit={handleSubmit}>
        <div className='form-row'>
            <label htmlFor='email'>Email</label>
            <input
              type="text"
              placeholder="e.g. trip_lisbon@celfocus.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className='form-row'>
            <label htmlFor='password'>Password</label>
            <input
              type="password"
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
        </div>
      </form>
      <style>
        {`
        .form-box {
            background-color: #F2F2F2;
            width: 350px;
            margin: auto;
            padding: 20px;
            border: 1px solid #014748;
            border-radius: 8px;
            margin-top: 70px;
          }

        .form-row {
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        input[type='text'],
        input[type='password'] {
          width: calc(100% - 10px);
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        input[type='text']:focus,
        input[type='password']:focus {
          outline: none;
          border-color: #014748;
        }

        button {
            display: block;
            width: 80px;
            padding: 10px;
            margin-top: 30px;
            margin-left: auto;
            margin-right: auto;
            font-weight: bold;
            font-size: 16px; 
            background-color: transparent;
            border: none;
        }
        `}
      </style>

      <SubmitButton src="https://cdn.builder.io/api/v1/image/assets/TEMP/6628dc334149af0458d4d819e4f8d09ef6430e8867e62a3bb78b66d643039eab?apiKey=16c7c9da614b490c942cd9907250fc80&" alt="Submit" onClick={handleSubmit} />
      <button>Sign in</button>
    </>
  )
}

const SubmitButton = styled.img`
  aspect-ratio: 1.01;
  object-fit: auto;
  object-position: center;
  width: 69px;
  display: block; /* Define a imagem como um bloco */
  margin: 0 auto; /* Centraliza horizontalmente */
  margin-top: 21px;
`;
