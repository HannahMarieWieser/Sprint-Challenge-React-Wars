import React, {useState, useEffect} from 'react';

import axios from 'axios';
import './App.css';

import SimpleCard from './components/Cardperson'
import { object } from 'prop-types';

// Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


/*
 const [starw, setStarw] = useState([]);
 

  useEffect(() => {
    //loop through 10 objects
    const counter = 10;

    for (let i = 0; i< counter; i++){
      axios
      .get(`https://swapi.co/api/people/${1+i}/`)

      .then( element => {
        setStarw(element.data);
        console.log("personj/element", element.data)

        console.log ('starw', starw)

       
      });
    }
 
  }, []);
*/ 
  




function App(){
  const [starw, setStarw] = useState()

  useEffect(() => {
  
    axios.get('https://henry-mock-swapi.herokuapp.com/api')
      .then( element => {
        setStarw(element.data.results)
        console.log('element', element.data.results)

        
              
      });
         
      
  }, []);
  console.log("starw", starw)

  if(!starw) {
    return <h1>loading</h1>
  }

  else{
    return (
        <div className="App">
          <h1 className="Header">React Wars</h1>
          
            {starw.map((person) => <SimpleCard tileData={person}/>)} 

            {/* <SimpleCard
              tileData={starw}

      
            /> */}
            

          

        </div>
      );


  }
 
}


export default App;
