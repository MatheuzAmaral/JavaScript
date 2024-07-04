function calcUva() {

    var trab1 = document.querySelector("#trab1").value;
    var trab2 = document.querySelector("#trab2").value;
    var av2 = document.querySelector("#av2").value;
    var av3 = document.querySelector("#av3").value;

    var primeiraAvaliacao = parseFloat(trab1)+parseFloat(trab2);
    primeiraAvaliacao = primeiraAvaliacao/2*0.4;

    var resultadoSpan = document.querySelector("#resultado");
    var alertDiv = document.querySelector(".alert");
    var statusSpan = document.querySelector("#status");

    
    if (av2 < av3 || av3 >= 10) {
		av2 = av3;
    }
    
    if (trab1 != "" && trab2 != "" && av2 != "") {

		var av2media = av2*0.6;
		var media = primeiraAvaliacao+av2media;

        resultadoSpan.innerHTML = media.toFixed(2);

		if (primeiraAvaliacao == 0) {

            alertDiv.classList.remove('alert-success');
            alertDiv.classList.add('alert-danger');

            statusSpan.innerHTML = "<strong>Reprovado!</strong><br>Porque você zerou os dois trabalhos!";

		} else {

			if (av2 < 5) {

                alertDiv.classList.remove('alert-success');
                alertDiv.classList.add('alert-danger');

                statusSpan.innerHTML = "<strong>Reprovado!</strong><br>Porque você tirou a nota da <strong>Avaliação A2</strong> menor que 5!";

			} else if (media < 6) {

                alertDiv.classList.remove('alert-success');
                alertDiv.classList.add('alert-danger');

                statusSpan.innerHTML = "<strong>Reprovado!</strong><br>Porque a sua média foi menor que 6!";


			} else {

                alertDiv.classList.remove('alert-danger');
                alertDiv.classList.add('alert-success');

                statusSpan.innerHTML = "<strong>Aprovado!</strong>";

			}
        }
        
	} else {

        alertDiv.classList.remove('alert-danger');
        alertDiv.classList.remove('alert-success');

        statusSpan.innerHTML = "";
        resultadoSpan.innerHTML = "...";
	}

}

var inputs = document.querySelectorAll("input");

inputs.forEach(element => element.oninput = () => calcUva());
