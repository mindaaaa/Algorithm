function solution(bandage, health, attacks) {
  let isSurvive = true;
  let hp = health;
  let duration = 0;

  const [castTime, perSecHeal, bonusHeal] = bandage;

  const attackObj = {};

  for (const [time, damage] of attacks) {
    attackObj[time] = damage;
  }

  for (let i = 1; i <= attacks[attacks.length - 1][0]; i++) {
    if (attackObj[i] !== undefined) {
      hp -= attackObj[i];
      if (hp <= 0) {
        isSurvive = false;
        return -1;
      }
      duration = 0;
      continue;
    } else {
      duration++;
      hp += perSecHeal;

      if (duration === castTime) {
        hp += bonusHeal;
        duration = 0;
      }
      hp = Math.min(hp, health);
    }
  }

  if (isSurvive) {
    return hp;
  }
}