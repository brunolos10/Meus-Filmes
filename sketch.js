function setup() {
    createCanvas(800, 400);
    createElement("h2", "Recomendador de filmes");
    createSpan("Sua idade:");
    campoIdade = createInput("5");
    campoFantasia = createCheckbox("Gosta de fantasia?");
    campoAventura = createCheckbox("Gosta de aventura?");
  }
  
  function draw() {
    background("green");
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let gostaDeAventura = campoAventura.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);
  
    fill(color(76, 0, 115));
    textAlign(CENTER, CENTER);
    textSize(50);
    text(recomendacao, width / 2, height / 2);
  }
  
  function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
    if (idade >= 1) {
      if (idade >= 20) {
        return "Projeto extração";
      } else {
        if (idade >= 1) {
          if(gostaDeFantasia || gostaDeAventura) {
            return "O filho protegido";          
          } else{
           return "trocados";
          }
        } else {
          if (gostaDeFantasia) {
            return "Meu malvado favorito 4";
          } else {
            return "Minions";
          }
        }
      }
    } else {
      if (gostaDeFantasia) {
        return "Por agua a baixo";
      } else {
        return "Toy story";
      }
    }
  }
  