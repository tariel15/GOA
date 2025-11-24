
class Player {
    constructor(name) {
        this.name = name;
    }

    play() {
        console.log(`${this.name} is playing`);
    }
}
class GamePlayer extends Player {
    constructor(name, level) {
        super(name);
        this.level = level;
    }
    static resetPlayers(players) {
        players.forEach(player => {
            player.level = 1;
        });
        console.log("All players reset to level 1");
    }
}

const player1 = new GamePlayer("Alice", 5);
const player2 = new GamePlayer("Bob", 10);

console.log(player1.level);
console.log(player2.level);

GamePlayer.resetPlayers([player1, player2]);

console.log(player1.level);
console.log(player2.level);
