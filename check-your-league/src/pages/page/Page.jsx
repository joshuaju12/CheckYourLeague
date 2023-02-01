// require('dotenv').config();
import { useLocation } from 'react-router-dom';
import {useEffect} from 'react';
import axios from 'axios';
import './page.css';

function Page() {
  const location = useLocation();
  const name = location.state;

  useEffect(() => {
    axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`, {params: {"api_key": process.env.REACT_APP_RIOT_API}})
      .then((results) => {
        console.log(results.data);
      })
  }, [])

  return (
    <>
      <div>This is {name}</div>
    </>
  )
}

export default Page;