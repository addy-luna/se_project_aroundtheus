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


// Preview modal
const previewImageModal = document.querySelector("#modal-preview");
const previewImageElement = previewImageModal.querySelector(".modal__image");
const previewImageLabel = previewImageModal.querySelector(".modal__image-label");
const modalContainer = previewImageModal.querySelector(".modal__container");

const previewModalCloseBtn = previewImageModal.querySelector("#profileCloseBtn");


const cardListEl = document.querySelector("#cardsContainer");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");


// function is the one way to render cards on app
function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);

}


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
  //const addCardElement = getCardElement();

  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({name, link}, cardListEl);


  closePopup(addCardModal);
}


// card data template
function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector('.card__like-button');
  const trashButton = cardElement.querySelector('.card__trash-button');


  trashButton.addEventListener('click', () => {
    cardElement.remove();
  })



  // add click listener to card image element
    // openModal with previewImageModal

    cardImageEl.addEventListener("click", () => {
      previewImageElement.src = cardData.link;
      previewImageElement.alt = cardData.name;
      previewImageLabel.textContent = cardData.name;
      openPopup(previewImageModal);
    });


  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('card__like-button_active');
  })


  cardTitleEl.textContent = cardData.name;

  cardImageEl.alt = cardData.name;
  cardImageEl.src = cardData.link;

  return cardElement;
}


//
initialCards.forEach((cardData) => renderCard(cardData, cardListEl));


// event form listeners
profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal)

});

previewModalCloseBtn.addEventListener("click", () =>
  closePopup(previewImageModal)
);


profileModalCloseButton.addEventListener("click", () =>
  closePopup(profileEditModal));

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addCardEditForm.addEventListener("submit", handleAddCardFormSubmit);


// add new card button listener
addNewCardButton.addEventListener('click', () => openPopup(addCardModal));
addCardModalCloseButton.addEventListener('click', () =>
  closePopup(addCardModal));

