
export function didUserWin(player, computer) {
    if (player ==='rock' && computer === 'rock'){
        return 'draw';}
    if (player === 'rock' && computer === 'scissors'){
        return 'You Win!';}
    if (player === 'rock' && computer === 'paper'){
        return 'You lose!';}    
    if (player === 'paper' && computer === 'paper'){
        return 'draw';}
    if (player === 'paper' && computer === 'rock'){
        return 'You Win!';}    
    if (player === 'paper' && computer === 'scissors'){
        return 'You lose!';}
    if (player === 'scissors' && computer === 'rock'){
        return 'You lose!'}
    if (player === 'scissors' && computer === 'paper'){
        return 'You Win!';}
    if (player === 'scissors' && computer === 'scissors'){
        return 'draw';}
    
    }



export function getRandomThrow(){
    const sideArray = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3)
    
    return sideArray[randomNumber];

}