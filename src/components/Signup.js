import React, { useState } from 'react';
import axios from 'axios';
import Categories from './Categories';

export default function Signup() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [gender, setGender] = useState('');
const [age, setAge] = useState('');
const [address, setAddress] = useState('');

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
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <form className='form-box' onSubmit={handleSubmit}>
      <div className='align-inputs'>
            <h4>Name</h4>
            <input
              type="text"
              placeholder="e.g. Trip Lisbon"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '308px' }}
            />
        </div>
        <div className='align-inputs'>
            <h4>Email</h4>
            <input
              type="text"
              placeholder="e.g. trip_lisbon@celfocus.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '308px' }}
            />
        </div>
        <div className='align-inputs'>
            <h4>Password</h4>
            <input
              type="password"
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '308px' }}
            />
        </div>
        <div className='align-inputs'>
            <h4>Gender</h4>
            <input
              type="text"
              placeholder="e.g. Male"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={{ width: '308px' }}
            />
        </div>
        <div className='align-inputs'>
            <h4>Age</h4>
            <input
              type="text"
              placeholder="e.g. 23"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              style={{ width: '308px' }}
            />
        </div>
        <div className='align-inputs'>
            <h4>Address</h4>
            <input
              type="text"
              placeholder="e.g. Rua Diogo Cão 116 2775-225"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{ width: '308px' }}
            />
        </div>

          <button style={{ display: 'flex' ,  justifycontent: 'center' , borderRadius:'6px' , backgroundColor:'#014748' , color:'#FFFFFF' , marginTop: '1rem' , width: '100px' , height:'40px'}} onClick={handleSubmit}>Submit</button>
        
      </form>
    </>
  )
}