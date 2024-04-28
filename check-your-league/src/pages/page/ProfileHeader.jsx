import './profileHeader.css';

function ProfileHeader({userInfo, name}) {
  // console.log(name);

  return (
    <div className="profileWrapper">
      <img className="profileIcon" src={require(`./assets/profileIcon/${userInfo.iconId}.png`)} alt="" />
      <div>{name[0]}</div>
    </div>
  );
};

export default ProfileHeader;