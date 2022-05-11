fetch("https://projects.propublica.org/nonprofits/api/v2/search.json")
  .then((response) => response.json())
  .then((data) => console.log(data));