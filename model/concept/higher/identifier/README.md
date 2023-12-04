# LDS Model Higher Concept 'Identifier'

## Table of Content

- [Properties related to Identification](#properties-related-to-identification)
- [More precise](#more-precise)
    - [xsd:anyURI](#xsdanyuri)
    - [DID](#did)
    - [ITU/ISO](#ituiso)
        - [organizationIdentifier (*2.5.4.97*)](#organizationidentifier)
    - [ETSI](#etsi)
        - [id-etsi-qcs-SemanticsId-Legal](#id-etsi-qcs-semanticsid-legal)
- [References](#references)

*Table of Content: LDS Model Concept 'identifier'*.

## Properties related to LDS Identifier

| Family      | Property                  | Range                                | Expression                                                                                                      | Comment                                                                |
|-------------|---------------------------|--------------------------------------|-----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| **foaf**    |                           |                                      |                                                                                                                 |                                                                        |
|             | `foaf:dnaChecksum`        | `rdfs:Literal`                       | *none* ...but this will come soon ;-)                                                                           | [`foaf:`](#foaf) says, > "A checksum for the DNA of some thing. Joke." |
| **did**     |                           |                                      |                                                                                                                 |                                                                        |
|             | *@id*                     |                                      | ```^(?<did>did):(?<methodName>${__methodChar__}+):(?<methodSpecificId>${__idChar__}*)(?<extra>[;\\?#\/]*.*)$``` |                                                                        |
| **eIDAS**   |                           |                                      |                                                                                                                 |                                                                        |
|             | `LegalPersonIdentifier`   | `etsi:id-etsi-qcs-SemanticsId-Legal` |                                                                                                                 | Same as *ETSI organizationIdentifier*                                  |
| **ETSI**    |                           |                                      |                                                                                                                 |                                                                        |
|             | *organizationIdentifier*  | `etsi:id-etsi-qcs-SemanticsId-Legal` | ```TODO: ^(TODO)?```                                                                                            | Certificate Attribute, `2.5.4.97`                                      |
| **ITU/ISO** |                           |                                      |                                                                                                                 |                                                                        |
|             | `organizationIdentifer`   | 'xsd:string`                         | ```TODO: ^(TODO)?```                                                                                            | Certificate Attribute, `2.5.4.97`                                      |
| **xsd**     |                           |                                      |                                                                                                                 |                                                                        |
|             |                           | `xsd:anyURI`                         | ```^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?```                                                 |                                                                        |

*Table: Construction of Entity Classes*.

## More precise

### xsd:anyURI

- Expression: `^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?`
- URI: **https://www.company-Y.com/whats/up?that=this&these=there#allabout**
- Expression Result:

```text
[
  'https://www.company-Y.com/whats/up?that=this&these=there#allabout',       
  'https:',
  'https',
  '//www.company-Y.com',
  'www.company-Y.com',
  '/whats/up',
  '?that=this&these=there',
  'that=this&these=there',
  '#allabout',
  'allabout',
  index: 0,
  input: 'https://www.company-Y.com/whats/up?that=this&these=there#allabout',
  groups: undefined
]

```

### DID

- Expression: `^(?<did>did):(?<methodName>${__methodChar__}+):(?<methodSpecificId>${__idChar__}*)(?<extra>[;\\?#\/]*.*)$`
- DID: **did:lds:company-y/organisationIdentifier**
- Expression Result:

```text
[
  'did:lds:company-y/organisationIdentifier',       
  'did',
  'lds',                                            
  'company-y',                                      
  '/organisationIdentifier',                        
  index: 0,                                         
  input: 'did:lds:company-y/organisationIdentifier',
  groups: [Object: null prototype] {                
    did: 'did',                                     
    methodName: 'lds',
    methodSpecificId: 'company-y',
    extra: '/organisationIdentifier'
  }
]

```

---

### ITU/ISO

#### organizationIdentifier

> ITU-T SG 17 & ISO/IEC JTC 1/SC 6

- Expression:

```text
organizationIdentifier ATTRIBUTE ::= {
WITH SYNTAX UnboundedDirectoryString
EQUALITY MATCHING RULE caseIgnoreMatch
SUBSTRINGS MATCHING RULE caseIgnoreSubstringsMatch
SINGLE VALUE TRUE
LDAP-SYNTAX directoryString.&id
LDAP-NAME {"organizationIdentifier"}
ID id-at-organizationIdentifier}
```

See also **oidref**: <[https://oidref.com/2.5.4.97](https://oidref.com/2.5.4.97)>
See also **oid-info**: <[[http://oid-info.com/get/2.5.4.97)](http://oid-info.com/get/2.5.4.97)>

---

### ETSI

#### id-etsi-qcs-SemanticsId-Legal

- Expression:

```text
- 3 character legal person identity type reference;
- 2 character ISO 3166 [2] country code;
- hyphen-minus "-" (0x2D (ASCII), U+002D (UTF-8)); and
- identifier (according to country and identity type reference).
```

- Expression Description:

> **5.1.4 Legal person semantics identifier**
> > ---------------------------------------->
```text
The semantics of id-etsi-qcs-SemanticsId-Legal shall be as follows.
When the legal person semantics identifier is included, any present organizationIdentifier attribute in the subject
field shall contain information using the following structure in the presented order:
    
    - 3 character legal person identity type reference;
    - 2 character ISO 3166 [2] country code;
    - hyphen-minus "-" (0x2D (ASCII), U+002D (UTF-8)); and
    - identifier (according to country and identity type reference).<br><br>
    
The three initial characters shall have one of the following defined values:

    1) "VAT" for identification based on a national value added tax identification number.
    2) "NTR" for identification based on an identifier from a national trade register.
    3) "PSD" for identification based on national authorization number of a payment service provider under
       Payments Services Directive (EU) 2015/2366 [i.13]. This shall use the extended structure as defined in ETSI
       TS 119 495 [3], clause 5.2.1.
    4) "LEI" for a global Legal Entity Identifier as specified in ISO 17442 [4]. The 2 character ISO 3166 [2] country
       code shall be set to 'XG'.
    5) Two characters according to local definition within the specified country and name registration authority,
       identifying a national scheme that is considered appropriate for national and European level, followed by the
       character ":" (colon).
       
Other initial character sequences are reserved for future amendments of the present document. In case "VAT" legal
person identity type reference is used in combination with the "EU" transnational country code, the identifier value
should comply with Council Directive 2006/112/EC [i.12], article 215.

EXAMPLES: "VATBE-0876866142" and "EI:SE-5567971433".

When a locally defined identity type reference is provided (two characters followed by ":"), the
nameRegistrationAuthorities element of SemanticsInformation (IETF RFC 3739 [1]) shall be present and
shall contain at least a uniformResourceIdentifier generalName. The two letter identity type reference
following the ":" character shall be unique within the context of the specified uniformResourceIdentifier.
```
> > <----------------------------------------

See also: **[ETSI, "Electronic Signatures and Infrastructures (ESI); Certificate Profiles; Part 1: Overview and common data structures"](https://www.etsi.org/deliver/etsi_en/319400_319499/31941201/01.04.01_60/en_31941201v010401p.pdf#5.1.4)**:

---

## References

> TODO: to LDS/references

### URI

- "Uniform Resource Identifier (URI): Generic Syntax" (RFC3968, 2005): <[https://www.rfc-editor.org/rfc/rfc3986#appendix-B](https://www.rfc-editor.org/rfc/rfc3986#appendix-B)>

### FOAF

- "FOAF Vocabulary Specification": <[http://xmlns.com/foaf/0.1/](http://xmlns.com/foaf/0.1/)>

---