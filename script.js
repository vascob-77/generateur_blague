const headBlague = document.getElementById("header");
const textBlague = document.getElementById("content");
const btnRefresh = document.getElementById("refresh");
const apiUrl = "https://api.blablagues.net/?rub=blagues ";

const refreshJoke = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
          headBlague.textContent = data.data.content.text_head;
          textBlague.textContent = data.data.content.text !== '' ? data.data.content.text : data.data.content.text_hidden
      });
}

refreshJoke();
btnRefresh.addEventListener('click', refreshJoke);

