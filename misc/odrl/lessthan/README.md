# Less Than

| Topic | Description      | Comment |
|-------|------------------|---------|
| NL    | Natural Language |         |

Prefixes used in all examples:

| prefix               | URI                                                                                         |
|----------------------|---------------------------------------------------------------------------------------------|
| cred                 | https://www.w3.org/2018/credentials#                                                        |
| foaf                 | http://xmlns.com/foaf/0.1/                                                                  |
| odrl                 | http://www.w3.org/ns/odrl/2/                                                                |
| org                  | https://www.w3.org/TR/vocab-org/                                                            |
| rdf                  | http://www.w3.org/1999/02/22-rdf-syntax-ns#                                                 |
| rdfs                 | http://www.w3.org/2000/01/rdf-schema#                                                       |
| sec                  | https://w3id.org/security#                                                                  |
| time                 | https://www.w3.org/TR/owl-time/#time:Interval                                               |
| xsd                  | http://www.w3.org/2001/XMLSchema#                                                           |
| **odrl extensions**: |                                                                                             |
| xstring              | ODRL Profile, extending strings.                                                            |
| xnum                 | ODRL Profile, extending numbers.                                                            |
| xorg                 | ODRL Profile, extending [Organization Ontology](https://www.w3.org/TR/vocab-org/).          |
| xtime                | ODRL Profile, extending [OWL Time Ontology](https://www.w3.org/TR/owl-time/#time:Interval). |
| **examples**         |                                                                                             |
| ex                   | https://www.example.org/                                                                    |
| ex2                  | https://www.example2.org/                                                                   |

---

## ODRL

[**Open Digital Rights Language** (2.2)](https://www.w3.org/TR/odrl-model/) is a Definition Language.

### Pros

- Definition Language

### Cons

- Definition Language

### For Managers

- Find some people to implement ODRL to make code-free decisions, following the rules.

### For Implementers

- **DO NOT** (never ever) solve problems found in a given policy.

---

## Operator

### Someone stated that something is less than the other

> NL: "Less than."

```text
<
```

---

## Constraint

### Someone stated that 36 is less than 42

> NL: "36 is less than 42."

EXAMPLE `pseudocode`:

```pseudocode
(36 < 42) === true
```

...and presented this statement in an ODRL-Constraint, presented in `turtle`:

```turtle
@prefix xsd:                <http://www.w3.org/2001/XMLSchema#> .
@prefix odrl:               <http://www.w3.org/ns/odrl/2/> .
@prefix ex:                 <https://www.example.org/> .

ex:numeric_constraint
    a odrl:Constraint ;
    odrl:leftOperand  "36"^^xsd:integer ;
    odrl:operator     odrl:lt ;
    odrl:rightOperand "42"^^xsd:integer ;
.
```

Same information, using `ld+json`:

```json
{
    "@context": {
        "xsd":              "http://www.w3.org/2001/XMLSchema#",
        "odrl":             "http://www.w3.org/ns/odrl/2/",
        "ex":               "https://www.example.org/"
    },
    "@graph": [
        {
            "@id":   "ex:numeric_constraint",
            "@type": "odrl:Constraint",
            "odrl:leftOperand": {
                                        "@value": "36",
                                        "@type": "xsd:integer"
            },
            "odrl:operator": "odrl:lt",
            "odrl:rightOperand": {
                                        "@value": "42",
                                        "@type": "xsd:integer"
            }           
        }
    ]            
}
```

### Special Identifier

> NL: "There has to be a very special identifier under all entries in a given list!"

> NL: "...or better: 'Is Alice is an employee of example.org?' "

EXAMPLE `pseudocode`:

```pseudocode
(
    "https://www.example.org/employee#alice" isPartOf [
        "https://www.example.org/employee#zaphod",
        "https://www.example.org/employee#r2d2",
        "https://www.example.org/employee#bb8",
        "https://www.example.org/employee#alice"
    ]) === true
```

EXAMPLE `turtle`:

```turtle
ex:employee
    rdf:type  xsd:anyURI ;
    rdf:value "https://www.example.org/employee#zaphod" ;
    rdf:value "https://www.example.org/employee#r2d2" ;
    rdf:value "https://www.example.org/employee#bb8" ;
    rdf:value "https://www.example.org/employee#alice" ;
.

ex:employee_uri_constraint
    a                 odrl:Constraint ;
    odrl:leftOperand  "https://www.example.org/employee#alice"^^xsd:anyURI ;
    odrl:operator     odrl:isPartOf ;
    odrl:rightOperand ex:employee ;
.
```

Or, not on string - but on objects:

```turtle
ex:employee
    rdf:type  rdfs:Resource ;
    rdf:value <https://www.example.org/employee#zaphod> ;
    rdf:value <https://www.example.org/employee#r2d2> ;
    rdf:value <https://www.example.org/employee#bb8> ;
    rdf:value <https://www.example.org/employee#alice> ;
.

ex:employee_resource_constraint
    a                 odrl:Constraint ;
    odrl:leftOperand  <https://www.example.org/employee#alice> ;
    odrl:operator     odrl:isPartOf ;
    odrl:rightOperand ex:employee ;
.
```

### Employee of example.org

> NL: "alice has type employee."

```turtle
<https://www.example.org/employee#alice>
    a ex:Employee ;
.

## REM: this works in given (Party-, Asset-) Collection
ex:employee_type_constraint
    a                 odrl:Constraint ;
    odrl:leftOperand  rdf:type ;
    odrl:operator     odrl:isA ;
    odrl:rightOperand ex:Employee ;
.
```

### Alice has role 'Technical Chief Officer'

> NL: "Alice has role 'Technical Chief Officer'."

```turtle
<https://www.example.org/employee#alice>
    a                 ex:Employee ;
    rdfs:comment      """'org:hasMembership' :: see also: https://www.w3.org/TR/vocab-org/#org:Membership ."""@en ;
    org:hasMembership [ a                org:Membership ;
                        org:role         <https://www.example.org/role#tco> ;
                        rdfs:comment     """'org:memberDuring' :: see also: https://www.w3.org/TR/vocab-org/#org:memberDuring ."""@en ;
                        org:memberDuring [ rdfs:comment
                                                               """'time:Interval' :: see also: https://www.w3.org/TR/owl-time/#time:Interval ."""@en ;
                                           a                   time:Interval ;
                                           time:hasBeginning   [ a time:Instant ;
                                                                 time:inXSDDateTimeStamp
                                                                   "2022-11-01T14:00:00-8:00"^^xsd:dateTimeStamp ; ] ;
                                           time:hasXSDDuration "P3Y"^^xsd:duration ; ] ; 
                                           rdfs:comment      """'org:member' :: inverse of 'org:hasMembership', see also: https://www.w3.org/TR/vocab-org/#org:member ."""@en ;
                                           org:member        <https://www.example.org/employee#alice> ; ] ;
.
## REM: this works in given (Party-, Asset-) Collection
ex:tco_constraint
    a                 odrl:Constraint ;
    odrl:leftOperand  org:hasMembership ;
    rdfs:comment      """'xorg:role' :: extension to Organization Ontology, see also: https://www.w3.org/TR/vocab-org/#org:role ."""@en ;
    odrl:operator     xorg:hasRole ;
    odrl:rightOperand <https://www.example.org/role#tco> ;
.
```

---

### Constraint: putting it all together

EXAMPLE: only focussed on the target (as an 'odrl:AssetCollection'), not showing the rule. Given collection contains all employees (but we do filtering for 'ex:Employee', too; we don't trust this collection :-/), filtering all TCO's younger than '42'.

> NL: refine the collection of all employees, validate them to be a real employee and fetch all TCO's, younger than 42!

```turtle
odrl:target [  a               odrl:AssetCollection ;
                      odrl:source     ex:employee ; ## REM: the collection of all employees!
                      odrl:refinement [ a        odrl:LogicalConstraint ;
                          # odrl:andSequence ( [ a                 odrl:Constraint ;
                          # OR --->>>
                                        odrl:and ( [ a                 odrl:Constraint ;
                                                     odrl:leftOperand  rdf:type ;
                                                     odrl:operator     odrl:isA ;
                                                     odrl:rightOperand ex:Employee ; ]
                                                   [ a                 odrl:Constraint ;
                                                     odrl:leftOperand  org:hasMembership ;
                                                     rdfs:comment      """'xorg:role' :: extension to Organization Ontology, see also: https://www.w3.org/TR/vocab-org/#org:role ."""@en ;
                                                     odrl:operator     xorg:role ;
                                                     odrl:rightOperand <https://www.example.org/role#tco> ; ]
                                                   [ a                 odrl:Constraint ;
                                                     odrl:leftOperand  foaf:age ;
                                                     odrl:operator     odrl:lt ;
                                                     odrl:rightOperand "42"^^xsd:integer ; ] ) ; ] ; ] ;

```

---

## Rule

### Rule is valid by given time-interval

> NL: "The rule is valid for a given time-interval. It is satisfied from "2023-04-02" to "2023-04-18" and allows Bob to 'use' Alice.

EXAMPLE `pseudocode`:

```pseudocode
permission ( (NOW > "2023-04-02") and (NOW < "2023-04-18") === true ) ==> Bob.use(Alice)
```

```turtle
ex:permission
    a               odrl:Rule ;
    a               odrl:Permission ;
    odrl:assigner   <https://www.example.org/> ;
    odrl:target     <https://www.example1.org/employee#alice> ;
    odrl:assignee   <https://www.example2.org/employee#bob> ;
    odrl:constraint [ a        odrl:LogicalConstraint ;
                      odrl:and ( [ a                odrl:Constraint ;
                                   odrl:leftOperand odrl:dateTime ;
                                   odrl:operator    odrl:gteq ;
                                   odrl:leftOperand "2023-04-02" ; ]
                                 [ a                odrl:Constraint ;
                                   odrl:leftOperand odrl:dateTime ;
                                   odrl:operator    odrl:lteq ;
                                   odrl:leftOperand "2023-04-18" ; ] ) ; ] ;
    odrl:action     odrl:use ;
.
```

## Policy

### foaf:Group

Adding a person to a group.

```turtle
<https://www.example.org/group/admin#>
    a                    foaf:Group ;
    foaf:name            "admin"^^xsd:string ;
    foaf:membershipClass foaf:Person ;
    foaf:member          <https://www.example.org/employee#alice> ; ## REM: 'org:Organization'!
.

<https://www.example.org/employee#bob>
    a foaf:Person ;
.

ex:permission
    a             odrl:Rule ;
    a             odrl:Permission ;
    odrl:assigner <https://www.example.org/employee#alice> ;
    odrl:target   [ a               odrl:AssetCollection ;
                    odrl:source     <https://www.example.org/employee#bob> ; ## REM: IMPL: to []
                    odrl:refinement [ a                 odrl:Constraint ;
                                      odrl:leftOperand  rdf:type ;
                                      odrl:operator     odrl:isA ;
                                      odrl:rightOperand foaf:Person ; ] ; ] ;
    odrl:assignee [ a               odrl:PartyCollection ;
                    odrl:source     <https://www.example.org/group/admin#> ;    ## REM: IMPL: to []
                    odrl:refinement [ a                 odrl:Constraint ;
                                      odrl:leftOperand  foaf:membershipClass ;
                                      odrl:operator     odrl:isAnyOf ;
                                      odrl:rightOperand foaf:Person ; ] ; ] ;
    odrl:action   ex:add ;
.
```

Removing a person from a group.

```turtle

<https://www.example.org/group/admin#>
    a                    foaf:Group ;
    foaf:name            "admin"^^xsd:string ;
    foaf:membershipClass foaf:Person ;
    foaf:member          <https://www.example.org/employee#alice> ; ## REM: 'org:Organization'!
.

<https://www.example.org/employee#bob>
    a foaf:Person ;
.

ex:memberCount
    a                odrl:LeftOperand, owl:NamedIndividual, skos:Concept ;
    rdfs:isDefinedBy ex: ;
    rdfs:label       "Asset members"@en ;
    skos:definition  "."@en ;
    skos:note        "."@en ;
    skos:scopeNote   "Non-Normative"@en .

ex:permission
    a             odrl:Rule ;
    a             odrl:Permission ;
    odrl:assigner <https://www.example.org/employee#alice> ;
    odrl:target   [ a           odrl:Asset ;
                    odrl:source <https://www.example.org/employee#bob> ; ## REM: IMPL: to []
                  ] ;
    odrl:assignee [ a               odrl:PartyCollection ;
                    odrl:source     <https://www.example.org/group/admin#> ;    ## REM: IMPL: to []
                    odrl:refinement [ a                 odrl:Constraint ;
                                      odrl:leftOperand  ex:memberCount ;
                                      odrl:operator     odrl:gt ;
                                      odrl:rightOperand "2"^^xsd:integer ; ] ; ] ;
    odrl:action   ex:remove ;
.
```

an obligation rule Logging less than 2 members:

```turtle
ex:obligation
    a             odrl:Rule ;
    a             odrl:Obligation ;
    odrl:assigner <https://www.example.org/> ;
    odrl:target   [ a               odrl:AssetCollection ;
                    odrl:source     <https://www.example.org/group/> ;    ## REM: IMPL: to []
                    odrl:refinement [ a        odrl:logicalConstraint ;
                                      odrl:and ( [ a                 odrl:Constraint ;
                                                   odrl:leftOperand  foaf:name ;
                                                   odrl:operator     odrl:eq ;
                                                   odrl:rightOperand "admin"^^xsd:string ; ]
                                                 [ a                 odrl:Constraint ;
                                                   odrl:leftOperand  ex:memberCount ;
                                                   odrl:operator     odrl:lt ;
                                                   odrl:rightOperand "2"^^xsd:integer ; ] ) ; ] ; ] ;
    odrl:assignee <https://www.example.org/employee#bob> ;                ## REM: IMPL: to []
    odrl:action   [ rdf:value          odrl:inform ;
                    odrl:informedParty <https://www.example.org/log/> ; ] ;
.
```

---

## Extensions

### xstring

- Regular expression

### xnum

- Range

### xtime

- before

### xorg

- Has Membership

---