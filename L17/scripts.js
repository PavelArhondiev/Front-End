function openEditWrapper() {
    var EditWrapperDN = document.querySelector('.EditPeopleWrapper');
    var EditButtonDN = document.querySelector('.EditPageButton')

    EditWrapperDN.classList.toggle('opened');
    EditButtonDN.classList.toggle('EditPageButton--active');

    var EditButtonValueDN = document.querySelector('.EditPageButton').innerHTML;

    if (EditButtonValueDN === 'Edit') {
        document.querySelector('.EditPageButton').innerHTML = 'Stop Editing';
    } else {
        document.querySelector('.EditPageButton').innerHTML = 'Edit';
    }

}

function InputDataTransfer() {
    var infoInput = {
        name: document.getElementById('name').value,
        job: document.getElementById('job').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
    }

    var cardWrapper = document.createElement("div");
    var cardImage = document.createElement("div");
    var cardName = document.createElement("div");
    var cardJob = document.createElement("div");
    var cardEmail = document.createElement("div");
    var cardPhone = document.createElement("div");

    cardWrapper.classList.add('PersonCard');
    cardImage.classList.add('PersonImage');
    cardName.classList.add('PersonName');
    cardJob.classList.add('personJobTitle');
    cardEmail.classList.add('eMail');
    cardPhone.classList.add('PersonPhoneNumber');

    cardName.textContent = infoInput.name;
    cardJob.textContent = infoInput.job;
    cardEmail.textContent = infoInput.email;
    cardPhone.textContent = infoInput.phone;

    cardWrapper.appendChild(cardImage);
    cardWrapper.appendChild(cardName);
    cardWrapper.appendChild(cardJob);
    cardWrapper.appendChild(cardEmail);
    cardWrapper.appendChild(cardPhone);

    var cardsContainer = document.querySelector('.PeopleCardsContainer');
    cardsContainer.innerHTML = '';

    var allCardsWrapper = document.querySelector('.PeopleCardWrapper');
    allCardsWrapper.appendChild(cardWrapper);


}