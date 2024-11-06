"use strict";
{
    //?Start
    const removeDuplicates = (numbers) => {
        let newArray = [];
        for (let i = 0; i < numbers.length; i++) {
            if (!newArray.includes(numbers[i])) {
                newArray.push(numbers[i]);
            }
        }
        return newArray;
    };
    //?End
}
