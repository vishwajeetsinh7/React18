import sum from "../sum";

test("check sum of two +ve numbers", () => {
  expect(sum(2, 5)).toBe(7);
  expect(sum(-2, 2)).toBe(0);
  expect(sum(0, 0)).toBe(0);
  expect(sum(1, 1)).toBe(2);
});
