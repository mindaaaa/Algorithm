function solution(schedules, timelogs, startday) {
  let winnerCount = 0;

  const availableSchedule = schedules.map((time) => {
    const hour = Math.floor(time / 100);
    const minute = time % 100;
    const attendanceMinutes = hour * 60 + minute + 10;

    const aHour = Math.floor(attendanceMinutes / 60);
    const aMinute = attendanceMinutes % 60;
    return aHour * 100 + aMinute;
  });

  timelogs.forEach((staffLogs, index) => {
    const staffSafeTime = availableSchedule[index];

    const checkAttendance = staffLogs.map((log, i) => {
      const dayOfWeek = (i + startday) % 7;
      const isHoliday = dayOfWeek === 6 || dayOfWeek === 0 ? true : false;

      return isHoliday || staffSafeTime >= log;
    });

    if (checkAttendance.every(Boolean)) winnerCount += 1;
  });
  return winnerCount;
}