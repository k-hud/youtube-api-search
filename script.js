function eventListeners(event) {


  $("#js-search-form").submit(event => {
    event.preventDefault();

    let searchInput = $("#js-search-input").val();
    let stateInput = $("#js-state-input").val();
    let resultNumInput = $("#js-result-num-input").val();

    apiPull(searchInput, stateInput, resultNumInput);

  });
}


function apiPull(searchInput, stateInput, resultNumInput) {

  const baseURL = "https://api.nps.gov/api/v1/parks";

  const queryString = formatParams(searchInput, stateInput, resultNumInput);
  console.log(`queryString  is: ${queryString}`);
  const url = baseURL + "?" + queryString;
  const options = new Headers({
    "X-Api-Key": "579lGWHjB1vqN5cUJw6TDoY6t1gUP7h6LMswisjj"});

  function formatParams(search, state, results) {

    var queryParams = {
      q: search,
      stateCode: state,
      limit: results,
    };

    const formattedQuery = Object.keys(queryParams).map(
      key =>
        `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`
    );
    console.log(JSON.stringify(formattedQuery));
    return formattedQuery.join("&");
  }

  fetch(url, options)
    .then(response => {
      console.log(url, options);
      return response.json();
    })
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert(error.message));
}

function displayResults(responseJson) {
  $("#js-display-results").empty();
  if (responseJson .total == 0) {
    $("#js-display-results").html(`<p class="no-results">We found no results! Let's try that again.</p>`);
  } else {
  for (i = 0; i < responseJson.data.length; i++) {
    $("#js-display-results").append(
      `<p class="park-name">Park Name: ${responseJson.data[i].fullName}</p>
      <p class="park-description">Description: ${
        responseJson.data[i].description
      }</p>
      <p class="park-url">URL: ${responseJson.data[i].directionsUrl}</p>
      <span>-----</span>
      `
      );
    }
  }
}

$(eventListeners);
