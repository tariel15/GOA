//https://www.codewars.com/kata/590adadea658017d90000039/train/javascript
function fruit(reels, spins){
  
  var points = {
    "Wild" : 10,
    "Star" : 9,
    "Bell" : 8,
    "Shell" : 7,
    "Seven" : 6,
    "Cherry" : 5,
    "Bar" : 4,
    "King" : 3,
    "Queen" : 2,
    "Jack" : 1
  };
  
  reels = reels.map(function(reel, spin){
    return(reel[spins[spin]])
  })
  
  if(reels[0] == reels[1] && reels[1] == reels[2]){
    var figure = reels[0];
    var score = points[figure]*10;
    return score;
  }
  
  else if(reels[0] == reels[1] || reels[1] == reels[2] || reels[0] == reels[2]){
    var pair = "";
    if(reels[0] == reels[1] || reels[0] == reels[2]) pair = reels[0];
    else pair = reels[1];
    var haveWild = (reels.indexOf("Wild") != -1 && pair != "Wild") ? true : false;
    var score = (haveWild) ? points[pair]*2 : points[pair];
    return score
  } 
  else return 0;
}