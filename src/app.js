
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
  } else if (rules[computerChoice][0] === userChoice || rules[computerChoice][1] === userChoice) {
    resultado = `Has perdido, ${computerChoice} mata a ${userChoice}`;
  } else {
    resultado = `Has ganado, ${userChoice} mata a ${computerChoice}`;
  }
  
  document.getElementById("resultado").textContent = resultado;
}
