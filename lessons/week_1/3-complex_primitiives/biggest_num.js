//Program to print the biggest number in an array

const numbers = [12, 3232,2321, 21, 546, 73, 41, 632, 3, 245, 763, 52, 123, 6527, 72]

console.log("Here is the array of numbers " + numbers)
max = 0
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > max){
        max = numbers[i]
    }
}

console.log(max + " is the largest number in the array.")