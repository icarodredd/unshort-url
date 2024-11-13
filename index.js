const button = document.getElementById("submit");
const inputUrl = document.querySelector("input");

button.addEventListener("click", async (e) => {
  e.preventDefault();

  await fetch(`https://unshorten.but.rest/${inputUrl.value}`).then(
    async (res) => console.log(await res.json())
  );
});
