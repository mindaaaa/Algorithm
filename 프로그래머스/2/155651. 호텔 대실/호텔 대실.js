function timeToMin(time) {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

function solution(book_time) {
  const rooms = [];

  const times = book_time.map(([start, end]) => [
    timeToMin(start),
    timeToMin(end) + 10, 
  ]);

  times.sort((a, b) => a[0] - b[0]); 

  for (const [start, end] of times) {
    let used = false;

    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i] <= start) {
        rooms[i] = end;
        used = true;
        break;
      }
    }

    if (!used) {
      rooms.push(end); 
    }
  }

  return rooms.length;
}
