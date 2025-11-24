let contador = {
  ganadas: 0,
  perdidas: 0,
  empates: 0,
};


const jugar = (userChoice) => {
  // Opciones del juego

  const choices = ["rock", "paper", "scissors", "lizard", "spock"];
  const rules = {
    rock: ["scissors", "lizard"],
    paper: ["spock", "rock"],
    scissors: ["lizard", "paper"],
    lizard: ["paper", "spock"],
    spock: ["scissors", "rock"],
  };

  //Elección aleatoria del ordenador
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let resultado = "";

  //Equiparación del resultado
  if (computerChoice === userChoice) {
    resultado = `Empate, ambos habéis elegido ${userChoice}`;
    contador.empates += 1;
  } else if (rules[computerChoice][0] === userChoice || rules[computerChoice][1] === userChoice) {
    resultado = `Has perdido, ${computerChoice} mata a ${userChoice}`;
    contador.perdidas += 1;
  } else {
    resultado = `Has ganado, ${userChoice} mata a ${computerChoice}`;
    contador.ganadas += 1;
  }

  document.getElementById("resultado").textContent = resultado;


  document.getElementById("ganadas").textContent = contador.ganadas;
  document.getElementById("perdidas").textContent = contador.perdidas;
  document.getElementById("empates").textContent = contador.empates;


}
