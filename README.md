# bmjs-engverb
An English utility designed for generating a verbs's different forms from a given string, including support for irregular verbs with common prefixes like "un-" or "re-". Receives an input of the base verb string and returns an object with the following properties:

{
  infinitive: **String**,
  firstPresent: **String**,
  singularPresent: **String**,
  pluralPresent: **String**,
  firstPast: **String**,
  singularPast: **String**,
  pluralPast: **String**,
  perfect: **String**,
  continuous: **String**
}

*Example usage:*
```javascript
const verb = require('bmjs-engverb');

let be = verb('be');
console.log(be); // {infinitive: "be", firstPresent: "am", singularPresent: "is", pluralPresent: "are", firstPast: "was", singularPast: "was", pluralPast: "were", perfect: "been", continuous: "being"}

let have = verb('have');
console.log(have); // {infinitive: "have", firstPresent: "have", singularPresent: "has", pluralPresent: "have", firstPast: "had", singularPast: "had", pluralPast: "had", perfect: "had", continuous: "having"}

let give = verb('give');
console.log(give); // {infinitive: "give", firstPresent: "give", singularPresent: "gives", pluralPresent: "give", firstPast: "gave", singularPast: "gave", pluralPast: "gave", perfect: "given", continuous: "giving"}

let undo = verb('undo');
console.log(undo); // {infinitive: "undo", firstPresent: "undo", singularPresent: "undoes", pluralPresent: "undo", firstPast: "undid", singularPast: "undid", pluralPast: "undid", perfect: "undone", continuous: "undoing"}
```
