workers = [1, 3, 54, 712, 52, 904, 113, 12, 135, 32, 31, 56, 23, 79, 611, 123, 677, 232, 997, 101, 111, 123, 2, 7, 24, 57, 99, 45, 666, 42, 104, 129, 554, 335, 876, 35, 15, 93, 13]

minCost = 0
for a in range(len(workers)):
    currentWorkers = workers.copy()
    currentWorkers.pop(a)   
    currentWorkers = sorted(currentWorkers)
    newWorkersPair = list(zip(currentWorkers[::2], currentWorkers[1::2]))
    cost = sum([abs(i-j) for (i,j) in newWorkersPair])
    if a == 0:
        minCost = cost
    elif cost < minCost:
        minCost = cost

print("The minimum cost of array of efficiencies:", minCost)