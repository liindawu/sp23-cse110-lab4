for (let car in statistics) {
    if((car[0] == 'r') || (statistics[car]%2 == 1))
        console.log(car);
}