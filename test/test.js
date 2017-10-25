const expect = require('chai').expect;
const func = require('../index');

describe('func', () => {

  it('should return appropriate tenses from "be"', () => {
    let result = func('be');
    expect(result).to.be.an('object');
    expect(result.singularPresent).to.equal('is');
    expect(result.singularPast).to.equal('was');
    expect(result.perfect).to.equal('been');
    expect(result.continuous).to.equal('being');
    expect(result).to.not.be.null;
  });

  it('should return appropriate tenses from "have"', () => {
    let result = func('have');
    expect(result).to.be.an('object');
    expect(result.singularPresent).to.equal('has');
    expect(result.singularPast).to.equal('had');
    expect(result.perfect).to.equal('had');
    expect(result.continuous).to.equal('having');
    expect(result).to.not.be.null;
  });

  it('should return appropriate tenses from "give"', () => {
    let result = func('give');
    expect(result).to.be.an('object');
    expect(result.singularPresent).to.equal('gives');
    expect(result.singularPast).to.equal('gave');
    expect(result.perfect).to.equal('given');
    expect(result.continuous).to.equal('giving');
    expect(result).to.not.be.null;
  });

  it('should return appropriate tenses from "touch"', () => {
    let result = func('touch');
    expect(result).to.be.an('object');
    expect(result.singularPresent).to.equal('touches');
    expect(result.singularPast).to.equal('touched');
    expect(result.perfect).to.equal('touched');
    expect(result.continuous).to.equal('touching');
    expect(result).to.not.be.null;
  });

  it('should return appropriate tenses from "kiss"', () => {
    let result = func('kiss');
    expect(result).to.be.an('object');
    expect(result.singularPresent).to.equal('kisses');
    expect(result.singularPast).to.equal('kissed');
    expect(result.perfect).to.equal('kissed');
    expect(result.continuous).to.equal('kissing');
    expect(result).to.not.be.null;
  });

  it('should return appropriate tenses from a verb surrounded by whitespace', () => {
    let result = func('   give ');
    expect(result).to.be.an('object');
    expect(result.singularPresent).to.equal('gives');
    expect(result.singularPast).to.equal('gave');
    expect(result.perfect).to.equal('given');
    expect(result.continuous).to.equal('giving');
    expect(result).to.not.be.null;
  });

  it('should return appropriate tenses from a verb followed by other characters', () => {
    let result = func('give fdgfdgdfgdfdfg');
    expect(result).to.be.an('object');
    expect(result.singularPresent).to.equal('gives');
    expect(result.singularPast).to.equal('gave');
    expect(result.perfect).to.equal('given');
    expect(result.continuous).to.equal('giving');
    expect(result).to.not.be.null;
  });

  it('should return appropriate tenses from "un-do" (prefix verb un-)', () => {
    let result = func('un-do');
    expect(result).to.be.an('object');
    expect(result.singularPresent).to.equal('un-does');
    expect(result.singularPast).to.equal('un-did');
    expect(result.perfect).to.equal('un-done');
    expect(result.continuous).to.equal('un-doing');
    expect(result).to.not.be.null;
  });

  it('should return appropriate tenses from "re-do" (prefix verb re-)', () => {
    let result = func('re-do');
    expect(result).to.be.an('object');
    expect(result.singularPresent).to.equal('re-does');
    expect(result.singularPast).to.equal('re-did');
    expect(result.perfect).to.equal('re-done');
    expect(result.continuous).to.equal('re-doing');
    expect(result).to.not.be.null;
  });

  it('should return appropriate tenses from "underdo" (prefix verb under-)', () => {
    let result = func('underdo');
    expect(result).to.be.an('object');
    expect(result.singularPresent).to.equal('underdoes');
    expect(result.singularPast).to.equal('underdid');
    expect(result.perfect).to.equal('underdone');
    expect(result.continuous).to.equal('underdoing');
    expect(result).to.not.be.null;
  });

  it('should return the right strings for present verb tenses', () => {
    expect(func('be').present()).to.equal('be');
    expect(func('be').present(5545545454)).to.equal('be');
    expect(func('be').present('gfdfgdghgjdd')).to.equal('be');
    expect(func('be').present('first')).to.equal('am');
    expect(func('be').present('singular')).to.equal('is');
    expect(func('be').present('plural')).to.equal('are');
    expect(func('be').present('first',1)).to.equal('am not');
    expect(func('be').present('singular',1)).to.equal("isn't");
    expect(func('be').present('plural',1)).to.equal("aren't");
    expect(func('be').present('first',0,1,0)).to.equal("am being");
    expect(func('be').present('singular',0,1,0)).to.equal("is being");
    expect(func('be').present('plural',0,1,0)).to.equal("are being");
    expect(func('be').present('first',0,1,1)).to.equal("have been being");
    expect(func('be').present('singular',0,1,1)).to.equal("has been being");
    expect(func('be').present('plural',0,1,1)).to.equal("have been being");
    expect(func('be').present('first',1,1,1)).to.equal("haven't been being");
    expect(func('be').present('singular',1,1,1)).to.equal("hasn't been being");
    expect(func('be').present('plural',1,1,1)).to.equal("haven't been being");
    expect(func('be').present('first',0,0,1)).to.equal("have been");
    expect(func('be').present('singular',0,0,1)).to.equal("has been");
    expect(func('be').present('plural',0,0,1)).to.equal("have been");
    expect(func('be').present('first',1,1,0)).to.equal("am not being");
    expect(func('be').present('singular',1,1,0)).to.equal("isn't being");
    expect(func('be').present('plural',1,1,0)).to.equal("aren't being");
    expect(func('be').present('first',1,0,1)).to.equal("haven't been");
    expect(func('be').present('singular',1,0,1)).to.equal("hasn't been");
    expect(func('be').present('plural',1,0,1)).to.equal("haven't been");
    expect(func('have').present('first')).to.equal("have");
    expect(func('have').present('singular')).to.equal("has");
    expect(func('have').present('plural')).to.equal("have");
    expect(func('have').present('first',1)).to.equal("don't have");
    expect(func('have').present('singular',1)).to.equal("doesn't have");
    expect(func('have').present('plural',1)).to.equal("don't have");
    expect(func('have').present('first',0,1,0)).to.equal("am having");
    expect(func('have').present('singular',0,1,0)).to.equal("is having");
    expect(func('have').present('plural',0,1,0)).to.equal("are having");
    expect(func('have').present('first',1,1,0)).to.equal("am not having");
    expect(func('have').present('singular',1,1,0)).to.equal("isn't having");
    expect(func('have').present('plural',1,1,0)).to.equal("aren't having");
  });

  it('should return the right strings for past verb tenses', () => {
    expect(func('be').past('first')).to.equal("was");
    expect(func('be').past('singular')).to.equal("was");
    expect(func('be').past('plural')).to.equal("were");
    expect(func('be').past('first',1,0,0)).to.equal("wasn't");
    expect(func('be').past('singular',1,0,0)).to.equal("wasn't");
    expect(func('be').past('plural',1,0,0)).to.equal("weren't");
    expect(func('be').past('first',0,1,0)).to.equal("was being");
    expect(func('be').past('singular',0,1,0)).to.equal("was being");
    expect(func('be').past('plural',0,1,0)).to.equal("were being");
    expect(func('be').past('first',1,1,0)).to.equal("wasn't being");
    expect(func('be').past('singular',1,1,0)).to.equal("wasn't being");
    expect(func('be').past('plural',1,1,0)).to.equal("weren't being");
    expect(func('be').past('first',1,0,1)).to.equal("hadn't been");
    expect(func('be').past('singular',1,0,1)).to.equal("hadn't been");
    expect(func('be').past('plural',1,0,1)).to.equal("hadn't been");
    expect(func('have').past('first',1,0,0)).to.equal("didn't have");
    expect(func('have').past('singular',1,0,0)).to.equal("didn't have");
    expect(func('have').past('plural',1,0,0)).to.equal("didn't have");
    expect(func('have').past('first',0,0,0)).to.equal("had");
    expect(func('have').past('singular',0,0,0)).to.equal("had");
    expect(func('have').past('plural',0,0,0)).to.equal("had");
    expect(func('have').past('first',1,1,0)).to.equal("wasn't having");
    expect(func('have').past('singular',1,1,0)).to.equal("wasn't having");
    expect(func('have').past('plural',1,1,0)).to.equal("weren't having");
    expect(func('have').past('first',1,1,1)).to.equal("hadn't been having");
    expect(func('have').past('singular',1,1,1)).to.equal("hadn't been having");
    expect(func('have').past('plural',1,1,1)).to.equal("hadn't been having");
  });

  it('should return the right strings for future verb tenses', () => {
    expect(func('be').future('first',0,0,0)).to.equal("will be");
    expect(func('be').future('first',1,0,0)).to.equal("won't be");
    expect(func('be').future('first',0,1,0)).to.equal("will be being");
    expect(func('be').future('first',1,1,0)).to.equal("won't be being");
    expect(func('be').future('first',0,0,1)).to.equal("will have been");
    expect(func('be').future('first',1,0,1)).to.equal("won't have been");
    expect(func('be').future('first',0,1,1)).to.equal("will have been being");
    expect(func('be').future('first',1,1,1)).to.equal("won't have been being");
  });

  it('should throw error and return nothing with no valid string', () => {
    expect(func).to.throw('No valid verb string entered.');
  });

});
