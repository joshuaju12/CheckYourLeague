import {useState, useContext} from 'react';
import {Link, useNavigate} from  "react-router-dom";
import './searchBar.css';

function SearchBar() {

  const [name, setName] = useState('');
  const [tag, setTag] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleTagChange = (e) => {
    setTag(e.target.value);
  }

  const handleNavigate = () => {
    return navigate("/page", {state: {name: name, tag: tag}});
  }

  const handleButtonSubmit = (e) => {
    e.preventDefault();
    handleNavigate();
    navigate(0);
  }

  return (
    <div className="searchBarWrapper">
      <div className="searchBarWrapper">
        <form className="searchBarContainer" onSubmit={handleButtonSubmit}>
          <input className="searchBarName" type="text" value={name} onChange={handleNameChange} placeholder="Riot ID" />
          <input className="searchBarTag" type="text" value={tag} onChange={handleTagChange} placeholder="Tag" />
          <button className="searchBarButton">Search</button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar;