function solution(price, money, count) {
    const required = price + (count-1) * price;
    const pay = (price + required) * count / 2;

    if(money > pay){
        return 0;
    }
    
    return pay - money;
}