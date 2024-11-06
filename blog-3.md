## Question-3: Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

Let's say I declare a function where the parameters can have different types, such as ` unknown`, `any`, or a union of types like `string | number | boolean`. And there will be many parameters. For example, if I declare two parameters, and both are of type `number`, the function will return the sum of those two numbers. If the first parameter is a `string`, the second parameter will also be converted to a string, and the function will return the string data. Or, let's say if both parameters are `true`, another function will be called. This is where `Type Guards` are used. `Type Guards` help in checking the data type and applying the appropriate functionality or mathematical operations. Therefore, TypeScript’s Type Guard is very important. Also, TypeScript will show errors before the code runs if the data type is not clearly defined.

**Generally, there are 4 types of Type Guards. They are:**

**1. `typeof Type Guard`**
This can be used to check if a value is a certain primitive type like string, number, or boolean.<br/>
**Example**

```bash
function printLength(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.length);
  } else {
    console.log('Not a string');
  }
}

```

**2. `instanceof ` Type Guard**
This checks whether an object is an instance of a particular class.<br/>
**Example**

```bash
class Dog {
  bark() {
    console.log('Woof!');
  }
}

function makeSound(animal: Dog | string) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    console.log('Not a dog!');
  }
}


```

**3. Custom Type Guards (User-Defined)**
Sometimes you may want to create your own checks to distinguish between complex types like objects or interfaces.<br/>
**Example**

```bash
interface Car {
  drive(): void;
}

interface Bike {
  pedal(): void;
}

function isCar(vehicle: Car | Bike): vehicle is Car {
  return (vehicle as Car).drive !== undefined;
}

function useVehicle(vehicle: Car | Bike) {
  if (isCar(vehicle)) {
    vehicle.drive();  // Safe to call drive() because we know it's a Car
  } else {
    vehicle.pedal();  // Safe to call pedal() because we know it's a Bike
  }
}

```

**4. `in` Type Guard**
This checks if a specific property exists in an object. It helps determine the object's shape and type.<br/>
**Example**

```bash
interface Car {
  drive(): void;
}

interface Bike {
  pedal(): void;
}

function useVehicle(vehicle: Car | Bike) {
  if ('drive' in vehicle) {
    vehicle.drive();  // Safe to call drive() because we know it has a drive method
  } else {
    vehicle.pedal();  // Safe to call pedal() because it must be a Bike
  }
}


```
