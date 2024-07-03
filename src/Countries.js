// src/Countries.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Countries.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://xcountries-backend.azurewebsites.net/all')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="country-list">
      {countries.map(country => (
        <div key={country.name} className="country-item">
          <img src={country.flag} alt={`Flag of ${country.name}`} className="flag-img" />
          <p>{country.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Countries;
