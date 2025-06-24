function calculateFee(time, fees) {
  const [baseTime, baseFee, unitTime, unitFee] = fees;
  const extra = Math.max(0, time - baseTime);
  return baseFee + Math.ceil(extra / unitTime) * unitFee;
}

function solution(fees, records) {
  const record = {};
  const receipt = {};

  for (const r of records) {
    const [time, car, type] = r.split(' ');
    const [hour, min] = time.split(':').map(Number);
    const parkingTime = 60 * hour + min;

    if (type === 'IN') {
      record[car] = parkingTime;
    } else {
      const inTime = record[car];
      const used = parkingTime - inTime;
      delete record[car];

      receipt[car] = (receipt[car] || 0) + used;
    }
  }

  for (const car in record) {
    const used = 1439 - record[car];
    receipt[car] = (receipt[car] || 0) + used;
  }
  const sorted = Object.entries(record).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  return Object.keys(receipt)
    .sort()
    .map((car) => calculateFee(receipt[car], fees));
}