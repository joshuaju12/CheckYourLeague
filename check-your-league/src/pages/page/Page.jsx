
// require('dotenv').config();
import { useLocation } from 'react-router-dom';
import {useEffect, useState, useMemo} from 'react';
import axios from 'axios';
import './page.css';
import MatchDetails from './MatchDetails.jsx';
import ProfileHeader from './ProfileHeader.jsx';

function Page() {

  const location = useLocation();
  const name = (location.state).split(" ");
  const [userInfo, setUserInfo] = useState({
    summonerId: '',
    accountId: '',
    puuid: '',
    iconId: 0,
    level: 0
  });
  // const [name, setName] = ((location.state).split(" "));
  const [allMatchData, setAllMatchData] = useState([]);
  const [start, setStart] = useState(0);
  const [count, setCount] = useState(10);

  const getMatchHistory = useMemo(() => async() => {
    try {
      const account = await axios.get('http://localhost:3001/account', {params: {summonerName: name[0], tagline: name[1]}});
      const summoner = await axios.get('http://localhost:3001/summoner', {params: {puuid: account.data.puuid}});
      const matches = await axios.get('http://localhost:3001/allMatches', {params: {puuid: summoner.data.puuid}});
      const matchArray = await Promise.all(matches.data.map((value) => {
        return axios.get('http://localhost:3001/match', {params: {matchId: value}})
      }));
      setUserInfo({
        summonerId: summoner.data.id,
        accountId: summoner.data.accountId,
        puuid: summoner.data.puuid,
        iconId: summoner.data.profileIconId,
        level: summoner.data.summonerLevel,
      })
      setAllMatchData(matchArray);
      return {
        summonerId: summoner.data.id,
        accountId: summoner.data.accountId,
        puuid: summoner.data.puuid,
        iconId: summoner.data.profileIconId,
        level: summoner.data.summonerLevel,
        matchData: matchArray,
      }
    } catch(error) {
      console.log('error getting account');
    }
  }, [name]);

  useEffect(() => {
    getMatchHistory();
  }, [start, count])

  return (
    <div className="pageContainer">
      <ProfileHeader name={name} userInfo={userInfo} />
      <div className="contentContainer">
        <div className="playerStatistics">extra stuff</div>
        <div className="allMatchesContainer">
          {allMatchData ?
            <>
              {allMatchData.map((value, index) =>
                <MatchDetails key={index} matchData={value.data} id={userInfo.puuid}/>
              )}
            </>
            : <div>Loading...</div>
          }
        </div>
      </div>
    </div>
  )
}

export default Page;