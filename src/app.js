let genrateDomain = () => {
  let first = ["cat", "apple", "television"];
  let second = ["pony", "dog", "rooster"];
  let third = [".com", ".org", ".gov", ".net"];
  for (let i = 0; i < first.length; i++)
    for (let a = 0; a < second.length; a++)
      for (let b = 0; b < third.length; b++)
        console.log(first[i] + second[a] + third[b]);
};
console.log(genrateDomain());
