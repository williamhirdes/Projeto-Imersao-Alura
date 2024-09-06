function pesquisar() {
  
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");
    
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if(!campoPesquisa){
    section.innerHTML = "<p>Nenhum dado foi encontrado, digite algo.</p>"
    return
}

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado na array 'dados'
  for (let dado of dados) {

    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()

    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) ){

    // Constrói o HTML para cada item do resultado da pesquisa
      resultados += `<div class="item-resultado">
      <h2>
        <a href="${dado.link}" target="_blank">${dado.titulo}</a>
      </h2>
      <p class="descricao-meta">${dado.descricao}</p>
      <a href="${dado.link}" target="_blank">Mais informações sobre o filme</a>
      </div>`;


    }
    
    
  }

  if (!resultados){
      resultados = "<p>Nenhum dado foi encontrado</p>"
  }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
}
