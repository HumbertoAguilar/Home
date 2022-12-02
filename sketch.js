
function setup(){

    player=createButton('1 Player')
    player.position(550,250);
    player2=createButton('2 Players')
    player2.position(550,350)
    controls=createButton('Controls')
    controls.position(550,450)

}
function draw(){
    player.mousePressed(FH1)
    player2.mousePressed(FH2)
    controls.mousePressed(Controls)

}
function FH1(){
    location.replace('https://humbertoaguilar.github.io/FH-1player/');

}

function FH2(){

    location.replace('https://humbertoaguilar.github.io/Football-Heads-Chromebook/');

}
function Controls(){

    location.replace('https://humbertoaguilar.github.io/Controls/');


}






/*    <a href="https://humbertoaguilar.github.io/FH-1player/"><button class="1player">1 Player</button></a>
     <a href="https://humbertoaguilar.github.io/Football-Heads-Chromebook/">     <button class="2player" >2 Players</button>     </a>
     <a href="https://humbertoaguilar.github.io/Controls/">     <button class="2player" >Controls</button>     </a>*/