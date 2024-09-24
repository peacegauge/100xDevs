// A program that reverses all the elements of an array
let beautifulTrees = [
    "Sakura (Cherry Blossom) - Japan",
    "Baobab Tree - Madagascar",
    "Rainbow Eucalyptus - Philippines/Indonesia",
    "Jacaranda Tree - South America",
    "Angel Oak Tree - South Carolina, USA",
    "Dragon Blood Tree - Socotra, Yemen",
    "Wisteria Tree - Japan",
    "Maple Tree - Canada",
    "Banyan Tree - India",
]

//console.log(beautifulTrees);

let count = beautifulTrees.length - 1;
for (let i = 0; i < (beautifulTrees.length / 2); i++) {
    temp = beautifulTrees[count];
    beautifulTrees[count] = beautifulTrees[i]
    beautifulTrees[i] = temp;
    count--;
};

console.log(beautifulTrees);