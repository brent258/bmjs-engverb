const expect = require('chai').expect;
const func = require('../index');

describe('func', () => {

  it('should return an object when given a valid string', () => {
    let result = func('be');
    expect(result).to.be.an('object');
    expect(result).to.not.be.null;
  });

  it('should return appropriate tenses from "be"', () => {
    let result = func('be');
    expect(result).to.be.an('object');
    expect(result).to.deep.equal({infinitive: "be", firstPresent: "am", singularPresent: "is", pluralPresent: "are", firstPast: "was", singularPast: "was", pluralPast: "were", perfect: "been", continuous: "being"});
    expect(result).to.not.be.null;
  });

  it('should return appropriate tenses from "have"', () => {
    let result = func('have');
    expect(result).to.be.an('object');
    expect(result).to.deep.equal({infinitive: "have", firstPresent: "have", singularPresent: "has", pluralPresent: "have", firstPast: "had", singularPast: "had", pluralPast: "had", perfect: "had", continuous: "having"});
    expect(result).to.not.be.null;
  });

  it('should return appropriate tenses from "give"', () => {
    let result = func('give');
    expect(result).to.be.an('object');
    expect(result).to.deep.equal({infinitive: "give", firstPresent: "give", singularPresent: "gives", pluralPresent: "give", firstPast: "gave", singularPast: "gave", pluralPast: "gave", perfect: "given", continuous: "giving"});
    expect(result).to.not.be.null;
  });

  it('should return appropriate tenses from "un-do" (prefix verb un-)', () => {
    let result = func('un-do');
    expect(result).to.be.an('object');
    expect(result).to.deep.equal({infinitive: "un-do", firstPresent: "un-do", singularPresent: "un-does", pluralPresent: "un-do", firstPast: "un-did", singularPast: "un-did", pluralPast: "un-did", perfect: "un-done", continuous: "un-doing"});
    expect(result).to.not.be.null;
  });

  it('should return appropriate tenses from "re-do" (prefix verb re-)', () => {
    let result = func('re-do');
    expect(result).to.be.an('object');
    expect(result).to.deep.equal({infinitive: "re-do", firstPresent: "re-do", singularPresent: "re-does", pluralPresent: "re-do", firstPast: "re-did", singularPast: "re-did", pluralPast: "re-did", perfect: "re-done", continuous: "re-doing"});
    expect(result).to.not.be.null;
  });

  it('should throw error and return nothing with no valid string', () => {
    expect(func).to.throw('No valid verb string entered.');
  });

});
