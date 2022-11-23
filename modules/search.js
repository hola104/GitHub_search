export class Search {
  constructor(view, api) {
    this.view = view;
    this.api = api;

    this.view.searchInput.addEventListener(
      "keyup",
      this.debounce(this.searchUsers.bind(this), 500)
    );
  }

  async searchUsers() {
    const searchValue = this.view.searchInput.value;

    try {
      if (searchValue) {
        this.clearUsers();

        let res = await this.api.loadUsers(searchValue);
        let data = await res.json();

        for (let rep of data.items) {
          await this.view.createUser(rep);
        }
      } else {
        this.clearUsers();
      }
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }

  clearUsers() {
    this.view.usersList.innerHTML = "";
  }

  debounce(fn, debounceTime) {
    let timer;

    return function (...args) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        fn.apply(this, args);
      }, debounceTime);
    };
  }
}
