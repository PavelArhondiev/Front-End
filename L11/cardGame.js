var firstCardClicked = '',
    secondCardClicked = '',
    firstCardID = '',
    secondCardID = '';

var scoreCount = 0;
var scoreCountDomNode = document.getElementById('scoreCount');
var sessionMaxScore=localStorage.getItem('sessionMaxScore')
var highScore=localStorage.getItem('highScoreKey');
document.getElementById('highScoreCount').innerHTML=highScore;

function cardFlipper(event, planetName) {
    showFace(event, planetName);

    if (firstCardClicked == '') {
        firstCardClicked = planetName;
        firstCardID = event.target.id;

    } else if (firstCardClicked !== '') {
        secondCardClicked = planetName;
        secondCardID = event.target.id;

        if (firstCardClicked == secondCardClicked) {
            document.getElementById(firstCardID).classList.add('CardsHidden');
            document.getElementById(secondCardID).classList.add('CardsHidden');
            firstCardClicked = '',
                secondCardClicked = '',
                firstCardID = '',
                secondCardID = '';
            scoreCount += 10;
            localStorage.setItem('sessionMaxScore',scoreCount);
            console.log(localStorage.sessionMaxScore)
        } else {
            showBack();
            console.log(firstCardClicked);
            console.log(secondCardClicked);

        }
    }
    document.getElementById('scoreCount').innerHTML = scoreCount;
    if (scoreCountDomNode.innerHTML > highScore) {
        highScore = parseInt(scoreCount);
        document.getElementById('highScoreCount').innerHTML = highScore;
        localStorage.setItem('highScoreKey', highScore);
    }
    if(scoreCount>80){
        alert('YOU WON');
    }
}
function showFace(event, planetName) {
    urlString = "url(Images/" + planetName + ".png)";
    event.target.style.backgroundImage = urlString;
    event.target.classList.remove('faceDown');
}
function showBack() {
    document.getElementById(firstCardID).style.backgroundImage = "url(Images/CardBack.png";
    document.getElementById(firstCardID).classList.add('faceDown');
    firstCardClicked = secondCardClicked,
        secondCardClicked = '',
        firstCardID = secondCardID,
        secondCardID = '';
}
document.querySelector('.reset').addEventListener('click', reloadGame);

function reloadGame() {
    location.reload();
}

setTimeout(function(){window.location.href='gameOver.html'},30000);

