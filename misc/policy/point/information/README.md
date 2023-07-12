# Policy Information Point

## Table of Content

- [Introduction](#introduction)
- [Protocol](#protocol)
    - [Data Type related](#data-type-related)
    - [Object Type related](#object-type-related)
- [Server](#server)
- [Client](#client)
- [Binding](#binding)
    - [http](#http)
    - [http2](#http2)
    - [gRPC](#grpc)
    - [websocket](#websocket)
    - [idscp2](#idscp2)
    - [tls](#tls)

*Table of content 'Policy Information Point'*.

---

## Introduction

## Protocol

### Data Type related

### Object Type related

## Server

## Client

## Binding

Whether or not it secure (execpt idscp2 or tls), those bindings will provide given methods will work on top of given protocol functions.

### http

#### Data Type related

Request by given PIP-Consumer 'alice'

```http request
GET https://www.example.com/user?property=member
Authorisation Basic /** decoded */alice:very_secret
```

Response

```json
{
  "@id": "https://www.example.com/prov/entity/41-41-41-41",
  "@type": "prov:Entity",
  "prov:wasGeneratedBy": "https://www.example.com/prov/activity/response/42-42-42-42", // REM: response-activity
  "prov:wasAttributedTo": "https://www.example.com/domain/user/alice",
  "pip:type": "pip:dataType";
  "pip:result": {
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
  "pip:result": {
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

---