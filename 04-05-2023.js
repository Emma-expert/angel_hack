let instructions = "<<<<<<><><><><<<<><><><><><<<<><><><><><>>>><<><><><><><><><><>>>><<<<" +
                   "<><><><><><<<<<><><><><><><<<<><><><><><><><><><><><<<<<<><><<><><>>><" +
                   "<>><<><<>><><<><><><><><><><<<<<<<<<>><<><><<<><><><><<<<<<>>>>>>>>>>>" +
                   "<>><><><>><<<><><><><<><><<><><><><><><><<<<><><><>><<>>>>><><><>><<<>" +
                   "<><><><><><>><><><><><><><><><><><><><><><><><<<><><><><><><><><><><><" +
                   "><><><><><><>>>><><><><><><><><><>><<<<<<<<<<>>>>><<<<<>>>><<<<>><<><<" +
                   "><><><><><><><><><><<<<<<<><><<><<><<><<><><><><><<>><><>><><><><><<><" +
                   "<<<<>><<<<><><<<><>>><<><>>>>><>>><<><<><><><><<>><><><><><><><><><><>" +
                   "<><><><><><<<<><><<<<><<<>>>>>>>>><<><<<>>>>><<<<<<<<<>>>><<><>><><<><" +
                   "<>><<>><<>><";

let floor = 0;

for (let i = 0; i < instructions.length; i++) {
    let direction = instructions[i];
    if (direction === "<") {
        floor += 1;
    } else if (direction === ">") {
        floor -= 1;
    }
}

console.log("John finished up on Floor", floor);