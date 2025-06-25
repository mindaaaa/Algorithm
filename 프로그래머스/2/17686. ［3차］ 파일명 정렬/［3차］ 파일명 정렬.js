function solution(files) {
  const fileMap = new Map();

  files.forEach((file, idx) => {
    const match = file.match(/^([^\d]+)(\d{1,5})/);
    const head = match[1].toLowerCase();
    const number = parseInt(match[2], 10);

    if (!fileMap.has(head)) {
      fileMap.set(head, []);
    }

    fileMap.get(head).push({ number, idx, file });
  });

  const sortedFileHead = [...fileMap.keys()].sort();

  const answer = [];

  for (const head of sortedFileHead) {
    const paths = fileMap.get(head);

    paths.sort((a, b) => {
      if (a.number !== b.number) return a.number - b.number;
      return a.index - b.index;
    });

    for (const path of paths) {
      answer.push(path.file);
    }
  }

  return answer;
}