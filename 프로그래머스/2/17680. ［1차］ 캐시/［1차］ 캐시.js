function solution(cacheSize, cities) {
  let answer = 0;
  const cache = new Map();

  cities.forEach((city) => {
    city = city.toLowerCase();

    if (cache.has(city)) {
      cache.delete(city);
      answer += 1;
    } else {
      answer += 5;
      if (cacheSize <= cache.size && cacheSize > 0) {
        const oldest = cache.keys().next().value;
        cache.delete(oldest);
      }
    }

    if (cacheSize > 0) cache.set(city, true);
  });

  return answer;
}