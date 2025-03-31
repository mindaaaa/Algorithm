function solution(array, commands) {
    return commands.map((command) => step(...command))

    function step(start, end, select){
        return array.slice(start-1, end).sort((a,b) => a-b)[select-1];
    }
}