const axios = require("axios");
function getNonProfits() {
 return axios
    .get("https://projects.propublica.org/nonprofits/api/v2/search.json")
    // .then(({ data }) => console.log(data));
}
module.exports={getNonProfits} 
