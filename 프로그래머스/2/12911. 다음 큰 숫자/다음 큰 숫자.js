function solution(n) {
  const oneCount = n.toString(2).match(/1/g).length;

  while (true) {
    n += 1;
    if (n.toString(2).match(/1/g).length === oneCount) {
      return n;
    }
  }
}
