# LDS Example 'Entity'

## Entity

```turtle

@prefix foaf:                     <http://xmlns.com/foaf/0.1/> .
@prefix odrl:                     <http://www.w3.org/ns/odrl/2/> .
@prefix org:                      <http://www.w3.org/ns/org#> .
@prefix rdf:                      <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:                     <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd:                      <http://www.w3.org/2001/XMLSchema#> .

@prefix lds:                      <https://github.com/nicosResearchAndDevelopment/LDS/> .
@prefix entity:                   <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/higher/entity/> .
@prefix purpose:                  <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/higher/work/purpose/> .
@prefix credential:               <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/higher/credential/> .

@prefix company-A:                <https://www.company-A.com/> .
@prefix Bob:                      <https://www.company-A.com/employee/bob/> .
@prefix Jim:                      <https://www.company-A.com/employee/jim/> .

@prefix company-B:                <https://www.company-B.com/> .
@prefix Alice:                    <https://www.company-B.com/employee/alice/> .

## region company
## region company :: Company-A

company-A:
    a                entity:Entity ;
    a                org:Organization ;
    org:member       <https://www.company-A.com/#member> ;
    lds:employee     Bob: ;
    lds:employee     Jim: ;
    rdfs:isDefinedBy company-A: .

Bob:
    a                foaf:Person ;
    foaf:firstName   "Bob"^^xsd:string ;
    rdfs:isDefinedBy company-A: .

Jim:
    a                foaf:Person ;
    foaf:firstName   "Jim"^^xsd:string ;
    rdfs:isDefinedBy company-A: .

<https://www.company-A.com/#member>
    rdf:type         xsd:anyURI ;
    rdf:value        <https://www.company-A.com/employee/bob/>, <https://www.company-A.com/employee/jim/> ;
    rdfs:isDefinedBy company-A: .

## endregion company :: Company-A

## region company :: Company-B
company-B:
    a                lds:Entity ; ## REM: subClassOf lds:LegalEntity
    a                org:Organization ;
    org:member       Alice: ;
    lds:employee     Alice: ;
    rdfs:isDefinedBy company-A: .

Alice:
    a                foaf:Person ;
    foaf:firstName   "Alice"^^xsd:string ;
    rdfs:isDefinedBy company-B: .

<https://www.company-B.com/#member>
    rdf:type         xsd:anyURI ;
    rdf:value        Alice: ;
    rdfs:isDefinedBy company-A: .

## endregion company :: Company-B
## endregion company

##
```

---

## Legal Entity

```turtle

@prefix foaf:                          <http://xmlns.com/foaf/0.1/> .
@prefix odrl:                          <http://www.w3.org/ns/odrl/2/> .
@prefix org:                           <http://www.w3.org/ns/org#> .
@prefix rdf:                           <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:                          <http://www.w3.org/2000/01/rdf-schema#> .
@prefix time:                          <http://www.w3.org/2006/time#>.
@prefix xsd:                           <http://www.w3.org/2001/XMLSchema#> .

@prefix lds:                           <https://github.com/nicosResearchAndDevelopment/LDS/> .
@prefix entity:                        <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/higher/entity/> .
@prefix purpose:                       <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/higher/work/purpose/> .
@prefix credential:                    <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/higher/credential/> .

@prefix company-A:                     <https://www.company-A.com/> .
@prefix Arthur:                        <https://www.company-A.com/employee/arthur/> .

@prefix company-B:                     <https://www.company-B.com/> .
@prefix Samanta:                       <https://www.company-B.com/employee/samanta/> .

## region company
## region company :: Company-A

company-A:
    a                entity:LegalEntity ;
    rdfs:isDefinedBy company-A: .

Arthur:
    a                foaf:Person ;
    a                entity:LegalEntityRepresentative ; ## REM: LER
    foaf:firstName   "Arthur"^^xsd:string ;
    foaf:surname     "Smith"^^xsd:string ;
    org:headOf       company-A: ;
    org:memberOf     <https://www.company-A.com/roleMemberShip/#42-42-42-43> ;
    rdfs:isDefinedBy company-A: .

<https://www.company-A.com/roleMemberShip/#42-42-42-43> ## REM: Jim's employee-membership
    a                   org:Membership ;
    a                   time:Interval ;
    time:hasBeginning   [ a                       time:Instant ;
                          time:inXSDDateTimeStamp "2021-01-01T00:00:00Z"^^xsd:dateTimeStamp ] ;
    ## REM: 'time:hasEnd' :: seems to be dated
    time:hasXSDDuration "P4Y"^^xsd:duration ;
    time:hasEnd         [ a                       time:Instant ;
                          time:inXSDDateTimeStamp "2025-01-01T00:00:00Z"^^xsd:dateTimeStamp ] ;
    org:role            org:Head ;
    org:hasMember       <https://www.company-A.com/employee/arthur/> ;
    rdfs:isDefinedBy    company-A: .

<https://www.company-A.com/#member>
    rdf:type         xsd:anyURI ;
    rdf:value        "https://www.company-A.com/employee/arthur/"^^xsd:string ;
    rdfs:isDefinedBy company-A: .

<https://www.company-A.com/member/>
    rdf:type         foaf:Agent ;
    rdf:value        <https://www.company-A.com/employee/arthur/> ;
    rdfs:isDefinedBy company-A: .

## endregion company :: Company-A

## region company :: Company-B
company-B:
    a                entity:LegalEntity ;
    rdfs:isDefinedBy company-B: .

Samanta:
    a                foaf:Person ;
    a                entity:LegalEntityRepresentative ; ## REM: LER
    foaf:firstName   "Samanta"^^xsd:string ;
    foaf:surname     "Blackbelt"^^xsd:string ;
    org:headOf       company-B: ;
    org:memberOf     <https://www.company-B.com/roleMemberShip/#99-42-42-43> ;
    rdfs:isDefinedBy company-B: .

<https://www.company-B.com/roleMemberShip/#99-42-42-43> ## REM: Jim's employee-membership
    a                   org:Membership ;
    a                   time:Interval ;
    time:hasBeginning   [ a                       time:Instant ;
                          time:inXSDDateTimeStamp "2019-01-01T00:00:00Z"^^xsd:dateTimeStamp ] ;
    ## REM: 'time:hasEnd' :: seems to be dated
    time:hasXSDDuration "P7Y"^^xsd:duration ;
    time:hasEnd         [ a                       time:Instant ;
                          time:inXSDDateTimeStamp "2026-01-01T00:00:00Z"^^xsd:dateTimeStamp ] ;
    org:role            org:Head ;
    org:hasMember       <https://www.company-B.com/employee/samanta/> ;
    rdfs:isDefinedBy    company-B: .

<https://www.company-B.com/#member>
    rdf:type         xsd:anyURI ;
    rdf:value        "https://www.company-B.com/employee/samanta/"^^xsd:string ;
    rdfs:isDefinedBy company-B: .

<https://www.company-B.com/member/>
    rdf:type         foaf:Agent ;
    rdf:value        <https://www.company-B.com/employee/samanta/> ;
    rdfs:isDefinedBy company-B: .

## endregion company :: Company-B
## endregion company

##
```

## Organization

```turtle

@prefix foaf:                     <http://xmlns.com/foaf/0.1/> .
@prefix odrl:                     <http://www.w3.org/ns/odrl/2/> .
@prefix org:                      <http://www.w3.org/ns/org#> .
@prefix rdf:                      <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:                     <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd:                      <http://www.w3.org/2001/XMLSchema#> .

@prefix lds:                      <https://github.com/nicosResearchAndDevelopment/LDS/> .
@prefix entity:                   <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/higher/entity/> .
@prefix purpose:                  <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/higher/work/purpose/> .
@prefix credential:               <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/higher/credential/> .

@prefix company-A:                <https://www.company-A.com/> .

@prefix company-B:                <https://www.company-B.com/> .

## region company
## region company :: Company-A

company-A:
    a                entity:Organization ; ## REM: entity:LegalEntity
    rdfs:isDefinedBy company-A: .
## endregion company :: Company-A

## region company :: Company-B
company-B:
    a                entity:Organisation ; ## REM: entity:LegalEntity
    rdfs:isDefinedBy company-B: .

## endregion company :: Company-B
## endregion company

##
```

## Legal Person

```turtle

@prefix foaf:                       <http://xmlns.com/foaf/0.1/> .
@prefix odrl:                       <http://www.w3.org/ns/odrl/2/> .
@prefix org:                        <http://www.w3.org/ns/org#> .
@prefix rdf:                        <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:                       <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd:                        <http://www.w3.org/2001/XMLSchema#> .

@prefix lds:                        <https://github.com/nicosResearchAndDevelopment/LDS/> .
@prefix entity:                     <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/higher/entity/> .
@prefix purpose:                    <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/higher/work/purpose/> .
@prefix credential:                 <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/higher/credential/> .

@prefix Fred:                       <https://www.fred-flintstone.com/> .
@prefix Barney:                     <https://www.rubble.com/barney/> .

Fred:
    a                entity:LegalPerson ; ## REM: entity:LegalEntity
    a                foaf:Person ;
    foaf:firstName   "Fred"^^xsd:string ;
    foaf:surname     "Flintstone"^^xsd:string ;
    foaf:knows       Barney: ;
    rdfs:isDefinedBy Fred: .

Barney:
    a                entity:NaturalPerson ;
    a                foaf:Person ;
    foaf:firstName   "Barney"^^xsd:string ;
    foaf:surname     "Rubble"^^xsd:string ;
    foaf:knows       Fred: ;
    rdfs:isDefinedBy Barney: .

```

---

## Legal Entity Appointed Representative (Natural Person)

```turtle
    ##```turtle
@prefix foaf:                           <http://xmlns.com/foaf/0.1/> .
@prefix odrl:                           <http://www.w3.org/ns/odrl/2/> .
@prefix org:                            <http://www.w3.org/ns/org#> .
@prefix rdf:                            <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:                           <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd:                            <http://www.w3.org/2001/XMLSchema#> .

@prefix lds:                            <https://github.com/nicosResearchAndDevelopment/LDS/> .
@prefix entity:                         <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/higher/entity/> .
@prefix purpose:                        <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/higher/work/purpose/> .
@prefix credential:                     <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/higher/credential/> .

@prefix company-A:                      <https://www.company-A.com/> .

<https://www.company-A.com/lear/np-99-99-99-98>
    a                  entity:LEAR_NP ;
    foaf:firstName     "Bob"^^xsd:string ;
    entity:actOnBehalf "https://www.company-A.com/"^^xsd:string ;
    lds:validFrom      "2023-11-14T00:00:00Z"^^xsd:dateTimeStamp ;      ## REM: appointment works for three days...
    lds:validTo        "2023-11-17T00:00:00Z"^^xsd:dateTimeStamp ;
    rdfs:comment       """`entity:actOnBehalf`:: interesting - Bob (as an *Appointed Representative*) on behalf of Company-A."""@en ;
    rdfs:isDefinedBy   company-A: .

```

## Legal Entity Appointed Representative (**LEAR_NP_VC**, Natural Person, Verifiable Credential)

```turtle

@prefix cred:                           <https://w3.org/2018/credentials#> .
@prefix foaf:                           <http://xmlns.com/foaf/0.1/> .
@prefix odrl:                           <http://www.w3.org/ns/odrl/2/> .
@prefix org:                            <http://www.w3.org/ns/org#> .
@prefix rdf:                            <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:                           <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd:                            <http://www.w3.org/2001/XMLSchema#> .

@prefix lds:                            <https://github.com/nicosResearchAndDevelopment/LDS/> .
@prefix entity:                         <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/higher/entity/> .
@prefix purpose:                        <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/higher/work/purpose/> .
@prefix credential:                     <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/higher/credential/> .

@prefix company-A:                      <https://www.company-A.com/> .

<https://www.company-A.com/lear/vc/np-99-99-98>
    a                  foaf:Person ;
    foaf:firstName     "Bob"^^xsd:string ;
    entity:actOnBehalf "https://www.company-A.com/"^^xsd:string ;
    ## REM: `lds:validFrom` :: moves to `cred:issuanceDate`
    ## REM: `lds:validTo`   :: moves to `cred:expirationDate`
    rdfs:comment       """`entity:actOnBehalf`:: interesting - Bob (as an **Appointed Representative**) on behalf of *Company-A*."""@en ;
    rdfs:isDefinedBy   company-A: .

<https://www.company-A.com/vc/vc-88-99-98>
    a                      entity:LEAR_NP_VC ;
    ## REM: `cred:issuanceDate` / `cred:expirationDate` :: from`lds:validFrom` and `lds:validTo`
    cred:issuanceDate      "2023-11-14T00:00:00Z"^^xsd:dateTimeStamp ;      ## REM: appointment works for three days...
    cred:expirationDate    "2023-11-17T00:00:00Z"^^xsd:dateTimeStamp ;
    cred:credentialSubject <https://www.company-A.com/lear/vc/np-99-99-98> ;
    rdfs:isDefinedBy       company-A: .
```

## **LEAR_NP_VC** related to eIDAS



---