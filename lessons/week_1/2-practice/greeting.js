user = prompt("What is your gender please: f or m?\n").toLowerCase()

if (user === "f"){
    console.log("A good afternoon to you fair maiden")
}else if (user === "m"){
    console.log("How goes the day gentle lad")
}else{
    console.log("Please indicate your gender so I may greet you appropriately")
}