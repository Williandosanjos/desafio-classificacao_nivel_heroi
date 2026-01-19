const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nome;
let xp;
let nivel;

for (; ;) {
    rl.question("Digite o nome do Herói: ", function (nomeInput) {

        rl.question("Digite a quantidade de XP do Herói: ", function (xpInput) {
            xp = Number(xpInput);

            if (nomeInput && !isNaN(xp && xp >= 0)) {
                nome = nomeInput;
                rl.close();
            } else {
                console.log("Dados inválidos! Tente novamente.\n");
            }

        });
    });
    break
}

rl.on("close", function () {

    if (xp <= 1.000) {
        nivel = "Ferro";
    } else if (xp >= 1.001 && xp <= 2.000) {
        nevel = "Bronze";
    } else if (xp >= 2.001 && xp <= 5.000) {
        nivel = "Prata";
    } else if (xp >= 5.001 && xp <= 7.000) {
        nivel = "Ouro";
    } else if (xp >= 7.001 && xp <= 8.000) {
        nivel = "Platina";
    } else if (xp >= 8.001 && xp <= 9.000) {
        nivel = "Ascendente";
    } else if (xp >= 9.001 && xp <= 10.000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
process.exit(0);
});