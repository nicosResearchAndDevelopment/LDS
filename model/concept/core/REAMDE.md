# LDS Model Core Concepts

## TODO 

> - remove first-line `@prefix lds:`
> - skos:notation    "lds-cc:TODO"^^xsd:string ;
> - TBC: properties on concepts?
> - align all to top-level skos-collections lds:XXXConcepts
> - compositions on concepts, like:

```text

lds-cc:LegalPerson
    a                owl:Class, skos:Concept ;
    rdfs:subClassOf  lds:Person ;
    rdfs:subClassOf  lds-cc:LegalEntity ;
    skos:notation    "LegalPerson"^^xsd:string ;
    skos:prefLabel   "Legal Person"@en ;
    skos:prefLabel   "Legale Person"@de ;
    skos:broader     lds-cc:Person ;
    skos:broader     lds-cc:Legal ;
    rdfs:isDefinedBy lds: .
```

All Core Concepts are *abstract* classes.

---