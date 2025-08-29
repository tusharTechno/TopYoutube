window.addEventListener("scroll", () => {
    document
        .querySelector(".navbar")
        .classList.toggle("scrolled", window.scrollY > 50);
});
// Initialize tooltips
const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
let openSearch = false;
document
    .querySelector(".search-openbtn")
    .addEventListener("click", () => {
        let searchBox = document
            .querySelector(".menu .search-form")
            .classList.toggle("d-none");
    });

const suggestionsList = [
    "Trendings",
    "Music",
    "Gaming",
    "Tech",
    "News",
    "Sports",
    "Entertainment",
    "Film & Animation",
    "Travel & Events",
    "Epic Drone Shots",
    "Music Trends 2025",
    "Uptown Funk Again",
    "Love The Way You Lie",
    'Gangnam Style Rewind'
];

// Function to show suggestions
function showSuggestions(input, suggestionsElement) {
    const value = input.value.toLowerCase();
    suggestionsElement.innerHTML = "";
    if (value) {
        const filtered = suggestionsList.filter((item) =>
            item.toLowerCase().includes(value)
        );
        filtered.forEach((item) => {
            const suggestionItem = document.createElement("a");
            suggestionItem.classList.add("dropdown-item");
            suggestionItem.href = `/pages/search.html?=${item.toLowerCase().split(' ').join('-')}`;
            suggestionItem.textContent = item;
            suggestionItem.addEventListener("click", () => {
                suggestionsElement.innerHTML = "";
                suggestionsElement.style.display = "none";
            });
            suggestionsElement.appendChild(suggestionItem);
        });
        if (filtered.length > 0) {
            suggestionsElement.style.display = "block";
        } else {
            suggestionsElement.style.display = "none";
        }
    } else {
        suggestionsElement.style.display = "none";
    }
}

// Attach to navbar search
const navbarInput = document.querySelector(".navbar .search-input");
const navbarSuggestions = document.getElementById("navbar-suggestions");
if (navbarInput && navbarSuggestions) {
    navbarInput.addEventListener("input", () =>
        showSuggestions(navbarInput, navbarSuggestions)
    );
    navbarInput.addEventListener("focus", () =>
        showSuggestions(navbarInput, navbarSuggestions)
    );
    navbarInput.addEventListener("blur", () => {
        setTimeout(() => {
            navbarSuggestions.style.display = "none";
        }, 200);
    });
}