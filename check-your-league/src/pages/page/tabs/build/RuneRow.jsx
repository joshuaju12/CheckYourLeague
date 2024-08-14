
function RuneRow ({tree, row, selections, secondary}) {
  // console.log(selections);
  let keystone;
  if (tree === 1) {
    keystone = [
      ['8005', '8021', '8010'],
      ['9101', '9111', '8009'],
      ['9104', '9105', '9103'],
      ['8014', '8017', '8299'],
    ]
  }

  if (tree === 2) {
    keystone = [
      ['8112', '8128', '9923'],
      ['8126', '8139', '8143'],
      ['8136', '8120', '8138'],
      ['8135', '8105', '8106'],
    ]
  }

  if (tree === 3) {
    keystone = [
      ['8214', '8229', '8230'],
      ['8224', '8226', '8275'],
      ['8210', '8234', '8233'],
      ['8237', '8232', '8236'],
    ]
  }

  if (tree === 4) {
    keystone = [
      ['8351', '8360', '8369'],
      ['8306', '8304', '8321'],
      ['8313', '8352', '8345'],
      ['8347', '8410', '8316'],
    ]
  }

  if (tree === 5) {
    keystone = [
      ['8437', '8439', '8465'],
      ['8446', '8463', '8401'],
      ['8429', '8444', '8473'],
      ['8451', '8453', '8242'],
    ]
  }

  return (
    <div className="buildPlayerBuildRuneRow">
      {keystone[row].map((value, index) => {
        if (secondary) {
          if (index === 3) {
            return null;
          }
          // console.log('runes', keystone[row], 'selections', selections)
          let firstSelection = selections[0].perk.toString();
          let secondSelection = selections[1].perk.toString();
          if (keystone[row].indexOf(firstSelection) > -1 || keystone[row].indexOf(secondSelection) > -1) {
            if (value === firstSelection || value === secondSelection) {
              return <img className="buildPlayerBuildRuneImageSelected" src={require(`../overview/assets/runes/${value}.png`)} alt="" />
            } else {
              return <img className="buildPlayerBuildRuneImage" src={require(`../overview/assets/runes/${value}.png`)} alt="" />
            }
          } else {
            return <img className="buildPlayerBuildRuneImage" src={require(`../overview/assets/runes/${value}.png`)} alt="" />
          }
          // if (keystone[row + 1][index] === selections[row].perk.toString() && (keystone[row + 1].indexOf(selections[0].perk.toString() > -1) || keystone[row + 1].indexOf(selections[1].perk.toString() > -1))) {
          //   return <img className="buildPlayerBuildRuneImageSelected" src={require(`../overview/assets/runes/${value}.png`)} alt="" />
          // } else {
          //   return <img className="buildPlayerBuildRuneImage" src={require(`../overview/assets/runes/${value}.png`)} alt="" />
          // }
        } else {
          if (value === selections[row].perk.toString() && keystone[row].indexOf(selections[row].perk.toString() > -1)) {
            return <img className="buildPlayerBuildRuneImageSelected" src={require(`../overview/assets/runes/${value}.png`)} alt="" />
          } else {
            return <img className="buildPlayerBuildRuneImage" src={require(`../overview/assets/runes/${value}.png`)} alt="" />
          }
        }
      }
      )}
    </div>
  )
};

export default RuneRow;