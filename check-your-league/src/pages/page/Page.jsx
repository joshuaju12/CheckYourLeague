// require('dotenv').config();
import { useLocation } from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import './page.css';

function Page() {
  const location = useLocation();
  const name = location.state;
  const [userInfo, setUserInfo] = useState({
    summonerId: '',
    accountId: '',
    puuid: '',
    iconId: 0,
    level: 0
  });
  const [matches, setMatches] = useState([]);
  const [allMatchData, setAllMatchData] = useState([]);
  const [start, setStart] = useState(0);
  const [count, setCount] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const [tempArray, setTempArray] = useState([]);

  useEffect(() => {
    axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`, {params: {"api_key": process.env.REACT_APP_RIOT_API}})
      .then((results) => {
        setUserInfo({
          summonerId: results.data.id,
          accountId: results.data.accountId,
          puui: results.data.puuid,
          iconId: results.data.profileIconId,
          level: results.data.summonerLevel
        });
        axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${results.data.puuid}/ids`, {params: {"api_key": process.env.REACT_APP_RIOT_API, "start": 0, "count": 5}})
          .then((allMatches) => {
            setMatches(allMatches.data);
            // const tempArray = [];
            Promise.all(allMatches.data.map((value) => {
              return axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${value}`, {params: {"api_key": process.env.REACT_APP_RIOT_API}})
            }))
              .then((result) => {
                setAllMatchData(result);
              })
            // allMatches.data.forEach((matchString) => {
            //   axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchString}`, {params: {"api_key": process.env.REACT_APP_RIOT_API}})
            //     .then((matchData) => {
            //     })
            // })
          })
      })
  }, [start, count])

  return (
    <div className="pageContainer">
      <div className="nameContainer">
        <div className="name">{name}</div>
      </div>
      <div className="matchContainer">
        <div>Match history</div>
        {allMatchData ?
          <>
            {allMatchData.map((value, index) =>
              <div key={index}>{value.data.metadata.dataVersion}</div>
            )}
          </>
          : <div>Loading...</div>
        }
      </div>
    </div>
  )
}

export default Page;