package main

import "fmt"

func main() {
	numbers := []int{12, 3232, 2321, 21, 546, 73, 41, 632, 3, 245, 763, 52, 123, 6527, 72}
	max := 0
	for _, num := range numbers {
		if num > max {
			max = num
		}
	}

	fmt.Println(fmt.Sprintf("This is the array of numbers: %d", numbers))

	fmt.Println(fmt.Sprintf("%d is the largest number in the array", max))
}
