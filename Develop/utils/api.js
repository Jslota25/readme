const axios = require("axios");
const api = {
  getUser(username) {
    axios
    .get()
    .then(response => console.log(response))
    .catch(error => console.log(error))

  }
};

api.getUser();

module.exports = api;
