import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
const FoodFinder = () => {
  // var ts = Math.round((new Date()).getTime() / 1000);
  const [results, setResults] = useState([]);
  var config = {
    headers: {
      Authorization:
        "Bearer QOZSZlMRA1KoCH5L91cnHYU0xpaDeu1eo348puITeBheXLbpTgzWCeJgPOKbBZzgQIpl_iJG1AKrzZc5ICrtU8VFaKiXxHcecgQQsq6q5I3P6jy7KWrSqkuyqHopYnYx"
    },
    params: {
      term: "restaurants",
      location: "San Diego",
      limit: 50,
      open_at: 1646978400
    },
  };

  const updateTime = (event) => {

  }
  const updateLocation = (event) => {
    
  }

  useEffect(() => {
    axios
      .get("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=restaurants", config)
      .then((response) => {
        setResults(response["data"]["businesses"]);
      }).catch((err) => {
        console.log(err);
      }
    );
  }, []);
  
  return (
    <div className="foodfinderContainer">
      <h1>Food Finder</h1>
      <div className="finderConfig">
        <div className="configItem">
          <label>Show me restaurants that are open at: </label>
          <input type="datetime-local" defaultValue="2022-03-15T10:00" className="foodFinderTime" onChange={updateTime}></input>
        </div>
        <div className="configItem">
          <label>Region: </label>
          <input type="text" defaultValue="San Diego" onChange={updateLocation}></input>
        </div>
      </div>
      <table className="foodFinderTable">
        <tr>
        <th>Restaurant Name</th>
        <th>Rating</th>
        <th>Price</th>
        <th>Phone</th>
        </tr>
        {
        results.map((entry) => {return (
          <tr>
            <td>{entry.name}</td>
            <td>{entry.rating}</td>
            <td>{entry.price}</td>
            <td>{entry.phone}</td>
          </tr>
        )})}
      </table>
    </div>
  )}


export default FoodFinder;
