import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Row from './components/Row'
// import '../'
import { useEffect,useState } from 'react';
import { tmdbDetails } from './request';

function App() {

  // console.log(`${process.env.REACT_APP_API_KEY}`)
  

  // console.log(tmdbDetails);

  console.log(tmdbDetails[1]);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Main id={tmdbDetails[1].id} name={tmdbDetails[1].name} url={tmdbDetails[1].url}></Main>

      {
        tmdbDetails.map((value,index,tmdbDetails)=>{
           return (
             <Row id = {value.id} name = {value.name} url = {value.url}></Row>
           )
        })
      }

      {/* <Row></Row> */}
      {/* <Main></Main> */}
    </div>
  );
}

export default App;
