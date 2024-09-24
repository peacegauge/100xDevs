package main

import (
	"fmt"
	"time"
)

// clearTerminal clears the terminal
func clearTerminal() {
	// ANSI escape code to clear the terminal and move the cursor to the top-left corner
	fmt.Print("\033[H\033[2J")
}

func main() {
	for {
		clearTerminal()

		var hour = time.Now().Hour()
		var minutes = time.Now().Minute()
		var seconds = time.Now().Second()

		var timeNow = fmt.Sprintf("%02d:%02d:%02d", hour, minutes, seconds)

		fmt.Println("The time is: ", timeNow)

		time.Sleep(time.Second)
	}

}
