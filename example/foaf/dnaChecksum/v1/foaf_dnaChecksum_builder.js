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