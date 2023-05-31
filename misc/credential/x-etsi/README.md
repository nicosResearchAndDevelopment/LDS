# from Certificate to DID


[https://tl.bundesnetzagentur.de/TL-DE.XML](https://tl.bundesnetzagentur.de/TL-DE.XML)

```xml
<PointersToOtherTSL>
    <OtherTSLPointer>
        <ServiceDigitalIdentities>
        <ServiceDigitalIdentity>
            <DigitalId>
                <X509Certificate>...
```

...lead to Subject.

## Subject

```text
CN = JÖRG LANGKAU
OU = RemoteQSCDManagement
G = JÖRG LANGKAU
SN = LANGKAU
SERIALNUMBER = PNOBE-42-42-42
E = jlangkau@nicos-ag.com
OU = Development
O = nicos AG
2.5.4.97 = VATDE-domedigits
C = DE
```

> - organizationIdentifier expressed with **2.5.4.97**
> - as example: "SERIALNUMBER" and **NOT** serialNumber, the oid-regular notation
> - two **OU**'s ?!?
> - one **E**, Mail ?!?
> - take care: information of given Natural Person **JÖRG** is possibly scattered (by **OU** ?!?)

- https://www.rfc-editor.org/rfc/rfc4519.html#section-2.20

> - **G** seems to be the given-name. **NOT** usual, but `givenName`/`gn`

## Subject (Distinguished Name, `dn`)

- [https://www.rfc-editor.org/rfc/rfc4519.html#section-2.7](https://www.rfc-editor.org/rfc/rfc4519.html#section-2.7)

```text

## under JEROEN :: OU = RemoteQSCDManagement
## givenName ::G = JEROEN ARNOLD L
## surname :: SN = RATHE
## serialNumber :: SERIALNUMBER = PNOBE-123412341234
## E = jeroen.rathe@ec.europa.eu
## property of organization :: 2.5.4.97 = LEIXG-123412341243
## OU=Certificate Profile - Qualified Certificate - Member

C=BE,O = EUROPEAN COMMISSION,OU=Entitlement - EC OFFICIAL,CN=JEROEN ARNOLD L RATHE
```

## Issuer

```text
CN = DIGITALSIGN QUALIFIED CA G1
O = DigitalSign Certificadora Digital
C = PT
```

> ... **NO** organizationIdentifier !!!

## Alastria DOME CA

```text
2.5.4.13=Notario:Miguel Ruiz-Gallardón García-Rasilla/Núm Protocolo:7172/Fecha Otorgamiento:07-06-2021
cn=01178330V Miguel Ángel Domínguez (R:G87936159)
serialNumber=01178330V
givenName=Miguel Ángel
sn=Domínguez Castellano
2.5.4.97=VATES-G87936159
o=Alastria
c=ES
```

## Issuer

```text
cn=AC Firmaprofesional - CUALIFICADOS
serialNumber=A62634068
ou=Certificados Cualificados
o=Firmaprofesional S.A.
c=ES
```

> **NO** organizationIdentifier !!!

- [https://uri.etsi.org/01903/v1.3.2/XAdES.xsd](https://uri.etsi.org/01903/v1.3.2/XAdES.xsd)
- [https://uri.etsi.org/01903/v1.3.2/XAdES01903v132-201506.xsd](https://uri.etsi.org/01903/v1.3.2/XAdES01903v132-201506.xsd)
- [https://uri.etsi.org/01903/v1.3.2/XAdES01903v132-201601.xsd](https://uri.etsi.org/01903/v1.3.2/XAdES01903v132-201601.xsd)

## did

[here:](./did.example.org.json).

```json
{
    "intentionally": "left blank"
}
```

---