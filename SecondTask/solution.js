/**
 * @param   N  Number of unique elements which sum should be zero
 * @return  Array of N unique elements with sum zero
 */
function GetNumbers(N) {
  //return empty array in case N is zero or not defined
  if (!N) {
    return [];
  }

  //return array with one element 0  in case  N is 1
  if (N == 1) {
    return [0];
  }

  //resArr is the result array that will be returned from the function
  //numIterations is the number of iterations or loop will do
  let [resArr, numIterations] = N % 2 ? [[0], (N - 1) / 2] : [[], N / 2];

  //iterate and push number and its complement
  for (let counter = 1; counter <= numIterations; ++counter) {
    //to get different number we can use Math.rand
    resArr = resArr.concat([counter, -counter]);
  }

  return resArr;
}

let res = GetNumbers(5);

console.log(res);
