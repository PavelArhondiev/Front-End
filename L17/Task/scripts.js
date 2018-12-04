var domNode_editButton = document.querySelector('.EditPageButton'),
    domNode_aside = document.querySelector('.EditPeopleWrapper'),
    domNode_addPersonButton = document.getElementById('AddOnePerson');
var peopleCardsArr = [];
var domNodeArr_Inputs = document.querySelectorAll('.EditPeopleWrapper input');
var randomButton= document.getElementById('Random');

domNode_editButton.addEventListener('click', toggleAsideMenu);

function toggleAsideMenu() {
    var isExpanded = false;
    domNode_aside.classList.toggle('EditPeopleWrapper--expanded');
    isExpanded = domNode_aside.classList.contains('EditPeopleWrapper--expanded');

    if (isExpanded) {
        domNode_editButton.innerText = 'Stop editing';
        domNode_editButton.classList.add('EditPageButton--active')
    } else {
        domNode_editButton.innerText = 'Edit';
        domNode_editButton.classList.remove('EditPageButton--active')
    }
}
domNode_addPersonButton.addEventListener('click', onAddPersonClicked);

function onAddPersonClicked() {
    var cardInfoObj = {};
    var cardInfoObj = getPersonInfo();
    peopleCardsArr.push(cardInfoObj);
    addPersonCard(cardInfoObj, peopleCardsArr.length - 1);
    function getPersonInfo() {
        domNodeArr_Inputs.forEach(function (item) {
            var name = item.getAttribute('name'),
                value = item.value;
            cardInfoObj[name] = value;
        });
        return cardInfoObj;

    }
}

function addPersonCard(cardInfoObj, id) {
    var html = '',
        domNode_cardWrapper;

    if(randomButton.checked){
        cardInfoObj.firstname=getRandomName();
        cardInfoObj.job=getRandomJob();
        cardInfoObj.phone=getRandomPhone();
    }



    
    document.querySelector('.PeopleCardsContainer')
        .classList.add('PeopleCardsContainer--hidden');
    html = '<div class="PersonCard" data-id="' + id + '" id="card' + id + '">' +
        '<div class="PersonImage"></div>' +
        '<div class="PersonName">' + cardInfoObj.firstname + '</div>' +
        '<div class="personJobTitle">' + cardInfoObj.job + '</div>' +
        '<div class="eMail">' + cardInfoObj.email + '</div>' +
        '<div class="PersonPhoneNumber">' + cardInfoObj.phone + '</div>' +
        '</div>';
    domNode_cardWrapper = document.createElement('div');
    domNode_cardWrapper.innerHTML = html;

    document.querySelector('.PeopleCardWrapper')
        .appendChild(domNode_cardWrapper);

    domNode_cardWrapper.querySelector('.PersonCard').addEventListener('click', onPersonCardClicked);
}

function onPersonCardClicked(event) {
    var domNode_activeElement = document.querySelector('.PersonCard--active'),
        hasActive = event.target.classList.contains('PersonCard--active');
    var id = event.target.dataset.id;
    var arrayPart = peopleCardsArr[id];
    var saveButton = document.getElementById('Save');
    var addButton = document.getElementById('AddOnePerson');
    var deleteCard = document.getElementById('deleteCard');

    if (domNode_activeElement) {
        domNode_activeElement.classList.remove('PersonCard--active');
    }
    if (!hasActive) {
        event.target.classList.add('PersonCard--active');
    }
    document.getElementById('name').value = arrayPart.firstname;
    document.getElementById('job').value = arrayPart.job;
    document.getElementById('phone').value = Number(arrayPart.phone);
    document.getElementById('email').value = arrayPart.email;

    saveButton.style.opacity = 1;
    saveButton.style.visibility = 'visible';
    addButton.style.opacity = 0;
    addButton.style.visibility = 'hidden';
    
//Save button start
    saveButton.addEventListener('click', saveChanges);

    function saveChanges() {
        if (event.target.classList.contains('PersonCard--active')) {
            event.target.innerHTML = '<div class="PersonImage"></div>' +
                '<div class="PersonName">' + document.getElementById('name').value + '</div>' +
                '<div class="personJobTitle">' + document.getElementById('job').value + '</div>' +
                '<div class="eMail">' + document.getElementById('email').value + '</div>' +
                '<div class="PersonPhoneNumber">' + document.getElementById('phone').value + '</div>'
            console.log(event.target)
        }
        saveButton.style.opacity = 0;
        saveButton.style.visibility = 'hidden';
        addButton.style.opacity = 1;
        addButton.style.visibility = 'visible';
        deleteCard.style.opacity = 0;
        deleteCard.style.visibility = 'hidden';
    }
//Save button end
//Delete card start
    deleteCard.style.opacity = 1;
    deleteCard.style.visibility = 'visible';
    deleteCard.addEventListener('click', function () {
        console.log(event.target.parentElement)
        if (event.target.classList.contains('PersonCard--active')) {
            var parentRemover = event.target.parentElement;
            parentRemover.parentElement.removeChild(parentRemover);
        }

    })
//Delete card end

}



function getRandomName(){
    var randomNamesArr = [
        "Averyl",
        "Avie",
        "Avis",
        "Aviva",
        "Avivah",
        "Avril",
        "Avrit",
        "Ayn",
        "Bab",
        "Babara",
        "Babb"
    ]
    var randomName = randomNamesArr[Math.floor((Math.random() * randomNamesArr.length) + 0)]
    return randomName;
    
}
function getRandomJob(){
    var randomJobArr = [
        "dev",
        "qa",
        "pm",
        "boss",
        "sec",
        "timewasting"
    ]
    var randomJob = randomJobArr[Math.floor((Math.random() * randomJobArr.length) + 0)]
    return randomJob;
    
}
function getRandomPhone(){
    var randomPhone='';
    for(var i=0;i<10;i++){
        randomNumber=Math.floor((Math.random() * 9) + 0);
        toString(randomNumber);
        randomPhone+=randomNumber;
    }
    return randomPhone;
}