import axios from "axios";
import React from "react";
import APIEndPoint from "./lib/api";

export const DomainStatistics = (yyyy, mm, dd) => {
  // Make API full url

  APIEndPoint =
    APIEndPoint + "/stats/" + yyyy + "/" + mm + "/" + dd + "/stats.json";
  axios
    .get(APIEndPoint)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  //return "Test";
};
