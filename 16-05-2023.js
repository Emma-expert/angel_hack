// Define the initial state
let state = [
    ['X', 'X', 'X', 'X', '.'],
    ['X', '.', '.', '.', '.'],
    ['X', '.', '.', 'X', '.'],
    ['.', 'X', '.', 'X', '.'],
    ['X', 'X', '.', 'X', 'X'],
  ];
  
  // Define a function to calculate the number of adjacent lifeforms or spaces for each tile
  function getAdjacentCounts(row, col) {
    let counts = {lifeform: 0, space: 0};
    
    // Check the tiles above
    if (row > 0) {
      if (col > 0) {
        if (state[row-1][col-1] === 'X') counts.lifeform++;
        else if (state[row-1][col-1] === '.') counts.space++;
      }
      if (state[row-1][col] === 'X') counts.lifeform++;
      else if (state[row-1][col] === '.') counts.space++;
      if (col < 4) {
        if (state[row-1][col+1] === 'X') counts.lifeform++;
        else if (state[row-1][col+1] === '.') counts.space++;
      }
    }
    
    // Check the tiles to the left and right
    if (col > 0) {
      if (state[row][col-1] === 'X') counts.lifeform++;
      else if (state[row][col-1] === '.') counts.space++;
    }
    if (col < 4) {
      if (state[row][col+1] === 'X') counts.lifeform++;
      else if (state[row][col+1] === '.') counts.space++;
    }
    
    // Check the tiles below
    if (row < 4) {
      if (col > 0) {
        if (state[row+1][col-1] === 'X') counts.lifeform++;
        else if (state[row+1][col-1] === '.') counts.space++;
      }
      if (state[row+1][col] === 'X') counts.lifeform++;
      else if (state[row+1][col] === '.') counts.space++;
      if (col < 4) {
        if (state[row+1][col+1] === 'X') counts.lifeform++;
        else if (state[row+1][col+1] === '.') counts.space++;
      }
    }
    
    return counts;
  }
  
  // Define a function to update the state for one minute
  function updateState() {
    let newState = [];
    for (let row = 0; row < 5; row++) {
      let newRow = [];
      for (let col = 0; col < 5; col++) {
        let counts = getAdjacentCounts(row, col);
        if (state[row][col] === 'X') {
          if (counts.lifeform === 2 || counts.lifeform === 3) newRow.push('X');
          else newRow.push('.');
        } else {
          if (counts.lifeform === 1 || counts.lifeform === 2) newRow.push('X');
          else newRow.push('.');
        }
      }
      newState.push(newRow);
    }
    state = newState;
  }
  
  // Define a function to calculate the lifeform score
  function calculateLifeformScore() {
    let score = 0;
    let lifeformPositions = [];
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col <5; col++) {
            if (state[row][col] === 'X') {
                score++;
                lifeformPositions.push([row, col]);
            }
        }
    }
    return {score, lifeformPositions};
  }

// Define a function to print the state
function printState() {
    for (let row = 0; row < 5; row++) {
        console.log(state[row].join(' '));
    }
}

// Print the initial state
console.log("Initial state:");
printState();
console.log("");

// Update the state for one minute and print it
updateState();
console.log("State after one minute:");
printState();
console.log("");

// Calculate and print the lifeform score
let {score, lifeformPositions} = calculateLifeformScore();
console.log(Lifeform_score= $score);
console.log(Lifeform_positions= lifeformPositions);