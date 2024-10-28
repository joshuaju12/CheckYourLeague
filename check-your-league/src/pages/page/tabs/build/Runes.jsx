import RuneRow from './RuneRow.jsx';
import './runes.css';

function Runes ({runeData}) {
  // console.log(runeData);
  let primary = runeData.styles[0].selections;
  let secondary = runeData.styles[1].selections;
  let runesOne;
  let runesTwo;

  if (runeData.styles[0].style === 8000) {
    runesOne = [
      <div className="buildPlayerBuildRunesContainer" key={0}>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImageSelected" src={require('../overview/assets/runes/8000.png')} alt="" />
        </div>
        <RuneRow tree={1} row={0} selections={primary} />
        <RuneRow tree={1} row={1} selections={primary} />
        <RuneRow tree={1} row={2} selections={primary} />
        <RuneRow tree={1} row={3} selections={primary} />
      </div>
    ]
  }
  if (runeData.styles[0].style === 8100) {
    runesOne = [
      <div className="buildPlayerBuildRunesContainer" key={0}>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImageSelected" src={require('../overview/assets/runes/8100.png')} alt="" />
        </div>
        <RuneRow tree={2} row={0} selections={primary} />
        <RuneRow tree={2} row={1} selections={primary} />
        <RuneRow tree={2} row={2} selections={primary} />
        <RuneRow tree={2} row={3} selections={primary} />
      </div>
    ]
  }
  if (runeData.styles[0].style === 8200) {
    runesOne = [
      <div className="buildPlayerBuildRunesContainer" key={0}>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImageSelected" src={require('../overview/assets/runes/8200.png')} alt="" />
        </div>
        <RuneRow tree={3} row={0} selections={primary} />
        <RuneRow tree={3} row={1} selections={primary} />
        <RuneRow tree={3} row={2} selections={primary} />
        <RuneRow tree={3} row={3} selections={primary} />
      </div>
    ]
  }
  if (runeData.styles[0].style === 8300) {
    runesOne = [
      <div className="buildPlayerBuildRunesContainer" key={0}>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImageSelected" src={require('../overview/assets/runes/8300.png')} alt="" />
        </div>
        <RuneRow tree={4} row={0} selections={primary} />
        <RuneRow tree={4} row={1} selections={primary} />
        <RuneRow tree={4} row={2} selections={primary} />
        <RuneRow tree={4} row={3} selections={primary} />
      </div>
    ]
  }
  if (runeData.styles[0].style === 8400) {
    runesOne = [
      <div className="buildPlayerBuildRunesContainer" key={0}>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImageSelected" src={require('../overview/assets/runes/8400.png')} alt="" />
        </div>
        <RuneRow tree={5} row={0} selections={primary} />
        <RuneRow tree={5} row={1} selections={primary} />
        <RuneRow tree={5} row={2} selections={primary} />
        <RuneRow tree={5} row={3} selections={primary} />
      </div>
    ]
  }

  if (runeData.styles[1].style === 8000) {
    runesTwo = [
      <div className="buildPlayerBuildRunesContainer" key={0}>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImageSelected" src={require('../overview/assets/runes/8000.png')} alt="" />
        </div>
        <RuneRow tree={1} row={1} selections={secondary} secondary={true} />
        <RuneRow tree={1} row={2} selections={secondary} secondary={true} />
        <RuneRow tree={1} row={3} selections={secondary} secondary={true} />
      </div>
    ]
  }
  if (runeData.styles[1].style === 8100) {
    runesTwo = [
      <div className="buildPlayerBuildRunesContainer" key={0}>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImageSelected" src={require('../overview/assets/runes/8100.png')} alt="" />
        </div>
        <RuneRow tree={2} row={1} selections={secondary} secondary={true} />
        <RuneRow tree={2} row={2} selections={secondary} secondary={true} />
        <RuneRow tree={2} row={3} selections={secondary} secondary={true} />
      </div>
    ]
  }
  if (runeData.styles[1].style === 8200) {
    runesTwo = [
      <div className="buildPlayerBuildRunesContainer" key={0}>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImageSelected" src={require('../overview/assets/runes/8200.png')} alt="" />
        </div>
        <RuneRow tree={3} row={1} selections={secondary} secondary={true} />
        <RuneRow tree={3} row={2} selections={secondary} secondary={true} />
        <RuneRow tree={3} row={3} selections={secondary} secondary={true} />
      </div>
    ]
  }
  if (runeData.styles[1].style === 8300) {
    runesTwo = [
      <div className="buildPlayerBuildRunesContainer" key={0}>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImageSelected" src={require('../overview/assets/runes/8300.png')} alt="" />
        </div>
        <RuneRow tree={4} row={1} selections={secondary} secondary={true} />
        <RuneRow tree={4} row={2} selections={secondary} secondary={true} />
        <RuneRow tree={4} row={3} selections={secondary} secondary={true} />
      </div>
    ]
  }
  if (runeData.styles[1].style === 8400) {
    runesTwo = [
      <div className="buildPlayerBuildRunesContainer" key={0}>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImageSelected" src={require('../overview/assets/runes/8400.png')} alt="" />
        </div>
        <RuneRow tree={5} row={1} selections={secondary} secondary={true} />
        <RuneRow tree={5} row={2} selections={secondary} secondary={true} />
        <RuneRow tree={5} row={3} selections={secondary} secondary={true} />
      </div>
    ]
  }


  return (
    <div className="buildPlayerBuildRunesWrapper">
      {runesOne}
      {runesTwo}
    </div>
  )
}

export default Runes;