// Import API configuration
import API_CONFIG from "../../config/apikey.js";

// Dictionary API function
const dictionary = (inputWord) => {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": API_CONFIG.RAPID_API_KEY,
      "x-rapidapi-host": API_CONFIG.RAPID_API_HOST,
    },
  };

  // Show loading state
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("word").innerHTML = `Searching for "${inputWord}"...`;
  document.getElementById("definition").innerHTML = "Loading...";

  // Use the input word dynamically in the API URL
  fetch(
    `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${inputWord}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      // Update the HTML content dynamically
      document.getElementById("word").innerHTML =
        response.word || "Word not found";
      document.getElementById("definition").innerHTML =
        response.definition ||
        "Definition not available. Please try a different word!";
    })
    .catch((err) => {
      console.error(err);
      document.getElementById("definition").innerHTML =
        "Error fetching data. Please try again later.";
    });
};

// Mobile menu toggle functionality
const toggleMobileMenu = () => {
  const menuBtn = document.getElementById("menu-btn");
  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      const menu = document.getElementById("menu");
      menu.classList.toggle("hidden");
    });
  }
};

// Initialize the app
document.addEventListener("DOMContentLoaded", function () {
  // Add event listener for the search button
  const searchBtn = document.getElementById("searchbtn");
  if (searchBtn) {
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const searchInput = document.getElementById("searchinput").value.trim();
      if (searchInput) {
        dictionary(searchInput);
      } else {
        document.getElementById("result").classList.remove("hidden");
        document.getElementById("word").innerHTML = "Error";
        document.getElementById("definition").innerHTML =
          "Please enter a word to search!";
      }
    });
  }

  // Add event listener for enter key in search input
  const searchInput = document.getElementById("searchinput");
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const searchWord = searchInput.value.trim();
        if (searchWord) {
          dictionary(searchWord);
        } else {
          document.getElementById("result").classList.remove("hidden");
          document.getElementById("word").innerHTML = "Error";
          document.getElementById("definition").innerHTML =
            "Please enter a word to search!";
        }
      }
    });
  }

  // Initialize mobile menu toggle
  toggleMobileMenu();
});
