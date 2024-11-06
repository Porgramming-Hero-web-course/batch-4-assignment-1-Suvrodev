"use strict";
{
    const updateProfile = (obj, newProfile) => {
        const updateNewProfile = Object.assign(Object.assign({}, obj), newProfile);
        return updateNewProfile;
    };
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));
    //?End
}
