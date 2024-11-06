{
  //?Start
  const removeDuplicates = (numbers: number[]): number[] => {
    let newArray: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
      if (!newArray.includes(numbers[i])) {
        newArray.push(numbers[i]);
      }
    }
    return newArray;
  };

  //?End
}
