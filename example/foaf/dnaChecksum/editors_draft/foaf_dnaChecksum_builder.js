const {createHash} = require('node:crypto');

let foaf_dnaChecksum_builder = {
    "build": (genome) => {
        let full_sequence = [];
        for (const [chromosom_position, sequence] of Object.entries(genome)) {
            full_sequence.push(sequence);
        } // for
        return createHash('sha256').update(full_sequence.join("")).digest('hex');
    } // build
};

foaf_dnaChecksum_builder["genome"] = {
	human: {
		1: {
				bp: 42
			}
	}, // human
	drosophila_melanogaster: {},
	drosphila_synthetica: {}
};

foaf_dnaChecksum_builder["size"] = {
	small: 1000000, 					// default
	mid: 100000,
	large: 1000
	full: 0
};

Object.freeze(foaf_dnaChecksum_builder["size"]);
Object.freeze(foaf_dnaChecksum_builder);

module.exports = {foaf_dnaChecksum_builder: foaf_dnaChecksum_builder};