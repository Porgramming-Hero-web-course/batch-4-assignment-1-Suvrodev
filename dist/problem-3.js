"use strict";
{
    //?Start
    const countWordOccurrences = (sentence, word) => {
        const regex = new RegExp(word, "gi");
        const matches = sentence.match(regex);
        return matches ? matches.length : 0;
    };
    //?End
}
