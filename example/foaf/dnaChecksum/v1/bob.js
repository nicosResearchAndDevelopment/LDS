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

console.log(Bob);

///