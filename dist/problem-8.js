"use strict";
{
    //?Start
    const validateKeys = (obj, keys) => {
        return keys.every((key) => key in obj);
    };
    //?End
}
