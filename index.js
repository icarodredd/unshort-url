const button = document.getElementById("submit");
const inputUrl = document.querySelector("input");
const section = document.querySelector("section");

button.addEventListener("click", async (e) => {
  e.preventDefault();

  const originUrl = await fetch(
    `https://unshorten.but.rest/${inputUrl.value}`
  ).then(async (res) => await res.json());

  if (originUrl.success === false) {
    section.replaceChildren();
    const errorMessage = document.createElement("p");
    errorMessage.textContent += "Unable to unshorten the link.";
    section.appendChild(errorMessage);
  } else {
    section.replaceChildren();
    const resultText = document.createElement("p");
    resultText.textContent += "Original link:";

    const buttonUrl = document.createElement("button");
    buttonUrl.textContent += "Copy";

    buttonUrl.addEventListener("click", async () => {
      await navigator.clipboard.writeText(originUrl.resolved_url);
    });

    section.appendChild(resultText);
    section.appendChild(buttonUrl);
  }
});
