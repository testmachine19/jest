const calculateBonus = require("./calculateBonus");

describe("calculateBonus", () => {
  it("Если сумма более 50, то бонус 50", () => {
    const result = calculateBonus(30, 25);
    expect(result).toBe(50);
  });

  it("Если сумма менее 50, то бонус равен сумме чисел", () => {
    const result = calculateBonus(20, 15);
    expect(result).toBe(35);
  });

  it("Если сумма чисел равна 0", () => {
    const result = calculateBonus(0, 0);
    expect(result).toBe(0);
  });

  it("Если сумма чисел равна ровно 50", () => {
    const result = calculateBonus(25, 25);
    expect(result).toBe(50);
  });

  it("Если сумма более 50 на один", () => {
    const result = calculateBonus(11, 40);
    expect(result).toBe(50);
  });

  it("Если сумма чисел менее 50 на один", () => {
    const result = calculateBonus(19, 30);
    expect(result).toBe(49);
  });

  it("Если числа отрицательные", () => {
    const result = calculateBonus(-19, -30);
    expect(result).toBe(0);
  });
  it("Если 1 из чисел отрицательное", () => {
    const result = calculateBonus(-19, 30);
    expect(result).toBe(11);
  });
});
