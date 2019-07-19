import React, {useState, useEffect} from 'react';

import axios from 'axios';
import './App.css';

import SimpleCard from './components/Cardperson'

// Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

function App(){
  const [starw, setStarw] = useState([]);

  useEffect(() => {
    //loop through 10 objects
    const counter = 11;

    for (let i = 0; i< counter; i++){
      axios
      .get(`http https://swapi.co/api/people/${1+i}`)

      .then( element => {
        console.log(element)
        const persObj = element.data;
        console.log(persObj)

        setStarw(previousState => {
          return [...previousState, persObj];
        });
                
      });


    }
 
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      <SimpleCard
        name = {persObj.name}
        birth_year = {persObj.birth_year}
        gender = {persObj.gender}
        skin_color = {persObj.skin_color}
        height = {persObj.height}
        mass = {persObj.mass}
        eyecolor = {persObj.eyecolor}
        homeworld = {persObj.homeworld}
        species = {persObj.species}
        starships = {persObj.starships}
        vehicles = {persObj.vehicles}
      
      
      />

    </div>
  );
}

export default App;
