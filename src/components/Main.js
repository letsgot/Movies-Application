import React from 'react'
import '../styles/main.css'
import { useState,useEffect } from 'react';
function Main(props) {

    const [state, setState] = useState({}); //initializing the state variable as an empty array
    let Access_key = "d36460368b39e0c50d1ca7228acf73bd";
    const fetchTrending = async () => {
      let part = (props.url).split("undefined");
      const data = await fetch(`
      https://api.themoviedb.org/3${part[0]}${Access_key}${part[1]}`);
      const dataJ = await data.json(); // fetching data from API in JSON Format

    //   console.log(dataJ);
      
      let random = Math.floor((Math.random()*1000)%20);
    //   console.log(random);
      let dataFromRandom = dataJ.results[random];
    //   console.log(dataFromRandom);
      setState(dataFromRandom)
    //   setState(dataJ.results); //storing that data in the state
    };
  
  
    useEffect(() => {
      fetchTrending(); //calling the fetchTrending function only during the initial rendering of the app.
    }, []);
  





   console.log(state);


   let baseUrl = "https://image.tmdb.org/t/p/original";



   let link = baseUrl + state.poster_path;
   console.log(link);
    return (


        <div className='main' 
            style = {{
            
            backgroundImage:
            `url(${link})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // opacity:"0.6"
            
            }}
        >
            <div className='wrap'>
                <div className='head'>
                    {state.title}
                </div>
                <div className='button'>
                    <button className='play'>Play</button>
                    <button className='myList'>My List</button>
                </div>
                <div className='title'>
                   {state.overview}
                </div>
            </div>
        </div>
    )
}

export default Main