const runners = [
    {name: 'John', speed: 10, runTime: 6, restTime: 20},
    {name: 'James', speed: 8, runTime: 8, restTime: 25},
    {name: 'Jenna', speed: 12, runTime: 5, restTime: 16},
    {name: 'Josh', speed: 7, runTime: 7, restTime: 23},
    {name: 'Jacob', speed: 9, runTime: 4, restTime: 32},
    {name: 'Jerry', speed: 5, runTime: 9, restTime: 18}
  ];
  
  const raceTime = 1234;
  let maxDistance = 0;
  let winner = '';
  
  runners.forEach(runner => {
    let distance = 0;
    let time = 0;
    let isResting = false;
  
    while (time < raceTime) {
      if (isResting) {
        time += runner.restTime;
        isResting = false;
      } else {
        const remainingTime = raceTime - time;
        const runCycleTime = runner.runTime + runner.restTime;
        const fullCycles = Math.floor(remainingTime / runCycleTime);
        const lastCycleTime = remainingTime % runCycleTime;
        const lastRunTime = Math.min(lastCycleTime, runner.runTime);
  
        distance += fullCycles * runner.speed * runner.runTime;
        distance += lastRunTime * runner.speed;
  
        time += fullCycles * runCycleTime;
        time += lastCycleTime;
        isResting = lastRunTime === runner.runTime;
      }
    }
  
    if (distance > maxDistance) {
      maxDistance = distance;
      winner = runner.name;
    }
  });
  
  console.log(`${winner}  was a winner with a distance of ${maxDistance}m.`);
  