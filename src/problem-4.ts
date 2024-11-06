{
  //?Start

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  const calculateShapeArea = (shape: Shape): number | string => {
    if (shape.shape === "circle") {
      const result = Math.PI * shape.radius * shape.radius;
      return parseFloat(result.toFixed(2));
    } else if (shape.shape === "rectangle") {
      const result = shape.height * shape.width;
      return parseFloat(result.toFixed(2));
    } else {
      return `It's not Circle or Rectangle  `;
    }
  };

  //?End
}
