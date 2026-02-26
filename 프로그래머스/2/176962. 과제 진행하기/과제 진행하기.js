function solution(plans) {
    const result = [];
    const stack = [];
    
    const sortedPlans = plans.map(([name, start, playtime]) => {
        const [h, m] = start.split(':').map(Number);
        return [name, h*60 + m, Number(playtime)];
    }).sort((a, b) => a[1] - b[1]);
    
    for(let i=0; i<sortedPlans.length; i++){
        const [name, start, playtime] = sortedPlans[i];
        
        if(i === sortedPlans.length - 1){
            result.push(name);
            break;
        }
        
        const nextStart = sortedPlans[i+1][1];
        const timeGap = nextStart - start;
        
        if(playtime <= timeGap){
            result.push(name);
            let remainingTime = timeGap - playtime;
            
            while(remainingTime > 0 && stack.length > 0){
                const [sName, sTime] = stack.pop();
                if(sTime <= remainingTime){
                    result.push(sName);
                    remainingTime -= sTime;
                }else{
                    stack.push([sName, sTime - remainingTime]);
                    remainingTime = 0;
                }
            }
        } else {
            stack.push([name, playtime - timeGap])
        }
    }
    
    while(stack.length > 0){
        result.push(stack.pop()[0]);
    }
    
    return result;
}