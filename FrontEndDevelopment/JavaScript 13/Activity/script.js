(() => {

    const API_URL = "http://universities.hipolabs.com/search?country=";

    const input = document.getElementById("countryInput");
    const searchBtn = document.getElementById("searchBtn");
    const clearBtn = document.getElementById("clearBtn");
    const resultsList = document.getElementById("resultsList");
    const errorMessage = document.getElementById("errorMessage");
    const loader = document.getElementById("loader");
    const resultCount = document.getElementById("resultCount");
    const historyContainer = document.getElementById("historyContainer");
    const themeToggle = document.getElementById("themeToggle");

    input.focus();

    searchBtn.addEventListener("click", handleSearch);
    clearBtn.addEventListener("click", clearResults);
    input.addEventListener("keypress", e => {
        if (e.key === "Enter") handleSearch();
    });

    themeToggle.addEventListener("click", toggleTheme);

    function toggleTheme() {
        document.body.classList.toggle("dark");
        themeToggle.textContent =
            document.body.classList.contains("dark") ? "☀️" : "🌙";
    }

    async function handleSearch() {
        const country = input.value.trim();

        if (!country) {
            showError("Please enter a country name.");
            return;
        }

        clearUI();
        loader.classList.remove("hidden");

        try {
            const response = await axios.get(API_URL + encodeURIComponent(country));
            const data = response.data;

            if (data.length === 0) {
                showError("No universities found.");
            } else {
                displayResults(data);
                saveSearch(country);
            }
        } catch (error) {
            showError("Network error. Please try again.");
        } finally {
            loader.classList.add("hidden");
        }
    }

    function displayResults(universities) {
        resultCount.textContent = `Found ${universities.length} universities`;

        const fragment = document.createDocumentFragment();

        universities.forEach(uni => {
            const li = document.createElement("li");

            li.innerHTML = `
                <strong>${uni.name}</strong><br>
                ${uni.country}<br>
                <a href="${uni.web_pages[0]}" target="_blank">Visit Website</a>
            `;

            fragment.appendChild(li);
        });

        resultsList.appendChild(fragment);
    }

    function showError(message) {
        errorMessage.textContent = message;
    }

    function clearResults() {
        input.value = "";
        clearUI();
    }

    function clearUI() {
        resultsList.innerHTML = "";
        errorMessage.textContent = "";
        resultCount.textContent = "";
    }

    function saveSearch(country) {
        let history = JSON.parse(localStorage.getItem("searchHistory")) || [];

        if (!history.includes(country)) {
            history.unshift(country);
            history = history.slice(0, 5);
            localStorage.setItem("searchHistory", JSON.stringify(history));
        }

        renderHistory();
    }

    function renderHistory() {
        const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
        historyContainer.innerHTML = "";

        history.forEach(item => {
            const btn = document.createElement("button");
            btn.textContent = item;
            btn.onclick = () => {
                input.value = item;
                handleSearch();
            };
            historyContainer.appendChild(btn);
        });
    }

    renderHistory();

})();