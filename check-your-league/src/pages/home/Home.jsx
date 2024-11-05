import {useEffect, useState, useContext} from 'react';
import {Link, useNavigate} from  "react-router-dom";
import './home.css';
import {SharedContext} from '../../App.js';
import FooterHome from '../footer/FooterHome.jsx';

function Home() {

  const {setCurrentRoute} = useContext(SharedContext);
  const [name, setName] = useState('');
  const [tag, setTag] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTagChange = (e) => {
    setTag(e.target.value);
  }

  const handleNavigate = () => {
    return navigate("/page", {state: {name: name, tag: tag}});
  }

  const onButtonSubmit = (e) => {
    e.preventDefault();
    handleNavigate();
  }

  useEffect(() => {
    setCurrentRoute('home');
  }, [])

  return (
    <div className="wrapper">
      <div className="mainComponent">
        <form onSubmit={onButtonSubmit}>
          <label className="nameLabel">CheckYourLeague</label>
          <input className="nameBox" type="text" value={name} onChange={handleNameChange} placeholder="Riot Id ex. Mekju"></input>
          <input className="tagBox" type="text" value={tag} onChange={handleTagChange} placeholder="Tag ex. na1"/>
          <button className="searchButton">Search</button>
        </form>
      </div>
      <FooterHome />
    </div>
  )
};

export default Home;

