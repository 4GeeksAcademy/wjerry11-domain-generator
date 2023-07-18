let genrateDomain = () => {
  let domainName = [];
  let first = ["cat", "apple", "television"];
  let second = ["pony", "dog", "rooster"];
  let third = [".com", ".org", ".gov", ".net"];
  for (let i = 0; i < first.length; i++) {
    for (let a = 0; a < second.length; a++) {
      for (let b = 0; b < third.length; b++) {
        let result = domainName.push(first[i] + second[a] + third[b]);
      }
    }
  }
  return domainName;
};
let allDomain = genrateDomain();
for (let c = 0; c < allDomain.length; c++) {
  document.getElementById("demo").innerHTML += "<p>" + allDomain[c] + "</p>";
}
