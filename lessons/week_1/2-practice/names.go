package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {

	fmt.Println("Lets get this party started")
	fmt.Println("What is your first name?")
	firstName, _ := userInput()
	fmt.Println("What is your last name?")
	lastName, _ := userInput()

	fmt.Println("Welcome on board", firstName, lastName, ", glad to have you.")
}

func userInput() (string, error) {
	inputReader := bufio.NewReader(os.Stdin)
	userString, err := inputReader.ReadString('\n')
	if err != nil {
		return userString, err
	}

	userString = strings.TrimSuffix(userString, "\n")

	return userString, nil
}
