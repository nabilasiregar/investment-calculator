function solution(A) {
  const minPrice = Math.min(...A)
  const minPriceIndex = A.indexOf(minPrice)
  let end = A.length
  let profit = []
  // selling stock at least on day 2
  let sellDay = 1
 
  for (let i = minPriceIndex; i < end; i++) {
    // day to sell must be after day to buy
    while (sellDay >= minPriceIndex && sellDay < end) {
      profit.push(A[sellDay] - A[i])
      sellDay++
    }
  }
  
  if (profit.length == 0)
    profit.push(0);
    
  maxProfit = Math.max(...profit)
  return maxProfit;
}

module.exports = solution