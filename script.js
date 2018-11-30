function eventListeners(event) {
  $("#js-park-input").on("input", function() {
    if ($(this).val().length) {
      $("#js-search-input").prop("disabled", true);
      $("#js-search-input").css("background-color", "#d1d1d1");
    } else {
      $("#js-search-input").prop("disabled", false);
    }
  });

  $("#js-search-input").on("input", function() {
    if ($(this).val().length) {
      $("#js-park-input").prop("disabled", true);
      $("#js-park-input").css("background-color", "#d1d1d1");
    } else {
      $("#js-park-input").prop("disabled", false);
    }
  });

  $("#js-search-form").submit(event => {
    event.preventDefault();

    let parkInput = $("#js-park-input").val();
    let searchInput = $("#js-search-input").val();
    let stateInput = $("#js-state-input").val();
    let resultNumInput = $("#js-result-num-input").val();

    console.log(parkInput, searchInput, stateInput, resultNumInput);
    console.log(parkInput.length, searchInput.length);

    if (parkInput.length == 0) {
      apiPull(searchInput, stateInput, resultNumInput);
    } else if (searchInput.length == 0) {
      apiPull(parkInput, stateInput, resultNumInput);
    } else {
      console.log("Something broke.");
    }
  });
}

function apiPull(parkOrSearch, stateInput, resultNumInput) {

  console.log(parkOrSearch, stateInput, resultNumInput);
  const url = 'https://api.nps.gov/api/v1/parks';

  const queryParams = {
    key: '579lGWHjB1vqN5cUJw6TDoY6t1gUP7h6LMswisjj',
    q: parkOrSearch,
    parkCode: parkOrSearch,
    stateCode: stateInput,
    limit: resultNumInput,
  };

  formatParams(url, queryParams);

  fetch(url)
  .then(response => response.json())
  .then(responseJson => displayResults(responseJson))
  .catch(error => console.log(error.message));
}

// function formatParams() {
//   const query = {
//
//   }
// }
//
// function displayResults() {
//   $("#js-display-results").empty();
// }

$(eventListeners);
