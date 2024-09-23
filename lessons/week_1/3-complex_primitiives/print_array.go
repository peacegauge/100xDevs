package main

import "fmt"

func main() {
	numbers := []int{12, 3232, 2321, 21, 546, 73, 41, 632, 3, 245, 763, 52, 123, 6527, 72}

	for _, num := range numbers {
		if num%2 == 0 {
			fmt.Println(num)
		}
	}
}
