export class View {
  constructor() {
    this.app = document.getElementById("app");
    this.search = this.createElement("div", "search");
    this.searchLine = this.createElement("div", "search-line");
    this.searchInput = this.createElement("input", "search-input");
    this.usersList = this.createElement("ul", "users-list");
    this.cardList = this.createElement("ul", "users");
    this.cardWrapper = this.createElement("div", "card-wrapper");
    this.main = this.createElement("div", "main");
    this.app.append(this.search);
    this.search.append(this.searchLine);
    this.search.append(this.usersList);
    this.searchLine.append(this.searchInput);
    this.app.append(this.cardWrapper);
    this.cardWrapper.append(this.cardList);
  }

  createElement(elementTag, elementClass) {
    const element = document.createElement(elementTag);
    if (elementClass) {
      element.classList.add(elementClass);
    }
    return element;
  }

  createUser(userData) {
    let userElement = this.createElement("li", "user-prev");

    userElement.addEventListener("click", () => this.showUserData(userData));
    userElement.innerHTML = `${userData.name}`;
    this.usersList.append(userElement);
  }

  showUserData(userData) {
    let addCard = this.createElement("ul", "add-list");

    addCard.innerHTML = `<li class="add-card">Name: ${userData.name}<br> Owner: ${userData.owner.login}<br> Stars: ${userData.stargazers_count}<br> </li><input class="image-button" type="image" src="./img/closebtn.png"></input>`;
    this.cardList.append(addCard);

    document.querySelectorAll(".image-button").forEach((event) => {
      event.addEventListener("click", () => event.parentElement.remove());
    });

    this.usersList.innerHTML = "";
    this.searchInput.value = "";

    // this.btnClosed = this.createElement("button", "close-btn");
    // this.addCard.append(btnClosed);
  }
}
