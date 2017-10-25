# bmjs-engverb
An English utility designed for generating a verbs's different forms from a given string, including support for irregular verbs with common prefixes like "un-" or "re-". Receives an input of the base verb string and returns an object with the following properties:

*infinitive: **String**,
*firstPresent: **String**,
*singularPresent: **String**,
*pluralPresent: **String**,
*firstPast: **String**,
*singularPast: **String**,
*pluralPast: **String**,
*perfect: **String**,
*continuous: **String**


As well as methods for printing out the final forms of different verb strings that accept a string value for the person (first, singular or plural) and optional values for the tense:

*present(person: String, isNegative: Bool, isContinuous: Bool, isPerfect: Bool) => (String).
*past(person: String, isNegative: Bool, isContinuous: Bool, isPerfect: Bool) => (String).
*future(person: String, isNegative: Bool, isContinuous: Bool, isPerfect: Bool) => (String).

*Example usage:*
```javascript
const verb = require('bmjs-engverb');

let be = verb('be');
console.log(be); // {infinitive: "be", firstPresent: "am", singularPresent: "is", pluralPresent: "are", firstPast: "was", singularPast: "was", pluralPast: "were", perfect: "been", continuous: "being", present: [Function], past: [Function], future: [Function]}

console.log(be.present('first')); // 'am'
console.log(be.present('first',true)); // 'am not'
console.log(be.present('first',true,true)); // 'am not being'
console.log(be.past('first')); // 'was'
console.log(be.present('singular')); // 'is'
console.log(be.future('first')); // 'will be'

let have = verb('have');
console.log(have); // {infinitive: "have", firstPresent: "have", singularPresent: "has", pluralPresent: "have", firstPast: "had", singularPast: "had", pluralPast: "had", perfect: "had", continuous: "having", present: [Function], past: [Function], future: [Function]}

console.log(have.present('first')); // 'have'
console.log(have.present('first',true)); // 'don't have'
console.log(have.present('first',true,true)); // 'am not having'
console.log(have.past('first')); // 'had'
console.log(have.present('singular')); // 'has'
console.log(have.future('first')); // 'will have'
```
