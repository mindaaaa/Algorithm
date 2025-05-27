function solution(new_id) {
  let id = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '');

  id === '' ? (id = 'a') : id;

  if (id.length > 15) {
    id = id.slice(0, 15);
    id = id.replace(/\.$/, '');
  }

  while (id.length < 3) {
    id += id[id.length - 1];
  }

  return id;
}