  const [state, setState] = useState([]); //initializing the state variable as an empty array
  let Access_key = "d36460368b39e0c50d1ca7228acf73bd";
const fetchTrending = async () => {
  const data = await fetch(`
https://api.themoviedb.org/3/discover/tv?api_key=${Access_key}&with_networks=213`);
  const dataJ = await data.json(); // fetching data from API in JSON Format
  console.log(dataJ);
  setState(dataJ.results); //storing that data in the state
};
 

 useEffect(() => {
  fetchTrending(); //calling the fetchTrending function only during the initial rendering of the app.
  console.log(state);
}, []);