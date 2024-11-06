"use strict";
{
    //?Start
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
    }
    //?End
}
