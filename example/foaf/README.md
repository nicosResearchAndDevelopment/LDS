# The Identifier 'foaf:dnaChecksum'

As we know from <[http://xmlns.com/foaf/0.1/#term_dnaChecksum](http://xmlns.com/foaf/0.1/#term_dnaChecksum)>:

> The foaf:dnaChecksum property is mostly a joke, but also a reminder that there will be lots of different identifying properties for people, some of which we might find disturbing.

...and [here](./foaf_dnaChecksum_builder.js) we get the chance to calculate the **dnaChecksum**!

```javascript
const {createHash} = require('node:crypto');

const foaf_dnaChecksum_builder = {
    "build": (genome) => {
        let full_sequence = [];
        for (const [chromosom_position, sequence] of Object.entries(genome)) {
            full_sequence.push(sequence);
        } // for
        return createHash('sha256').update(full_sequence.join("")).digest('hex');
    } // build
};
Object.freeze(foaf_dnaChecksum_builder);
module.exports = {foaf_dnaChecksum_builder: foaf_dnaChecksum_builder};
```

...and Bob was the first one who uses it!

```javascript
const {foaf_dnaChecksum_builder} = require("./foaf_dnaChecksum_builder");

const BobsGenome = {
    1: "ACTGAACTGC",
    2: "GCTGAAAATG",
    // and hopefully some others... [3..21]
    22: "GGTCTAAT",
    "Y": "GGCTAATCT"            // 23:
};

const dnaChecksum = foaf_dnaChecksum_builder.build(BobsGenome);

let Bob = {
    "@context": {
        "foaf": "http://xmlns.com/foaf/0.1/",
        "dude": "https://www.imdb.com/title/tt0118715/characters/nm0000313?ref_=tt_cl_c_1#"
    },
    "@type": "foaf:Person",
    "@id": "dude:Bob",
    "foaf:firstName": "Bob",
    "foaf:familyName": "Bobness",
    "foaf:dnaChecksum": dnaChecksum
};
```

...looks like:

```json
{
  "@context": {
    "foaf": "http://xmlns.com/foaf/0.1/",
    "dude": "https://www.imdb.com/title/tt0118715/characters/nm0000313?ref_=tt_cl_c_1#"
  },
  "@type": "foaf:Person",
  "@id": "dude:Bob",
  "foaf:firstName": "Bob",
  "foaf:familyName": "Bobness",
  "foaf:dnaChecksum": "5c768bd22cebdf8b6e5792148c6446c73be578567ea50195e679c9f58f8fc648"
}
```

...**NEW!!!**: [make your own](./you.js) (after you've installed [node.js](https://nodejs.org/en)!

```javascript
const {foaf_dnaChecksum_builder} = require("./foaf_dnaChecksum_builder");

const YourGenome = {
    // ## REM: keep the order!
    1: "A",
    2: "C",
    3: "G",
    // and hopefully some others... [3..21]
    22: "G",
    "Y": "T"                        // 23:
    // REM: or (if you're female)
    // "X": "T"                     // 23:
};

const dnaChecksum = foaf_dnaChecksum_builder.build(YourGenome);

let You = {
    "@context": {
        "foaf": "http://xmlns.com/foaf/0.1/"
    },
    "@type": "foaf:Person",
    "@id": "todo:put_in_your_id",
    "foaf:firstName": "todo:your_firstName",
    "foaf:familyName": "todo:your_lastName",
    "foaf:dnaChecksum": dnaChecksum
};
```

---