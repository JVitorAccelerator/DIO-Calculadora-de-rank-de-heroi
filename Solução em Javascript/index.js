const readline = require('readline');

function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve =>
    rl.question(query, answer => {
      rl.close();
      resolve(answer);
    })
  );
}

function ranked(wins, losses) {
  let result = wins - losses;
  return result;
}

async function main() {
  let continuar_programa = true;

  while (continuar_programa) {
    let continuar = await askQuestion(
      'Digite 0 para sair ou digite 1 para continuar:'
    );

    if (continuar === '0') {
      continuar_programa = false;
      console.log('Programa encerrado.');
    } else {
      let wins = parseInt(await askQuestion('Digite o número de vitórias:'));
      let losses = parseInt(await askQuestion('Digite o número de derrotas:'));

      let ranked_points = ranked(wins, losses);
      let rank;

      if (ranked_points >= 11 && ranked_points <= 20) {
        rank = 'Bronze';
      } else if (ranked_points >= 21 && ranked_points <= 50) {
        rank = 'Prata';
      } else if (ranked_points >= 51 && ranked_points <= 80) {
        rank = 'Ouro';
      } else if (ranked_points >= 81 && ranked_points <= 90) {
        rank = 'Diamante';
      } else if (ranked_points >= 91 && ranked_points <= 100) {
        rank = 'Lendário';
      } else if (ranked_points >= 101) {
        rank = 'Imortal';
      } else {
        rank = 'Ferro';
      }

      console.log(
        `O Herói tem saldo de ${ranked_points} e está no nível de ${rank}`
      );
    }
  }
}

main();