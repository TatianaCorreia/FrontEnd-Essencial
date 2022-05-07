$(document).ready(function () {
  var url = "https://randomuser.me/api/?results=5&nat=br&seed=0042c8038085f5c6"; /*Optamos por trazer somente brasileiros (verificamos a documentação no site)*/
  fetchInformation(url);

  function fetchInformation(url) {
    fetch(url)
      .then((response) => response.json())
      .then(function (data) {
        data.results.forEach((person) => {
          pessoas = `<div class="pessoa">
                        <img src="${person.picture.large}" class="pessoa-imagem" alt="imagem do candidato">
                            <div class="pessoa-nome-completo">
                                Nome:&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>${person.name.first + " " + person.name.last}
                            </span>
                            <div class="pessoa-endereco">
                                Endereço:    
                                <span>${person.location.street.name + ", nº " + person.location.street.number +"\n"}<br></span>
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${person.location.city + ", " + person.location.state}</span>
                            </div>
                            <div class="pessoa-celular">
                                Telefone:
                                <span>${person.cell}</span>
                            </div>
                            <div class =timezone>
                                Timezone:
                                ${person.location.timezone.description}
                            </div>
                        </div>
                    </div>`;
          $("#resultado").append(pessoas);
        });
      });
  }
});
