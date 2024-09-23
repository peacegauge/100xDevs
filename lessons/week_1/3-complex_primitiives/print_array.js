const numbers = [12, 3232,2321, 21, 546, 73, 41, 632, 3, 245, 763, 52, 123, 6527, 72]

console.log("Here is the array of numbers " + numbers)
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 == 0){
        console.log(numbers[i])
    }
}