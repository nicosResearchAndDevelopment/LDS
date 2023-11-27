# lds Example 'Purpose'

## Ground

| Topic         |           | Comment      |
|---------------|-----------|--------------|
| **Company-A** |           | Organization      |
|               | **Bob**   | Employee     |
| **Company-B** |           | Organization |
|               | **Alice** | Employee     |

```turtle

@prefix foaf:                     <http://xmlns.com/foaf/0.1/> .
@prefix odrl:                     <http://www.w3.org/ns/odrl/2/> .
@prefix org:                      <http://www.w3.org/ns/org#> .
@prefix rdf:                      <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:                     <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd:                      <http://www.w3.org/2001/XMLSchema#> .

@prefix lds:                      <https://github.com/nicosResearchAndDevelopment/LDS/> .
@prefix entity:                   <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/entity/> .
@prefix purpose:                  <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/work/purpose/> .
@prefix credential:               <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/credential/> .

@prefix company-A:                <https://www.company-A.com/> .
@prefix Bob:                      <https://www.company-A.com/employee/bob/> .
@prefix Jim:                      <https://www.company-A.com/employee/jim/> .

@prefix company-B:                <https://www.company-B.com/> .
@prefix Alice:                    <https://www.company-B.com/employee/alice/> .

## region company
## region company :: Company-A

company-A:
    a                lds:Organization ; ## REM: subClassOf lds:LegalEntity
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

company-A:
    a                entity:Organisation ;
    rdfs:isDefinedBy company-A: .


## endregion company :: Company-A

## region company :: Company-B
company-B:
    a                lds:Organization ; ## REM: subClassOf lds:LegalEntity
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
    rdf:value        <https://www.company-A.com/employee/alice/> ;
    rdfs:isDefinedBy company-A: .

company-B:
    a                entity:Organisation ;
    rdfs:isDefinedBy company-A: .

## endregion company :: Company-B
## endregion company

##
```

---

## Basic

Company-A makes its very first Purpose-Class *hello* and an instantiation of it (*hello/instance*)

```turtle

@prefix dct:                      <http://purl.org/dc/terms/> .
@prefix foaf:                     <http://xmlns.com/foaf/0.1/> .
@prefix odrl:                     <http://www.w3.org/ns/odrl/2/> .
@prefix owl:                      <http://www.w3.org/2002/07/owl#> .
@prefix org:                      <http://www.w3.org/ns/org#> .
@prefix prov:                     <http://www.w3.org/ns/prov#> .
@prefix rdf:                      <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:                     <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd:                      <http://www.w3.org/2001/XMLSchema#> .

@prefix lds:                      <https://github.com/nicosResearchAndDevelopment/LDS/> .
@prefix purpose:                  <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/work/purpose/> .

@prefix company-A:                <https://www.company-A.com/> .
@prefix Bob:                      <https://www.company-A.com/employee/bob/> .

<https://www.company-A.com/purpose/hello/>
    a                owl:Class ;
    rdfs:subClassOf  purpose:Purpose ;
    rdfs:label       "Hello!"^^xsd:string ;
    rdfs:comment     """It is a **class**!"""@en ;
    rdfs:isDefinedBy company-A: .

## REM: Bob uses 'hello' (**class**, but it **is** a Profile, too)
Bob:
    purpose:purpose  "https://www.company-A.com/purpose/hello/"^^xsd:anyURI ;
    rdfs:isDefinedBy company-A: .

<https://www.company-A.com/purpose/hello/instance/>
    a                <https://www.company-A.com/purpose/hello/> ;
    rdfs:label       "Hello!"^^xsd:string ;
    purpose:target   "https://www.company-A.com/#member"^^xsd:anyURI ;  ## REM: so... say "Hello!" to all Company-A dudes...
    rdfs:comment     """It is an **instance** of 'hello'!"""@en ;
    rdfs:isDefinedBy company-A: .

##
```

---

## Profile

Company-A makes its very first Purpose-Class *hello* a Profile, too - and an instantiation of it (*hello/instance*)

```turtle

@prefix dct:                      <http://purl.org/dc/terms/> .
@prefix foaf:                     <http://xmlns.com/foaf/0.1/> .
@prefix odrl:                     <http://www.w3.org/ns/odrl/2/> .
@prefix owl:                      <http://www.w3.org/2002/07/owl#> .
@prefix org:                      <http://www.w3.org/ns/org#> .
@prefix prof:                     <http://www.w3.org/ns/dx/prof/> .
@prefix prov:                     <http://www.w3.org/ns/prov#> .
@prefix rdf:                      <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:                     <http://www.w3.org/2000/01/rdf-schema#> .
@prefix role:                     <http://www.w3.org/ns/dx/prof/role/> .
@prefix xsd:                      <http://www.w3.org/2001/XMLSchema#> .

@prefix lds:                      <https://github.com/nicosResearchAndDevelopment/LDS/> .
@prefix purpose:                  <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/work/purpose/> .

@prefix company-A:                <https://www.company-A.com/> .
@prefix Bob:                      <https://www.company-A.com/employee/bob/> .

## REM: we make 'purpose:Purpose' a 'dct:Standard', too. (See './Purpose.prov.ttl')
purpose:Purpose
    a dct:Standard .

<https://www.company-A.com/>
    a                odrl:Party ;
    rdfs:isDefinedBy company-A: .

<https://www.company-A.com/purpose/hello/>
    a                owl:Class ;
    a                prof:Profile ;
    rdfs:subClassOf  purpose:Purpose ;
    rdfs:label       "Hello!"^^xsd:string ;
    prof:isProfileOf <https://www.company-A.com/purpose/hello/> ;
    prof:hasResource <https://www.company-A.com/purpose/hello/spec-en-md> ;
    rdfs:comment     """It is a **class**!
'prof:isProfileOf':: it seems to be funny, but it is correct."""@en ;
    rdfs:isDefinedBy company-A: .

<https://www.company-A.com/purpose/hello/spec-en-md>
    a               prof:ResourceDescriptor ;
    dct:title       "'Hello' Specification"@en ;
    dct:title       "'Hello' Spezifikation (englische Version)"@de ;
    dct:issued      "2023-11-24"^^xsd:date ;
    owl:versionInfo "1.0.0"^^xsd:string ;
    prof:hasRole    role:specification ;        ## REM: a 'skos:Concept'
    dct:format      <https://www.iana.org/assignments/media-types/text/markdown> ;
    prof:hasArtifact
                    <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/work/purpose/example/profile.hello.spec.md> ;
    dct:publisher   company-A: .

<https://www.company-A.com/purpose/hello/duty-en>
    a               prof:ResourceDescriptor ;
    dct:title       "'Hello' Duties"@en ;
    dct:title       "'Hello' Pflichten (englische Version)"@de ;
    dct:issued      "2023-11-27"^^xsd:date ;
    owl:versionInfo "1.0.0"^^xsd:string ;
    ## TODO: `prof:hasRole    role:specification` :: neue Rolle `duty`
    prof:hasRole    role:specification ;        ## REM: a 'skos:Concept'
    dct:format      <https://www.iana.org/assignments/media-types/text/markdown> ;
    prof:hasArtifact
                    <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/work/purpose/example/profile.hello.spec.md#duties> ;
    ## region odrl:Duty
    a               odrl:Duty ;
    odrl:assigner   "https://www.company-A.com/"^^xsd:string ;
    ## endregion odrl:Duty
    dct:publisher   company-A: .

## REM: Bob uses 'hello' (**class**, but it **is** a Profile, too)
Bob:
    purpose:purpose  <https://www.company-A.com/purpose/hello/> ;
    rdfs:isDefinedBy company-A: .

<https://www.company-A.com/purpose/hello/instance/>
    a                <https://www.company-A.com/purpose/hello/> ;
    rdfs:label       "Hello!"^^xsd:string ;
    purpose:profile  "https://www.company-A.com/purpose/hello/"^^xsd:string ;
    purpose:target   "https://www.company-A.com/#org:member"^^xsd:anyURI ;  ## REM: so... say "Hello!" to all Company-A dudes...
    rdfs:comment     """It is an **instance** of 'hello'!"""@en ;
    rdfs:isDefinedBy company-A: .

##
```

---

## Credential

Company-A makes its very first Purpose-Class *hello* a Profile **and** underpins a *Credential*, too - and an
instantiation of it (*hello/instance*). Now Bob acts as a `credential:Subject` and his personal information is presented
there, as `purpose:target`does it also... New - and very important - the `credential:Subject`(Bob) is equipped
with `purpose:purpose`. This is some kind of redundant, but it holds all needed information in the right place.

```turtle

@prefix dct:                      <http://purl.org/dc/terms/> .
@prefix foaf:                     <http://xmlns.com/foaf/0.1/> .
@prefix odrl:                     <http://www.w3.org/ns/odrl/2/> .
@prefix owl:                      <http://www.w3.org/2002/07/owl#> .
@prefix org:                      <http://www.w3.org/ns/org#> .
@prefix prof:                     <http://www.w3.org/ns/dx/prof/> .
@prefix prov:                     <http://www.w3.org/ns/prov#> .
@prefix rdf:                      <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:                     <http://www.w3.org/2000/01/rdf-schema#> .
@prefix role:                     <http://www.w3.org/ns/dx/prof/role/> .
@prefix xsd:                      <http://www.w3.org/2001/XMLSchema#> .

@prefix lds:                      <https://github.com/nicosResearchAndDevelopment/LDS/> .
@prefix purpose:                  <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/work/purpose/> .
@prefix credential:               <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/credential/> .

@prefix company-A:                <https://www.company-A.com/> .
@prefix Bob:                      <https://www.company-A.com/employee/bob/> .

## REM: we make 'purpose:Purpose' a 'dct:Standard', too. (See './Purpose.prov.ttl')
purpose:Purpose
    a dct:Standard .

<https://www.company-A.com/purpose/hello/>
    a                owl:Class ;
    a                prof:Profile ;
    rdfs:subClassOf  purpose:Purpose ;
    rdfs:subClassOf  credential:Credential ;
    rdfs:label       "Hello!"^^xsd:string ;
    prof:isProfileOf <https://www.company-A.com/purpose/hello/> ;
    ## prof:hasResource company-A:hello-spec-en-md ;
    rdfs:comment     """It is a **class**!
'prof:isProfileOf':: it seems to be funny, but it is correct."""@en ;
    rdfs:isDefinedBy company-A: .

## REM: Bob uses 'hello' (**class**, but it **is** a Profile, too)
<https://www.company-A.com/employee/bob/credential/subject/42-42-42-42>
    a                credential:Subject ;
    a                foaf:Person ;
    foaf:firstName   "Bob"^^xsd:string ;
    purpose:purpose  "https://www.company-A.com/purpose/hello/"^^xsd:string ;
    purpose:target   "https://www.company-A.com/#member"^^xsd:anyURI ;
    rdfs:isDefinedBy company-A: .

<https://www.company-A.com/purpose/hello/instance/>
    a                            <https://www.company-A.com/purpose/hello/> ;
    rdfs:label                   "Hello!"^^xsd:string ;
    purpose:profile              "https://www.company-A.com/purpose/hello/"^^xsd:string ;
    credential:credentialSubject <https://www.company-A.com/employee/bob/credential/subject/42-42-42-42> ;
    rdfs:comment                 """It is an **instance** of 'hello'! **And** it is an instance of 'credential:Credential, too!"""@en ;
    rdfs:isDefinedBy             company-A: .

##
```

---

## Representative

Company-A acts as a `entity:Entity` and is able to express Bob as a *Representative* of.

```turtle

@prefix dct:                      <http://purl.org/dc/terms/> .
@prefix foaf:                     <http://xmlns.com/foaf/0.1/> .
@prefix odrl:                     <http://www.w3.org/ns/odrl/2/> .
@prefix owl:                      <http://www.w3.org/2002/07/owl#> .
@prefix org:                      <http://www.w3.org/ns/org#> .
@prefix prof:                     <http://www.w3.org/ns/dx/prof/> .
@prefix prov:                     <http://www.w3.org/ns/prov#> .
@prefix rdf:                      <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:                     <http://www.w3.org/2000/01/rdf-schema#> .
@prefix role:                     <http://www.w3.org/ns/dx/prof/role/> .
@prefix xsd:                      <http://www.w3.org/2001/XMLSchema#> .

@prefix lds:                      <https://github.com/nicosResearchAndDevelopment/LDS/> .
@prefix purpose:                  <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/work/purpose/> .
@prefix credential:               <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/credential/> .
@prefix entity:                   <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/entity/> .

@prefix company-A:                <https://www.company-A.com/> .
@prefix Bob:                      <https://www.company-A.com/employee/bob/> .

## REM: we make 'purpose:Purpose' a 'dct:Standard', too. (See './Purpose.prov.ttl')
purpose:Purpose
    a dct:Standard .

<https://www.company-A.com/purpose/hello/>
    a                owl:Class ;
    a                prof:Profile ;
    rdfs:subClassOf  purpose:Purpose ;
    rdfs:subClassOf  credential:Credential ;
    rdfs:label       "Hello!"^^xsd:string ;
    prof:isProfileOf <https://www.company-A.com/purpose/hello/> ;
    ## prof:hasResource company-A:hello-spec-en-md ;
    rdfs:comment     """It is a **class**!
'prof:isProfileOf':: it seems to be funny, but it is correct."""@en ;
    rdfs:isDefinedBy company-A: .

## REM: Bob uses 'hello' (**class**, but it **is** a Profile, too)
<https://www.company-A.com/employee/bob/representative/43-43-43-43>
    a                foaf:Person ;
    foaf:firstName   "Bob"^^xsd:string ;
    a                entity:Representative ;
    entity:represent "https://www.company-A.com/"^^xsd:xsd:string ;
    purpose:purpose  "https://www.company-A.com/purpose/hello/"^^xsd:anyURI ;
    purpose:target   "https://www.company-A.com/#member"^^xsd:anyURI ;
    rdfs:isDefinedBy company-A: .

<https://www.company-A.com/purpose/hello/instance/>
    a                     <https://www.company-A.com/purpose/hello/> ;
    rdfs:label            "Hello!"^^xsd:string ;
    purpose:profile       "https://www.company-A.com/purpose/hello/"^^xsd:anyURI ;
    entity:representative <https://www.company-A.com/employee/bob/credential/representative/43-43-43-43> ;
    rdfs:comment          """."""@en ;
    rdfs:isDefinedBy      company-A: .

##
```

---

## Legal Entity Appointed Representative (Natural Person)

Company-A acts as a `entity:LegalEntity` (here: `entity:Organisation`) and is able to express Bob as an *Appointed
Representative*, acting on behalf Company-A.

```turtle
@prefix dct:                      <http://purl.org/dc/terms/> .
@prefix foaf:                     <http://xmlns.com/foaf/0.1/> .
@prefix odrl:                     <http://www.w3.org/ns/odrl/2/> .
@prefix owl:                      <http://www.w3.org/2002/07/owl#> .
@prefix org:                      <http://www.w3.org/ns/org#> .
@prefix prof:                     <http://www.w3.org/ns/dx/prof/> .
@prefix prov:                     <http://www.w3.org/ns/prov#> .
@prefix rdf:                      <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:                     <http://www.w3.org/2000/01/rdf-schema#> .
@prefix role:                     <http://www.w3.org/ns/dx/prof/role/> .
@prefix xsd:                      <http://www.w3.org/2001/XMLSchema#> .

@prefix lds:                      <https://github.com/nicosResearchAndDevelopment/LDS/> .
@prefix purpose:                  <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/work/purpose/> .
@prefix credential:               <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/credential/> .
@prefix entity:                   <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/entity/> .

@prefix company-A:                <https://www.company-A.com/> .
@prefix Bob:                      <https://www.company-A.com/employee/bob/> .

## REM: we make 'purpose:Purpose' a 'dct:Standard', too. (See './Purpose.prov.ttl')
purpose:Purpose
    a dct:Standard .

company-A:
    a                entity:Organisation ;
    rdfs:isDefinedBy company-A: .

<https://www.company-A.com/purpose/hello/>
    a                owl:Class ;
    a                prof:Profile ;
    rdfs:subClassOf  purpose:Purpose ;
    rdfs:subClassOf  credential:Credential ;
    rdfs:label       "Hello!"^^xsd:string ;
    prof:isProfileOf <https://www.company-A.com/purpose/hello/> ;
    ## prof:hasResource company-A:hello-spec-en-md ;
    rdfs:comment     """It is a **class**!
'prof:isProfileOf':: it seems to be funny, but it is correct."""@en ;
    rdfs:isDefinedBy company-A: .

## REM: Bob uses 'hello' (**class**, but it **is** a Profile, too)
<https://www.company-A.com/employee/bob/appointed-representative/46-46-46-46>
    a                  foaf:Person ;
    foaf:firstName     "Bob"^^xsd:string ;
    a                  entity:LegalEntityAppointedRepresentative_NP ;
    entity:actOnBehalf "https://www.company-A.com/"^^xsd:string ;       ## REM: `entity:Organisation` (sub class of `entity:LegalEntity`)
    lds:validFrom      "2023-11-14T00:00:00Z"^^xsd:dateTimeStamp ; ## REM: appointment works for three days...
    lds:validTo        "2023-11-17T00:00:00Z"^^xsd:dateTimeStamp ;
    purpose:purpose    "https://www.company-A.com/purpose/hello/"^^xsd:anyURI ;
    purpose:target     "https://www.company-A.com/#member"^^xsd:anyURI ;
    rdfs:comment       """`entity:actOnBehalf`:: interesting - Bob (as an *Legal Entity Appointed Representative* (Natural Person) says "Hello!" on behalf of Company-A to all member..."""@en ;
    rdfs:isDefinedBy   company-A: .

<https://www.company-A.com/purpose/hello/instance/>
    a                <https://www.company-A.com/purpose/hello/> ;
    rdfs:label       "Hello!"^^xsd:string ;
    purpose:profile  "https://www.company-A.com/purpose/hello/"^^xsd:anyURI ;
    entity:appointedRepresentative
                     <https://www.company-A.com/employee/bob/credential/appointed-representative/46-46-46-46> ;
    rdfs:comment     """."""@en ;
    rdfs:isDefinedBy company-A: .

##
```

---

## Verifiable Credential

```turtle
@prefix cred:                     <https://w3.org/2018/credentials#> .
@prefix dct:                      <http://purl.org/dc/terms/> .
@prefix foaf:                     <http://xmlns.com/foaf/0.1/> .
@prefix odrl:                     <http://www.w3.org/ns/odrl/2/> .
@prefix owl:                      <http://www.w3.org/2002/07/owl#> .
@prefix org:                      <http://www.w3.org/ns/org#> .
@prefix prof:                     <http://www.w3.org/ns/dx/prof/> .
@prefix prov:                     <http://www.w3.org/ns/prov#> .
@prefix rdf:                      <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:                     <http://www.w3.org/2000/01/rdf-schema#> .
@prefix role:                     <http://www.w3.org/ns/dx/prof/role/> .
@prefix xsd:                      <http://www.w3.org/2001/XMLSchema#> .

@prefix lds:                      <https://github.com/nicosResearchAndDevelopment/LDS/> .
@prefix purpose:                  <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/work/purpose/> .
@prefix credential:               <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/credential/> .
@prefix entity:                   <https://github.com/nicosResearchAndDevelopment/LDS/model/concept/entity/> .

@prefix company-A:                <https://www.company-A.com/> .
@prefix Bob:                      <https://www.company-A.com/employee/bob/> .

@prefix xetsi-esi:                <https://github.com/nicosResearchAndDevelopment/LDS/blob/main/misc/credentials/elsi/x-etsi#> .
@prefix xeidas:                   <https://github.com/nicosResearchAndDevelopment/LDS/blob/main/misc/credentials/elsi/x-eidas#> .

## REM: we make 'purpose:Purpose' a 'dct:Standard', too. (See './Purpose.prov.ttl')
purpose:Purpose
    a dct:Standard .

credential:VerifiableCredential
    rdfs:subClassOf cred:VerifiableCredential .

<https://www.company-A.com/#member>
    rdfs:isDefinedBy company-A: .

company-A:
    a                                entity:Organisation ;
    xetsi-esi:organizationIdentifier "VATDE-12345670"^^xetsi-esi:id-etsi-qcs-SemanticsId-Legal ;
    org:member                       <https://www.company-A.com/#member> .

<https://www.company-A.com/purpose/hello/>
    a                owl:Class ;
    a                prof:Profile ;
    rdfs:subClassOf  purpose:Purpose ;
    rdfs:subClassOf  credential:VerifiableCredential ;
    rdfs:label       "Hello!"^^xsd:string ;
    prof:isProfileOf <https://www.company-A.com/purpose/hello/> ;
    ## prof:hasResource company-A:hello-spec-en-md ;
    rdfs:isDefinedBy company-A: .

## REM: Bob uses 'hello' (**class**, but it **is** a Profile, too)
<https://www.company-A.com/employee/bob/verifiable-credential-subject/45-45-45-45>
    a                                foaf:Person ;
    foaf:firstName                   "Bob"^^xsd:string ;
    a                                entity:AppointedRepresentative ;
    entity:actOnBehalf               "https://www.company-A.com/"^^xsd:string ;       ## REM: `legal:Organisation` (sub class of `entity:LegalEntity`)
    a                                xetsi-esi:NaturalPerson ;
    ## REM: `xetsi-esi:organizationIdentifier`:: from `company-A#xetsi-esi:organizationIdentifier`
    xetsi-esi:organizationIdentifier "VATDE-12345670"^^xetsi-esi:id-etsi-qcs-SemanticsId-Legal ;
    xeidas:FirstName                 "Bob"^^xsd:string ;
    xeidas:FamilyName                "Bobness"^^xsd:string ;
    ## lds:validFrom      "2023-11-14T00:00:00Z"^^xsd:dateTimeStamp ; ## REM: appointment works for three days...
    ## lds:validTo        "2023-11-17T00:00:00Z"^^xsd:dateTimeStamp ;
    purpose:purpose                  "https://www.company-A.com/purpose/hello/"^^xsd:anyURI ;
    purpose:target                   "https://www.company-A.com/#member"^^xsd:anyURI ;
    rdfs:isDefinedBy                 company-A: .

<https://www.company-A.com/purpose/hello/instance/>
    a                      <https://www.company-A.com/purpose/hello/> ;
    a                      cred:VerifiableCredential ;  ## REM: already in place by `credential:VerifiableCredential`
    rdfs:label             "Hello!"^^xsd:string ;
    cred:issuer            "https://www.company-A.com/"^^xsd:anyURI ;
    cred:issuanceDate      "2023-11-14T00:00:00Z"^^xsd:dateTimeStamp ;
    cred:expirationDate    "2023-11-17T00:00:00Z"^^xsd:dateTimeStamp ;
    purpose:profile        "https://www.company-A.com/purpose/hello/"^^xsd:anyURI ;
    cred:credentialSubject <https://www.company-A.com/employee/bob/verifiable-credential-subject/45-45-45-45> ;
    rdfs:comment           """."""@en ;
    rdfs:isDefinedBy       company-A: .

##
```

## Policy

```turtle

```

---