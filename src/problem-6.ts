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

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));
  //?End
}
