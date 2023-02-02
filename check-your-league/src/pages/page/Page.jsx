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
        axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${results.data.puuid}/ids`, {params: {"api_key": process.env.REACT_APP_RIOT_API}})
          .then((matches) => {
            console.log(matches.data);
          })
      })
  }, [])

  return (
    <div className="pageContainer">
      <div>This is {name}</div>
    </div>
  )
}

export default Page;