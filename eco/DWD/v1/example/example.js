let bafin = {
// EXAMPLE 1:
//           get it under its own DWSP-domain
//           GET https://dwsp.bafin.de/did/resolve/did:web:DWDDE-BAFIN-42424241
//           Accept: application/ld+json
// RESPONSE 1 (http):
    bafin_response_1: {
        "@context": {
            "dwd": "https://github.com/nicosResearchAndDevelopment/LDS/eco/DWD/v1/",
            "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
            "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
            "xsd": "http://www.w3.org/2001/XMLSchema#"
        },
        "@id": "did:web:DWDDE-BAFIN-42424241",
        "@type": "dwd:DWSP",
        "dwd:authorisationNumber": {
            "@type": "dwd:id-SemanticsId-authorisationNumber",
            "@value": "DWDDE-BAFIN-42424240"
            // "@value": "did:web:DWDDE-BAFIN-42424240"
        },
        "dwd:dwspEndPoint": {
            "@type": "xsd:anyURI",
            "@value": "https://dwsp.bafin.de/did/resolve/"
        },
        "rdfs:seeAlso": {
            "@type": "xsd:anyURI",
            "@value": "https://dwsp.bafin.de/"
        },
        "rdfs:isDefinedBy": {
            "@id": "did:web:DWDDE-BAFIN"
        }
    } // bafin_response_1
// EXAMPLE 2:
//           let us see, if 'rdfs:isDefinedBy' is also resolvable
//           GET https://dwsp.bafin.de/did/resolve/did:web:DWDDE-BAFIN
//           Accept: application/ld+json
// RESPONSE 2 (http):
    , bafin_response_2: {
        "@context": {
            "dwd": "https://github.com/nicosResearchAndDevelopment/LDS/eco/DWD/v1/",
            "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
            "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
            "xsd": "http://www.w3.org/2001/XMLSchema#"
        },
        "@id": "did:web:DWDDE-BAFIN",
        "@type": "dwd:NCA",
        "dwd:codeNCA": {
            "@type": "dwd:id-SemanticsId-codeNCA",
            "@value": "DWDDE-BAFIN"
            // "@value": "did:web:DWDDE-BAFIN"
        },
        "dwd:nameNCA": {
            "@type": "xsd:string",
            "@value": "Federal Financial Supervisory Authority"
        },
        "dwd:dwspEndPoint": {
            "@type": "xsd:anyURI",
            "@value": "https://dwsp.bafin.de/did/resolve/"
        },
        "rdfs:seeAlso": {
            "@type": "xsd:anyURI",
            "@value": "https://dwd.bafin.de/"
        },
        "rdfs:isDefinedBy": {
            "rdfs:type": "xsd:anyURI",
            "rdfs:value": "https://www.bafin.de/"
        }
    } // bafin_response_2
}; // bafin
