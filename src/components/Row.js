import React from 'react';
import { useState, useEffect } from 'react';
import "../styles/row.css"
import { useRef } from 'react';
import left from "../assets/left-swipe.svg"
import right from "../assets/right-swipe.svg"
// import '../styles/row.module.css'
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { IoMdClose } from "react-icons/io";

function Row(props) {
  const [state, setState] = useState([]); //initializing the state variable as an empty array
  const [divVisible, setDivVisible] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");
  
  let Access_key = "d36460368b39e0c50d1ca7228acf73bd";
  const fetchTrending = async () => {
    let part = (props.url).split("undefined");
   const data = await fetch(`
    https://api.themoviedb.org/3${part[0]}${Access_key}${part[1]}`);
    const dataJ = await data.json(); // fetching data from API in JSON Format
    setState(dataJ.results); //storing that data in the state
  };


  useEffect(() => {
    fetchTrending(); //calling the fetchTrending function only during the initial rendering of the app.
  }, []);


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

   const opts = {
        height: "390",
        width: "95%",
        playerVars: {
            autoplay: 1,
        }
    }

     let handleClick = (movie) => {
        // console.log("clicked");
        // console.log(movie);
        movieTrailer(movie?.title || movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search); //the URL object is used to parse the url (movie trailer URL) to extract the query parameters
                setTrailerUrl(urlParams.get('v'));
                setDivVisible(true);
                // console.log(urlParams.get('v'));
            }).catch((error) => console.log("temporary unavailabe"));

    }

    //yt close btn logic
    const handleCloseClick = () => {
        setTrailerUrl('');
        setDivVisible(false);
    };
















  // console.log(props);

  let trendingMovies = state;
  // console.log(trendingMovies);

  let baseUrl = "https://image.tmdb.org/t/p/original";

  return (
    <>
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
              <img src={link} className='imageRow'  onClick={() => handleClick(value)}>
                
              </img>
              // <></>
            )
          })
        }
      </div>
      {/* <div className='right-arrow-shadow'></div> */}
      <img src={right} className='right-arrow' onClick={btnpressnext} alt="right-arrow" />

    </div>


        <div className='yt-main'>
                <div>
                    {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} className='yt-player' />}
                </div>
                {divVisible && <IoMdClose className='close-yt-trailer-btn' onClick={() => handleCloseClick()} />}
            </div> 
    </>
  )
}

export default Row