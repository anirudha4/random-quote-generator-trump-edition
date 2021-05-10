const btn = document.querySelector(".btn-generate");
const qouteContainer = document.querySelector(".qoute-container");

const fetchQoute = () => {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(
      "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
    );

    const qoute = await response.json();
    console.log(qoute);

    resolve(qoute);
  });
};

const updateQoute = async () => {
  const qoute = await fetchQoute();
  const h3 = document.createElement("p");
  h3.classList.add("qoute-text");
  h3.textContent = qoute.message;
  qouteContainer.innerHTML = "";
  qouteContainer.append(h3);
};

btn.addEventListener("click", (e) => {
  updateQoute();
});
updateQoute();
