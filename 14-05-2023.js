function disconnectString(string) {
    let count = 0;
    let prev = '';
    for (let i = 0; i < string.length; i++) {
      let curr = string[i];
      if (curr !== prev) {
        count++;
        prev = curr;
      }
    }
    return count;
  }
  
  const series = "kjslaqpwoereeeeewwwefifjdksjdfhjdksdjfkdfdlddkjdjfjfjfjjjjfjffnefhkjgefkgjefkjgkefjekihutrierugtefhgbjkkkknbmssdsdsfdvneurghiueor";
  console.log(disconnectString(series)); // Outputs: 92
  