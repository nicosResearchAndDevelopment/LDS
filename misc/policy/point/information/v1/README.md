# Policy Information Point (**PIP**, v1)

- prefix: `pip`
- namspace uri: https://

## Editors

	Jörg Langkau (nicos AG}

## Contributors

## Abstract

This document describes the architecture of a Policy Information Point (**PIP**, as concept) and PIP Data Model [PIP-DM].


## Table of Content

- [Introduction](#introduction)
- [Protocol](#protocol)
    - [Data Type related](#data-type-related)
    - [Object Type related](#object-type-related)
- [Server](#server)
- [Client](#client)
- [Authorisation](#authorisation]
- [Binding](#binding)
    - [http](#http)
    - [http2](#http2)
    - [gRPC](#grpc)
    - [websocket](#websocket)
    - [idscp2](#idscp2)
    - [tls](#tls)
- [References](#references)

*Table of content 'Policy Information Point'*.

---

## Introduction

The Policy Information Point (**PIP**, as a concept), as member of the "P-Family":

- Policy Enforcement Point (**PEP**), starting point, targeted by given request.
- Policy Decision Point (**PDP**), computing given rules and constrains to express formulated rights.
- Policy Execution Point (**PXP**), executing given actions based on evaluated rights.
- Policy Administration Point (**PAP**), managing given policies.
- Policy Repository Point (**PRP**), persisting given policies.

...behaves in the end as a Service Instance **Pip**. At runtime **Pip** will be requested for some information by a Consumer **PipCo**, being a part of up and running **Pdp**: received *information* will used - *must* be used to yield needed decisions or expressions, typically used for controlling the access over a resource (Access Control) or controlling the usage of a resource (Usage Control).

Dispite of posed simplicity - even the smallest piece of information, only one tiny value needed by a **Pdp**, accessed by its **PipCo**, fetching data (the *information*) from a distant **Pip**, has a hughe impact. is this *information* not accessable or - even bad - not correct or reliable, given **Pdp** is **NOT** able to produce needed conclusion. Once again: one tiny value, a *boolean* only. This unalterable fact unfolds the importance of **PIP** (here again quoted as a concept) - if needed.

The concept of **PIP**

- is not - exept for *linked-data*, *semantic web* - related to any technology or existing implementation (of **PEP**, for example), aiming a broader audience.
- and here, it's main topic, *The Information* is underlaid with provenance-tracking features, utilising [PROV](#prov].
- leaves the process of authorisation open, intentional.
- seperates its own [Protocol](#protocol) and [Binding](#binding)s to - those done by more or less well-known transfer/transport protocols.
- is focused on its main topic: *information*, senseful, hardened data.
- is prepared for [*Verifiable Information*](#verifiable-information), aligned to W3C's *Verifiable Credentials* [VC](#verifiable-credential).

Despite of the latter statements, **PIP** is willing to introduce examples (for hopefully better understanding) on given bindings and offers proposals, to be discussed and clarified in the future.


## Terminology

### PIP

The concept of Policy Information Point (**PIP**).

### Pip

A Service Instance of given class `pip:ServiceInstance`.

### pip

> TODO: Prefix `pip` of namespace URI "TODO:".

### PipCo

The **PIP** Client is - as a Consumer of given **Pip** (the Information Provider as a Service Instance) - an instance of given class `pip:Client`, handing out retrieved information to **PDP**, the main matter.

## Information

Sensful data, presented to given recipient in a understandable pattern.

## Data Model

**PIP**'s Data Model [**PIP-DM**] intends **NOT** - as strict as possible - to cover elements of used models, like [PROV](#prov), for instance.

> Don't reinvent the wheel!

...an often heard recommendation and **PIP** tries to follow.

Vocabulary is unfolded [TODO: here](./model/VOCABULARY.md).

PIP-DM is assessable and is provided in turtle and json-ld.

- [pip, turtle](./model/pip.ttl)

> TODO: json-ld REM: will be done, if ttl is finalized

## Protocol

## Service

### Profile

### Instance

The PIP Service Instance (**PipSi**) behaves as an up-and-running application, providing information and acting *on behalf of* well-known agent. PipSi referres to given PIP service Profile and 

## Protocol

## Server

## Client

## Authorisation

Authorisation is intentional left open and defind by given mechanics, revealed by **Pip**, or *eco-system* acting in.

## Binding

Whether or not given binding is secure (execpt idscp2 or tls) those bindings will provide given methods and work on top of given protocol functions.

### http

#### Data Type related

Request by given PIP-Consumer 'alice'

```http request
GET https://www.example.com/user?property=member
```

Response

```json
{
  "@id": "https://www.example.com/prov/entity/41-41-41-41",
  "@type": "pip:Information",
  "prov:wasGeneratedBy": "https://www.example.com/prov/activity/response/42-42-42-42", // REM: response-activity
  "prov:wasAttributedTo": "https://www.example.com/domain/user/alice",
  "pip:type": "pip:dataType";
  "pip:value": {
    "@type": "xsd:anyURI",
    "@value": [
      "https://www.example.com/employee/jlangkau",
      "https://www.example.com/employee/gbrost"
    ]
  }
}
```

#### Object Type related

Request

```http request
GET https://www.example.com/user/
```

Response

```json
{
  "pip:type": "pip:objectType";
  "pip:value": {
    "@type": "foaf:Person",
    "@value": [
      {
        "@id: "https://www.example.com/user/jlangkau",
        "@type": "foaf:Person",
        "foaf:givenName": {"@type": "xsd:string", "@value": "Jörg" }
      },
      {
        "@id: "https://www.example.com/user/gbrost",
        "@type": "foaf:Person",
        "foaf:givenName": {"@type": "xsd:string", "@value": "Gerd" }
      }
    ]
  }
}
```

### http2

### gRPC

### websocket

### idscp2

### tls

## Future

### Verifiable Information

## References

### PROV

### Verifiable Credentials

---