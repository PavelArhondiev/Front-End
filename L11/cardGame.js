var startingCard = '';
var lastPlanet = '';
var lastPlanetID = '';

function cardFlipper(event, planetName) {
    showFace(event, planetName);
    var currentPlanet = event.target.dataset.name;



    if (lastPlanet == currentPlanet) {
        event.target.classList.add('CardsHidden');
        event.target.classList.remove('Cards', 'faceDown')
        document.getElementById(lastPlanetID).classList.add('CardsHidden');
        document.getElementById(lastPlanetID).classList.remove('Cards', 'faceDown')
        startingCard = '';
        lastPlanet = '';
    }else{
        
        lastPlanet=currentPlanet;
        setTimeout(showBack(event),3000);
    }
    
    // event.target.style.backgroundImage = "url(Images/CardBack.png";
   
    
    lastPlanetID = event.target.id;


    console.log('starting card'+startingCard)
    // console.log(event.target)
    console.log('last planet'+lastPlanet)
    console.log('current planet '+currentPlanet)
    console.log(lastPlanetID)
}

function showFace(event, planetName) {
    urlString = "url(Images/" + planetName + ".png)";
    event.target.style.backgroundImage = urlString;
    event.target.classList.remove('faceDown');
    event.target.dataset.name = planetName;
    
}
function showBack(event){
    event.target.style.backgroundImage = "url(Images/CardBack.png";
    event.target.classList.add('faceDown');
}