function ranked(wins, losses){
    let result = wins - losses;
    return result
}

while (true){
    let rank;
    let wins = 10;
    let losses= 1;
    let ranked_points = ranked(wins, losses);
    let Input = prompt("Digite '0' para sair ou qualquer outra tecla para continuar:");
    if (Input === "0") {
        break; 
    }
    switch (ranked_points){
        case(ranked_points >=11 && ranked_points <= 20):
            rank = 'Bronze';
            break; 
        case(ranked_points >=21 && ranked_points <= 50):
            rank = 'Prata';
            break; 
        case(ranked_points >=51 && ranked_points <= 80):
            rank = 'Ouro';
            break; 
        case(ranked_points >=81 && ranked_points <= 90):
            rank = 'Diamante';
            break; 
        case(ranked_points >=91 && ranked_points <= 100):
            rank = 'Lendário';
            break; 
        case(ranked_points >=101):
            rank = 'Imortal';
            break;
        default:
            rank= 'Ferro';
    }
    console.log(`O Herói tem saldo de ${ranked_points} e está no nível de ${rank}`);
    break 



    
}
