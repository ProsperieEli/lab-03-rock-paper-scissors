export function didUserWin(player, computer) {
}


export function getRandomThrow(){
    const sideArray = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3)
    
    return sideArray[randomNumber];

}