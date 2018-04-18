import { Calculator } from "./calculator";

import { expect } from 'chai'; // Temporary for Appveyor Test

describe("Calculator", function() {

  it("should add two numbers", () => {
    let calculator = new Calculator();
    let sum = calculator.add(1, 4);
    expect(sum).to.equal(5); /* eslint-disable-line */
  });

  it("should subtract two numbers", () => {
    let calculator = new Calculator();
    let sum = calculator.subtract(4, 1);
    expect(sum).to.equal(3); /* eslint-disable-line */
  });

});
