// function hasTargetSum(array, target) {
//   for(let i = 0; i < array.length; i ++)  {
//     const currentArray = array[i]
//     const difference =  target - currentArray
//   for(let j = i + 1; j < array.length; j ++) {
//     const currentArrayJ = array[j]
//     if(currentArrayJ === difference) {return true}
//     }
//     } 
//     return false
//   }
  //Update based on walkthrough to optimize 

function hasTargetSum(array, target) {
  const seenNumbers = {};
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (seenNumbers[complement]) return true;
    seenNumbers[array[i]] = true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2), iterating over array twice 
*/

/* 
  Add your pseudocode here
  		Function called hasTargetSum takes two arguments an array of integers and a target integer
      create consts to hold new arrays 
      iterate twice over array
			If…else statement for truthy and falsey results 

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  //my tests
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 8, 9, 43, 86], 52));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([32, 54, 64, 77, 90], 45));
}

module.exports = hasTargetSum;
