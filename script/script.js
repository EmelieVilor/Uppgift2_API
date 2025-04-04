document.addEventListener("DOMContentLoaded", () => {
getAllUsers();
});

function getAllUsers() {
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
    })
    .then((users) => {
    const container = document.getElementById("cards-container");
    container.innerHTML = "";

    users.forEach((user) => {
        const card = document.createElement("div");
        card.classList.add("card");

        // Create the cards
        card.innerHTML = `
            <h2>${user.name}</h2>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>

            <button class="show-more-btn">Show More...</button>
            <div class="more-info">
            <hr>
        <p>City: ${user.address.city}</p>
        <p>Phone: ${user.phone}</p>
        <p>Company: ${user.company.name}</p>
            </div>

        `;

        // Put the card in the container
        container.appendChild(card);

        // Show more and show less
        const showMoreButton = card.querySelector(".show-more-btn");
        const moreInfoDiv = card.querySelector(".more-info");

        showMoreButton.addEventListener("click", () => {
        if (
            moreInfoDiv.style.display === "none" 
        ) {
            moreInfoDiv.style.display = "block";
            showMoreButton.textContent = "Show Less...";
        } else {
            moreInfoDiv.style.display = "none";
            showMoreButton.textContent = "Show More...";
        }
        });
    });
    })
    .catch((error) => {
    console.error("There was an error!", error);
    });
}