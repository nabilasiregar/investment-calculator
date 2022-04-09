function solution(A) {
  const minPrice = Math.min(...A)
  const maxPrice = Math.max(...A)
  const minPriceIndex = A.indexOf(minPrice)
  const maxPriceIndex = A.indexOf(maxPrice)
  const end = A.length
  let profit = []
 
  // start index to buy stock from the lowest price
  for (let i = minPriceIndex; i < end; i++) {
    // start index to sell stock from the highest price
    for (let j = maxPriceIndex; j < end; j++) {
      // day to sell must be after day to buy
      if (A[j] > A[i] && maxPriceIndex > minPriceIndex)  
        profit.push(A[j] - A[i]);
      // if the trend is going down, no possible profit
      else if (A[j] > A[end - 1] && maxPriceIndex == 0)
        profit.push(0);
      // it is possible to have the highest price on the first day
      // but the stock price goes down then up again
      else 
        profit.push(A[j] - A[i]);
    }
  }
  
  maxProfit = Math.max(...profit)
  return maxProfit;
}

module.exports = solution