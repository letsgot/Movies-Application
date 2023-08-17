import React from 'react'
import '../styles/main.css'
import { useState, useEffect } from 'react';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { IoMdClose } from "react-icons/io";
import { Skeleton } from '@mui/material';
function Main(props) {

    const [state, setState] = useState({}); //initializing the state variable as an empty array
    const [divVisible, setDivVisible] = useState(false);
    const [trailerUrl, setTrailerUrl] = useState("");
    let Access_key = "d36460368b39e0c50d1ca7228acf73bd";
    const fetchTrending = async () => {
        let part = (props.url).split("undefined");
        const data = await fetch(`
      https://api.themoviedb.org/3${part[0]}${Access_key}${part[1]}`);
        const dataJ = await data.json(); // fetching data from API in JSON Format
        let random = Math.floor((Math.random() * 1000) % 20);
        let dataFromRandom = dataJ.results[random];
        setState(dataFromRandom)
    };
    useEffect(() => {
        fetchTrending(); //calling the fetchTrending function only during the initial rendering of the app.
    }, []);
    let baseUrl = "https://image.tmdb.org/t/p/original";
    let link = baseUrl + state.poster_path;


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

    //Youtube Trailer options
    const opts = {
        height: "390",
        width: "95%",
        playerVars: {
            autoplay: 1,
        }
    }


    return (
        <>

            <div className='main'
                style={{

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
                        <button className='play' onClick={() => handleClick(state)}>Play</button>
                        <button className='myList'>My List</button>
                    </div>
                    <div className='title'>
                        {state.overview}
                    </div>
                </div>


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

export default Main