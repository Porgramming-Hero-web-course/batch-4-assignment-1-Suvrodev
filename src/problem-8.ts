{
  //?Start

  const validateKeys = <T extends Object>(
    obj: T,
    keys: (keyof T)[]
  ): boolean => {
    return keys.every((key) => key in obj);
  };

  //?End
}
