import React from 'react';
import { useState, useEffect } from 'react';
import "../styles/row.css"
import { useRef } from 'react';
import left from "../assets/left-swipe.svg"
import right from "../assets/right-swipe.svg"
// import '../styles/row.module.css'
function Row(props) {
  const [state, setState] = useState([]); //initializing the state variable as an empty array
  let Access_key = "d36460368b39e0c50d1ca7228acf73bd";
  const fetchTrending = async () => {
    // console.log("9"+props.url);
    let part = (props.url).split("undefined");
    // console.log(part[0]);
    // console.log(part[1]);
//     const data = await fetch(`
// https://api.themoviedb.org/3/discover/tv?api_key=${Access_key}&with_networks=213`);
    const data = await fetch(`
    https://api.themoviedb.org/3${part[0]}${Access_key}${part[1]}`);
    // /discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213
// console.log(rowStyle);
    const dataJ = await data.json(); // fetching data from API in JSON Format
    // console.log(dataJ);
    setState(dataJ.results); //storing that data in the state
  };


  useEffect(() => {
    fetchTrending(); //calling the fetchTrending function only during the initial rendering of the app.
  }, []);

  // console.log(state);

  //LEFT-RIGHT-ARROW SCROLLER
  const boxRef = useRef(null);

  const btnpressprev = () => {
    //  console.log(boxRef);
      if (boxRef.current) {
          let width = boxRef.current.clientWidth;
          boxRef.current.classList.add("scroll-transition");
          boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
          // console.log(width);
      }
  }

  const btnpressnext = () => {
      if (boxRef.current) {
          let width = boxRef.current.clientWidth;
          boxRef.current.classList.add("scroll-transition");
          boxRef.current.scrollLeft += width;
          // console.log(width);
      }
  }


  // console.log(props);

  let trendingMovies = state;
  // console.log(trendingMovies);

  let baseUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div className="row">
      <div className="headRow">
        {props.name}
      </div>
      <img src={left} className='left-arrow' onClick={btnpressprev} alt="left-arrow" />
      {/* <div className='left-arrow-shadow'></div> */}
      <div ref={boxRef} className="moviesRow">
        {
          trendingMovies.map((value,index,trendingMovies)=>{
            // console.log(value.id + " " + index + "  ");
            let link = baseUrl + value.poster_path;
            return (
              <img src={link} className='imageRow'>
                
              </img>
              // <></>
            )
          })
        }
      </div>
      {/* <div className='right-arrow-shadow'></div> */}
      <img src={right} className='right-arrow' onClick={btnpressnext} alt="right-arrow" />

    </div>
  )
}

export default Row