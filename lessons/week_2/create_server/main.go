package main

import (
	"fmt"
	"log"
	"net/http"
)

func home(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Here we are on the page")
}

func main() {
	http.HandleFunc("/", home)
	log.Fatal(http.ListenAndServe(":8000", nil))

}
