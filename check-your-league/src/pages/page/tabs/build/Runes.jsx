import './runes.css';

function Runes ({runeData}) {
  console.log(runeData)
  let runesOne;
  let runesTwo;
  let styleOne = 8000;
  let styleTwo = 8100;

  if (runeData.styles[0].style === 8000) {
    runesOne = [
      <div className="buildPlayerBuildRunesContainer" key={0}>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8000.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8005.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8021.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8010.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/9101.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/9111.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8009.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/9104.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/9105.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/9103.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8014.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8017.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8299.png')} alt="" />
        </div>
      </div>
    ]
  }
  if (runeData.styles[0].style === 8100) {
    runesOne = [
      <div className="buildPlayerBuildRunesContainer" key={0}>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8100.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8112.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8128.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/9923.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8126.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8139.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8143.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8136.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8120.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8138.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8135.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8105.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8106.png')} alt="" />
        </div>
      </div>
    ]
  }
  if (runeData.styles[0].style === 8200) {
    runesOne = [
      <div className="buildPlayerBuildRunesContainer" key={0}>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8200.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8214.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8229.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8230.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8224.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8226.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8275.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8210.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8234.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8233.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8237.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8232.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8236.png')} alt="" />
        </div>
      </div>
    ]
  }
  if (runeData.styles[0].style === 8300) {
    runesOne = [
      <div className="buildPlayerBuildRunesContainer" key={0}>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8300.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8351.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8360.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8369.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8306.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8304.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8321.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8313.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8352.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8345.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8347.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8410.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8316.png')} alt="" />
        </div>
      </div>
    ]
  }
  if (runeData.styles[0].style === 8400) {
    runesOne = [
      <div className="buildPlayerBuildRunesContainer" key={0}>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8400.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8437.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8439.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8465.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8446.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8463.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8401.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8429.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8444.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8473.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8451.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8453.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8242.png')} alt="" />
        </div>
      </div>
    ]
  }

  if (runeData.styles[1].style === 8000) {
    runesTwo = [
      <div className="buildPlayerBuildRunesContainer" key={0}>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8000.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/9101.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/9111.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8009.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/9104.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/9105.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/9103.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8014.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8017.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8299.png')} alt="" />
        </div>
      </div>
    ]
  }
  if (runeData.styles[1].style === 8100) {
    runesTwo = [
      <div className="buildPlayerBuildRunesContainer" key={0}>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8100.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8126.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8139.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8143.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8136.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8120.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8138.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8135.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8105.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8106.png')} alt="" />
        </div>
      </div>
    ]
  }
  if (runeData.styles[1].style === 8200) {
    runesTwo = [
      <div className="buildPlayerBuildRunesContainer" key={0}>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8200.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8224.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8226.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8275.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8210.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8234.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8233.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8237.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8232.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8236.png')} alt="" />
        </div>
      </div>
    ]
  }
  if (runeData.styles[1].style === 8300) {
    runesTwo = [
      <div className="buildPlayerBuildRunesContainer" key={0}>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8300.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8306.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8304.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8321.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8313.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8352.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8345.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8347.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8410.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8316.png')} alt="" />
        </div>
      </div>
    ]
  }
  if (runeData.styles[1].style === 8400) {
    runesTwo = [
      <div className="buildPlayerBuildRunesContainer" key={0}>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8400.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8446.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8463.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8401.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8429.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8444.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8473.png')} alt="" />
        </div>
        <div className="buildPlayerBuildRuneRow">
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8451.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8453.png')} alt="" />
          <img className="buildPlayerBuildRuneImage" src={require('../overview/assets/runes/8242.png')} alt="" />
        </div>
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