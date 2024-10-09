//Initial price of the burger
var wholeWheatBun = 20;

//Ingredients of the burger along with the price
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger (empty initially)
var state = {
  Patty: false,
  Cheese: false,
  Tomatoes: false,
  Onions: false,
  Lettuce: false
};

// This function renders the entire screen every time the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  let cheese = document.querySelector("#cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  let tomato = document.querySelector("#tomato");
  if (state.Tomatoes) {
    tomato.style.display = "inherit";
  } else {
    tomato.style.display = "none";
  }
}

function renderOnions() {
  let onion = document.querySelector("#onion");
  if (state.Onions) {
    onion.style.display = "inherit";
  } else {
    onion.style.display = "none";
  }
}

function renderLettuce() {
  let lettuce = document.querySelector("#lettuce");
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

// Event listeners for buttons
document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

// Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {
  for (let ingredient in state) {
    let button = document.querySelector(".btn-" + ingredient.toLowerCase());
    if (state[ingredient]) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  }
}

// Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard() {
  let eachIngredient = document.querySelectorAll(".items");
  for (let i = 0; i < 5; i++) {
    if (state[eachIngredient[i].textContent]) {
      eachIngredient[i].style.display = "inherit";
    } else {
      eachIngredient[i].style.display = "none";
    }
  }
}

// Judgement 1 - In the p element having price-details as the class, display the calculated price based on ingredients
function renderPrice() {
  let totalPrice = wholeWheatBun;
  for (let ingredient in state) {
    if (state[ingredient]) {
      totalPrice += ingredients[ingredient];
    }
  }
  document.querySelector(".price-details").textContent = "INR " + totalPrice;
}

var modal = document.getElementById("paymentModal");
var closeBtn = document.querySelector(".close-btn");

var payButton = document.querySelector(".Rectangle5");

payButton.onclick = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function shareBurgerOnWhatsApp() {
  let ingredients = Object.keys(state)
    .filter(key => state[key])
    .join(', ');

  let message = `🍔 *I just crafted my perfect burger at BRRRGRRR!* 🧑‍🍳\n\n` +
    `Here’s what I’ve added to my masterpiece:\n\n` +
    `🥩 *Patty*: ${state.Patty ? 'Yes' : 'No'}\n` +
    `🧀 *Cheese*: ${state.Cheese ? 'Yes' : 'No'}\n` +
    `🍅 *Tomatoes*: ${state.Tomatoes ? 'Yes' : 'No'}\n` +
    `🧅 *Onions*: ${state.Onions ? 'Yes' : 'No'}\n` +
    `🥬 *Lettuce*: ${state.Lettuce ? 'Yes' : 'No'}\n\n` +
    `It’s a mouth-watering combo, and I can't wait to dig in! ` +
    `Hungry? Why not create your own burger at BRRRGRRR and enjoy the perfect bite! 😋🔥`;

  let whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, '_blank');
}

document.getElementById('share-whatsapp').addEventListener('click', shareBurgerOnWhatsApp);

renderAll();
