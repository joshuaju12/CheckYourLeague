import './profileHeader.css';

function ProfileHeader({userInfo, name, tag}) {

  return (
    <div className="profileWrapper">
      <img className="profileIcon" src={require(`./assets/profileIcon/${userInfo.iconId}.png`)} alt="" />
      <div className=" playerDetailsWrapper">
        <span>{name} </span>
        <span> #{tag}</span>
      </div>
    </div>
  );
};

export default ProfileHeader;