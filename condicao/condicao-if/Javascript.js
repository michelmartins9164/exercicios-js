var teste = window.prompt("Você deseja contar? 1[sim] 2[não]");
if(teste == 1) {
    var init = 0;
    var i = window.prompt("Seu valor inicial é ZERO, até quanto você deseja contar?");
    for (var n = 0; n <= i; n++){
        console.log(n)
    }
}
