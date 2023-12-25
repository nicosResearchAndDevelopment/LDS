const {foaf_dnaChecksum_builder} = require("./foaf_dnaChecksum_builder");

const BobsConfig = {
	fake: true,
	size: foaf_dnaChecksum_builder.size.small,
	genome_type: foaf_dnaChecksum_builder.genome.human,
	genome: {
		1: "ACTGAACTGC",
		2: "GCTGAAAATG",
		// and hopefully some others... [3..21]
		22: "GGTCTAAT",
		"Y": "GGCTAATCT"	// 23:
};

// REM: hopefully constant!
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