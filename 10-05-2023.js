function minCostOfWorkers(workingEfficiencies) {
    // Sort the worker's efficiencies in non-descending order
    workingEfficiencies.sort((a, b) => a - b);
  
    let minCost = Infinity;
  
    // Iterate over all possible workers to exclude from the pairs of workers
    for (let i = 0; i < workingEfficiencies.length; i++) {
      let cost = 0;
      let pairCount = 0;
  
      // Iterate over all pairs of workers, excluding the selected worker
      for (let j = 0; j < workingEfficiencies.length; j++) {
        if (i !== j) {
          cost += Math.abs(workingEfficiencies[j] - workingEfficiencies[i]);
          pairCount++;
        }
      }
  
      // Update the minimum cost
      minCost = Math.min(minCost, cost);
    }
  
    return minCost;
  }
  
  
  const efficiencies = [1, 3, 54, 712, 52, 904, 113, 12, 135, 32, 31, 56, 23, 79, 611, 123, 677, 232, 997, 101, 111, 123,
     2, 7, 24, 57, 99, 45, 666, 42, 104, 129, 554, 335, 876, 35, 15, 93, 13];
  const minCost = minCostOfWorkers(efficiencies);
  console.log("the minimum cost of this array of efficiencies:", minCost); 
  