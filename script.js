window.onload = () => {
  const adviceNum = document.querySelector("#advice-number");
  const advice = document.querySelector("#advice");
  const btn = document.querySelector("#btn");

  btn.addEventListener("click", async () => {
    const response = await fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => data.slip);

    adviceNum.textContent = `ADVICE # ${response.id}`;
    advice.textContent = `“ ${response.advice} ”`;
  });
};
