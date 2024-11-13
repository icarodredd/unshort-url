const button = document.getElementById("submit");
const inputUrl = document.querySelector("input");
const section = document.querySelector("section");

button.addEventListener("click", async (e) => {
  e.preventDefault();

  const originUrl = await fetch(
    `https://unshorten.but.rest/${inputUrl.value}`
  ).then(async (res) => await res.json());
  /*     .then((json) => json.resolved_url); */
  const resultText = document.createElement("p");
  const resultUrl = document.createElement("a");

  resultUrl.setAttribute("href", originUrl);
  resultUrl.setAttribute("target", "_blank");
  resultUrl.textContent += `${originUrl.resolved_url}`;

  resultText.textContent += "Original link:";
  section.appendChild(resultText);
  section.appendChild(resultUrl);
});
