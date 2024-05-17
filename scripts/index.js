// profile__edit-button (class)
// .profile__edit-button (class selector)


// array of initial card data
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"
  },
  {
    name: "Vanoise National",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"
  },
];


// wrappers
const profileEditModal = document.querySelector("#profileEditModal");
const profileEditForm = profileEditModal.querySelector(".modal__form");

const addCardModal = document.querySelector("#addCardModal");
const addCardEditForm = addCardModal.querySelector(".modal__form");

// buttons
const profileModalCloseButton = profileEditModal.querySelector("#profileCloseBtn");
const addCardModalCloseButton = addCardModal.querySelector("#profileCloseBtn");
const addNewCardButton = document.querySelector(".profile__add-button");
const profileEditBtn = document.querySelector("#profileEditBtn");

// input
const profileTitle = document.querySelector("#profile-title");
const profileTitleInput = document.querySelector("#profile-title-input");

// add card
const cardTitleInput = addCardEditForm.querySelector(".modal__input_type_title");
const cardUrlInput = addCardEditForm.querySelector(".modal__input_type_url");

// description input
const profileDescription = document.querySelector("#profile-description");
const profileDescriptionInput = document.querySelector("#profile-description-input");


// const cardTitleInput =

const cardListEl = document.querySelector("#cardsContainer");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");



// function openPopup() {
//   profileTitleInput.value = profileTitle.textContent;
//   profileDescriptionInput.value = profileDescription.textContent;

//   profileEditModal.classList.add("modal_opened");
// }

// modal function - open modal
function openPopup(modal) {
  modal.classList.add("modal_opened");
}


// modal function - close modal
function closePopup(modal) {
  modal.classList.remove("modal_opened");
}


// submit edit change event
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}


function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const CardElement = getCardElement();

  const titleValue = cardTitleInput.value;
  const urlValue = cardUrlInput.value;
  console.log('titleValue', titleValue);
  return console.log('urlValue', urlValue);



  closePopup(addCardModal);
}


// card data template
function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");

  cardTitleEl.textContent = cardData.name;

  cardImageEl.alt = cardData.name;
  cardImageEl.src = cardData.link;

  return cardElement;
}


//
initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.append(cardElement);
});


// event form listeners
profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal)

});

profileModalCloseButton.addEventListener("click", () =>
  closePopup(profileEditModal));

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addCardEditForm.addEventListener("submit", handleAddCardFormSubmit);


// add new card button listener
addNewCardButton.addEventListener('click', () => openPopup(addCardModal));
addCardModalCloseButton.addEventListener('click', () =>
  closePopup(addCardModal));