
function eventListeners(event) {
    $('#js-park-input').on('input', function () {
      if ($(this).val().length) {
        $('#js-search-input').prop('disabled', true);
        $('#js-search-input').css('background-color', '#d1d1d1');
      } else {
        $('#js-search-input').prop('disabled', false);
      }
    });

    $('#js-search-input').on('input', function () {
      if ($(this).val().length) {
        $('#js-park-input').prop('disabled', true);
        $('#js-park-input').css('background-color', '#d1d1d1');
      } else {
        $('#js-park-input').prop('disabled', false);
      }
    });

    $('#js-search-form').submit(event => {
    event.preventDefault();

    let parkInput = $('#js-park-input').val();
    let searchInput = $('#js-search-input').val();
    let stateInput = $('#js-state-input').val();
    let resultNumInput = $('#js-result-num-input').val();

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
  console.log('Made it!');
  // console.log(parkOrSearch, stateInput, resultNumInput);
  // const url = '';
  //
  // const queryParams = {
  //   key: '579lGWHjB1vqN5cUJw6TDoY6t1gUP7h6LMswisjj';
  // };
  //
  // fetch(url)
  // .then()
  // .then()
  // .catch();
}

function formatQuery() {

}

function displayResults() {
  $('#js-display-results').empty();

}

$(eventListeners);
