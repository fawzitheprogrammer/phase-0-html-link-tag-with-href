require ( './helpers.js' );

const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

describe("index.html", () => {
  it("contains an <a> tag", () => {
    const aTag = document.querySelector("a");
    expect(aTag).to.exist;
  });

  it("has the text content of 'Hover Over Me'", () => {
    const aTag = document.querySelector("a");
    expect(aTag).to.have.text("Hover Over Me");
  });

  it("has the href attribute of 'https://flatironschool.com'", () => {
    const aTag = document.querySelector("a");
    expect(aTag).to.have.attribute("href", "https://flatironschool.com");
  });
});
