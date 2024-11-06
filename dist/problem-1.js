"use strict";
{
    //?Start
    const sumArray = (numbers) => {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum = sum + numbers[i];
        }
        return sum;
    };
    console.log(sumArray([2, 3]));
    //?End
}
