const countBy = require("../code/countByX");

describe("Count by X", function () {
  it("returns an array of the first n multiples of x", () => {
    expect(countBy(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
