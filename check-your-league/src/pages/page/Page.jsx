
// require('dotenv').config();
import { useLocation } from 'react-router-dom';
import {useEffect, useState, useMemo, useContext} from 'react';
import axios from 'axios';
import './page.css';
import MatchDetails from './MatchDetails.jsx';
import ProfileHeader from './ProfileHeader.jsx';
import {SharedContext} from '../../App.js';
import PlayerStatistics from './PlayerStatistics.jsx';

function Page() {

  const {setCurrentRoute} = useContext(SharedContext);
  const location = useLocation();
  const name = location.state.name;
  const tag = location.state.tag;
  const [userInfo, setUserInfo] = useState({
    summonerId: '',
    accountId: '',
    puuid: '',
    iconId: 0,
    level: 0
  });
  const [rankedInfo, setRankedInfo] = useState([]);
  const [matchList, setMatchList] = useState([]);
  const [allMatchData, setAllMatchData] = useState([]);
  const [start, setStart] = useState(0);
  const [count, setCount] = useState(10);

  const getMatchHistory = useMemo(() => async() => {
    try {
      const account = await axios.get('http://localhost:3001/account', {params: {summonerName: name, tagline: tag}});
      const summoner = await axios.get('http://localhost:3001/summoner', {params: {puuid: account.data.puuid}});
      const ranked = await axios.get('http://localhost:3001/ranked', {params: {accountId: summoner.data.id}})
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
      setRankedInfo(ranked.data);
      setMatchList(matches.data);
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

  useEffect(() => {
    setCurrentRoute('page');
  }, [])

  return (
    <div className="pageContainer">
      <ProfileHeader name={name} userInfo={userInfo} rankedInfo={rankedInfo} />
      <div className="contentContainer">
          {allMatchData.length > 0 ?
            <>
              <PlayerStatistics rankedInfo={rankedInfo} />
              <div className="allMatchesContainer">
                {allMatchData.map((value, index) =>
                  <MatchDetails key={index} eventKey={index} matchData={value.data} matchId={matchList[index]} id={userInfo.puuid}/>
                )}
              </div>
            </>
            : <div>Loading...</div>
          }
      </div>
    </div>
  )
}

export default Page;