/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  newArr = [];

  for (let i = 0; i < transactions.length; i++) {

    // if the new array is empty
    if (newArr.length == 0) {
      newArr.push({
        "category": transactions[i].category,
        "totalSpent": transactions[i].price,
      }
      )
      continue;
    }


    // comparing transcation against every saved transcations
    for (let j = 0; j < newArr.length; j++) {
      console.log("***Entering second loop***: " + i)
      // console.log({
      //   // "i_item": transactions[i],
      //   // "j_item": newArr[j],
      //   "new_arr": newArr,
      //   "i_categroy_name": transactions[i].category,
      //   "j_categroy_name": newArr[j].category,
      // })


      // if the current item is in the new stack add the values together and then goes to get another item.
      if (transactions[i].category.toLowerCase() === newArr[j].category.toLowerCase()) {
        console.log("/**Add items together**/")
        newArr[j].totalSpent += transactions[i].price;
        break;
      } else if (j == (newArr.length - 1)) {
        // else if you have reached the end of the array and their is no match then the currently held item is not in the new stack, add it to the stack and go get another item.
        console.log(`////Adding new item to stack///`)
        newArr.push({
          "category": transactions[i].category,
          "totalSpent": transactions[i].price,

        })
        break;
      }

    }

  }

  return newArr;
}

// let transaction = [{
//   id: 1,
//   timestamp: 1656076800000,
//   price: 1
//   ,
//   category: 'Food',
//   itemName: 'Pizza',
// }, {
//   id: 2,
//   timestamp: 1656076800000,
//   price: 2,
//   category: 'Food',
//   itemName: 'Pizza',
// },

// {
//   id: 3,
//   timestamp: 1656076800000,
//   price: 10,
//   category: 'Looper',
//   itemName: 'Pizza',
// },

// {
//   id: 4,
//   timestamp: 1656076800000,
//   price: 3,
//   category: 'Food',
//   itemName: 'Pizza',
// }, {
//   id: 5,
//   timestamp: 1656076800000,
//   price: 2,
//   category: 'Looper',
//   itemName: 'Pizza',
// }]

// console.log(calculateTotalSpentByCategory(transaction))

module.exports = calculateTotalSpentByCategory;
