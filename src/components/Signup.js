import React, { useState } from 'react';
import axios from 'axios';
import Categories from './Categories';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

export default function Signup() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [gender, setGender] = useState('');
const [age, setAge] = useState('');
const [address, setAddress] = useState('');

const navigate = useNavigate();

  const handleSubmit = (event) => {

    console.log('Submit button clicked');
    event.preventDefault();

    const requestBody = {
      name: name,
      email: email,
      password: password,
      gender: gender,
      age: age,
      address: address
    };

    console.log(requestBody);

    const url = 'http://192.168.90.151:5000'

    axios.post(url + '/signup', requestBody)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
    <Navbar/>
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
        input[type='email'],
        input[type='password'] {
          width: calc(100% - 10px);
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        input[type='text']:focus,
        input[type='email']:focus,
        input[type='password']:focus {
          outline: none;
          border-color: #014748;
        }

        button {
            display: block;
            max-width: 150px;
            width: 50%;
            padding: 10px;
            border: none;
            border-radius: 8px;
            background-color: #014748;
            color: #fff;
            margin-top: 20px;
            margin-left: auto;
            margin-right: auto;
          }

        button:hover {
          background-color: #012729;
        }

        .half {
            width: calc(50% - 10px);
            display: inline-block;
            margin-right: 20px;
        }
  
        .form-row.group {
            display: flex;
        }
  
        .form-row.group .half {
            margin-right: 20px;
        }
  

        @media (max-width: 600px) {
            .half {
              width: 100%;
              margin-right: 0;
        }
        }
      `}
      </style>
      <form className='form-box' onSubmit={handleSubmit}>
        <div className='form-row'>
            <label htmlFor='name'>Name</label>
            <input
            type="text"
            placeholder="e.g. Trip Lisbon"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '308px' }}
            />
        </div>
        <div className='form-row group'>
          <div className='half'>
            <label htmlFor='gender'>Gender</label>
            <input
              type="text"
              id='gender'
              placeholder="e.g. Male"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div className='half'>
            <label htmlFor='age'>Age</label>
            <input
              type="text"
              id='age'
              placeholder="e.g. 23"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          </div>
        <div className='form-row'>
        <label htmlFor='email'>Email</label>
            <input
            type="text"
            placeholder="e.g. trip_lisbon@celfocus.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '308px' }}
            />
        </div>
        <div className='form-row'>
            <label htmlFor='password'>Password</label>
            <input
            type="password"
            placeholder="*********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '308px' }}
            />
        </div>
        <div className='form-row'>
        <label htmlFor='address'>Address</label>
            <input
            type="text"
            placeholder="e.g. Rua Diogo Cão 116 2775-225"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ width: '308px' }}
            />
        </div>

        <button onClick={handleSubmit}>Sign in</button>
      </form>
    </>
  )
}