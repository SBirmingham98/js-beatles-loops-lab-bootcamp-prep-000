function theBeatlesPlay(players, instruments) {
  var playersArray = [];
  
  for(let i = 0; i < players.length; i++) {
    playersArray.push(players[i] + " plays " + instruments[i])
  }
  return playersArray;
}

function johnLennonFacts(facts) {
    var newFacts = [];
    
    let i = 0;
    
    while(i < facts.length) {
      newFacts.push(facts[i] + '!!!')
      i++;
    }
    
    return newFacts;
}

function loveBeatles() {
  var arr = []
  
  do(arr.push('I love the Beatles!')) {
}