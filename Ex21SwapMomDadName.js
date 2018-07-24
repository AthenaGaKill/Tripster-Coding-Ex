function main(){
    var momsName = prompt("Gief your moms name nao!");
    var dadsName = prompt("Gief your dads name nao!");
    var swapNames = swap(momsName, dadsName);
    console.log(swapNames);
}

function swap(mom,dad){
var parents = [mom,dad];
var extra = [];

extra[0] = parents[0];
parents[0] = parents[1];
parents[1] = extra[0];
return parents;
}

main();