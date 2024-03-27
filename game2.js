// JavaScript source code

let points = 0;
let currentEnemy = 0;
let enemyhp = 0;
let enemyDmg = 0;
let enemy_sprite = "";
let enemyQuotes={};
let EnemyAverageDmg = 0;



//attack animations
const attackButton = document.getElementById('attack-button');
const attackImage = document.getElementById('attack-image');
const enemyImage = document.getElementById('enemy-image');

attackButton.addEventListener('click', () => {
  // Add the class that triggers the animation
  attackImage.classList.add('attacking');
  enemyImage.classList.add('flashing');

  // After the animation finishes, remove the class to reset it for the next click
  setTimeout(() => {
    attackImage.classList.remove('attacking');
    enemyImage.classList.remove('flashing');
  }, 500); // Adjust this timeout to match the duration of the animation
});

//dodge animations
const dodgeButton = document.getElementById('dodge-button');

dodgeButton.addEventListener('click', () => {
  // Add the class that triggers the animation
  attackImage.classList.add('dodging');

  // After the animation finishes, remove the class to reset it for the next click
  setTimeout(() => {
    attackImage.classList.remove('dodging');
  }, 700); // Adjust this timeout to match the duration of the animation
});
function createEnemy(name, health, attackPower, averageDamage, spriteImage, quotes) {
    return {
        name: name,
        health: health,
        attackPower: attackPower,
        averageDamage: averageDamage,
        spriteImage: spriteImage,
        quotes: quotes,
        speak: function(option) {
            return this.quotes[option] || "I have nothing to say to you.";
        }
    };
}

// Example usage:
const enemy1 = createEnemy(
    "Sumo",
    120,
    25,
    18,
    "enemy1_sprite.png",
    {
        1: "You stand no chance against me!",
        2: "I'll crush you like a bug!",
        3: "Prepare to meet your end, weakling!",
        4: "Your fate is sealed!"
    }
);

const enemy2 = createEnemy(
    "Sumo2",
    150,
    30,
    20,
    "enemy2_sprite.png",
    {
        1: "You are nothing but a mere annoyance!",
        2: "I'll make sure you regret this encounter!",
        3: "You'll be begging for mercy soon enough!",
        4: "Your feeble attempts amuse me!"
    }
);

// Example usage:
console.log("Enemy 1 health:", enemy1.health);
console.log("Enemy 1 speaks:", enemy1.speak(3)); // Output: Prepare to meet your end, weakling!

console.log("Enemy 2 health:", enemy2.health);
console.log("Enemy 2 speaks:", enemy2.speak(1)); // Output: You are nothing but a mere annoyance!
