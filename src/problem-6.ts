{
  //?Start

  interface Profile {
    name: string;
    age: number;
    email: string;
  }
  const updateProfile = (
    obj: Profile,
    newProfile: Partial<Profile>
  ): Profile => {
    const updateNewProfile = { ...obj, ...newProfile };
    return updateNewProfile;
  };
  //?End
}
