function solution(s) {
  const strArr = s.slice(2, -2).split('},{');
  const tuple = strArr
    .map((str) => str.split(',').map(Number))
    .sort((a, b) => a.length - b.length);

    const set = new Set(tuple.flat());
  return [...set];
}