import React from 'react';
import axios from 'axios';

async function registerUser() {
  try {
    const response = await axios.get('/users/register');
    console.log(response);
    return Promise.resolve(response);
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

async function loginUser() {
  try {
    const response = await axios.get('/users/login');
    console.log('response:  ': 'Login successfully');
    return Promise.resolve(response);
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}

export {registerUser, loginUser}