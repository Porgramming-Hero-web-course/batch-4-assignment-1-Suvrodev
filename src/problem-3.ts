{
  //?Start
  const countWordOccurrences = (sentence: string, word: string): number => {
    const lowerSentence = sentence.toLowerCase();
    const lowerWord = word.toLowerCase();
    const wordsArray = lowerSentence.split(" ");
    const length = wordsArray.filter((word) => word === lowerWord).length;
    return length;
  };
  //?End
}
