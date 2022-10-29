const weaponType = document.querySelectorAll('.container > img');

let playerHealth = 5;
let computerHealth = 5;
const computerWeapons = ['rock', 'paper', 'scissors'];


for(let i = 0; i < weaponType.length; i++) {
    weaponType[i].addEventListener('click', () => {
        let playerWeapon = weaponType[i].dataset.weapon;
        startGame(playerWeapon);
    });
}

const setImages = (playerWeapon, computerWeapon) => {
    const computer = document.querySelector('.computer-weapon');
    const player = document.querySelector('.player-weapon');
    
    const playerImage = document.createElement("img");
    playerImage.src = `./images/${playerWeapon}.png`;
    
    const computerImage = document.createElement("img");
    computerImage.src = `./images/${computerWeapon}.png`;

    if(player.hasChildNodes()){
        player.removeChild(player.firstChild)
    }

    if(computer.hasChildNodes()){
        computer.removeChild(computer.firstChild)
    }


    player.appendChild(playerImage);
    computer.appendChild(computerImage);
}

const setResult = (result) => {
    document.querySelector('.player-health').textContent=`${playerHealth}`;
    document.querySelector('.computer-health').textContent=`${computerHealth}`;
    document.querySelector('.result').textContent=`${result}`;    

}

const startGame = (weapon) => {
    console.log('gamestarted')
    if(playerHealth <= 0) location.reload()
    if(computerHealth <= 0) location.reload()
    let computerWeapon = computerWeapons[Math.floor(Math.random() * 3)]

    setImages(weapon, computerWeapon)
    
    switch (weapon) {
        case 'rock':
            if(computerWeapon === 'rock') return setResult('draw');
            if(computerWeapon === 'paper') {
                playerHealth -= 1
                return setResult('lost');
            }
            if(computerWeapon === 'scissors') {
                computerHealth -= 1
                return setResult('won');
            }
            break;
        case 'paper':
            if(computerWeapon === 'rock') {
                computerHealth -= 1;
               return setResult('won'); 
            } 
            if(computerWeapon === 'paper') return setResult('draw');
            if(computerWeapon === 'scissors') {
                playerHealth -= 1;
                return setResult('lost');
            }
            break;
        case 'scissors':
            if(computerWeapon === 'rock') {
                 playerHealth -= 1;
                return setResult('lost');
            }
            if(computerWeapon === 'paper') {
                computerHealth -= 1;
                return setResult('won');
            }
            if(computerWeapon === 'scissors') return setResult('draw');
            break;
        default:
            console.log('error somehow')
            break;
    }
    
}

