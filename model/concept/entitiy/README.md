# lds Model Concept 'entity'

**This version**:
[https://github.com/nicosResearchAndDevelopment/LDS/blob/main/model/concept/entitiy/README.md](https://github.com/nicosResearchAndDevelopment/LDS/blob/main/model/concept/entitiy/README.md)

## Table of Content

- [Construction of Entity Classes](#construction-of-entity-classes)
- [Entity Classes, used Properties and Ranges](#entity-classes-used-properties-and-ranges)
- [LEAR Credentials](#lear-credentials)
- [LEAR Credentials](#lear-credentials)<br>
- [More precise LEAR Credentials](#more-precise-lear-credentials)
- [LEAR Credentials with explicit Authorization](#lear-credentials-with-explicit-authorization)
- [Epilogue](#epilogue)
  - [Purpose](#purpose)
  - [Polish](#polish)
- [References](#references)

*Table of Content: lds Model Concept 'entity'*.

## Construction of Entity Classes

| Legal           | Entity              | Appointed                                   | Representative                 | Result                                                    | Comment                |
|-----------------|---------------------|---------------------------------------------|--------------------------------|-----------------------------------------------------------|------------------------|
| `legal:Legal`   | `entity:Entity`     |                                             |                                | **entity:LegalEntity**                                    | **LE**                 |
| `legal:Legal`   | `entity:Entity`     |                                             | `entity:Representative`        | **entity:LegalEntityRepresentative**                      | **LER**                |
|                 |                     | `entity:Appointment`                        | `entity:Representative`        | **entity:AppointedRepresentative**                        |                        |
| `legal:Legal`   | `entity:Entity`     | `entity:Appointment`                        | `entity:Representative`        | **entity:LegalEntityAppointedAppointedRepresentative**    | **LEAR**, (abstract)   |

*Table: Construction of Entity Classes*.

---

## Entity Classes, used Properties and Ranges

Even some of those are **NOT** abstract classes, they have a more or less *conceptional* spin.

| Subject (Class)                               | Property                                    | Range                                       | Comment                                                 |
|-----------------------------------------------|---------------------------------------------|---------------------------------------------|---------------------------------------------------------|
| **legal:Legal**                               |                                             |                                             |                                                         |
|                                               | `legal:legalBasis`                          | *undefined*                                 | Range ILO (intentionally left open)                     |
| **entity:Actor**                              |                                             |                                             |                                                         |
|                                               | `legal:actOnBehalf`                         | `entity:Entity`                             |                                                         |
| **entity:Entity**                             |                                             |                                             |                                                         |
|                                               | `entity:values`                             | rdfs:Resource                               | Range ILO (intentionally left open)                     |
| **entity:LegalEntity**                        |                                             |                                             | **LE**                                                  |
|                                               | `legal:legalBasis`                          | *undefined*                                 | Range ILO (intentionally left open)                     |
|                                               | `entity:legalEntityIdentifier`              | *undefined*                                 | Range ILO (intentionally left open)                     |
|                                               | `entity:legalRepresentative`                | `entity:LegalEntityRepresentative`          | All *Representatives* (Natural Person, **LER**)         |
| **entity:LegalPerson**                        |                                             |                                             | Subclass of `entity:LegalEntity`, **LP**                |
| **entity:Organization**                       |                                             |                                             | Subclass of `entity:LegalEntity`, **O**                 |
|                                               | `entity:legalEntityAppointedRepresentative` | `entity:LegalEntityAppointedRepresentative` | All *Appointed Representatives* of given *Legal Entity* |
| **entity:Representative**                     |                                             |                                             |                                                         |
|                                               | `entity:represent`                          | `entity:Entity`                             |                                                         |
| **entity:LegalEntityRepresentative**          |                                             |                                             | Super class of **LER**                                  |
|                                               | `entity:represent`                          | `entity:(Legal)Entity`                      |                                                         |
| **entity:Appointment**                        |                                             |                                             | Subclass of `entity:Authorization`                      |
| TODO: move (Credential)                       | `purpose:target`                            | *undefined*                                 | Range ILO (intentionally left open by `purpose:`)       |
| TODO: move (Credential)                       | `purpose:purpose`                           | *undefined*                                 | Range ILO (intentionally left open by `purpose:`)       |
| **entity:AppointedRepresentative**            |                                             |                                             |                                                         |
| TODO: move                                    | `entity:actOnBehalf`                        | `entity:Entity`                             |                                                         |
| **entity:LegalEntityAppointedRepresentative** |                                             |                                             | super class of **LEAR_X**                               |
| TODO: move                                    | `entity:actOnBehalf`                        | `entity:LegalEntity`                        |                                                         |

*Table: Entity Classes, used Properties and Ranges*.

---

## LEAR Credentials

These Credentials, derived from `entity:LegalEntityAppointedRepresentative` are more or less ready to be used -
except: **entity:LER**.

Keep it aligned to ["APRE's, Version 1.1](https://github.com/nicosResearchAndDevelopment/APRE/tree/main/v1) **entity:
LEARCredential** is mentioned here, too (same as **entity:LEAR_NP_VC**).

If we have a look at [Extending Actor Models in Data Spaces](#extending-actor-models-in-data-spaces) we will see, that
it might be a good idea to keep an eye on *Service Instances* (**entity:LEAR_SI**), too. To separate those from *Natural
Persons* it seems **natural** to spend a more precise expression to solve the problems related to.

It might be spooky to see *Artificial Intelligence* (**entity:LEAR_AI**) here, but J. Langkau (editor, nicos AG), thinks
it is a good idea doing so - we are prepared to handle this problem before academic research comes to a conclusion ;-)
...


| Subject (Class)                               | Property              | Subject                    | Comment                                                                               | Example                 |
|-----------------------------------------------|-----------------------|----------------------------|---------------------------------------------------------------------------------------|-------------------------|
| **entity:LER**                                |                       | Representative             | *Natural Person* of Legal Entity                                                      |                         |
|                                               | `entity:actOnBehalf`  |                            |                                                                                       |                         |
| **entity:LegalEntityAppointedRepresentative** |                       |                            | Super Class of **LEAR_X**                                                             |                         |
| **entity:LEAR_NP**                            |                       | *Natural Person*           | LEAR *Natural Person*, `Lenny`                                                        |                         |
| **entity:LEAR_NP_VC**                         |                       | *Natural Person*           | LEAR *Natural Person* as *Verifiable Credential*, same as: **entity:LEARCredential**  | [](./LEAR/example/.ttl) |
| **entity:LEARCredential**                     |                       | *Natural Person*           | Same as: **entity:LEAR_NP_VC**                                                        | [](./LEAR/example/.ttl) |
| **entity:LEAR_SI**                            |                       | *Service Instance*         | LEAR *Service Instance*, `Lissy`                                                      |                         |
| **entity:LEAR_SI_VC**                         |                       | *Service Instance*         | LEAR *Service Instance* as *Verifiable Credential*                                    |                         |
| **entity:LEAR_AI**                            |                       | *Artificial Intelligence*  | LEAR *Artificial Intelligence*, `Larry`                                               |                         |
| **entity:LEAR_AI_VC**                         |                       | *Artificial Intelligence*  | LEAR *Artificial Intelligence* as *Verifiable Credential*                             |                         |

*Table: LEAR Credentials*.

---

## More precise LEAR Credentials

To bring the concepts (here: all those **LEAR_X**) to real-world ecosystems.

| Subject (Class)             | Comment                                           | Example                                                    |
|-----------------------------|---------------------------------------------------|------------------------------------------------------------|
| **entity:LEAR_NP_VC_eIDAS** | eIDAS *Natural Person* as *Verifiable Credential* | [LEAR_NP_VC_eIDAS.ttl](./LEAR/usage/LEAR_NP_VC_eIDAS.ttl)  |

*Table: More precise LEAR Credentials*.

## LEAR Credentials with explicit Authorization

Those examples introduce dedicated authorizations, e.g. to very special *purposes*

| Subject (Class)                  | Comment                                                | Example                                 |
|----------------------------------|--------------------------------------------------------|-----------------------------------------|
| **entity:LEAR_NP_VC_authorized** | Authorized *Natural Person* as *Verifiable Credential* | [](./LEAR/example/.ttl) |

*Table: LEAR Credentials with explicit Authorization*.

---

## Epilogue

### Purpose

- **LDS** Examples
- **DPV**
- **USD**

### Polish

### Future of LDS

---

## References

### "Extending Actor Models in Data Spaces"

- Meyer Zum Felde, Kollenstart, Bellebaum, Dalmolen, Brost
- <[https://www.researchgate.net/publication/370414004_Extending_Actor_Models_in_Data_Spaces](https://www.researchgate.net/publication/370414004_Extending_Actor_Models_in_Data_Spaces)>

### "Authentication and authorization of entities acting on behalf of legal persons with Verifiable Credentials under eIDAS framework"

- Jesus Ruiz, The DOME project participants
- <[https://alastria.github.io/did-method-elsi/authn.html](https://alastria.github.io/did-method-elsi/authn.html)>

### "DID ETSI Legal person Semantic Identifier Method Specification (did:elsi)"

- Jesus Ruiz, Alejandro Nieto (DigitelTS), Alejandro Alfonso (DigitelTS), Oriol Canades (IN2), Jörg Langkau (nicos AG),
  DOME project participants
- <[https://alastria.github.io/did-method-elsi/](https://alastria.github.io/did-method-elsi/)>

### "APRE, the ontology for Appointed Representatives, acting on behalf Legal Entities", (Version *1.1*, *1.2*, *1.3*)

- Jörg Langkau (nicos AG), Jésus Ruiz (Alastria), DOME project participants
- <[https://github.com/nicosResearchAndDevelopment/APRE/tree/main/v1](https://github.com/nicosResearchAndDevelopment/APRE/tree/main/v1)>

---