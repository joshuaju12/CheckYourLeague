
// require('dotenv').config();
import { useLocation } from 'react-router-dom';
import {useEffect, useState, useMemo, useContext} from 'react';
import axios from 'axios';
import './page.css';
import MatchDetails from './MatchDetails.jsx';
import ProfileHeader from './ProfileHeader.jsx';
import {SharedContext} from '../../App.js';
import PlayerStatistics from './PlayerStatistics.jsx';
import SearchBar from './SearchBar.jsx';
import Footer from '../footer/Footer.jsx';

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
  const [count, setCount] = useState(5);

  const getMatchHistory = useMemo(() => async() => {
    if (allMatchData.length === 0) {
      console.log('array is empty')
    try {
      const account = await axios.get('http://localhost:3001/account', {params: {summonerName: name, tagline: tag}});
      const summoner = await axios.get('http://localhost:3001/summoner', {params: {puuid: account.data.puuid}});
      const ranked = await axios.get('http://localhost:3001/ranked', {params: {accountId: summoner.data.id}})
      const matches = await axios.get('http://localhost:3001/allMatches', {params: {puuid: summoner.data.puuid, start: start, count: count}});
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
  } else {
    console.log('array is not empty')
  }
  }, [name]);


  const getMore = (startNumber) => {
    axios.get('http://localhost:3001/allMatches', {params: {puuid: userInfo.puuid, start: startNumber, count: count}})
      .then((data) => {
        Promise.all(data.data.map((value) => {
          return axios.get('http://localhost:3001/match', {params: {matchId: value}})
        }))
          .then((results) => {
            let newArray = allMatchData.concat(results);
            setAllMatchData(newArray);
          })
      })
  }

  const handleShowMoreClick = (e) => {
    e.preventDefault();
    setStart(start + 5);
    getMore(start + 5);
  }

  useEffect(() => {
    getMatchHistory();
  }, [])

  useEffect(() => {
    setCurrentRoute('page');
  }, [])

  return (
    <div className="pageContainer">
      <SearchBar />
      <ProfileHeader name={name} tag={tag} userInfo={userInfo} rankedInfo={rankedInfo} />
      <div className="contentContainer">
          {allMatchData.length > 0 ?
            <>
              <PlayerStatistics rankedInfo={rankedInfo} />
              <div className="allMatchesContainerWrapper">
                <div className="allMatchesContainer">
                  {allMatchData.map((value, index) =>
                    <MatchDetails key={index} eventKey={index} matchData={value.data} matchId={matchList[index]} id={userInfo.puuid}/>
                  )}
                </div>
                <button className="allMatchesButton" onClick={handleShowMoreClick}>More matches</button>
              </div>
            </>
            : <div>Loading...</div>
          }
      </div>
      {allMatchData.length > 0
      ? <Footer />
      : null
      }
    </div>
  )
}

export default Page;