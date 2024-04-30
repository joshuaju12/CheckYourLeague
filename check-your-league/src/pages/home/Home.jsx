import {useEffect, useState, useContext} from 'react';
import {Link, useNavigate} from  "react-router-dom";
import './home.css';
import {SharedContext} from '../../App.js';

function Home() {

  const {setCurrentRoute} = useContext(SharedContext);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNavigate = () => {
    return navigate("/page", {state: {name: name}});
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
          <label className="nameLabel">Search</label>
          <input type="text" value={name} onChange={handleNameChange} placeholder="Riot Id ex. Name #na1"></input>
          <button className="searchButton">Go</button>
        </form>
      </div>
    </div>
  )
};

export default Home;

