
function QueueType ({id}) {

   const gameId = id.toString();
   let currentMode = '';
   const modes = {
    '0' : 'Normal',
    '420' : 'Solo/Duo',
    '450' : 'ARAM',
    '75' : 'Hexakill',
    '76' : 'URF',
    '83' : 'One For All',
    '325' : 'Normal',
    '400' : 'Normal',
    '430' : 'Normal',
    '440' : 'Flex',
    '490' : 'Normal',
    '700' : 'Clash',
    '900' : 'ARURF',
    '920' : 'Poro',
    '940' : 'Nexus Siege',
    '1010' : 'ARURF',
    '1020' : 'One For All',
    '1300' : 'Nexus Blitz',
    '1400' : 'SpellBook',
    '1900' : 'URF',
   };

  return (
    <div>
      {modes[gameId]}
    </div>
  )
}

export default QueueType;