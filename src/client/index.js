let form = document.getElementById("calculateForm");

if (form.attachEvent) {
  form.attachEvent("submit", proccessForm);
} else {
  form.addEventListener("submit", processForm);
}

function processForm(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  function updateCalculatedText(formula, calculated) {
    let container = document.getElementById("calculated");
    container.innerHTML = `${formula} = ${calculated}`;
  }

  function resetCalculatedContainer() {
    let container = document.getElementById("calculated");
    container.innerHTML = "Waiting for a formula...";
  }

  let formData = new FormData(form);
  let formula = formData.get("formula");

  if (formula) {
    try {
      fetch("/api/calculate/" + formula)
        .then((resp) => {
          console.log(resp);
          if (resp.ok) {
            console.log("hallo");
            return resp.json();
          }
          return Promise.reject("Response not ok");
        })
        .then((data) => {
          console.log(data);
          let calculated = data.calculated;
          updateCalculatedText(formula, calculated);
        })
        .catch((e) => console.log(e));
    } catch (err) {
      console.error(err);
    }
  } else {
    resetCalculatedContainer();
  }
}
