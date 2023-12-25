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

///