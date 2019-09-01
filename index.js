function theBeatlesPlay(players, instruments) {
  var playersArray = [];
  
  for(let i = 0; i < players.length; i++) {
    playersArray.push(players[i] + " plays " + instruments[i])
  }
  return playersArray;
}

function johnLennonFacts() {
  const facts = [
    'He was the last Beatle to learn to drive',
    'He was never a vegetarian',
    'He was a choir boy and boy scout',
    'He hated the sound of his own voice'
    ]
    
    var newFacts = [];
    
    let i = 0;
    
    while(i < facts.length) {
      newFacts.push(facts[i] + '!!!')
      i++;
    }
    
    return newFacts;
}