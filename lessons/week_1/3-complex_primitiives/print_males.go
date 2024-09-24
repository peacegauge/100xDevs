package main

import "fmt"

func main() {
	var students = []map[string]interface{}{
		{
			"firstName":    "John",
			"lastName":     "Doe",
			"sex":          "male",
			"averageGrade": 85,
			"attitude":     "confident",
		},
		{
			"firstName":    "Emily",
			"lastName":     "Smith",
			"sex":          "female",
			"averageGrade": 90,
			"attitude":     "creative",
		},
		{
			"firstName":    "Michael",
			"lastName":     "Brown",
			"sex":          "male",
			"averageGrade": 78,
			"attitude":     "resilient",
		},
		{
			"firstName":    "Sophia",
			"lastName":     "Davis",
			"sex":          "female",
			"averageGrade": 88,
			"attitude":     "hopeful",
		},
		{
			"firstName":    "James",
			"lastName":     "Johnson",
			"sex":          "male",
			"averageGrade": 92,
			"attitude":     "confident",
		},
		{
			"firstName":    "Olivia",
			"lastName":     "Garcia",
			"sex":          "female",
			"averageGrade": 81,
			"attitude":     "creative",
		},
		{
			"firstName":    "Ethan",
			"lastName":     "Martinez",
			"sex":          "male",
			"averageGrade": 76,
			"attitude":     "lazy",
		},
		{
			"firstName":    "Ava",
			"lastName":     "Wilson",
			"sex":          "female",
			"averageGrade": 87,
			"attitude":     "resilient",
		},
		{
			"firstName":    "Liam",
			"lastName":     "Moore",
			"sex":          "male",
			"averageGrade": 89,
			"attitude":     "hopeful",
		},
		{
			"firstName":    "Mia",
			"lastName":     "Taylor",
			"sex":          "female",
			"averageGrade": 83,
			"attitude":     "confident",
		},
		{
			"firstName":    "Noah",
			"lastName":     "Anderson",
			"sex":          "male",
			"averageGrade": 91,
			"attitude":     "creative",
		},
		{
			"firstName":    "Chloe",
			"lastName":     "Thomas",
			"sex":          "female",
			"averageGrade": 74,
			"attitude":     "lazy",
		},
		{
			"firstName":    "Alexander",
			"lastName":     "Jackson",
			"sex":          "male",
			"averageGrade": 84,
			"attitude":     "resilient",
		},
	}

	for _, value := range students {
		if value["sex"] == "male" {
			fmt.Println(value["firstName"])
		}
	}
}
