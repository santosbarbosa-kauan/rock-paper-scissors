const titleElement = document.getElementById("title");
const result = sessionStorage.getItem("gameResult");

if (result === "win") {
    titleElement.textContent = "You won the game! :)";
} else if (result === "lose") {
    titleElement.textContent = "You lost the game! :(";
}