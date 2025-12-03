//https://www.codewars.com/kata/517b2bcf8557c200b8000015/train/javascript
const Position = { high: 'h', low: 'l' };

class Warrior{
  constructor(name){    
    this.name = name;  
    this.health = 100;   
    this.deceased = false;
    this.zombie = false;
  }  
  attack(enemy, position){
    if (enemy.block === position) return;
    const damage = (position === Position.high ? 10 : 5) + (enemy.block ? 0 : 5);
    enemy.setHealth(enemy.health - damage);    
  }  
  setHealth(value){
    if (this.deceased) this.zombie = true;
    this.health = Math.max(0, value);  
    this.deceased = this.health == 0;    
  }
}