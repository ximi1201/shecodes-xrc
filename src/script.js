function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#searchInput");
  let cityElement = document.querySelector("#City");
  cityElement.innerHTML = searchInputElement.value;
}

let searchFormElement = document.querySelector("#searchForm");
searchFormElement.addEventListener("submit", handleSearchSubmit);
