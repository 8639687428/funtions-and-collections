const unfold = (fn, seed) => {
    let result = [],
      val = [null, seed];
    while ((val = fn(val[1]))) result.push(val[0]);
    return result;
  };
  var f = n => (n > 50 ? false : [-n, n + 10]);
  console.log(unfold(f, 10));



  const animals = ['pigs', 'goats', 'sheep'];

  const count = animals.push('cows');
  console.log(count);
  // expected output: 4
  console.log(animals);
  // expected output: Array ["pigs", "goats", "sheep", "cows"]
  
  animals.push('chickens', 'cats', 'dogs');
  console.log(animals);
  // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

  
  