// Opciones del juego
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
// Reglas del juego
const rules = {
    rock: ["scissors", "lizard"],
    paper: ["spock", "rock"],
    scissors: ["lizard", "paper"],
    lizard: ["paper", "spock"],
    spock: ["scissors", "rock"],
};

// JUEGO 1. Usando deconstrucción de objetos
const jugar = (userChoice) => {
    //Elección aleatoria del ordenador
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    //Muestra por consola de los elementos elegidos
    console.log("Esto es lo que ha elegido el ordenador: " + computerChoice);
    console.log(computerChoice + " mata a " + rules[computerChoice][0] + " y a "+ rules[computerChoice][1]);
    console.log("Esto es lo que ha elegido el usuario: " + userChoice);
    console.log(`${userChoice} mata a ${rules[userChoice][0]} y a ${rules[userChoice][1]}`);

    //Equiparación del resultado
    if (computerChoice === userChoice) {
        console.log("Empate");
    } else if (rules[computerChoice][0] === userChoice || rules[computerChoice][1] === userChoice) {
        console.log("Has perdido");
    } else{
        console.log("Has ganado");
    }
}
// JUEGO 2. Usando .include
const jugar2 = (userChoice) => {
    //Elección aleatoria del ordenador
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    //Muestra por consola de los elementos elegidos
    console.log("Esto es lo que ha elegido el ordenador: " + computerChoice);
    console.log(computerChoice + " mata a " + rules[computerChoice][0] + " y a "+ rules[computerChoice][1]);
    console.log("Esto es lo que ha elegido el usuario: " + userChoice);
    console.log(`${userChoice} mata a ${rules[userChoice][0]} y a ${rules[userChoice][1]}`);
    //Equiparación del resultado
    if (userChoice === computerChoice) {
        console.log("Empate");
    } else if (rules[computerChoice].includes(userChoice)) {
        console.log("Has perdido")
    }else{
        console.log("Has ganado")
    }
}

//jugar("rock")
//jugar2("rock")