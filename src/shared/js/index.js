import axios from "axios";

// Make a request for a user with a given ID
axios
  .get("http://localhost:3000/json/data.json")
  .then(function (response) {
    // handle success
    console.log("this is helper", response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

const baseAPI = axios.create({ timeout: 60000 });
export const getData = async (data) =>
  baseAPI.get(window.location.origin + "/json/" + data + ".json");
