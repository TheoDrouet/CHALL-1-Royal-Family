document.getElementById("submitz").addEventListener("click", function (event) {

    event.preventDefault();
    if (
      document.getElementById("exampleInputEmail1").value.length <= 0 ||
      document.getElementById("exampleInputPassword1").value.length <= 0 ||
      document.getElementById("exampleFormControlTextarea1").value.length  <= 0
    ) {
      alert("Champs manquant");
    } else {
      alert("Formulaire bien reçu, la famille royale te remercie !");
    }
  });