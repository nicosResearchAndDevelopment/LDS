# lds Model Concept 'entity'

## Construction of Entity Classes

| Legal           | Entity              | Appointed                                   | Representative                 | Result                                                    | Comment                |
|-----------------|---------------------|---------------------------------------------|--------------------------------|-----------------------------------------------------------|------------------------|
| `legal:Legal`   | `entity:Entity`     |                                             |                                | **entity:LegalEntity**                                    | **LE**                 |
| `legal:Legal`   | `entity:Entity`     |                                             | `entity:Representative`        | **entity:LegalEntityRepresentative**                      | **LER**                |
|                 |                     | `entity:Appointment`                        | `entity:Representative`        | **entity:AppointedRepresentative**                        |                        |
| `legal:Legal`   | `entity:Entity`     | `entity:Appointment`                        | `entity:Representative`        | **entity:LegalEntityAppointedAppointedRepresentative**    | **LEAR**, (abstract)   |
| (`legal:Legal`) | (`entity:Entity`)   | `entity:LegalEntityAppointedRepresentative` | `entity:NaturalPerson`         | **entity:LegalEntityAppointedAppointedRepresentative_NP** | **LEAR_NP**, "*Lenny*" |
| (`legal:Legal`) | (`entity:Entity`)   | `entity:LegalEntityAppointedRepresentative` | `entity:ServiceInstance`       | **entity:LegalEntityAppointedAppointedRepresentative_SI** | **LEAR_SI**, "*Lissy*" |
| (`legal:Legal`) | (`entity:Entity`)   | `entity:LegalEntityAppointedRepresentative` | `entity:ArtificialIntelligenz` | **entity:LegalEntityAppointedAppointedRepresentative_AI** | **LEAR_AI**, "*Larry*" |

*Table: Construction of Entity Classes*.

---

## Entity Classes, used Properties and Ranges

Even some of those are **NOT** abstract classes, they have a more or less *conceptional* spin.

| Subject (Class)                               | Property                                    | Range                                       | Comment                                                        |
|-----------------------------------------------|---------------------------------------------|---------------------------------------------|----------------------------------------------------------------|
| **legal:Legal**                               |                                             |                                             |                                                                |
|                                               | `legal:legalBasis`                          | *undefined*                                 | Range ILO (intentionally left open)                            |
| **entity:LegalEntity**                        |                                             |                                             | **LE**                                                         |
|                                               | `legal:legalBasis`                          | *undefined*                                 | Range ILO (intentionally left open)                            |
|                                               | `entity:legalEntityIdentifier`              | *undefined*                                 | Range ILO (intentionally left open)                            |
|                                               | `entity:legalRepresentative`                | `entity:LegalEntityRepresentative`          | All *Representatives* (Natural Person) of given *Legal Entity* |
|                                               | `entity:legalEntityAppointedRepresentative` | `entity:LegalEntityAppointedRepresentative` | All *Appointed Representatives* of given *Legal Entity*        |
| **entity:Representative**                     |                                             |                                             |                                                                |
|                                               | `entity:actOnBehalf`                        | *undefined*                                 | Range ILO (intentionally left open)                            |
| **entity:LegalEntityRepresentative**          |                                             |                                             | **LER**                                                        |
|                                               | `entity:actOnBehalf`                        | `entity:LegalEntity`                        |                                                                |
| **entity:Appointment**                        |                                             |                                             | Subclass of: `entity:Authorization`, `                         |
|                                               | `purpose:target`                            | *undefined*                                 | Range ILO (intentionally left open by `purpose:`)              |
|                                               | `purpose:purpose`                           | *undefined*                                 | Range ILO (intentionally left open by `purpose:`)              |
| **entity:AppointedRepresentative**            |                                             |                                             |                                                                |
|                                               | `entity:actOnBehalf`                        | `entity:Entity`                             |                                                                |
| **entity:LegalEntityAppointedRepresentative** |                                             |                                             | **LEAR**, (**LEAR_NP**, **LEAR_SI**, **LEAR_AI**)              |
|                                               | `entity:actOnBehalf`                        | `entity:LegalEntity`                        |                                                                |

*Table: Entity Classes, used Properties and Ranges*.

---

## LEAR Credentials

These Credentials, derived from `entity:LegalEntityAppointedRepresentative` are more or less ready to be used.

If we have a look at [Extending Actor Models in Data Spaces](#extending-actor-models-in-data-spaces) we will see, that
it might be a good idea to keep an eye on *Service Instances*, too. To separate those from *Natural Persons* it seems **
natural** to spend a more precise expression to solve the problems related to.

It might be spooky to see *Artificial Intelligence* here, but J. Langkau (editor, nicos AG), thinks it is a good idea
doing so - we are prepared to handle this Problem before academic research comes to a conclusion ;-) ...

| Subject (Class)                               | Comment                                                     | Example                 |
|-----------------------------------------------|-------------------------------------------------------------|-------------------------|
| **entity:LegalEntityAppointedRepresentative** | Base Class                                                  |                         |
| **entity:LEAR_NP**                            | LEAR *Natural Person*, `Lenny`                              |                         |
| **entity:LEAR_NP_VC**                         | LEAR *Natural Person* as *Verifiable Credential*            | [](./LEAR/example/.ttl) |
| **entity:LEAR_SI**                            | LEAR *Service Instance*, `Lissy`                            |                         |
| **entity:LEAR_SI_VC**                         | LEAR *Service Instance* as *Verifiable Credential*          |                         |
| **entity:LEAR_AI**                            | LEAR *Artificial Intelligence*, `Larry`                     |                         |
| **entity:LEAR_AI_VC**                         | LEAR *Artificial Intelligence* as *Verifiable Credential*   |                         |

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