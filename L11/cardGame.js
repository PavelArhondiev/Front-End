var firstCardClicked = '',
    secondCardClicked = '',
    firstCardID = '',
    secondCardID = '';

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
            document.getElementById(firstCardID).classList.remove('Cards', 'faceDown');
            document.getElementById(secondCardID).classList.add('CardsHidden');
            document.getElementById(secondCardID).classList.remove('Cards', 'faceDown');
            firstCardClicked = '',
                secondCardClicked = '',
                firstCardID = '',
                secondCardID = '';
        } else  {
            showBack();
            console.log(firstCardClicked);
            console.log(secondCardClicked);
            
        }
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