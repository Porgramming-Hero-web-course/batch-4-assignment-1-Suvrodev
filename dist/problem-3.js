"use strict";
{
    //?Start
    const countWordOccurrences = (sentence, word) => {
        const lowerSentence = sentence.toLowerCase();
        const lowerWord = word.toLowerCase();
        const wordsArray = lowerSentence.split(" ");
        const length = wordsArray.filter((word) => word === lowerWord).length;
        return length;
    };
    //?End
}
