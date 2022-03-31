exports.addition = (num1 = 0, num2 = 0) => {
  if (isNaN(num1) || isNaN(num2)) return "Not a number";

  return num1 + num2;
};

exports.multiplication = (num1 = 0, num2 = 0) => {
  if (isNaN(num1) || isNaN(num2)) return "Not a number";

  return num1 * num2;
};

exports.substraction = (num1 = 0, num2 = 0) => {
  if (isNaN(num1) || isNaN(num2)) return "Not a number";

  return num1 - num2;
};

exports.division = (num1 = 0, num2 = 0) => {
  if (isNaN(num1) || isNaN(num2)) return "Not a number";

  return num1 / num2;
};
