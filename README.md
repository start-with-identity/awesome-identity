<!-- Generated from data/ by scripts/build.mjs. Edit the YAML files, not this file. -->
# Awesome Identity [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated, vendor-neutral list of identity and access management resources.

Standards, open-source projects, security research, vendors, and learning material for people who build, run, and attack identity systems. Maintained by the [Start With Identity](https://startwithidentity.com) community and anyone who sends a pull request.

Inclusion is not endorsement. No entry is paid for. Vendors are listed alphabetically with a neutral description, and every listing follows the same [inclusion rules](CONTRIBUTING.md#what-gets-in).

Tags after a link: `OSS` open-source license, `Free` no cost, `Freemium` free tier with paid plans, `Commercial` paid product, `Paid` paid book or course, `Archived` no longer maintained but kept for reference.

Looking for papers, essays, and concepts rather than tools and vendors? See the related lists at the end.

## Contents

- [Standards and Specifications](#standards-and-specifications)
  - [OAuth and OpenID Connect](#oauth-and-openid-connect)
  - [Tokens and Keys](#tokens-and-keys)
  - [Federation, Directory, and Provisioning](#federation-directory-and-provisioning)
  - [Authentication and Passkeys](#authentication-and-passkeys)
  - [Shared Signals and Session Events](#shared-signals-and-session-events)
  - [Digital Credentials and Wallets](#digital-credentials-and-wallets)
  - [High-Assurance Profiles](#high-assurance-profiles)
- [Guidance and Reference](#guidance-and-reference)
  - [Government and Regulatory Guidance](#government-and-regulatory-guidance)
  - [Glossaries and Reference Models](#glossaries-and-reference-models)
- [Open Source](#open-source)
  - [Identity Providers and Auth Servers](#identity-providers-and-auth-servers)
  - [Libraries for JavaScript and TypeScript](#libraries-for-javascript-and-typescript)
  - [Libraries for Python](#libraries-for-python)
  - [Libraries for Go](#libraries-for-go)
  - [Libraries for Java and Kotlin](#libraries-for-java-and-kotlin)
  - [Libraries for .NET](#libraries-for-net)
  - [Libraries for Rust](#libraries-for-rust)
  - [Libraries for PHP](#libraries-for-php)
  - [Libraries for Ruby](#libraries-for-ruby)
  - [Libraries for Mobile](#libraries-for-mobile)
  - [Passkeys and WebAuthn](#passkeys-and-webauthn)
  - [Authorization Engines and Policy](#authorization-engines-and-policy)
  - [Directory and Provisioning](#directory-and-provisioning)
  - [Secrets and Workload Identity](#secrets-and-workload-identity)
  - [Privileged Access and Session Tooling](#privileged-access-and-session-tooling)
  - [Decentralized Identity Tooling](#decentralized-identity-tooling)
  - [Testing and Developer Tools](#testing-and-developer-tools)
- [Security Research](#security-research)
  - [Assessment and Attack Tooling](#assessment-and-attack-tooling)
  - [Detection and Threat Hunting](#detection-and-threat-hunting)
  - [Hardening Guides and Benchmarks](#hardening-guides-and-benchmarks)
  - [Breach Analyses and Incident Write-ups](#breach-analyses-and-incident-write-ups)
  - [Threat and Industry Reports](#threat-and-industry-reports)
- [Vendor Directory](#vendor-directory)
- [Learning](#learning)
  - [Books](#books)
  - [Courses and Certifications](#courses-and-certifications)
  - [Blogs and Newsletters](#blogs-and-newsletters)
  - [Podcasts](#podcasts)
  - [Videos and Talks](#videos-and-talks)
  - [Learning Paths](#learning-paths)
  - [Careers](#careers)
- [Community](#community)
  - [Conferences and Events](#conferences-and-events)
  - [Communities and Organizations](#communities-and-organizations)
  - [People to Follow](#people-to-follow)
- [Data and Datasets](#data-and-datasets)
  - [Datasets and Trackers](#datasets-and-trackers)

## Standards and Specifications

Primary sources. Links point at the published spec, not at summaries of it.

### OAuth and OpenID Connect

- [OpenID Connect Back-Channel Logout 1.0](https://openid.net/specs/openid-connect-backchannel-1_0.html) - Server-to-server logout where the provider posts a signed logout token to each relying party, with no browser involvement.
- [OpenID Connect Client-Initiated Backchannel Authentication Flow (CIBA) Core 1.0](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html) - Decoupled flow where a call center or point of sale starts the login and the user approves it on their own phone.
- [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html) - Identity layer over OAuth 2.0 that adds the ID token, the UserInfo endpoint, standard claims, and the nonce check.
- [OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html) - Covers the /.well-known/openid-configuration document and WebFinger lookup that relying parties use to find a provider's endpoints and keys.
- [OpenID Connect Dynamic Client Registration 1.0](https://openid.net/specs/openid-connect-registration-1_0.html) - OIDC-specific client metadata and the registration endpoint relying parties call to obtain a client_id from a provider.
- [OpenID Connect Front-Channel Logout 1.0](https://openid.net/specs/openid-connect-frontchannel-1_0.html) - Logout propagation through hidden iframes that load each relying party's logout URL in the browser.
- [OpenID Connect RP-Initiated Logout 1.0](https://openid.net/specs/openid-connect-rpinitiated-1_0.html) - How a relying party sends the user to the provider's end_session_endpoint with an id_token_hint to sign out.
- [RFC 6749: The OAuth 2.0 Authorization Framework](https://datatracker.ietf.org/doc/html/rfc6749) - Base OAuth 2.0 spec with client, resource owner, and server roles, the authorization code and client credentials grants, and refresh tokens.
- [RFC 6750: OAuth 2.0 Bearer Token Usage](https://datatracker.ietf.org/doc/html/rfc6750) - How a client sends a bearer access token in the Authorization header, and the WWW-Authenticate errors a resource server returns.
- [RFC 7009: OAuth 2.0 Token Revocation](https://datatracker.ietf.org/doc/html/rfc7009) - Endpoint for clients to invalidate an access or refresh token, typically on logout or app uninstall.
- [RFC 7523: JWT Profile for OAuth 2.0 Client Authentication and Authorization Grants](https://datatracker.ietf.org/doc/html/rfc7523) - Covers private_key_jwt client authentication and the JWT bearer grant, where a signed assertion is traded for an access token.
- [RFC 7591: OAuth 2.0 Dynamic Client Registration Protocol](https://datatracker.ietf.org/doc/html/rfc7591) - Clients register themselves at runtime by posting metadata such as redirect URIs and auth method to a registration endpoint.
- [RFC 7636: Proof Key for Code Exchange by OAuth Public Clients](https://datatracker.ietf.org/doc/html/rfc7636) - PKCE binds the code request to the token request with a code_verifier and code_challenge, stopping authorization code interception.
- [RFC 7662: OAuth 2.0 Token Introspection](https://datatracker.ietf.org/doc/html/rfc7662) - Endpoint a resource server calls to ask whether an opaque token is active and to read its scope, subject, and expiry.
- [RFC 8252: OAuth 2.0 for Native Apps](https://datatracker.ietf.org/doc/html/rfc8252) - Mobile and desktop apps should use the system browser, not embedded web views, with claimed HTTPS or loopback redirect URIs.
- [RFC 8414: OAuth 2.0 Authorization Server Metadata](https://datatracker.ietf.org/doc/html/rfc8414) - JSON document at a well-known URL that advertises a server's endpoints, supported grants, and signing algorithms.
- [RFC 8628: OAuth 2.0 Device Authorization Grant](https://datatracker.ietf.org/doc/html/rfc8628) - Sign-in for TVs, CLIs, and other input-constrained devices, where the user enters a short code on a second device.
- [RFC 8693: OAuth 2.0 Token Exchange](https://datatracker.ietf.org/doc/html/rfc8693) - Grant type for swapping one security token for another, used for delegation and impersonation between services.
- [RFC 8707: Resource Indicators for OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc8707) - The resource parameter tells the authorization server which API a token is for, so it can restrict the audience.
- [RFC 9068: JSON Web Token (JWT) Profile for OAuth 2.0 Access Tokens](https://datatracker.ietf.org/doc/html/rfc9068) - Standard claims and the at+jwt type header for JWT access tokens, plus the validation steps a resource server should follow.
- [RFC 9101: JWT-Secured Authorization Request (JAR)](https://datatracker.ietf.org/doc/html/rfc9101) - Authorization request parameters packed into a signed and optionally encrypted request object, passed by value or by reference.
- [RFC 9126: OAuth 2.0 Pushed Authorization Requests](https://datatracker.ietf.org/doc/html/rfc9126) - PAR lets the client POST authorization parameters to the server first and send only a request_uri through the browser.
- [RFC 9207: OAuth 2.0 Authorization Server Issuer Identification](https://datatracker.ietf.org/doc/html/rfc9207) - Adds an iss parameter to the authorization response so clients that talk to several servers can detect mix-up attacks.
- [RFC 9396: OAuth 2.0 Rich Authorization Requests](https://datatracker.ietf.org/doc/html/rfc9396) - Adds the authorization_details JSON parameter for fine-grained requests such as a specific payment amount, beyond what scope strings can carry.
- [RFC 9470: OAuth 2.0 Step Up Authentication Challenge Protocol](https://datatracker.ietf.org/doc/html/rfc9470) - Error code and parameters an API uses to demand a fresher login or a stronger acr level before it accepts a token.
- [RFC 9700: Best Current Practice for OAuth 2.0 Security](https://datatracker.ietf.org/doc/html/rfc9700) - Current OAuth threat guidance, covering mix-up, code injection, and token replay, and recommending PKCE and sender-constrained tokens.
- [RFC 9728: OAuth 2.0 Protected Resource Metadata](https://datatracker.ietf.org/doc/html/rfc9728) - Lets an API publish which authorization servers and scopes it accepts, so clients can discover how to get a token for it.
- [RFC 10017: OAuth 2.0 for Browser-Based Applications](https://datatracker.ietf.org/doc/html/rfc10017) - Compares backend-for-frontend, token-mediating backend, and browser-only architectures for single-page apps, with the attacks each must handle.
- [RFC 10027: Best Current Practice for Security of Cross-Device Flows](https://datatracker.ietf.org/doc/html/rfc10027) - Threats to flows that start on one device and finish on another, such as device grant and CIBA, with mitigations and protocol selection advice.
- [RFC 10070: Updates to OAuth 2.0 JWT Client Authentication and Assertion-Based Authorization Grants](https://datatracker.ietf.org/doc/html/rfc10070) - Tightens the audience rules for client assertions and assertion grants to fix a vulnerability in RFC 7521, 7522, 7523, and 9126.
- [The OAuth 2.1 Authorization Framework (draft)](https://datatracker.ietf.org/doc/draft-ietf-oauth-v2-1/) - Consolidation of OAuth 2.0 and its security BCP that requires PKCE, drops the implicit and password grants, and enforces exact redirect URI matching.

### Tokens and Keys

- [RFC 7515: JSON Web Signature (JWS)](https://datatracker.ietf.org/doc/html/rfc7515) - Signing or MACing arbitrary content as JSON, in compact and JSON serializations, with protected and unprotected headers.
- [RFC 7516: JSON Web Encryption (JWE)](https://datatracker.ietf.org/doc/html/rfc7516) - Encrypted JSON objects with a key management step and authenticated content encryption, used for encrypted ID tokens and request objects.
- [RFC 7517: JSON Web Key (JWK)](https://datatracker.ietf.org/doc/html/rfc7517) - JSON representation of public and private keys and of key sets, the format served from a provider's jwks_uri.
- [RFC 7518: JSON Web Algorithms (JWA)](https://datatracker.ietf.org/doc/html/rfc7518) - Registers the alg and enc identifiers used in JOSE, including RS256, ES256, PS256, ECDH-ES, and A256GCM.
- [RFC 7519: JSON Web Token (JWT)](https://datatracker.ietf.org/doc/html/rfc7519) - Compact claims format behind ID tokens and most access tokens, with registered claims such as iss, sub, aud, exp, and nbf.
- [RFC 7638: JSON Web Key (JWK) Thumbprint](https://datatracker.ietf.org/doc/html/rfc7638) - Deterministic hash over a JWK's required members, used as a key ID and for binding tokens to keys in DPoP.
- [RFC 7800: Proof-of-Possession Key Semantics for JSON Web Tokens (JWTs)](https://datatracker.ietf.org/doc/html/rfc7800) - Introduces the cnf claim, which states the key a presenter must prove control of before a JWT is accepted.
- [RFC 8392: CBOR Web Token (CWT)](https://datatracker.ietf.org/doc/html/rfc8392) - Binary equivalent of JWT built on CBOR and COSE, aimed at constrained devices and used in some credential formats.
- [RFC 8705: OAuth 2.0 Mutual-TLS Client Authentication and Certificate-Bound Access Tokens](https://datatracker.ietf.org/doc/html/rfc8705) - Client authentication with X.509 certificates over mutual TLS, and access tokens bound to the certificate's thumbprint.
- [RFC 8725: JSON Web Token Best Current Practices](https://datatracker.ietf.org/doc/html/rfc8725) - Countermeasures for alg none, algorithm confusion, weak HMAC keys, and token substitution across different JWT uses.
- [RFC 9421: HTTP Message Signatures](https://datatracker.ietf.org/doc/html/rfc9421) - Signs selected HTTP components such as method, path, and headers, giving request and response integrity independent of TLS.
- [RFC 9449: OAuth 2.0 Demonstrating Proof of Possession (DPoP)](https://datatracker.ietf.org/doc/html/rfc9449) - Application-layer sender constraint where the client signs a per-request proof JWT so a stolen access token cannot be replayed.
- [RFC 9864: Fully-Specified Algorithms for JOSE and COSE](https://datatracker.ietf.org/doc/html/rfc9864) - Replaces polymorphic identifiers like EdDSA with algorithm names that pin the curve, such as Ed25519, and deprecates the old ones.
- [RFC 9901: Selective Disclosure for JSON Web Tokens](https://datatracker.ietf.org/doc/html/rfc9901) - SD-JWT replaces claim values with salted digests so the holder can reveal only chosen claims, with optional key binding.
- [Token Status List (draft)](https://datatracker.ietf.org/doc/draft-ietf-oauth-status-list/) - Compressed bit array published as a JWT or CWT so verifiers can check whether a token or credential has been revoked or suspended.

### Federation, Directory, and Provisioning

- [Federated Credential Management API (FedCM)](https://www.w3.org/TR/fedcm/) - Browser API that mediates sign-in with an identity provider through a native prompt, replacing flows that relied on third-party cookies.
- [OpenID Federation 1.0](https://openid.net/specs/openid-federation-1_0.html) - Trust chains of signed entity statements that let parties in a large federation discover and trust each other without bilateral setup.
- [OpenID IPSIE Working Group](https://openid.net/wg/ipsie/) - Working group writing interoperability profiles for enterprise SaaS covering SSO, provisioning, session control, and token revocation.
- [RFC 4120: The Kerberos Network Authentication Service (V5)](https://datatracker.ietf.org/doc/html/rfc4120) - Ticket-based protocol with the KDC, ticket-granting tickets, and service tickets, and the base of Active Directory domain authentication.
- [RFC 4511: Lightweight Directory Access Protocol (LDAP): The Protocol](https://datatracker.ietf.org/doc/html/rfc4511) - LDAPv3 wire protocol, with the bind, search, modify, and extended operations that Active Directory and OpenLDAP implement.
- [RFC 4513: LDAP Authentication Methods and Security Mechanisms](https://datatracker.ietf.org/doc/html/rfc4513) - Simple and SASL bind, StartTLS, and the anonymous and unauthenticated bind cases that often cause LDAP auth bypass bugs.
- [RFC 4556: Public Key Cryptography for Initial Authentication in Kerberos (PKINIT)](https://datatracker.ietf.org/doc/html/rfc4556) - Kerberos pre-authentication with certificates instead of passwords, the mechanism behind smart card logon to Windows domains.
- [RFC 7522: SAML 2.0 Profile for OAuth 2.0 Client Authentication and Authorization Grants](https://datatracker.ietf.org/doc/html/rfc7522) - Lets a client present a SAML assertion at the token endpoint to get an OAuth access token or to authenticate itself.
- [RFC 7643: System for Cross-domain Identity Management: Core Schema](https://datatracker.ietf.org/doc/html/rfc7643) - User, Group, and Enterprise User resource schemas for SCIM, along with attribute types, mutability, and the extension model.
- [RFC 7644: System for Cross-domain Identity Management: Protocol](https://datatracker.ietf.org/doc/html/rfc7644) - REST operations for creating, patching, filtering, and bulk-updating users and groups between an identity provider and an application.
- [RFC 9865: Cursor-Based Pagination of SCIM Resources](https://datatracker.ietf.org/doc/html/rfc9865) - Adds cursor-based pagination parameters to SCIM queries for services whose backends already page by cursor rather than by index.
- [RFC 9967: SCIM Profile for Security Event Tokens](https://datatracker.ietf.org/doc/html/rfc9967) - Defines SCIM security events carried as SETs for asynchronous change notification, plus an optional asynchronous request mode.
- [SAML 2.0 Bindings](https://docs.oasis-open.org/security/saml/v2.0/saml-bindings-2.0-os.pdf) - Maps SAML messages onto transports, including HTTP Redirect, HTTP POST, Artifact, and SOAP, with the signing rules for each.
- [SAML 2.0 Core: Assertions and Protocols](https://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf) - Normative OASIS text for assertions, subject confirmation, conditions, and the AuthnRequest and logout protocol messages.
- [SAML 2.0 Metadata](https://docs.oasis-open.org/security/saml/v2.0/saml-metadata-2.0-os.pdf) - XML schema for describing identity providers and service providers, including endpoints, certificates, and NameID formats.
- [SAML 2.0 Profiles](https://docs.oasis-open.org/security/saml/v2.0/saml-profiles-2.0-os.pdf) - Includes the Web Browser SSO profile that nearly every enterprise SAML integration follows, plus single logout and attribute profiles.
- [SAML 2.0 Technical Overview](https://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html) - OASIS document that walks through SAML assertions, protocols, bindings, and profiles with example flows, before you open the normative specs.
- [SAML V2.0 Deployment Profile for Federation Interoperability (saml2int)](https://kantarainitiative.github.io/SAMLprofiles/saml2int.html) - Narrows SAML options to a practical subset for SSO between organizations, covering metadata, signing, and algorithm requirements.
- [Web Services Federation Language (WS-Federation) 1.2](https://docs.oasis-open.org/wsfed/federation/v1.2/os/ws-federation-1.2-spec-os.html) - OASIS federation protocol from the WS-* era, still found in ADFS and older Microsoft integrations, with passive browser sign-in.

### Authentication and Passkeys

- [Client to Authenticator Protocol (CTAP) 2.3](https://fidoalliance.org/specs/fido-v2.3-ps-20260226/fido-client-to-authenticator-protocol-v2.3-ps-20260226.html) - How a platform talks to a roaming authenticator over USB, NFC, or BLE, and the hybrid transport for using a phone as a passkey.
- [FIDO Credential Exchange Specifications](https://fidoalliance.org/fido-alliance-credential-exchange-specifications-overview/) - Overview of the protocol and data format for moving passkeys and passwords from one credential manager to another.
- [FIDO UAF 1.2 Architectural Overview](https://fidoalliance.org/specs/fido-uaf-v1.2-ps-20201020/fido-uaf-overview-v1.2-ps-20201020.html) - Entry point to the UAF suite, the mobile-app predecessor of FIDO2 that pairs on-device biometrics with public key login.
- [passkeys.dev](https://passkeys.dev/) - Developer docs run by FIDO Alliance and W3C community group members, with passkey UX patterns, platform support tables, and how-tos.
- [RFC 2865: Remote Authentication Dial In User Service (RADIUS)](https://datatracker.ietf.org/doc/html/rfc2865) - AAA protocol still used for VPN, Wi-Fi, and network device logins; its MD5-based integrity is weak, so run it inside TLS or IPsec.
- [RFC 4226: HOTP: An HMAC-Based One-Time Password Algorithm](https://datatracker.ietf.org/doc/html/rfc4226) - Counter-based one-time password algorithm with HMAC-SHA-1 and dynamic truncation, the base that TOTP builds on.
- [RFC 6238: TOTP: Time-Based One-Time Password Algorithm](https://datatracker.ietf.org/doc/html/rfc6238) - Replaces the HOTP counter with a time step, usually 30 seconds, and is what authenticator apps generate.
- [Web Authentication: An API for accessing Public Key Credentials, Level 3](https://www.w3.org/TR/webauthn-3/) - Browser API behind passkeys, covering navigator.credentials.create and get, attestation formats, and how relying parties verify assertions.

### Shared Signals and Session Events

- [CAEP Interoperability Profile 1.0 (draft)](https://openid.net/specs/openid-caep-interoperability-profile-1_0-ID1.html) - Narrows SSF and CAEP options to a common baseline of delivery methods, events, and subject formats so implementations work together.
- [OpenID Continuous Access Evaluation Profile (CAEP) 1.0](https://openid.net/specs/openid-caep-1_0-final.html) - Event types such as session-revoked, credential-change, and device-compliance-change, so apps can cut access mid-session.
- [OpenID RISC Profile 1.0](https://openid.net/specs/openid-risc-1_0-final.html) - Account security events like account-disabled, credential-compromise, and identifier-recycled shared between providers and relying parties.
- [OpenID Shared Signals Framework 1.0](https://openid.net/specs/openid-sharedsignals-framework-1_0-final.html) - Stream configuration, transmitter metadata, and subject management for exchanging security events between cooperating services.
- [RFC 8417: Security Event Token (SET)](https://datatracker.ietf.org/doc/html/rfc8417) - JWT profile for statements that something happened to a subject, the envelope used by SSF, CAEP, RISC, and SCIM events.
- [RFC 8935: Push-Based Security Event Token (SET) Delivery Using HTTP](https://datatracker.ietf.org/doc/html/rfc8935) - Transmitter POSTs each SET to a receiver endpoint and gets an acknowledgment or a structured error back.
- [RFC 8936: Poll-Based Security Event Token (SET) Delivery Using HTTP](https://datatracker.ietf.org/doc/html/rfc8936) - Receiver pulls batches of SETs and acknowledges them, for receivers that cannot expose an inbound endpoint.
- [RFC 9493: Subject Identifiers for Security Event Tokens](https://datatracker.ietf.org/doc/html/rfc9493) - Formats for naming who an event is about, such as email, phone number, iss_sub, opaque ID, or a combination of these.

### Digital Credentials and Wallets

- [Bitstring Status List v1.0](https://www.w3.org/TR/vc-bitstring-status-list/) - Privacy-preserving revocation and suspension for W3C credentials, where each credential points at one bit in a compressed published list.
- [Decentralized Identifiers (DIDs) v1.0](https://www.w3.org/TR/did-1.0/) - URI scheme and DID document format for identifiers whose keys are resolved through a method such as did:web or did:key.
- [Digital Credentials API (draft)](https://www.w3.org/TR/digital-credentials/) - Browser API that lets a website request a credential from a wallet on the device, carrying OpenID4VP or ISO mdoc requests.
- [EUDI Wallet Architecture and Reference Framework](https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework) - European Commission repository for the ARF, which sets the roles, credential formats, and protocols for EU Digital Identity Wallets.
- [ISO/IEC 18013-5:2021 Mobile driving licence (mDL) application](https://www.iso.org/standard/69084.html) - In-person presentation of a mobile driving licence over NFC, BLE, or Wi-Fi Aware, using the CBOR mdoc data model.
- [ISO/IEC TS 18013-7:2025 Mobile driving licence (mDL) add-on functions](https://www.iso.org/standard/91154.html) - Extends 18013-5 to online presentation, adding retrieval over the web and through the browser Digital Credentials API.
- [OpenID for Verifiable Credential Issuance 1.0](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0-final.html) - OAuth-based API for issuing credentials into a wallet, with credential offers, pre-authorized codes, and proof of key possession.
- [OpenID for Verifiable Presentations 1.0](https://openid.net/specs/openid-4-verifiable-presentations-1_0-final.html) - Protocol a verifier uses to request credentials from a wallet, with the DCQL query language and same-device and cross-device flows.
- [OpenID4VC High Assurance Interoperability Profile 1.0](https://openid.net/specs/openid4vc-high-assurance-interoperability-profile-1_0-final.html) - HAIP narrows OpenID4VCI and OpenID4VP options for SD-JWT VC and mdoc credentials to a set that high-assurance wallets can share.
- [SD-JWT-based Verifiable Digital Credentials (SD-JWT VC) (draft)](https://datatracker.ietf.org/doc/draft-ietf-oauth-sd-jwt-vc/) - IETF credential format built on SD-JWT, adding the vct type claim, issuer key discovery, and type metadata.
- [Securing Verifiable Credentials using JOSE and COSE](https://www.w3.org/TR/vc-jose-cose/) - Signs W3C credentials as JWS, SD-JWT, or COSE envelopes, an alternative to embedded Data Integrity proofs.
- [Verifiable Credential Data Integrity 1.0](https://www.w3.org/TR/vc-data-integrity/) - Embedded proof format for credentials, with canonicalization and cryptosuite rules that let a signature travel inside the JSON-LD document.
- [Verifiable Credentials Data Model v2.0](https://www.w3.org/TR/vc-data-model-2.0/) - W3C Recommendation for the issuer, holder, and verifier model, with the JSON-LD structure of credentials and presentations.

### High-Assurance Profiles

- [FAPI 2.0 Attacker Model](https://openid.net/specs/fapi-attacker-model-2_0-final.html) - Formal list of attacker capabilities and security goals that the FAPI 2.0 profiles were analyzed against.
- [FAPI 2.0 Message Signing](https://openid.net/specs/fapi-message-signing-2_0-final.html) - Optional layer on top of the FAPI 2.0 Security Profile that signs requests, responses, and introspection results for non-repudiation.
- [FAPI 2.0 Security Profile](https://openid.net/specs/fapi-security-profile-2_0-final.html) - Hardened OAuth profile for open banking and other high-value APIs, requiring PAR, PKCE, and DPoP or mTLS sender-constrained tokens.
- [Financial-grade API Security Profile 1.0, Part 2: Advanced](https://openid.net/specs/openid-financial-api-part-2-1_0.html) - FAPI 1.0 Advanced, which uses signed request objects, hybrid flow or JARM, and mTLS, and is still mandated by several open banking regimes.
- [International Government Assurance Profile (iGov) for OAuth 2.0](https://openid.net/specs/openid-igov-oauth2-1_0.html) - Implementer's draft profiling OAuth 2.0 for government and citizen-facing services, with fixed client authentication and token rules.
- [International Government Assurance Profile (iGov) for OpenID Connect](https://openid.net/specs/openid-igov-openid-connect-1_0.html) - Draft OIDC profile for public sector identity, covering ID token contents, acr values, and claims handling across agencies.
- [JWT Secured Authorization Response Mode for OAuth 2.0 (JARM)](https://openid.net/specs/oauth-v2-jarm.html) - Wraps the authorization response in a signed JWT so the client can verify where the code came from and that it was not altered.
- [OpenID Connect for Identity Assurance 1.0](https://openid.net/specs/openid-connect-4-identity-assurance-1_0-final.html) - How a provider returns verified_claims, telling a relying party which trust framework and evidence were used to check identity data.
- [OpenID Identity Assurance Schema Definition 1.0](https://openid.net/specs/openid-ida-verified-claims-1_0-final.html) - JSON schema for the verified_claims structure, including evidence types like documents and electronic records, reusable outside OIDC.

## Guidance and Reference

Government guidance, regulation, and reference material that shapes how identity systems are built and audited.

### Government and Regulatory Guidance

- [Aadhaar Authentication API Specification 2.5](https://uidai.gov.in/images/resource/Aadhaar_Authentication_API-2.5_Revision-1_of_January_2022.pdf) - UIDAI interface for verifying an Aadhaar number with biometric, OTP, or demographic data, including the encrypted PID block format.
- [Australia Digital ID (Accreditation) Rules 2024](https://www.legislation.gov.au/F2024L01438/latest/text) - Rules under the Digital ID Act 2024, successor to the TDIF, setting proofing, authentication, and privacy requirements for accredited providers.
- [CISA and NSA: Identity and Access Management Recommended Best Practices for Administrators](https://www.cisa.gov/sites/default/files/2023-12/ESF%20IDENTITY%20AND%20ACCESS%20MANAGEMENT%20RECOMMENDED%20BEST%20PRACTICES%20FOR%20ADMINISTRATORS%20PP-23-0248_508C.pdf) - Enduring Security Framework guidance on identity governance, environment hardening, federation, MFA, and IAM monitoring.
- [CISA Secure by Design](https://www.cisa.gov/securebydesign) - CISA program asking software makers to ship secure defaults, including MFA on by default and no default passwords.
- [CISA Zero Trust Maturity Model](https://www.cisa.gov/resources-tools/resources/zero-trust-maturity-model) - Five pillars, with identity first, each scored from traditional to optimal so agencies can plan zero trust adoption in stages.
- [CISA: Implementing Phishing-Resistant MFA](https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf) - Fact sheet comparing MFA methods by phishing resistance, with FIDO2 and PKI-based authenticators as the strongest options.
- [DIACC Pan-Canadian Trust Framework](https://diacc.ca/trust-framework/) - Canadian framework of conformance criteria for digital ID providers, covering verified person, authentication, and privacy components.
- [ENISA: Remote ID Proofing](https://www.enisa.europa.eu/publications/enisa-report-remote-id-proofing) - Report on video and document-based remote identity proofing methods across the EU, with the attacks they face and countermeasures.
- [NCSC: Multi-factor Authentication for Your Corporate Online Services](https://www.ncsc.gov.uk/collection/mfa-for-your-corporate-online-services) - UK National Cyber Security Centre advice on choosing MFA methods for staff accounts on cloud services, and on handling recovery.
- [NIST IR 8587: Protecting Tokens and Assertions from Forgery, Theft, and Misuse](https://csrc.nist.gov/pubs/ir/8587/final) - Guidance for agencies and cloud providers on key management, token verification, and token life cycle controls, written after high-profile forgeries.
- [NIST SP 800-53 Rev. 5: Security and Privacy Controls](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) - US federal control catalog; the AC (Access Control) and IA (Identification and Authentication) families are the ones identity teams map to.
- [NIST SP 800-63-4: Digital Identity Guidelines](https://pages.nist.gov/800-63-4/sp800-63.html) - Top-level volume of the US digital identity guidelines, setting out IAL, AAL, and FAL and the risk process for choosing among them.
- [NIST SP 800-63A-4: Identity Proofing and Enrollment](https://pages.nist.gov/800-63-4/sp800-63a.html) - Requirements for remote and in-person identity proofing at each IAL, including evidence strength and fraud controls.
- [NIST SP 800-63B-4: Authentication and Authenticator Management](https://pages.nist.gov/800-63-4/sp800-63b.html) - Password rules, authenticator types, syncable passkeys, phishing resistance, and reauthentication limits for each AAL.
- [NIST SP 800-63C-4: Federation and Assertions](https://pages.nist.gov/800-63-4/sp800-63c.html) - Assertion protection, audience restriction, and trust agreement requirements for each federation assurance level.
- [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final) - Reference publication for zero trust, describing policy decision and enforcement points and the deployment models built around them.
- [OMB M-22-09: Moving the U.S. Government Toward Zero Trust Cybersecurity Principles](https://www.whitehouse.gov/wp-content/uploads/2022/01/M-22-09.pdf) - Federal memo requiring phishing-resistant MFA for staff and an option for the public, and dropping periodic password rotation.
- [Regulation (EU) 2024/1183 (eIDAS 2.0)](https://eur-lex.europa.eu/eli/reg/2024/1183/oj/eng) - Amends eIDAS to create the European Digital Identity Wallet and sets the duties of member states, relying parties, and trust service providers.
- [UK Digital Verification Services Trust Framework](https://www.gov.uk/government/collections/uk-digital-verification-services-trust-framework) - UK government rules for certified identity and attribute providers, formerly the digital identity and attributes trust framework (DIATF).

### Glossaries and Reference Models

- [FIDO Alliance Specifications Overview](https://fidoalliance.org/specifications-overview/) - Landing page for FIDO's user authentication specs (UAF, U2F, CTAP), FIDO Device Onboard, and the credential exchange drafts.
- [IANA JOSE Registries](https://www.iana.org/assignments/jose/jose.xhtml) - Registered JWS and JWE header parameters, algorithm identifiers, and JWK parameters, with deprecation status for each.
- [IDPro Body of Knowledge](https://bok.idpro.org/) - Peer-reviewed articles by identity practitioners on IAM fundamentals, protocols, governance, and operations, free to read.
- [IETF OAuth Working Group Documents](https://datatracker.ietf.org/wg/oauth/documents/) - Live list of active OAuth drafts and published RFCs with their current state, the place to check whether a draft has moved.
- [NIST CSRC Glossary](https://csrc.nist.gov/glossary) - Searchable definitions pulled from NIST publications, with each term linked to the documents that define it.
- [OpenID Foundation Specifications](https://openid.net/developers/specs/) - Index of every OpenID Foundation spec with its status, from OIDC and FAPI to Shared Signals and OpenID4VC.
- [OWASP ASVS 5.0: V6 Authentication](https://github.com/OWASP/ASVS/blob/master/5.0/en/0x15-V6-Authentication.md) - Verification requirements for passwords, MFA, out-of-band factors, and account recovery, graded by ASVS level.
- [OWASP ASVS 5.0: V7 Session Management](https://github.com/OWASP/ASVS/blob/master/5.0/en/0x16-V7-Session-Management.md) - Testable requirements for session creation, timeout, termination, and federated re-authentication behavior.
- [OWASP ASVS 5.0: V9 Self-contained Tokens](https://github.com/OWASP/ASVS/blob/master/5.0/en/0x18-V9-Self-contained-Tokens.md) - Checks for JWT and similar tokens, including signature and algorithm validation, expiry, and audience restriction.
- [OWASP ASVS 5.0: V10 OAuth and OIDC](https://github.com/OWASP/ASVS/blob/master/5.0/en/0x19-V10-OAuth-and-OIDC.md) - Requirements split by role, for OAuth clients, resource servers, and authorization servers, OIDC clients and providers, and consent.
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html) - Login implementation checklist covering password rules, generic error messages, account lockout, and protection against automated attacks.
- [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) - Deny by default, check permissions on every request, and prefer attribute or relationship models over ad hoc role checks.
- [OWASP Forgot Password Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html) - Designing password reset without user enumeration, with single-use tokens, expiry, and safe handling after the reset.
- [OWASP JSON Web Token Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_Cheat_Sheet.html) - Common JWT mistakes such as accepting alg none, weak HMAC secrets, and token sidejacking, with fixes for each.
- [OWASP Multifactor Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Multifactor_Authentication_Cheat_Sheet.html) - Pros and cons of each second factor, when to prompt for MFA, and how to handle recovery when a user loses theirs.
- [OWASP OAuth2 Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/OAuth2_Cheat_Sheet.html) - Condensed OAuth hardening checklist for clients and servers, drawn largely from the OAuth security BCP.
- [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) - Recommended hashing algorithms and parameters, with Argon2id, scrypt, bcrypt, and PBKDF2 work factors and peppering.
- [OWASP SAML Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SAML_Security_Cheat_Sheet.html) - XML signature wrapping, schema validation, and assertion replay checks that SAML service providers commonly get wrong.
- [OWASP Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html) - Session ID entropy, cookie attributes, idle and absolute timeouts, and renewing the ID after login to stop fixation.
- [RFC 4949: Internet Security Glossary, Version 2](https://datatracker.ietf.org/doc/html/rfc4949) - Long-standing IETF glossary of security terms, useful for settling what words like authentication and credential mean in RFCs.

## Open Source

Projects under an OSI-approved license with a commit or release in the last 12 months, unless tagged `Archived`.

### Identity Providers and Auth Servers

- [Apereo CAS](https://apereo.github.io/cas/) `OSS` - Java SSO server long used in higher education, speaking the CAS protocol plus SAML2, OpenID Connect, OAuth 2.0, and WS-Federation.
- [Authelia](https://www.authelia.com/) `OSS` - Single Go binary that adds login, 2FA, and an OpenID Connect provider in front of apps via reverse proxy forward-auth.
- [Authentik](https://goauthentik.io/) `OSS` - Self-hosted IdP with visual login flows, OIDC, SAML, LDAP and RADIUS outposts, and a proxy mode for apps without SSO support.
- [Authgear](https://github.com/authgear/authgear-server) `OSS` - Customer-facing auth server in Go with passwordless, passkey, and social login, issuing OIDC tokens and including an admin portal.
- [Casdoor](https://casdoor.ai/) `OSS` - Go and React auth server with a web UI, acting as an OAuth 2.0, OIDC, SAML, CAS, and LDAP provider with many upstream connectors.
- [Dex](https://dexidp.io/) `OSS` - CNCF OpenID Connect provider that federates to LDAP, SAML, GitHub, and other upstreams; common for Kubernetes cluster login.
- [Gravitee Access Management](https://github.com/gravitee-io/gravitee-access-management) `OSS` - Java IAM server from the Gravitee API platform covering OAuth 2.0, OIDC, SAML, MFA, and user management.
- [Hanko](https://www.hanko.io/) `OSS` - Self-hostable auth backend with passkeys, passcodes, and social login, plus drop-in web components for the login UI.
- [Hexclave](https://www.hexclave.com/) `OSS` - Auth and user management platform formerly called Stack Auth, with AGPL server components and MIT-licensed Next.js and React SDKs.
- [Janssen Project](https://docs.jans.io/) `OSS` - Linux Foundation continuation of the Gluu Server, a modular OAuth 2.0 and OpenID Connect server with FIDO2 and Cedar-based policy hooks.
- [Kanidm](https://kanidm.com/) `OSS` - Identity server written in Rust that combines an account database with OAuth2/OIDC, LDAPS, RADIUS, and Unix login integration.
- [Keycloak](https://www.keycloak.org/) `OSS` - Identity and access management server with SSO, user federation, and OIDC and SAML support.
- [Logto](https://logto.io/) `OSS` - OIDC-based auth service for apps and SaaS, with hosted sign-in pages, organizations for multi-tenancy, and RBAC.
- [OAuth2 Proxy](https://oauth2-proxy.github.io/oauth2-proxy/) `OSS` - Reverse proxy that puts OIDC or OAuth 2.0 login in front of web apps and passes the user identity upstream in headers.
- [OpenAM](https://www.openidentityplatform.org/openam) `OSS` - Community-maintained fork of ForgeRock OpenAM providing SSO, SAML federation, OAuth 2.0, and adaptive authentication chains.
- [Ory Hydra](https://www.ory.com/hydra) `OSS` - Headless OAuth 2.0 and OpenID Connect server in Go that delegates login and consent screens to your own app.
- [Ory Kratos](https://www.ory.com/kratos) `OSS` - API-first identity and user management server handling registration, login, MFA, account recovery, and profile flows.
- [Ory Polis](https://www.ory.com/polis) `OSS` - Bridge formerly known as BoxyHQ SAML Jackson that turns enterprise SAML logins into an OAuth 2.0 flow, with Directory Sync support.
- [Pocket ID](https://pocket-id.org/) `OSS` - Small OIDC provider for homelabs and small teams where users sign in only with passkeys, no passwords.
- [privacyIDEA](https://www.privacyidea.org/) `OSS` - MFA server that manages OTP, push, WebAuthn, and SMS tokens and checks them for VPNs, RADIUS clients, and IdPs via plugins.
- [Rauthy](https://sebadob.github.io/rauthy/) `OSS` - Lightweight OIDC provider in Rust with passkey and MFA support, an admin UI, and embedded Hiqlite or Postgres storage.
- [SATOSA](https://github.com/IdentityPython/SATOSA) `OSS` - Python proxy that translates between SAML2, OpenID Connect, and OAuth 2.0 so services on one protocol can use IdPs on another.
- [Shibboleth Identity Provider](https://www.shibboleth.net/) `OSS` - SAML IdP widely deployed in research and education federations, with an OIDC extension and attribute release controls.
- [SimpleSAMLphp](https://simplesamlphp.org/) `OSS` - PHP application that can run as a SAML 2.0 IdP or SP, with modules for LDAP, SQL, and other auth sources.
- [Supabase Auth](https://supabase.com/docs/guides/auth) `OSS` - Go service (originally GoTrue) that issues JWTs for Supabase apps, with email, phone, OAuth, SAML SSO, and anonymous sign-in.
- [SuperTokens](https://github.com/supertokens/supertokens-core) `OSS` - Self-hostable auth core with backend SDKs for Node, Python, and Go that manage sessions, rotating refresh tokens, and login recipes.
- [Tinyauth](https://tinyauth.app/) `OSS` - Minimal forward-auth login server for Traefik, Caddy, and Nginx that protects self-hosted apps with local users or OAuth providers.
- [WSO2 Identity Server](https://github.com/wso2/product-is) `OSS` - Java IAM server with SAML, OIDC, WS-Federation, SCIM 2.0 provisioning, adaptive authentication scripts, and identity federation.
- [ZITADEL](https://zitadel.com/) `OSS` - Multi-tenant identity platform in Go with an event-sourced store, OIDC and SAML, passkeys, and per-organization branding.

### Libraries for JavaScript and TypeScript

- [angular-auth-oidc-client](https://github.com/damienbod/angular-auth-oidc-client) `OSS` - Angular library for OIDC code flow with PKCE, silent token renewal, and support for multiple configured identity providers.
- [angular-oauth2-oidc](https://github.com/manfredsteyer/angular-oauth2-oidc) `OSS` - OAuth 2.0 and OIDC client for Angular apps, handling code flow with PKCE, token refresh, and session checks.
- [AppAuth for JS](https://github.com/openid/AppAuth-JS) `OSS` - OpenID Foundation reference client for OAuth 2.0 and OIDC in browsers and Node, following the native-app guidance of RFC 8252.
- [Arctic](https://arctic.pilcrowonpaper.com/) `OSS` - Collection of small OAuth 2.0 clients for dozens of social and enterprise providers, built on the Fetch API with no framework coupling.
- [Auth.js](https://authjs.dev/) `OSS` - OAuth and session library behind NextAuth.js; now stewarded by the Better Auth team, who point new projects to Better Auth.
- [Better Auth](https://better-auth.com/) `OSS` - Framework-agnostic TypeScript auth library with a plugin system for 2FA, organizations, passkeys, SSO, and acting as an OIDC provider.
- [jose](https://github.com/panva/jose) `OSS` - JWT, JWS, JWE, JWK, and JWKS implementation with zero dependencies that runs on Node, browsers, Deno, Bun, and edge runtimes.
- [jwt-decode](https://github.com/auth0/jwt-decode) `OSS` - Tiny browser helper that base64-decodes a JWT payload or header so client code can read claims; it does not verify signatures.
- [Lucia](https://lucia-auth.com/) `OSS` `Archived` - Session library deprecated in March 2025; the site now serves as a guide to writing your own session handling in TypeScript.
- [MSAL.js](https://github.com/AzureAD/microsoft-authentication-library-for-js) `OSS` - Microsoft Authentication Library packages for browser, Node, React, and Angular apps that sign users in with Entra ID.
- [node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) `OSS` - Long-standing Node.js package for signing and verifying JWTs with HMAC, RSA, and ECDSA keys, published on npm as jsonwebtoken.
- [node-oidc-provider](https://github.com/panva/node-oidc-provider) `OSS` - Certified OpenID Provider for Node.js that you embed in your own server, with support for FAPI 2.0, PAR, DPoP, and CIBA.
- [node-saml](https://github.com/node-saml/node-saml) `OSS` - SAML 2.0 service provider core for Node.js that builds AuthnRequests and validates signed responses and logout messages.
- [oauth4webapi](https://github.com/panva/oauth4webapi) `OSS` - Low-level OAuth 2.0 and OIDC client primitives on Web APIs, covering PKCE, DPoP, PAR, JAR, and JARM for any JS runtime.
- [oidc-client-ts](https://authts.github.io/oidc-client-ts/) `OSS` - Browser OIDC and OAuth 2.0 client that handles code flow with PKCE, silent renew, and user session storage for SPAs.
- [openid-client](https://github.com/panva/openid-client) `OSS` - Certified OpenID Connect relying party for server-side JavaScript, with discovery, PKCE, DPoP, and Passport strategy helpers.
- [Passport](https://www.passportjs.org/) `OSS` `Archived` - Express authentication middleware with hundreds of strategy packages; no core release since 2023 and little recent activity.
- [passport-saml](https://github.com/node-saml/passport-saml) `OSS` - Passport strategy that wraps node-saml so Express apps can act as a SAML 2.0 service provider.
- [react-oidc-context](https://github.com/authts/react-oidc-context) `OSS` - React context provider and hooks around oidc-client-ts for adding OIDC login and token access to single-page apps.
- [samlify](https://samlify.js.org/) `OSS` - Node.js SAML 2.0 toolkit that can act as either IdP or SP, with metadata parsing, signing, and encryption support.

### Libraries for Python

- [Authlib](https://authlib.org/) `OSS` - OAuth 1.0, OAuth 2.0, and OpenID Connect for Python clients and servers, with Flask, Django, Starlette, and httpx integrations.
- [dj-rest-auth](https://dj-rest-auth.readthedocs.io/) `OSS` - REST endpoints for login, logout, registration, and password reset in Django REST Framework, with optional allauth social login.
- [Django OAuth Toolkit](https://django-oauth-toolkit.readthedocs.io/) `OSS` - Turns a Django project into an OAuth 2.0 authorization server with OIDC support, built on top of OAuthLib.
- [django-allauth](https://allauth.org/) `OSS` - Django app covering local accounts, email verification, MFA, social login across many providers, and SAML or OIDC enterprise SSO.
- [FastAPI Users](https://fastapi-users.github.io/fastapi-users/) `OSS` - Registration, login, password reset, and OAuth social login routes for FastAPI, with JWT or database-backed sessions.
- [Flask-Security](https://github.com/pallets-eco/flask-security) `OSS` - Flask extension for session and token auth, roles, two-factor codes, WebAuthn, and password recovery, maintained under Pallets-Eco.
- [idpy-oidc](https://github.com/IdentityPython/idpy-oidc) `OSS` - IdentityPython building blocks for OpenID Connect and OAuth 2.0 clients and servers, the successor to the older pyoidc package.
- [joserfc](https://jose.authlib.org/) `OSS` - Typed implementation of JWS, JWE, JWK, JWA, and JWT from the Authlib author, kept separate so it can be used without Authlib.
- [mozilla-django-oidc](https://mozilla-django-oidc.readthedocs.io/) `OSS` - Django authentication backend that logs users in through an external OpenID Connect provider using the authorization code flow.
- [MSAL for Python](https://github.com/AzureAD/microsoft-authentication-library-for-python) `OSS` - Microsoft Authentication Library for acquiring Entra ID tokens from Python apps, daemons, and CLIs, with token cache helpers.
- [OAuthLib](https://oauthlib.readthedocs.io/) `OSS` - Framework-neutral logic for OAuth 1.0 and OAuth 2.0 request signing and validation that other Python auth libraries build on.
- [PyJWT](https://pyjwt.readthedocs.io/) `OSS` - Widely used Python package for encoding and decoding JWTs, with JWKS fetching and HMAC, RSA, ECDSA, and EdDSA algorithms.
- [pysaml2](https://github.com/IdentityPython/pysaml2) `OSS` - Pure Python SAML 2.0 implementation for building IdPs and SPs, relying on xmlsec1 for signatures and encryption.
- [Python Social Auth](https://python-social-auth.readthedocs.io/) `OSS` - Social login core with backends for many OAuth and OpenID providers, plus separate integration packages for Django and Flask.
- [python3-saml](https://github.com/SAML-Toolkits/python3-saml) `OSS` - SAML 2.0 service provider toolkit for Python, with examples for Django, Flask, and Pyramid; no PyPI release since 2023.
- [Simple JWT](https://django-rest-framework-simplejwt.readthedocs.io/) `OSS` - JWT access and refresh token authentication for Django REST Framework, with token blacklisting and sliding tokens.

### Libraries for Go

- [crewjam/saml](https://github.com/crewjam/saml) `OSS` - SAML 2.0 service provider and IdP package for Go, including samlsp middleware that guards net/http handlers.
- [Fosite](https://github.com/ory/fosite) `OSS` - Extensible OAuth 2.0 and OpenID Connect framework for building authorization servers in Go; it is the engine inside Ory Hydra.
- [go-jose](https://github.com/go-jose/go-jose) `OSS` - JOSE implementation for Go covering JWS, JWE, JWK, and JWT, maintained as the community fork of square/go-jose.
- [go-oidc](https://github.com/coreos/go-oidc) `OSS` - OpenID Connect client support for Go that verifies ID tokens against provider discovery and JWKS, pairing with x/oauth2.
- [go-pkgz/auth](https://go-pkgz.umputun.dev/auth/) `OSS` - Drop-in social and email login for Go web services, issuing JWT cookies with a built-in dev OAuth server for local testing.
- [golang-jwt](https://golang-jwt.github.io/jwt/) `OSS` - Community-maintained continuation of dgrijalva/jwt-go for parsing, validating, and signing JWTs in Go.
- [gosaml2](https://github.com/russellhaering/gosaml2) `OSS` - SAML 2.0 service provider library in pure Go, using goxmldsig for XML signature validation.
- [Goth](https://github.com/markbates/goth) `OSS` - Multi-provider OAuth and OpenID login for Go web apps, with a gothic helper package for net/http style handlers.
- [jwx](https://github.com/lestrrat-go/jwx) `OSS` - Go modules for JWA, JWE, JWK, JWS, and JWT, including a JWK set cache that refreshes remote keys in the background.
- [x/oauth2](https://pkg.go.dev/golang.org/x/oauth2) `OSS` - Go team's OAuth 2.0 client package with token sources, auto refresh, PKCE helpers, and endpoints for common providers.
- [ZITADEL OIDC](https://github.com/zitadel/oidc) `OSS` - Certified OpenID Connect client and provider packages for Go, usable on their own without running ZITADEL.

### Libraries for Java and Kotlin

- [Apache Santuario](https://santuario.apache.org/) `OSS` - XML Signature and XML Encryption implementation for Java, the layer that SAML stacks such as OpenSAML depend on for signing.
- [Apache Shiro](https://shiro.apache.org/) `OSS` - Java security framework handling authentication, role and permission checks, session management, and cryptography outside any container.
- [Java Apereo CAS Client](https://github.com/apereo/java-cas-client) `OSS` - Servlet filters and validators that let Java web apps authenticate against a CAS server, with SAML 1.1 ticket validation support.
- [java-jwt](https://github.com/auth0/java-jwt) `OSS` - JWT creation and verification for Java and Android from Auth0, with a fluent builder API and pluggable key providers for rotation.
- [JJWT](https://github.com/jwtk/jjwt) `OSS` - Java JWT library with full JWS and JWE support, JWK handling, and a builder API for creating and parsing compact tokens.
- [Nimbus JOSE + JWT](https://connect2id.com/products/nimbus-jose-jwt) `OSS` - Java library for JWS, JWE, JWK, and JWT used under the hood by Spring Security's resource server and many other JVM stacks.
- [Nimbus OAuth 2.0 SDK with OpenID Connect extensions](https://connect2id.com/products/nimbus-oauth-openid-connect-sdk) `OSS` - Java model and parsers for OAuth 2.0 and OpenID Connect messages, including PAR, CIBA, DPoP, and OpenID Federation.
- [OpenSAML](https://shibboleth.atlassian.net/wiki/spaces/OSAML/overview) `OSS` - Shibboleth Consortium's Java SAML 1.1 and 2.0 library for building, signing, encrypting, and validating protocol messages.
- [pac4j](https://www.pac4j.org/) `OSS` - Security engine for JVM web frameworks with OAuth, OIDC, SAML, CAS, LDAP, and JWT clients, plus adapters for Spring, Play, and others.
- [Spring Authorization Server](https://github.com/spring-attic/spring-authorization-server) `OSS` `Archived` - Standalone OAuth 2.1 and OIDC server project for Spring, now archived; its code moved into Spring Security 7 and 1.5.x is the final line.
- [Spring Security](https://spring.io/projects/spring-security) `OSS` - Authentication and access control for Spring apps, with OAuth 2.0 client, resource server, SAML 2.0 SP, and authorization server modules.

### Libraries for .NET

- [ASP.NET Core Identity](https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity) `OSS` - Membership system built into ASP.NET Core for local accounts, password hashing, lockout, 2FA, and external OAuth logins.
- [AspNet.Security.OAuth.Providers](https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers) `OSS` - Community collection of ASP.NET Core authentication handlers for well over a hundred OAuth 2.0 and OIDC social providers.
- [Duende IdentityModel](https://docs.duendesoftware.com/identitymodel/) `OSS` - Apache-licensed .NET helpers for OAuth 2.0 and OIDC endpoints, token management, introspection, and native OIDC clients.
- [ITfoxtec Identity SAML2](https://github.com/ITfoxtec/ITfoxtec.Identity.Saml2) `OSS` - SAML 2.0 library for .NET and ASP.NET Core apps acting as a service provider or identity provider, maintained by FoxIDs.
- [Microsoft Identity Web](https://github.com/AzureAD/microsoft-identity-web) `OSS` - ASP.NET Core and OWIN glue on top of MSAL.NET for signing users in with Entra ID and calling protected downstream APIs.
- [Microsoft IdentityModel](https://github.com/AzureAD/azure-activedirectory-identitymodel-extensions-for-dotnet) `OSS` - Token libraries behind ASP.NET Core JWT bearer auth, covering JWT and SAML token validation, OIDC metadata, and key handling.
- [MSAL.NET](https://github.com/AzureAD/microsoft-authentication-library-for-dotnet) `OSS` - Microsoft Authentication Library for .NET apps, services, and MAUI clients that acquire tokens from Entra ID and Entra External ID.
- [OpenIddict](https://openiddict.com/) `OSS` - OAuth 2.0 and OpenID Connect server and client stack for ASP.NET Core and OWIN that you host inside your own app.
- [Sustainsys.Saml2](https://github.com/Sustainsys/Saml2) `OSS` - SAML 2.0 service provider handler for ASP.NET Core and older .NET stacks; v2 is MIT, while the v3 line splits MIT and commercial parts.

### Libraries for Rust

- [axum-login](https://github.com/maxcountryman/axum-login) `OSS` - Session-backed user login and permission checks for the axum web framework, built on tower-sessions.
- [jsonwebtoken](https://github.com/Keats/jsonwebtoken) `OSS` - JWT crate for Rust that encodes and decodes serde-typed claims and validates exp, nbf, aud, and iss on decode.
- [jwt-simple](https://github.com/jedisct1/rust-jwt-simple) `OSS` - JWT crate focused on a hard-to-misuse API, with optional pure-Rust crypto so it compiles to WebAssembly.
- [oauth2-rs](https://github.com/ramosbugs/oauth2-rs) `OSS` - Strongly typed OAuth 2.0 client for Rust with PKCE, device flow, token introspection, and revocation, sync or async.
- [openidconnect-rs](https://github.com/ramosbugs/openidconnect-rs) `OSS` - OpenID Connect relying party and provider types for Rust built on oauth2-rs, with discovery and ID token verification.
- [oxide-auth](https://github.com/197g/oxide-auth) `OSS` - OAuth 2.0 authorization server building blocks for Rust, with frontend crates for actix, axum, rocket, and other web frameworks.
- [samael](https://github.com/njaremko/samael) `OSS` - SAML 2.0 crate for Rust that parses and builds assertions and handles service provider flows, with optional xmlsec signing.

### Libraries for PHP

- [firebase/php-jwt](https://github.com/googleapis/php-jwt) `OSS` - Small PHP library for encoding and decoding JWTs, with JWK set parsing and a cached key set for remote JWKS endpoints.
- [HWIOAuthBundle](https://github.com/hwi/HWIOAuthBundle) `OSS` - Symfony bundle that adds OAuth 1.0a and OAuth 2.0 social login with dozens of preconfigured resource owners.
- [JWT Framework](https://docs.spomky-labs.com/jwt/) `OSS` - PHP implementation of the full JOSE family, including JWE and nested tokens, with Symfony bundle integration.
- [Laravel Passport](https://laravel.com/framework/docs/passport) `OSS` - First-party package that runs a full OAuth 2.0 authorization server inside a Laravel app, built on league/oauth2-server.
- [Laravel Sanctum](https://laravel.com/framework/docs/sanctum) `OSS` - Lightweight API token and cookie-based SPA authentication for Laravel, for cases where full OAuth is more than you need.
- [Laravel Socialite](https://laravel.com/framework/docs/socialite) `OSS` - Official Laravel package for OAuth sign-in with GitHub, Google, Facebook, and others, with community providers for many more.
- [lcobucci/jwt](https://lcobucci-jwt.readthedocs.io/) `OSS` - Strictly typed PHP library for issuing, parsing, and validating JWS tokens with explicit constraint checks.
- [LexikJWTAuthenticationBundle](https://github.com/lexik/LexikJWTAuthenticationBundle) `OSS` - Symfony bundle that issues and checks JWT bearer tokens for stateless API authentication.
- [OAuth 2.0 Client](https://oauth2-client.thephpleague.com/) `OSS` - PHP League base client for OAuth 2.0 providers, with official and third-party provider packages for most major services.
- [OAuth 2.0 Server](https://oauth2.thephpleague.com/) `OSS` - Spec-compliant OAuth 2.0 authorization and resource server library from the PHP League, with PSR-7 request handling.
- [OpenID-Connect-PHP](https://github.com/jumbojett/OpenID-Connect-PHP) `OSS` - Minimal OpenID Connect relying party for PHP that handles discovery, the code flow, and ID token signature checks.
- [php-saml](https://github.com/SAML-Toolkits/php-saml) `OSS` - SAML 2.0 service provider toolkit for PHP, originally from OneLogin, handling SSO, SLO, and metadata generation.

### Libraries for Ruby

- [Devise](https://github.com/heartcombo/devise) `OSS` - Rails authentication engine built on Warden, with modules for confirmable, lockable, recoverable, and OmniAuth integration.
- [Doorkeeper](https://doorkeeper.gitbook.io/guides/) `OSS` - OAuth 2.0 provider for Rails and Grape apps, with doorkeeper-openid_connect available as an OIDC extension.
- [json-jwt](https://github.com/nov/json-jwt) `OSS` - JWT, JWS, JWE, and JWK handling for Ruby by the author of the openid_connect gem, which depends on it.
- [OmniAuth](https://github.com/omniauth/omniauth) `OSS` - Rack middleware that standardizes multi-provider login, with hundreds of strategy gems for OAuth, OIDC, SAML, and LDAP.
- [OmniAuth OAuth2](https://github.com/omniauth/omniauth-oauth2) `OSS` - Generic OAuth 2.0 strategy base class that most provider-specific OmniAuth gems extend.
- [omniauth_openid_connect](https://github.com/omniauth/omniauth_openid_connect) `OSS` - OmniAuth strategy for any OpenID Connect provider, with discovery, PKCE, and ID token validation.
- [openid_connect](https://github.com/nov/openid_connect) `OSS` - OpenID Connect client and server building blocks for Ruby, covering discovery, dynamic registration, and ID tokens.
- [rack-oauth2](https://github.com/nov/rack-oauth2) `OSS` - Rack-level OAuth 2.0 client and server components for Ruby, including bearer token handling and client authentication methods.
- [Rodauth](https://rodauth.jeremyevans.net/) `OSS` - Ruby auth framework with dozens of features including WebAuthn, OTP, and JWT, storing password hashes in a separate locked-down table.
- [rodauth-oauth](https://gitlab.com/os85/rodauth-oauth) `OSS` - Rodauth extension that adds an OAuth 2.0 and OpenID Connect provider, including PAR, DPoP, and dynamic client registration.
- [ruby-jwt](https://github.com/jwt/ruby-jwt) `OSS` - Ruby implementation of RFC 7519 for signing and verifying JWTs, with JWK support and pluggable algorithms.
- [ruby-saml](https://github.com/SAML-Toolkits/ruby-saml) `OSS` - SAML 2.0 service provider library for Ruby, used by omniauth-saml and many Rails apps for enterprise SSO.
- [Sorcery](https://github.com/Sorcery/sorcery) `OSS` - Lean Rails authentication library offering password login, remember-me, activation, and external OAuth via opt-in submodules.

### Libraries for Mobile

- [AppAuth for Android](https://github.com/openid/AppAuth-Android) `OSS` - OpenID Foundation OAuth 2.0 and OIDC client for Android that runs the flow in Custom Tabs, following RFC 8252 for native apps.
- [AppAuth for iOS and macOS](https://openid.github.io/AppAuth-iOS/) `OSS` - OpenID Foundation OAuth 2.0 and OIDC client for Apple platforms, using ASWebAuthenticationSession and PKCE per RFC 8252.
- [flutter_appauth](https://github.com/MaikuB/flutter_appauth) `OSS` - Flutter plugin wrapping AppAuth for Android and iOS so Dart apps can run OAuth 2.0 and OIDC code flow with PKCE.
- [Kotlin Multiplatform OIDC](https://kalinjul.github.io/kotlin-multiplatform-oidc/) `OSS` - OpenID Connect code flow client for Kotlin Multiplatform, sharing auth logic across Android, iOS, and desktop targets.
- [MSAL for Android](https://github.com/AzureAD/microsoft-authentication-library-for-android) `OSS` - Microsoft Authentication Library for Android apps signing in with Entra ID, with broker support through Authenticator.
- [MSAL for iOS and macOS](https://github.com/AzureAD/microsoft-authentication-library-for-objc) `OSS` - Microsoft Authentication Library for Apple platforms that acquires Entra ID tokens, with SSO via the Authenticator broker.
- [React Native App Auth](https://nearform.com/open-source/react-native-app-auth) `OSS` - React Native bridge to AppAuth-iOS and AppAuth-Android for OAuth 2.0 and OIDC sign-in with PKCE.

### Passkeys and WebAuthn

- [FIDO2 .NET Library](https://github.com/passwordless-lib/fido2-net-lib) `OSS` - Server-side WebAuthn validation for .NET apps, covering the standard attestation formats and FIDO Metadata Service lookups.
- [go-webauthn](https://github.com/go-webauthn/webauthn) `OSS` - Go relying party library that grew out of the original Duo Labs code, handling passkey login and the common attestation formats.
- [java-webauthn-server](https://developers.yubico.com/java-webauthn-server/) `OSS` - Yubico relying party library for the JVM, including an attestation module that can resolve trust through the FIDO Metadata Service.
- [libfido2](https://developers.yubico.com/libfido2/) `OSS` - C library and command-line utilities for talking to FIDO2 and U2F authenticators, and the code OpenSSH uses for security keys.
- [OpenSK](https://github.com/google/OpenSK) `OSS` - Security key firmware written in Rust by Google, implementing FIDO U2F and CTAP2 on Nordic nRF52840 boards and dongles.
- [py_webauthn](https://duo-labs.github.io/py_webauthn/) `OSS` - Duo Labs helpers for generating WebAuthn options and verifying registration and authentication responses on a Python server.
- [python-fido2](https://developers.yubico.com/python-fido2/) `OSS` - Yubico package covering both sides of FIDO2 in Python, talking CTAP to authenticators and verifying WebAuthn on the server.
- [SimpleWebAuthn](https://simplewebauthn.dev/) `OSS` - TypeScript packages for browsers and Node.js that run passkey registration and authentication ceremonies and verify attestation.
- [virtualwebauthn](https://github.com/descope/virtualwebauthn) `OSS` - Go helpers from Descope that emulate an authenticator so WebAuthn registration and login can be exercised in automated tests.
- [WebAuthn Framework](https://docs.spomky-labs.com/webauthn/) `OSS` - PHP library plus Symfony bundle for registering and verifying passkeys, with attestation statement and metadata service support.
- [webauthn-rs](https://github.com/kanidm/webauthn-rs) `OSS` - Rust relying party implementation from the Kanidm project, with opinionated APIs for passkeys, security keys, and attested credentials.
- [webauthn-ruby](https://github.com/cedarcode/webauthn-ruby) `OSS` - Ruby gem for WebAuthn relying party operations that works in Rails or any Rack app to add passkey and security key sign-in.
- [WebAuthn4J](https://webauthn4j.github.io/webauthn4j/en/) `OSS` - Java library for parsing and verifying WebAuthn and CTAP2 attestation and assertion data, with a separate Spring Security module.

### Authorization Engines and Policy

- [Biscuit](https://www.biscuitsec.org/) `OSS` - Bearer token format with offline attenuation and a Datalog authorization language, implemented in Rust, Java, Go, and other languages.
- [Casbin](https://casbin.apache.org/) `OSS` - Embeddable access control library that expresses ACL, RBAC, and ABAC through a model config file, with ports in many languages.
- [Cedar](https://www.cedarpolicy.com/) `OSS` - Policy language and Rust evaluator from AWS for RBAC and ABAC rules, with schema validation and formally verified semantics.
- [Cerbos](https://github.com/cerbos/cerbos) `OSS` - Stateless policy decision point driven by YAML policies, deployed as a sidecar or service and queried over gRPC or HTTP.
- [OPAL](https://opal.ac/) `OSS` - Administration layer that pushes policy and data changes from Git and other sources to running OPA or Cedar agents in real time.
- [Open Policy Agent](https://www.openpolicyagent.org/) `OSS` - General-purpose policy engine that evaluates Rego against JSON input, used for API authorization, Kubernetes admission, and CI checks.
- [OpenFGA](https://openfga.dev/) `OSS` - Relationship-based authorization server modeled on Google Zanzibar, with a modeling DSL, a browser playground, and SDKs for several languages.
- [Ory Keto](https://www.ory.com/keto) `OSS` - Server for Zanzibar relation tuples exposing check, expand, and list operations over REST and gRPC, built to sit alongside other Ory services.
- [Oso](https://github.com/osohq/oso) `OSS` `Archived` - Archived open source library that embedded the Polar policy language in applications; its maintainers now point users to the hosted Oso Cloud.
- [Permify](https://permify.co/) `OSS` - Zanzibar-inspired authorization service whose schema DSL mixes relationship and attribute rules, served over gRPC and REST under AGPL-3.0.
- [Regorus](https://github.com/microsoft/regorus) `OSS` - Rego interpreter written in Rust by Microsoft, small enough to embed OPA-compatible policy evaluation without a Go runtime.
- [SpiceDB](https://authzed.com/spicedb) `OSS` - Zanzibar-style permissions database from AuthZed with a schema language, consistency tokens, and Postgres, CockroachDB, or Spanner storage.
- [Topaz](https://www.topaz.sh/) `OSS` - Local authorization service that pairs an OPA decision engine with a built-in directory for Zanzibar-style relationship data.

### Directory and Provisioning

- [389 Directory Server](https://www.port389.org/) `OSS` - LDAP server developed in the Fedora and Red Hat community, offering multi-supplier replication and a Cockpit-based admin console.
- [Apache Directory Server](https://directory.apache.org/apacheds/) `OSS` - Embeddable LDAP and Kerberos server written in Java, often started in-process for integration tests of directory-backed code.
- [Apache Syncope](https://syncope.apache.org/) `OSS` - Identity management system that provisions through ConnId connectors, runs approval workflows, and ships a CAS-based access manager.
- [Elimity SCIM](https://github.com/elimity-com/scim) `OSS` - Go package for building SCIM 2.0 service providers, handling routing, schema validation, and filter parsing around your own handlers.
- [FreeIPA](https://www.freeipa.org/) `OSS` - Linux identity stack that bundles 389 DS, MIT Kerberos, the Dogtag CA, and DNS, with host-based access control and Active Directory trusts.
- [GLAuth](https://glauth.github.io/) `OSS` - Small Go LDAP server that serves accounts from a config file, a SQL database, or an upstream directory, popular in home labs and test rigs.
- [LLDAP](https://github.com/lldap/lldap) `OSS` - Lightweight LDAP server in Rust with a web UI for users and groups, meant as a small backend for self-hosted SSO and apps.
- [midPoint](https://evolveum.com/midpoint/) `OSS` - Identity governance and administration platform from Evolveum, with provisioning connectors, role mining, access certifications, and audit.
- [OpenDJ](https://www.openidentityplatform.org/opendj) `OSS` - Java LDAPv3 directory server kept alive by Open Identity Platform as a community continuation of the ForgeRock OpenDJ codebase.
- [OpenLDAP](https://www.openldap.org/) `OSS` - Reference LDAPv3 server and client tools, with syncrepl-based multi-provider replication and the LMDB storage backend.
- [Samba](https://www.samba.org/) `OSS` - SMB and CIFS suite whose Active Directory domain controller mode serves Kerberos, LDAP, and Group Policy to Windows clients.
- [SCIM Gateway](https://github.com/jelhub/scimgateway) `OSS` - Node.js gateway whose plugins translate inbound SCIM calls into operations on Entra ID, LDAP, SQL databases, or arbitrary REST APIs.
- [scim2-models](https://scim2-models.readthedocs.io/) `OSS` - Pydantic models for SCIM 2.0 resources and messages, with sibling scim2-client, scim2-server, and scim2-cli projects in the same org.
- [UnboundID SCIM 2 SDK](https://github.com/pingidentity/scim2) `OSS` - Java SDK maintained by Ping Identity for building SCIM 2.0 clients and services, with typed resources, filters, and PATCH support.

### Secrets and Workload Identity

- [Bank-Vaults](https://bank-vaults.dev/) `OSS` - Kubernetes operator, mutating webhook, and CLI for running Vault clusters declaratively and injecting their secrets into pods.
- [cert-manager](https://cert-manager.io/) `OSS` - Kubernetes controller that requests and renews X.509 certificates from ACME, Vault, private CAs, and other issuers declared as resources.
- [Conjur Open Source](https://github.com/cyberark/conjur) `OSS` - CyberArk secrets manager with policy-as-code and machine authenticators for Kubernetes, cloud IAM, and JWT, released under LGPL-3.0.
- [EJBCA Community](https://www.ejbca.org/) `OSS` - Java certificate authority from Keyfactor with ACME, SCEP, EST, and CMP enrollment; the community edition is published under LGPL-2.1.
- [External Secrets Operator](https://external-secrets.io/) `OSS` - Kubernetes operator that syncs values from AWS Secrets Manager, Azure Key Vault, Vault, and other stores into native Secrets.
- [Infisical](https://github.com/Infisical/infisical) `OSS` - Secrets manager with a web dashboard, CLI, Kubernetes operator, and dynamic secrets; code is MIT except ee directories under a commercial license.
- [OpenBao](https://openbao.org/) `OSS` - Linux Foundation fork of HashiCorp Vault that stays under MPL-2.0, created after Vault moved to the Business Source License.
- [Sealed Secrets](https://github.com/bitnami/sealed-secrets) `OSS` - Kubernetes controller and kubeseal CLI that encrypt Secrets with a cluster-held key so the ciphertext is safe to keep in Git.
- [SOPS](https://getsops.io/) `OSS` - Encrypts values inside YAML, JSON, ENV, and INI files with age, PGP, or cloud KMS keys so secrets can be committed to Git.
- [SPIFFE](https://spiffe.io/) `OSS` - Workload identity specifications defining SPIFFE IDs, X.509 and JWT SVIDs, trust bundles, and the Workload API; a CNCF graduated project.
- [SPIKE](https://spike.ist/) `OSS` - Lightweight secrets store from the SPIFFE community that authenticates clients by SPIFFE ID and spreads root key shards across keepers.
- [SPIRE](https://spiffe.io/docs/latest/spire-about/) `OSS` - Reference SPIFFE runtime that attests nodes and workloads, then issues short-lived X.509 and JWT SVIDs through the Workload API.
- [step-ca](https://smallstep.com/docs/step-ca/) `OSS` - Online private CA from Smallstep that issues X.509 and SSH certificates through ACME, OIDC, cloud instance identity, and JWK provisioners.
- [trust-manager](https://cert-manager.io/docs/trust/trust-manager/) `OSS` - Companion operator from the cert-manager project that distributes CA trust bundles across namespaces as ConfigMaps or Secrets.

### Privileged Access and Session Tooling

- [Apache Guacamole](https://guacamole.apache.org/) `OSS` - Clientless gateway that brokers RDP, VNC, and SSH sessions into the browser, with LDAP, SAML, and OIDC extensions and session recording.
- [Cashier](https://github.com/cashier-go/cashier) `OSS` - SSH certificate authority that issues short-lived user certificates after an OAuth login, with a client that loads them into the agent.
- [JumpServer](https://github.com/jumpserver/jumpserver) `OSS` - Web-based bastion host for SSH, RDP, Kubernetes, and database access, with asset authorization rules and session audit and replay.
- [Octelium](https://octelium.com/) `OSS` - Self-hosted zero trust access platform built from layer-7 identity-aware proxies, usable as a VPN replacement with secretless upstream access.
- [opkssh](https://github.com/openpubkey/opkssh) `OSS` - SSH login with OpenID Connect via OpenPubkey, minting SSH keys that expire within hours from Google, Microsoft, or GitLab sign-in.
- [Ory Oathkeeper](https://www.ory.com/oathkeeper) `OSS` - Identity and access proxy that authenticates requests, applies access rules, and forwards headers or signed JWTs to upstream services.
- [Pomerium](https://www.pomerium.com/) `OSS` - Identity-aware reverse proxy that checks every request to internal apps against IdP claims and policy, replacing VPN access.
- [ShellHub](https://www.shellhub.io/) `OSS` - Centralized SSH gateway that reaches Linux devices behind NAT and firewalls through an agent, with a web terminal and per-device access.
- [Teleport](https://github.com/gravitational/teleport) `OSS` - Access proxy for SSH, Kubernetes, databases, and RDP using short-lived certificates; source is AGPL-3.0, official Community builds are not.
- [Vouch Proxy](https://github.com/vouch/vouch-proxy) `OSS` - SSO helper for the NGINX auth_request module that validates a session cookie and sends users to an OAuth or OIDC provider to log in.
- [Warpgate](https://warpgate.null.page/) `OSS` - Rust bastion that transparently proxies SSH, HTTPS, Kubernetes, MySQL, PostgreSQL, RDP, and VNC connections without a client wrapper.

### Decentralized Identity Tooling

- [ACA-Py](https://aca-py.org/) `OSS` - Python cloud agent for issuing, holding, and verifying AnonCreds and W3C credentials over DIDComm, controlled through an admin API.
- [Askar](https://github.com/openwallet-foundation/askar) `OSS` - Rust secure storage and crypto library used by ACA-Py and Credo to hold keys, credentials, and wallet records, with Python and JS wrappers.
- [Bifold Wallet](https://github.com/openwallet-foundation/bifold-wallet) `OSS` - React Native wallet foundation built on Credo, reused as the base for government mobile credential wallets in Canada and elsewhere.
- [Credo](https://credo.js.org/) `OSS` - TypeScript framework, formerly Aries Framework JavaScript, for building wallets, issuers, and verifiers on Node.js and React Native.
- [EUDI Wallet Reference Implementation](https://github.com/eu-digital-identity-wallet) `OSS` - European Commission GitHub org with reference Android and iOS wallets, issuer and verifier services, and libraries for the EUDI Wallet.
- [Hyperledger Identus](https://identus.io/) `OSS` - Credential stack with a Scala cloud agent and edge SDKs for mobile and web, anchoring identifiers through the did:prism method.
- [Hyperledger Indy Node](https://github.com/hyperledger-indy/indy-node) `OSS` `Archived` - Permissioned ledger for public DIDs and AnonCreds artifacts that underpinned Sovrin; the repository has had no commits since February 2025.
- [Inji Wallet](https://github.com/inji/inji-wallet) `OSS` - Mobile credential wallet from the MOSIP ecosystem for downloading, storing, and sharing verifiable credentials, including offline QR sharing.
- [KERIpy](https://keripy.readthedocs.io/en/latest/) `OSS` - Python reference implementation of KERI, the Key Event Receipt Infrastructure for self-certifying identifiers with pre-rotated keys.
- [Sphereon SSI SDK](https://github.com/Sphereon-Opensource/SSI-SDK) `OSS` - Veramo plugins covering OpenID4VCI, OpenID4VP, SIOPv2, and Presentation Exchange for building wallets and issuers in TypeScript.
- [SpruceID ssi](https://github.com/spruceid/ssi) `OSS` - Rust crates implementing DIDs, W3C verifiable credentials, and data integrity and JWT proofs, used across SpruceID's own tooling.
- [Universal Registrar](https://uniregistrar.io/) `OSS` - Counterpart to the Universal Resolver that creates, updates, and deactivates DIDs through per-method drivers behind one HTTP API.
- [Universal Resolver](https://uniresolver.io/) `OSS` - DIF service that resolves DIDs across many methods by routing to per-method driver containers, with a public development instance.
- [Veramo](https://veramo.io/) `OSS` - Modular TypeScript framework for DIDs and verifiable credentials, extended through plugins for key management, DID methods, and formats.
- [walt.id Identity](https://github.com/walt-id/waltid-identity) `OSS` - Kotlin libraries and services for issuing, holding, and verifying credentials over OpenID4VCI and OpenID4VP, including SD-JWT VC and mdoc.

### Testing and Developer Tools

- [Google OAuth 2.0 Playground](https://developers.google.com/oauthplayground/) `Free` - Google-hosted walkthrough of authorization and token exchange against Google APIs, or against a custom OAuth endpoint you configure.
- [jwt-cli](https://github.com/mike-engel/jwt-cli) `OSS` - Command-line tool written in Rust for encoding and decoding JWTs, with flags for algorithm, claims, and secret or key files.
- [JWT.io](https://www.jwt.io/) `Free` - Browser-based decoder and signature checker for JSON Web Tokens, run by Auth0, with an index of JWT libraries by language.
- [jwt.ms](https://jwt.ms/) `Free` - Microsoft-hosted token decoder that shows Entra ID claims alongside short explanations of what each claim means.
- [mock-oauth2-server](https://github.com/navikt/mock-oauth2-server) `OSS` - Scriptable OAuth 2.0 and OIDC server from NAV for tests, issuing tokens with configurable claims from Docker or inside JVM test suites.
- [OAuth 2.0 Debugger](https://oauthdebugger.com/) `Free` - Hosted page from Okta for composing an OAuth 2.0 authorization request against any server and capturing the redirect response.
- [OAuth Tools](https://oauth.tools/) `Free` - Curity web app for running OAuth and OIDC flows against any provider and inspecting tokens, introspection, and userinfo responses.
- [OAuth.com Playground](https://www.oauth.com/playground/) `Free` - Interactive step-by-step run of authorization code, PKCE, device, and OIDC flows against a sandbox server, with each request shown.
- [oauth2l](https://github.com/google/oauth2l) `OSS` - Google command-line tool for fetching, caching, and inspecting OAuth 2.0 access tokens, with a curl wrapper that attaches them to requests.
- [OIDC Server Mock](https://github.com/Soluto/oidc-server-mock) `OSS` - Docker image wrapping Duende IdentityServer with configurable users and clients, for exercising OIDC flows in local and CI environments.
- [OpenID Conformance Suite](https://gitlab.com/openid/conformance-suite) `OSS` - OpenID Foundation test harness for OIDC, FAPI, CIBA, PAR, and DPoP implementations, used for certification and runnable locally.
- [OpenID Connect Debugger](https://oidcdebugger.com/) `Free` `OSS` - Builds an OIDC authorization request, sends you to the provider, and displays the code or tokens that come back.
- [Passkeys Debugger](https://www.passkeys-debugger.io/) `Free` - Hosted WebAuthn tester from Corbado that runs passkey ceremonies with custom options and parses the resulting responses.
- [SAML-tracer](https://github.com/simplesamlphp/SAML-tracer) `Free` `OSS` - Firefox and Chrome extension that captures SAML and WS-Federation messages in browser traffic and decodes them for inspection.
- [step CLI](https://smallstep.com/docs/step-cli/) `OSS` - Smallstep command-line toolkit for creating and inspecting X.509 certificates, JWTs, and JWKs, and for running OAuth flows from a terminal.
- [webauthn.io](https://webauthn.io/) `Free` `OSS` - Duo Labs demo for trying passkey registration and login while toggling attestation, user verification, and discoverable credential options.
- [webauthn.me](https://www.webauthn.me/) `Free` `OSS` - Auth0 demo and debugger that steps through a WebAuthn ceremony and decodes the client data and authenticator data it produces.

## Security Research

Offensive tooling is listed for authorized assessment only. Breach write-ups link to primary sources where they exist.

### Assessment and Attack Tooling

- [AADInternals](https://aadinternals.com/aadinternals/) `OSS` `Archived` - PowerShell module for researching Entra ID and Microsoft 365 internals such as federation, pass-through auth, and tokens; no commits since September 2025.
- [AzureHound](https://github.com/SpecterOps/AzureHound) `OSS` - Collector that pulls Entra ID and Azure Resource Manager objects and permissions into BloodHound for attack path analysis.
- [BloodHound Community Edition](https://github.com/SpecterOps/BloodHound) `OSS` - Attack path analysis that graphs Active Directory and Entra ID relationships to show how an account can reach privileged access.
- [BloodHound.py](https://github.com/dirkjanm/BloodHound.py) `OSS` - Python ingestor for BloodHound that collects Active Directory data over LDAP and SMB from non-Windows hosts.
- [Certify](https://github.com/GhostPack/Certify) `OSS` - C# tool from GhostPack that enumerates AD CS templates and certificate authorities and requests certificates to test escalation paths.
- [Certipy](https://github.com/ly4k/Certipy) `OSS` - Python tool for finding and abusing Active Directory Certificate Services misconfigurations across the documented ESC escalation paths.
- [Cloudsplaining](https://github.com/salesforce/cloudsplaining) `OSS` - AWS IAM assessment that flags least-privilege violations, including privilege escalation and data exfiltration actions, in a risk-ranked report.
- [Coercer](https://github.com/p0dalirius/Coercer) `OSS` - Python script that tests whether Windows servers can be forced to authenticate to another host through a dozen MS-RPC methods.
- [EntraFalcon](https://github.com/CompassSecurity/EntraFalcon) `OSS` - PowerShell tool that enumerates Entra ID users, groups, apps, and role assignments to surface privileged objects and risky grants.
- [GraphRunner](https://github.com/dafthack/GraphRunner) `OSS` - Post-exploitation toolset for Microsoft Graph that enumerates permissions, searches mail and files, and tests OAuth app injection.
- [Impacket](https://github.com/fortra/impacket) `OSS` - Python classes and example scripts for SMB, MSRPC, LDAP, and Kerberos, used widely for Active Directory credential and relay testing.
- [jwt_tool](https://github.com/ticarpi/jwt_tool) `OSS` `Archived` - Python toolkit for testing JSON Web Tokens against signature bypass, key confusion, claim tampering, and weak secrets; inactive since 2025.
- [Kerbrute](https://github.com/ropnop/kerbrute) `OSS` `Archived` - Go utility that enumerates valid Active Directory usernames and tests passwords via Kerberos pre-authentication; last updated in 2024.
- [krbrelayx](https://github.com/dirkjanm/krbrelayx) `OSS` - Toolkit for Kerberos relaying and unconstrained delegation abuse, with helper scripts for adding DNS records and SPNs in Active Directory.
- [Locksmith](https://github.com/jakehildreth/Locksmith) `Free` - PowerShell script that finds and optionally fixes common AD CS misconfigurations; source available under a Commons Clause license.
- [Maester](https://maester.dev/) `OSS` - Pester-based test framework that checks Entra ID and Microsoft 365 configuration against security baselines on a schedule.
- [MFASweep](https://github.com/dafthack/MFASweep) `OSS` - PowerShell script that signs in to Microsoft services over several protocols to find where an account is not prompted for MFA.
- [Monkey365](https://github.com/silverhack/monkey365) `OSS` - PowerShell assessment of Microsoft 365, Azure, and Entra ID configuration against CIS benchmarks and other baselines.
- [PingCastle](https://www.pingcastle.com/) `OSS` - Active Directory risk assessment that scores privileged groups, trusts, and stale objects; free Community Edition with paid tiers.
- [PMapper](https://github.com/nccgroup/PMapper) `OSS` `Archived` - Graphs AWS IAM principals and policies to find privilege escalation paths and answer who can perform an action; last updated in 2024.
- [Purple Knight](https://www.semperis.com/purple-knight/) `Free` - Free scanner from Semperis that checks Active Directory, Entra ID, and Okta for indicators of exposure and compromise.
- [ROADtools](https://github.com/dirkjanm/ROADtools) `OSS` - Framework for exploring Microsoft Entra ID, including roadrecon for dumping tenant data and roadtx for token and device registration workflows.
- [Rubeus](https://github.com/GhostPack/Rubeus) `OSS` - C# toolkit for Kerberos interaction and abuse, covering ticket requests, roasting, delegation, and pass-the-ticket testing.
- [SAML Raider](https://github.com/PortSwigger/saml-raider) `OSS` - Burp Suite extension for intercepting and editing SAML messages, with XML signature wrapping attacks and certificate cloning.
- [TokenTacticsV2](https://github.com/f-bader/TokenTacticsV2) `OSS` - PowerShell module for requesting and refreshing Entra ID tokens for first-party clients, forked from TokenTactics with CAE support.

### Detection and Threat Hunting

- [Elastic Detection Rules](https://github.com/elastic/detection-rules) `Free` - Rule set behind Elastic Security, with integration rules for Okta, Entra ID, Microsoft 365, and AWS under the Elastic License 2.0.
- [Hayabusa](https://github.com/Yamato-Security/hayabusa) `OSS` - Sigma-based threat hunting and timeline generator for Windows event logs, useful for spotting logon and Kerberos abuse on domain controllers.
- [Hunting Queries and Detection Rules](https://github.com/Bert-JanP/Hunting-Queries-Detection-Rules) `OSS` - Community KQL queries for Defender XDR and Microsoft Sentinel, with sections on Entra ID, identity, and cloud app activity.
- [Microsoft Entra Security Operations Guide](https://learn.microsoft.com/en-us/entra/architecture/security-operations-introduction) `Free` - Microsoft guidance on which Entra ID user, privileged account, application, and device events to monitor and alert on.
- [Microsoft Incident Response Playbooks](https://learn.microsoft.com/en-us/security/operations/incident-response-playbooks) `Free` - Step-by-step investigation guides from Microsoft for password spray, phishing, and app consent grant incidents.
- [Microsoft Sentinel Solution for Entra ID](https://github.com/Azure/Azure-Sentinel/tree/master/Solutions/Microsoft%20Entra%20ID) `OSS` - Analytic rules, workbooks, and playbooks in the Azure-Sentinel repository for Entra ID sign-in and audit logs.
- [Microsoft-Extractor-Suite](https://github.com/invictus-ir/Microsoft-Extractor-Suite) `OSS` - PowerShell module from Invictus IR for collecting Microsoft 365 and Entra ID evidence such as unified audit and sign-in logs.
- [MITRE ATT&CK Identity Provider Matrix](https://attack.mitre.org/matrices/enterprise/cloud/identityprovider/) `Free` - ATT&CK matrix filtered to identity provider platforms, mapping techniques like valid accounts, MFA request generation, and token theft.
- [Okta Security Detection Catalog](https://github.com/okta/customer-detections) `OSS` - Detections, hunting queries, and System Log field notes published by Okta's incident response team for Okta customers.
- [Panther Analysis](https://github.com/panther-labs/panther-analysis) `OSS` - Python detection rules for Panther, including rule packs for Okta, Auth0, Duo, OneLogin, Entra ID sign-ins, and Google Workspace.
- [Sigma](https://github.com/SigmaHQ/sigma) `Free` - Vendor-neutral detection rule format and community rules, with cloud folders for Azure, Microsoft 365, AWS, and GCP; rules under DRL 1.1.
- [Splunk Security Content](https://research.splunk.com/) `OSS` - Analytic stories and detections from the Splunk Threat Research Team, searchable by ATT&CK technique and data source.
- [Untitled Goose Tool](https://github.com/cisagov/untitledgoosetool) `OSS` `Gov` - CISA incident response tool that exports Entra ID, Azure, and Microsoft 365 audit and sign-in data for offline review.

### Hardening Guides and Benchmarks

- [AWS IAM Security Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) `Free` - AWS recommendations for federation, temporary credentials, root user protection, least privilege, and pruning unused access.
- [Best Practices for Securing Active Directory](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/security-best-practices/best-practices-for-securing-active-directory) `Free` - Microsoft guidance on reducing the Active Directory attack surface, protecting privileged groups, and monitoring for compromise.
- [CIS Microsoft 365 Foundations Benchmark](https://www.cisecurity.org/benchmark/microsoft_365) `Free` - Consensus configuration benchmark covering Microsoft 365 and Entra ID settings, downloadable as a free PDF after registration.
- [CISA Secure Cloud Business Applications (SCuBA)](https://www.cisa.gov/resources-tools/services/secure-cloud-business-applications-scuba-project) `Gov` `Free` - CISA secure configuration baselines for Microsoft 365 and Google Workspace, including identity and Entra ID settings.
- [Enterprise Access Model](https://learn.microsoft.com/en-us/security/privileged-access-workstations/privileged-access-access-model) `Free` - Microsoft model that replaced the legacy AD tier model, separating control, management, data, and user access planes.
- [Google Cloud IAM Best Practices](https://docs.cloud.google.com/iam/docs/using-iam-securely) `Free` - Google Cloud checklist for least-privilege roles, service account handling, policy management, and auditing IAM changes.
- [Google Workspace Security Checklist](https://knowledge.workspace.google.com/admin/security/security-checklist-for-medium-and-large-businesses-100-users) `Free` - Admin checklist for Workspace tenants over 100 users, covering super admin protection, 2SV and security keys, and third-party app access.
- [Okta Admin Account Best Practices](https://support.okta.com/help/s/article/best-practices-for-securing-okta-workforce-identity-cloud-admin-accounts) `Free` - Okta support article on locking down admin and service accounts in Workforce Identity Cloud, including session and sign-in policies.
- [Okta IDaaS STIG](https://sec.okta.com/articles/2026/02/okta-STIG-hardening-nhi/) `Free` - Okta's notes on the DISA Okta IDaaS STIG, now at version 1.1 with checks for API tokens, network zones, and non-human identities.
- [Plan a Conditional Access Deployment](https://learn.microsoft.com/en-us/entra/identity/conditional-access/plan-conditional-access) `Free` - Microsoft planning guide for designing, testing in report-only mode, and rolling out Entra Conditional Access policies.
- [ScubaGear](https://github.com/cisagov/ScubaGear) `OSS` `Gov` - CISA PowerShell tool that checks a Microsoft 365 tenant, including Entra ID, against the SCuBA secure configuration baselines.
- [ScubaGoggles](https://github.com/cisagov/ScubaGoggles) `OSS` `Gov` - CISA assessment tool and baselines that compare Google Workspace admin settings with SCuBA secure configuration guidance.
- [Securing Privileged Access](https://learn.microsoft.com/en-us/security/privileged-access-workstations/overview) `Free` - Microsoft strategy for protecting privileged accounts, intermediaries, and admin workstations against credential theft.
- [Securing Privileged Access in Entra ID](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/security-planning) `Free` - Staged roadmap for protecting Entra ID admin roles in hybrid and cloud tenants, from emergency accounts to PIM and phishing-resistant MFA.

### Breach Analyses and Incident Write-ups

- [23andMe: 2023 Credential Stuffing Incident](https://www.23andme.org/blog/articles/addressing-data-security-concerns/) `Free` - Company statement on attackers logging in with credentials reused from other breaches and scraping DNA Relatives profile data.
- [CircleCI: January 2023 Security Incident](https://circleci.com/blog/jan-4-2023-incident-report/) `Free` - Incident report describing malware on an engineer's laptop that stole a 2FA-backed SSO session cookie used to reach production.
- [CISA and FBI: Scattered Spider Advisory (AA23-320A)](https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-320a) `Gov` - Joint advisory on Scattered Spider tradecraft, including help desk social engineering, SIM swapping, MFA fatigue, and IdP abuse.
- [CISA: Post-Compromise Activity in Microsoft Cloud (AA21-008A)](https://www.cisa.gov/news-events/cybersecurity-advisories/aa21-008a) `Gov` - Advisory issued during the SolarWinds response on forged SAML tokens, abused app credentials, and how to hunt for them in Entra ID.
- [Cisco: May 2022 Corporate Network Intrusion](https://blog.talosintelligence.com/recent-cyber-attack/) `Free` - Talos write-up of credentials synced from an employee's personal Google account, then vishing and repeated MFA pushes to get VPN access.
- [Cloudflare: Thanksgiving 2023 Security Incident](https://blog.cloudflare.com/thanksgiving-2023-security-incident) `Free` - Account of a nation-state actor reaching Atlassian systems with a token and service account credentials stolen in the Okta breach and not rotated.
- [CSRB: Review of Lapsus$ and Related Groups](https://www.cisa.gov/sites/default/files/2023-08/CSRB_Lapsus%24_508c.pdf) `Gov` - Cyber Safety Review Board report on how Lapsus$ used SIM swapping, MFA fatigue, and insider recruitment against large companies.
- [CSRB: Review of the Summer 2023 Exchange Online Intrusion](https://www.cisa.gov/resources-tools/resources/CSRB-Review-Summer-2023-MEO-Intrusion) `Gov` - Cyber Safety Review Board findings on Storm-0558 forging tokens with a stolen Microsoft consumer signing key to read cloud mailboxes.
- [Dirk-jan Mollema: Entra ID Actor Token Flaw (CVE-2025-55241)](https://dirkjanm.io/obtaining-global-admin-in-every-entra-id-tenant-with-actor-tokens/) `Free` - Researcher write-up showing how undocumented Actor tokens and an Azure AD Graph validation flaw allowed cross-tenant Global Admin impersonation.
- [GitHub: Stolen OAuth User Tokens (April 2022)](https://github.blog/news-insights/company-news/security-alert-stolen-oauth-user-tokens/) `Free` - GitHub notice on OAuth user tokens issued to Heroku and Travis CI being stolen and used to download private repositories.
- [Google GTIG: Salesloft Drift OAuth Token Theft](https://cloud.google.com/blog/topics/threat-intelligence/data-theft-salesforce-instances-via-salesloft-drift) `Free` - Threat intelligence report on UNC6395 using stolen Drift OAuth tokens to export Salesforce data and hunt it for further credentials.
- [Google GTIG: UNC6040 Salesforce Vishing Campaign](https://cloud.google.com/blog/topics/threat-intelligence/voice-phishing-data-extortion) `Free` - Report on callers posing as IT support who talked staff into authorizing a malicious connected app in their Salesforce org.
- [LastPass: 2022 Incident Update and Recommended Actions](https://blog.lastpass.com/posts/security-incident-update-recommended-actions) `Free` - LastPass update on a DevOps engineer targeted through vulnerable third-party software, whose stolen secrets opened cloud backup storage.
- [Mandiant: UNC5537 Snowflake Customer Data Theft](https://cloud.google.com/blog/topics/threat-intelligence/unc5537-snowflake-data-theft-extortion) `Free` - Investigation of a campaign that used infostealer-harvested credentials against Snowflake customer accounts that lacked MFA.
- [Microsoft: Midnight Blizzard Corporate Email Intrusion](https://www.microsoft.com/en-us/msrc/blog/2024/01/microsoft-actions-following-attack-by-nation-state-actor-midnight-blizzard) `Free` - MSRC disclosure of a password spray against a legacy test tenant account whose permissions were used to read corporate mailboxes.
- [Microsoft: Storm-0558 Key Acquisition Investigation](https://www.microsoft.com/en-us/msrc/blog/2023/09/results-of-major-technical-investigations-for-storm-0558-key-acquisition) `Free` - MSRC findings on how a consumer signing key may have left its secure environment, with a 2024 note that the crash dump theory is unconfirmed.
- [NYDFS: Twitter July 2020 Investigation Report](https://www.dfs.ny.gov/system/files/documents/2026/07/Twitter-Investigation-Report.pdf) `Gov` - Regulator report on attackers posing as Twitter IT staff by phone to collect employee credentials and reach internal account tools.
- [Okta: January 2022 Lapsus$ Compromise](https://www.okta.com/blog/company-and-culture/oktas-investigation-of-the-january-2022-compromise/) `Free` - Okta's investigation of Lapsus$ remote access to a Sitel support engineer's computer and what that engineer could see in customer tenants.
- [Okta: October 2023 Support System Incident](https://sec.okta.com/articles/2023/11/unauthorized-access-oktas-support-case-management-system-root-cause/) `Free` - Root cause analysis of a service account saved to a personal Google profile, used to pull session tokens from customer HAR files.
- [Retool: SMS Phishing and Authenticator Sync Breach](https://retool.com/blog/mfa-isnt-mfa) `Free` - Retool's account of an SMS phishing link and a voice call that obtained an MFA code, with Google Authenticator cloud sync exposing more codes.
- [Twilio: August 2022 Social Engineering Attack](https://www.twilio.com/en-us/blog/archive/2022/august-2022-social-engineering-attack) `Free` - Twilio's incident report on SMS phishing messages that harvested employee credentials and exposed customer account data.
- [Uber: September 2022 Security Incident](https://www.uber.com/us/en/newsroom/security-update/) `Free` - Uber's update on a contractor's stolen password and repeated MFA push requests that the contractor eventually accepted.

### Threat and Industry Reports

- [Cisco Duo Trusted Access Report](https://resources.duo.com/explore/assets/2024-duo-trusted-access-report) `Free` - Report built on Duo authentication telemetry that tracks MFA usage, bypass methods, and device trust patterns.
- [CrowdStrike Global Threat Report](https://www.crowdstrike.com/en-us/global-threat-report/) `Free` - Yearly adversary report from CrowdStrike covering malware-free intrusions, credential abuse, and cloud and identity attacks; download is form-gated.
- [ENISA Threat Landscape](https://www.enisa.europa.eu/topics/cyber-threats/threat-landscape) `Free` `Gov` - EU cybersecurity agency's yearly assessment of threats, actors, and trends across Europe, plus sector-specific editions.
- [FIDO Passkey Index](https://fidoalliance.org/passkey-index/) `Free` - FIDO Alliance benchmark compiled from large service providers that tracks passkey eligibility, sign-in share, and success rates.
- [IBM Cost of a Data Breach Report](https://www.ibm.com/reports/data-breach) `Free` - Yearly study of breach costs and time to contain, broken down by initial attack vector, industry, and region.
- [Mandiant M-Trends](https://cloud.google.com/security/resources/m-trends) `Free` - Yearly findings from Mandiant incident response engagements, including dwell time, initial infection vectors, and stolen credential use.
- [Microsoft Digital Defense Report](https://www.microsoft.com/en-us/corporate-responsibility/cybersecurity/microsoft-digital-defense-report-2025/) `Free` - Microsoft's yearly threat landscape report drawing on its telemetry, with sections on identity attacks, password spray, and token theft.
- [Okta Businesses at Work](https://www.okta.com/reports/businesses-at-work/) `Free` - Yearly report from Okta sign-in data on which apps organizations deploy and how MFA factor adoption is changing.
- [Red Canary Threat Detection Report](https://redcanary.com/threat-detection-report/) `Free` - Yearly ranking of the ATT&CK techniques and threats Red Canary detected most, with detection guidance for each, including identity and cloud.
- [SpyCloud Identity Exposure Report](https://spycloud.com/resource/report/spycloud-annual-identity-exposure-report-2026/) `Free` - Yearly analysis of recaptured breach, phishing, and infostealer data, with figures on exposed credentials, session cookies, and API keys.
- [Thales Digital Trust Index](https://cpl.thalesgroup.com/digital-trust-index) `Free` - Consumer survey from Thales on trust in digital services, sharing personal data, and attitudes toward login and authentication.
- [Verizon Data Breach Investigations Report](https://www.verizon.com/business/resources/reports/dbir/) `Free` - Yearly breach dataset analysis that breaks down how credentials, phishing, and the human element figure in confirmed breaches.

## Vendor Directory

Commercial products, one category each, alphabetical, one neutral sentence per vendor. The full directory with every vendor lives in VENDORS.md to keep this page readable.

- [Workforce IAM](https://github.com/start-with-identity/awesome-identity/blob/main/VENDORS.md#workforce-iam) - Single sign-on, directory, and access management for employees. 17 listed.
- [Customer Identity (CIAM)](https://github.com/start-with-identity/awesome-identity/blob/main/VENDORS.md#customer-identity-ciam) - Sign-up, login, and profile management for customer-facing apps. 25 listed.
- [MFA and Passwordless](https://github.com/start-with-identity/awesome-identity/blob/main/VENDORS.md#mfa-and-passwordless) - Second factors, hardware keys, and passwordless sign-in. 14 listed.
- [Privileged Access Management](https://github.com/start-with-identity/awesome-identity/blob/main/VENDORS.md#privileged-access-management) - Vaulting, brokering, and recording of privileged sessions. 14 listed.
- [Identity Governance and Administration](https://github.com/start-with-identity/awesome-identity/blob/main/VENDORS.md#identity-governance-and-administration) - Access requests, certifications, and lifecycle automation. 19 listed.
- [Identity Threat Detection and Response](https://github.com/start-with-identity/awesome-identity/blob/main/VENDORS.md#identity-threat-detection-and-response) - Detection of attacks against identity infrastructure and accounts. 19 listed.
- [Cloud Entitlements (CIEM)](https://github.com/start-with-identity/awesome-identity/blob/main/VENDORS.md#cloud-entitlements-ciem) - Discovery and right-sizing of cloud permissions. 7 listed.
- [Secrets Management](https://github.com/start-with-identity/awesome-identity/blob/main/VENDORS.md#secrets-management) - Storage, rotation, and delivery of credentials and keys. 9 listed.
- [Machine, Workload, and AI Agent Identity](https://github.com/start-with-identity/awesome-identity/blob/main/VENDORS.md#machine-workload-and-ai-agent-identity) - Identity and access for services, workloads, and AI agents. 10 listed.
- [Authorization](https://github.com/start-with-identity/awesome-identity/blob/main/VENDORS.md#authorization) - Hosted and managed fine-grained authorization services. 7 listed.
- [Identity Verification](https://github.com/start-with-identity/awesome-identity/blob/main/VENDORS.md#identity-verification) - Document checks, biometrics, and KYC onboarding. 45 listed.
- [Decentralized Identity](https://github.com/start-with-identity/awesome-identity/blob/main/VENDORS.md#decentralized-identity) - Verifiable credential issuance, wallets, and verification. 12 listed.
- [PKI and Certificate Lifecycle](https://github.com/start-with-identity/awesome-identity/blob/main/VENDORS.md#pki-and-certificate-lifecycle) - Certificate authorities and certificate lifecycle management. 8 listed.
- [Password Management](https://github.com/start-with-identity/awesome-identity/blob/main/VENDORS.md#password-management) - Password managers for individuals and teams. 17 listed.
- [Zero Trust Access](https://github.com/start-with-identity/awesome-identity/blob/main/VENDORS.md#zero-trust-access) - Identity-aware access to private apps and infrastructure. 13 listed.

## Learning

### Books

- [Advanced API Security](https://link.springer.com/book/10.1007/978-1-4842-2050-4) `Paid` - Prabath Siriwardena walks through OAuth 2.0 grant types, token binding, JWT, JOSE, and UMA in the context of securing APIs (2nd edition, 2020).
- [API Security in Action](https://www.manning.com/books/api-security-in-action) `Paid` - Neil Madden covers token-based auth, OAuth, capability URLs, and Kubernetes service identity while hardening a working Java API.
- [Digital Identity (Windley, 2005)](https://www.oreilly.com/library/view/digital-identity/0596008783/) `Paid` - Early O'Reilly title on identity management architecture for enterprises, still useful for the reasoning behind federation and directories.
- [Hacking Multifactor Authentication](https://www.wiley.com/en-us/Hacking+Multifactor+Authentication-p-9781119650799) `Paid` - Roger Grimes catalogs ways MFA gets bypassed, from SIM swaps and phishing proxies to recovery flows, and how to choose sturdier factors.
- [Identity and Data Security for Web Development](https://www.oreilly.com/library/view/identity-and-data/9781491937006/) `Paid` - Jonathan LeBlanc and Tim Messerschmidt cover password hashing, OAuth 2, OpenID Connect, and multifactor login for web developers (O'Reilly, 2016).
- [Identity Attack Vectors](https://link.springer.com/book/10.1007/979-8-8688-0233-1) `Paid` - Morey Haber and Darran Rolls map how attackers abuse accounts and credentials, then lay out an IAM program to counter them (2nd edition, 2024).
- [Learning Digital Identity](https://www.oreilly.com/library/view/learning-digital-identity/9781098117689/) `Paid` - Phil Windley's 2023 O'Reilly book on identity architectures, from federation and access control to verifiable credentials and wallets.
- [Microservices Security in Action](https://www.manning.com/books/microservices-security-in-action) `Paid` - Prabath Siriwardena and Nuwan Dias apply OAuth, JWT, and mTLS to service-to-service calls, API gateways, and Kubernetes deployments.
- [OAuth 2 in Action](https://www.manning.com/books/oauth-2-in-action) `Paid` - Justin Richer and Antonio Sanso build a client, authorization server, and protected resource in code, then break each one with real attacks.
- [OAuth 2.0 Simplified](https://www.oauth.com/) `Free` - Aaron Parecki's guide to building an OAuth 2.0 server, with the full text readable online and print or ebook editions sold separately.
- [Privileged Attack Vectors](https://link.springer.com/book/10.1007/978-1-4842-5914-6) `Paid` - Morey Haber's Apress book on how privileged credentials get stolen and misused, with controls for vaulting, least privilege, and session monitoring.
- [Security Engineering](https://www.cl.cam.ac.uk/archive/rja14/book.html) `Free` - Ross Anderson's textbook, with chapters on authentication protocols, access control, usability, and biometrics free to download from Cambridge.
- [Self-Sovereign Identity](https://www.manning.com/books/self-sovereign-identity) `Paid` - Alex Preukschat and Drummond Reed lead a multi-author book on DIDs, verifiable credentials, wallets, and governance frameworks.
- [Solving Identity Management in Modern Applications](https://link.springer.com/book/10.1007/978-1-4842-8261-8) `Paid` - Yvonne Wilson and Abhishek Hingnikar explain OAuth 2, OpenID Connect, and SAML 2 through the lifecycle of an application user (2nd edition, Apress).
- [Spring Security in Action](https://www.manning.com/books/spring-security-in-action-second-edition) `Paid` - Laurentiu Spilca's second edition covers authentication, authorization, and OAuth 2 and OpenID Connect resource servers and clients in Spring.
- [Zero Trust Networks](https://www.oreilly.com/library/view/zero-trust-networks/9781492096580/) `Paid` - Second edition by Razi Rais, Christina Morillo, Evan Gilman, and Doug Barth on building trust from device, user, and workload identity instead of the network.

### Courses and Certifications

- [Auth0 Identity Fundamentals](https://auth0.com/docs/get-started/identity-fundamentals) `Free` - Short free primers from Auth0 on what IAM covers and how authentication differs from authorization, before any product setup.
- [Certified Identity and Access Manager (CIAM)](https://identitymanagementinstitute.org/ciam-certification/) `Paid` - Vendor-neutral IAM certification run by the Identity Management Institute, a membership body separate from IDPro.
- [CIDPRO](https://idpro.org/cidpro/) `Paid` - Vendor-neutral Certified Identity Professional exam from IDPro, built around the IDPro Body of Knowledge and practitioner experience.
- [Implement an Authentication and Access Management Solution (Microsoft Learn)](https://learn.microsoft.com/en-us/training/paths/implement-authentication-access-management-solution/) `Free` - Free Microsoft Learn path on securing Entra ID users with MFA, building Conditional Access policies, and Entra ID Protection.
- [Implement an Identity Management Solution (Microsoft Learn)](https://learn.microsoft.com/en-us/training/paths/implement-identity-management-solution/) `Free` - Free self-paced modules on configuring Entra ID tenants, users, groups, external identities, and hybrid sync, mapped to SC-300.
- [Introduction to OAuth 2.0 and OpenID Connect](https://courses.pragmaticwebsecurity.com/courses/introduction-to-oauth-2-0-and-openid-connect) `Free` - Philippe De Ryck's free video course on why OAuth and OIDC use redirects, which flow fits which app, and where to keep tokens.
- [Microsoft SC-300: Identity and Access Administrator](https://learn.microsoft.com/en-us/credentials/certifications/identity-and-access-administrator/) `Paid` - Associate-level certification covering Entra ID user and app management, authentication methods, Conditional Access, and identity governance.
- [Microsoft SC-900: Security, Compliance, and Identity Fundamentals](https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/) `Paid` - Entry-level Microsoft exam whose identity domain covers authentication, authorization, federation, and Entra ID basics.
- [Okta Certification](https://www.okta.com/services/certification/) `Paid` - Okta and Auth0 certification tracks for administrators, consultants, technical architects, and developers, each with a study guide.
- [Okta Learning](https://learning.okta.com/) `Freemium` - Okta's on-demand training catalog of learning plans and paths, including recent material on non-human identities and AI agents.
- [Passkeys with Form Autofill Codelab](https://developers.google.com/codelabs/passkey-form-autofill) `Free` - Google codelab that adds passkey registration and conditional UI sign-in to a sample web app using the WebAuthn API.
- [SailPoint Identity University](https://www.sailpoint.com/university) `Paid` - SailPoint's on-demand and instructor-led training, with role-based paths that prepare for its IdentityIQ and Identity Security Cloud exams.
- [Web Security Academy: Access Control](https://portswigger.net/web-security/access-control) `Free` - PortSwigger material and labs on IDOR, vertical and horizontal privilege escalation, and broken authorization checks.
- [Web Security Academy: Authentication Vulnerabilities](https://portswigger.net/web-security/authentication) `Free` - PortSwigger lessons and hands-on labs on brute force, broken 2FA logic, and flawed password reset and account recovery flows.
- [Web Security Academy: JWT Attacks](https://portswigger.net/web-security/jwt) `Free` - Interactive labs on unverified signatures, the none algorithm, weak HMAC keys, and jwk, jku, and kid header injection.
- [Web Security Academy: OAuth 2.0 Authentication Vulnerabilities](https://portswigger.net/web-security/oauth) `Free` - Free labs where you exploit redirect_uri handling, missing state, implicit flow flaws, and OpenID Connect misconfigurations.

### Blogs and Newsletters

- [AADInternals Blog](https://aadinternals.com/post/) `Free` - Nestori Syynimaa's deep dives into Entra ID internals, AD FS, pass-through authentication, and hybrid identity attack paths.
- [Active Directory Security (ADSecurity.org)](https://adsecurity.org/) `Free` - Sean Metcalf's site on Kerberos attacks, AD hardening, and Entra ID security, plus slides from his conference talks.
- [Biometric Update](https://www.biometricupdate.com/) `Free` - Daily news site covering biometrics, national digital ID programs, mobile driver's licenses, and identity verification.
- [Cloudbrothers](https://cloudbrothers.info/) `Free` - Posts on Entra ID Conditional Access bypasses, token broker abuse, Graph activity logs, and KQL detections for Microsoft clouds.
- [CloudIdentity](https://www.cloudidentity.com/blog/) `Free` `Archived` - Archived blog of the late Vittorio Bertocci, with posts on claims-based identity, token handling, and why clients should not read access tokens.
- [Curity Resource Library](https://curity.io/resources/) `Free` - Vendor-published guides and code examples on OAuth and OpenID Connect flows, token design, and API security patterns.
- [Damien Bod](https://damienbod.com/) `Free` - Code-heavy posts on securing ASP.NET Core apps with OpenID Connect, Entra ID, passkeys, and token handling patterns.
- [dirkjanm.io](https://dirkjanm.io/) `Free` - Dirk-jan Mollema's research on Entra ID and AD attacks, from Primary Refresh Token phishing to Actor token abuse and Conditional Access bypasses.
- [Entra.News](https://entra.news/) `Free` - Weekly newsletter by Merill Fernando rounding up Microsoft Entra changes, community tools, and admin tips.
- [IDPro Newsletter](https://idpro.org/category/newsletter/) `Free` - Member-written articles from the IDPro newsletter on topics like non-human identity, passkeys, and continuous identity.
- [Justin Richer on Medium](https://justinsecurity.medium.com/) `Free` - Essays from an OAuth 2 in Action co-author on GNAP, HTTP message signatures, token design, and authorization for software agents.
- [Kim Cameron's Identity Weblog](https://www.identityblog.com/) `Free` `Archived` - Archive of the late Microsoft identity architect's blog and the original home of The Laws of Identity; no longer updated.
- [KuppingerCole Blog](https://www.kuppingercole.com/research/blog) `Free` - Short analyst posts on IAM market shifts, regulation, and emerging identity product categories from a European analyst firm.
- [Neil Madden](https://neilmadden.blog/) `Free` - The API Security in Action author on applied cryptography, Java security footguns, and capability and token design.
- [Okta Developer Blog](https://developer.okta.com/blog/) `Free` - Vendor developer blog with framework tutorials for OAuth, OIDC, and passkeys that mostly apply outside Okta's own products.
- [Okta Security](https://sec.okta.com/) `Free` - Okta's security team publishes threat research, vulnerability write-ups, and detection guidance relevant to identity providers.
- [OpenID Foundation News](https://openid.net/news/) `Free` - Announcements of new OpenID specifications, public review periods, certification updates, and working group activity.
- [Phil Windley's Technometria](https://www.windley.com/) `Free` - Long-running blog by IIW co-founder Phil Windley on decentralized identity, verifiable credentials, and authorization models.
- [Push Security Blog](https://pushsecurity.com/blog/) `Free` - Vendor research on SaaS identity attacks, including adversary-in-the-middle phishing kits, OAuth consent abuse, and ghost logins.
- [Scott Brady](https://www.scottbrady.io/) `Free` - Posts on OAuth, OpenID Connect, WS-Federation, JWT signing, and RSA key handling in .NET from a long-time identity developer.
- [SpecterOps Blog](https://specterops.io/blog/) `Free` - Research from the BloodHound team on Active Directory, AD CS, Entra ID, and identity attack path analysis; the firm sells related products.
- [Talking Identity](https://blog.talkingidentity.com/) `Free` - Nishant Kaushik writes on identity strategy, IGA, CIAM, and how identity programs fail or succeed in practice.
- [Thomas Naunheim](https://www.cloud-architekt.net/) `Free` - Thomas Naunheim's write-ups on Entra ID workload identities, privileged identity classification, and community talk slides.
- [Troy Hunt](https://www.troyhunt.com/) `Free` - Frequent posts from the creator of Have I Been Pwned on breaches, password practice, and credential stuffing.

### Podcasts

- [A Digital Identity Digest](https://sphericalcowconsulting.com/podcast-episodes/) `Free` - Heather Flanagan's short solo episodes on identity standards, digital wallets, and internet policy.
- [Entra.Chat](https://entra.news/podcast) `Free` - Merill Fernando talks with Microsoft Entra engineers and community experts about features, rollouts, and identity defenses.
- [Hybrid Identity Protection Podcast](https://www.hipconf.com/podcasts/) `Free` - Produced by Semperis; interviews on Active Directory and Entra ID defense, breach recovery, and running security teams.
- [Identity at the Center](https://www.identityatthecenter.com/) `Free` - Weekly independent IAM interview show hosted by Jeff Steadman and Jim McDonald, with more than 450 episodes since 2019.
- [Identity Matters (SailPoint)](https://sailpoint.podbean.com/) `Free` - Produced by SailPoint; Mark McClain interviews technology and business leaders, with identity security as a recurring thread.
- [Identity, Unlocked](https://open.spotify.com/show/1Y6XBZcVK45QijvV0o7RVs) `Free` `Archived` - Ended in 2022 after 26 episodes; Vittorio Bertocci's interviews with authors of OAuth, OpenID Connect, WebAuthn, and SAML specs, produced by Auth0.
- [KuppingerCole Analyst Chat](https://podcasts.apple.com/us/podcast/kuppingercole-analysts/id1505659521) `Free` - Short weekly conversations between KuppingerCole analysts on IAM, cybersecurity markets, and regulation, running since 2020.
- [Let's Talk About Digital Identity](https://www.ubisecure.com/podcast/) `Free` `Archived` - Produced by Ubisecure and silent since January 2024; 102 interviews on digital identity, organisation identity, and LEIs.
- [Root Causes: A PKI and Security Podcast](https://www.sectigo.com/root-causes-podcast) `Free` - Produced by Sectigo; short co-hosted episodes on certificate lifecycles, PKI operations, and machine identity.
- [SaviTalk](https://saviynt.com/savitalk) `Free` - Produced by Saviynt; conversations with practitioners on identity governance, AI agents, and access risk.
- [State of Identity](https://podcasts.apple.com/us/podcast/state-of-identity-podcast-series-by-liminal/id1183881265) `Free` `Archived` - Ended in May 2024 after more than 350 episodes; Liminal's interviews with identity verification, fraud, and digital ID executives.
- [The Analyst Brief](https://www.thecyberhut.com/podcast/) `Free` - Simon Moffatt and David Mahdi discuss identity security market trends, vendor categories, and buyer questions.
- [The Biometric Update Podcast](https://biometricupdatepodcast.podbean.com/) `Free` - Companion show to the Biometric Update news site covering deepfakes, national ID schemes, and biometric policy.
- [The Future of Identity](https://www.trinsic.id/podcast) `Free` - Produced by Trinsic; Riley Hughes interviews teams building eIDs, wallets, and mobile driver's licenses about adoption.
- [The ID Talk Podcast](https://idtalk.transistor.fm/) `Free` - Produced by the ID Tech news site; interviews on biometrics, digital ID programs, and identity verification with industry guests.
- [The Identity Jedi Show](https://www.theidentityjedi.com/identity-jedi-show-podcast) `Free` - Independent interview show hosted by David Lee on IAM strategy and the people who run identity programs.
- [Trust Talks & Digital Dives](https://podcasts.apple.com/us/podcast/trust-talks-digital-dives/id1591963906) `Free` - Produced by DIACC; episodes on verifiable credentials, age estimation, access control, and cross-border digital trust.

### Videos and Talks

- [A Deep Dive into the Past, Present and Future of OAuth](https://www.youtube.com/watch?v=JL38YBogo2Y) `Free` - Aaron Parecki at GOTO Chicago 2024 tracing OAuth from 1.0 through 2.0 extensions to OAuth 2.1 and current working group drafts.
- [Abusing Entra OAuth for Fun and Access to Internal Microsoft Applications](https://www.youtube.com/watch?v=sWV_3k-_S7Y) `Free` - Black Hat USA 2025 talk on an Entra OAuth misconfiguration that let a personal account into more than 20 internal Microsoft apps.
- [Abusing Microsoft Kerberos: Sorry You Guys Don't Get It](https://www.youtube.com/watch?v=lJQn06QLwEw) `Free` - Skip Duckwall and Benjamin Delpy's Black Hat USA 2014 talk that introduced Golden Tickets and showed Kerberos abuse after domain compromise.
- [Advanced Active Directory to Entra ID Lateral Movement Techniques](https://www.youtube.com/watch?v=rzfAutv6sB8) `Free` - Black Hat USA 2025 session on new lateral movement paths from on-premises AD into Entra ID that bypass authentication and MFA.
- [An ACE Up the Sleeve: Designing Active Directory DACL Backdoors](https://www.youtube.com/watch?v=ys1LZ1MzIxE) `Free` - Black Hat USA 2017 talk on hiding persistence in AD object permissions and how defenders can find it.
- [Attacking Microsoft Kerberos, Kicking the Guard Dog of Hades](https://www.youtube.com/watch?v=PUyhlN-E5MU) `Free` - Tim Medin's DerbyCon 4 talk that introduced Kerberoasting, cracking service account passwords from requested service tickets.
- [Authenticate 2025 Keynote: Get the Most Out of Passkeys](https://www.youtube.com/watch?v=otObbUSxcqs) `Free` - Ricky Mondello of Apple gives the Authenticate 2025 keynote on getting more out of passkeys in apps and on the web.
- [Certified Pre-Owned: Abusing Active Directory Certificate Services](https://www.youtube.com/watch?v=ejmAIgxFRgM) `Free` - Will Schroeder and Lee Christensen at Black Hat USA 2021 on AD CS misconfigurations that enable credential theft and domain escalation.
- [FIDO Alliance on YouTube](https://www.youtube.com/@TheFIDOAlliance) `Free` - Authenticate conference keynotes, passkey deployment case studies from large services, and FIDO webinars.
- [Forget about OAuth 2.0. Here comes OAuth 2.1](https://www.youtube.com/watch?v=Z9DJzVJD_vg) `Free` - Philippe De Ryck at NDC Oslo 2022 on what OAuth 2.1 removes and tightens compared with OAuth 2.0, and what that means for apps.
- [How (Not) to Use OAuth in 2024](https://www.youtube.com/watch?v=eIxKfzVDdi4) `Free` - Daniel Fett, an editor of the OAuth security BCP, on the attacks that shaped current OAuth guidance and how to avoid them.
- [I'm In Your Cloud: Pwning Your Azure Environment](https://www.youtube.com/watch?v=xei8lAPitX8) `Free` - Dirk-jan Mollema's DEF CON 27 talk on Azure AD privileges, hybrid sync weaknesses, and what attackers can do once inside a tenant.
- [Identity Theft: Attacks on SSO Systems](https://www.youtube.com/watch?v=Zjrty05REoc) `Free` - Kelby Ludwig at Black Hat USA 2018 on an XML signature handling flaw that let attackers alter signed SAML assertions in several libraries.
- [Identiverse on YouTube](https://www.youtube.com/@Identiverse) `Free` - Session recordings from the Identiverse conference, including standards updates such as OAuth 2.1 talks.
- [OAuth 2.0 and OpenID Connect (in plain English)](https://www.youtube.com/watch?v=996OiexHze0) `Free` - Nate Barbettini's 2018 hour-long walkthrough of OAuth flows and OIDC; the implicit flow parts are now outdated, as the video notes.
- [OktaDev on YouTube](https://www.youtube.com/@OktaDev) `Free` - Okta's developer channel; its OAuth and OIDC explainers and screencasts are often useful regardless of which provider you use.
- [OpenID Foundation on YouTube](https://www.youtube.com/@openid) `Free` - Recordings of OpenID Foundation workshops held before IIW and other events, with working group updates on OIDC, FAPI, and OpenID4VC.
- [Red vs. Blue: Modern Active Directory Attacks, Detection, and Protection](https://www.youtube.com/watch?v=b6GUXerE9Ac) `Free` - Sean Metcalf's Black Hat USA 2015 survey of Kerberos ticket attacks against AD and the event log signals that reveal them.
- [Six Degrees of Domain Admin](https://www.youtube.com/watch?v=wP8ZCczC1OU) `Free` - DEF CON 24 talk where Andy Robbins, Rohan Vazarkar, and Will Schroeder released BloodHound and graph-based AD attack path analysis.
- [The Fragile Lock: Novel Bypasses for SAML Authentication](https://www.youtube.com/watch?v=o5KpYzbQYG0) `Free` - Zak Fedotkin of PortSwigger at Black Hat Europe 2025 on new XML handling tricks that bypass SAML authentication, with a toolkit release.
- [Writing Your Own Ticket to the Cloud Like APT](https://www.youtube.com/watch?v=NqCqfBCV_18) `Free` - Black Hat talk on stealing AD FS token-signing keys to forge SAML tokens, with detections and mitigations for federated tenants.

### Learning Paths

- [New to Identity](https://github.com/start-with-identity/awesome-identity/blob/main/LEARNING-PATHS.md#new-to-identity) - For people moving in from IT, help desk, or general security who need the vocabulary and the shape of the core protocols first.
- [Application Developer](https://github.com/start-with-identity/awesome-identity/blob/main/LEARNING-PATHS.md#application-developer) - For engineers adding login, API authorization, or passkeys to an app who want to get the protocol details right the first time.
- [Security Engineer](https://github.com/start-with-identity/awesome-identity/blob/main/LEARNING-PATHS.md#security-engineer) - For defenders and testers who need to understand how identity systems are attacked and what the evidence of each attack looks like.
- [Identity Architect](https://github.com/start-with-identity/awesome-identity/blob/main/LEARNING-PATHS.md#identity-architect) - For people designing identity across many applications and organizations, where assurance, federation, and lifecycle choices last for years.

### Careers

- [IAM Interview Questions](https://github.com/start-with-identity/iam-interview-questions) `Free` - Open question bank for IAM job interviews across 17 topics, from OAuth and SAML to PAM and system design, with notes on strong answers.
- [IDPro Job Specifications Library](https://idpro.org/educational-resources/idpro-job-specifications-library/) `Free` - Sample job descriptions for IAM roles such as entry-level analyst, IAM developer, standards architect, and CIAM product manager.
- [IDPro on YouTube](https://www.youtube.com/@idpro6736) `Free` - Recorded IDPro webinars, mostly CIDPRO exam preparation and membership sessions for identity practitioners.
- [IDPro Skills, Programs and Diversity Survey Analysis](https://idpro.org/idpro-survey-2025/) `Free` - Breakdown of IDPro survey data showing which identity skills practitioners hold at 0 to 2, 3 to 5, and later years of experience.

## Community

### Conferences and Events

- [Authenticate](https://authenticatecon.com/) `Paid` - FIDO Alliance's yearly conference on authentication and passkeys, mixing standards updates with deployment stories.
- [Biometrics Institute Congress](https://www.biometricsinstitute.org/event/biometrics-institute-congress-and-side-events-2027/) `Paid` - London congress of the Biometrics Institute on responsible and ethical biometrics use, with side events across the same week.
- [Digital Identity unConference Europe (DICE)](https://internetidentityworkshop.com/regional/dice/) `Paid` - IIW-style regional unconference in Europe, run with local co-hosts and focused on European digital identity collaboration.
- [European Identity and Cloud Conference (EIC)](https://www.kuppingercole.com/events/eic2027) `Paid` - KuppingerCole's annual identity conference in Berlin, covering enterprise IAM, decentralized identity, and European regulation.
- [Hybrid Identity Protection Conference (HIP Conf)](https://www.hipconf.com/) `Paid` - Vendor event run by Semperis on defending and recovering Active Directory and Entra ID, with sessions from outside practitioners.
- [ID4Africa AGM](https://id4africa.com/) `Paid` - Annual general meeting where African governments, agencies, and suppliers share experience on national ID and civil registration.
- [Identity Week America](https://www.terrapinn.com/exhibition/identity-week-america/index.stm) `Paid` - Terrapinn's Washington, D.C. trade show on identity and trust for government, enterprise, and partners, with free passes for some attendees.
- [Identity Week Europe](https://www.terrapinn.com/exhibition/identity-week/index.stm) `Paid` - Two-day trade show and conference at RAI Amsterdam on identity and trust for governments, enterprises, and their partners.
- [Identiverse](https://identiverse.com/) `Paid` - Large annual identity conference in Las Vegas run by CyberRisk Alliance, with workshops on passkeys, wallets, and non-human identity.
- [IETF Meetings](https://www.ietf.org/meeting/) `Paid` - Three meetings a year where the OAuth, SCIM, and other identity working groups hold sessions; remote participation is available.
- [Internet Identity Workshop (IIW)](https://internetidentityworkshop.com/) `Paid` - Twice-yearly unconference at the Computer History Museum in Mountain View where attendees set the agenda each morning; running since 2005.
- [MOSIP Connect](https://connect.mosip.io/) `Paid` - Yearly gathering of governments and implementers using the open-source MOSIP platform for national foundational ID systems.
- [OAuth Security Workshop (OSW)](https://oauth.secworkshop.events/) `Paid` - Small technical workshop where researchers, implementers, and spec editors examine attacks and new work on OAuth and OpenID.
- [Oktane](https://www.okta.com/oktane/) `Paid` - Okta's annual user conference in Las Vegas; a vendor event centered on Okta and Auth0 products and roadmap.
- [OpenID Well-Known Conference](https://openid.net/conference/) `Paid` - OpenID Foundation conference with working group meetings, interop events, and hackathons beside the main track; the first edition is in 2027.
- [SailPoint Navigate](https://www.sailpoint.com/navigate) `Paid` - SailPoint's annual customer conference; a vendor event focused on its identity governance products and customer case studies.

### Communities and Organizations

- [Better Identity Coalition](https://www.betteridentity.org/) `Free` - US policy coalition of companies pushing for improved identity verification and authentication through government action.
- [Decentralized Identity Foundation (DIF)](https://identity.foundation/) `Free` - Engineering-focused foundation developing DID methods, presentation exchange, and interop work for decentralized identity.
- [Digital ID and Authentication Council of Canada (DIACC)](https://diacc.ca/) `Free` - Canadian public-private nonprofit that maintains the Pan-Canadian Trust Framework and certifies services against it.
- [FIDO Alliance](https://fidoalliance.org/) `Free` - Industry consortium that writes the FIDO2, CTAP, and passkey specifications and runs product certification programs.
- [Identity Defined Security Alliance (IDSA)](https://www.idsalliance.org/) `Free` - Nonprofit backed by identity and security vendors that publishes survey research, webinars, and working group guidance.
- [IDPro](https://idpro.org/) `Free` - Professional association for identity practitioners; publishes the Body of Knowledge and runs the CIDPRO certification.
- [IETF OAuth Working Group](https://datatracker.ietf.org/wg/oauth/about/) `Free` - Where OAuth RFCs and drafts are written; anyone can join the mailing list, comment on drafts, and attend sessions.
- [InCommon](https://www.incommon.org/) `Free` - Research and education identity federation operated by Internet2, letting universities and labs share access across institutions.
- [Kantara Initiative](https://kantarainitiative.org/) `Free` - Nonprofit that assesses identity services against NIST 800-63 and UK frameworks and hosts identity and privacy working groups.
- [MOSIP Community](https://community.mosip.io/) `Free` - Discussion forum for developers and governments building national ID systems on the open-source MOSIP platform.
- [OpenID Foundation](https://openid.net/) `Free` - Standards body behind OpenID Connect, FAPI, Shared Signals, and OpenID for Verifiable Credentials; working groups are open to non-members.
- [OpenWallet Foundation](https://openwallet.foundation/) `Free` - Linux Foundation project hosting open-source digital wallet components and libraries for verifiable credential interoperability.
- [Secure Identity Alliance](https://secureidentityalliance.org/) `Free` - Global nonprofit of governments, industry, and academia working on interoperable physical and digital ID, including OSIA.
- [Trust Over IP Foundation](https://trustoverip.org/) `Free` - Project under LF Decentralized Trust working on a layered architecture for digital trust, including the Trust Spanning Protocol.
- [W3C Credentials Community Group](https://www.w3.org/community/credentials/) `Free` - Open W3C group that incubates verifiable credential and DID work before it moves to formal W3C working groups.
- [Women in Identity](https://www.womeninidentity.org/) `Free` - Volunteer-run nonprofit working on inclusive identity systems, known for its ID Code of Conduct and network of country ambassadors.

### People to Follow

People with a public body of identity work such as specs, books, talks, or open source. Anyone listed can ask to be removed and it will be done without discussion.

- [Aaron Parecki](https://aaronparecki.com/) `Free` - Editor of OAuth 2.1, maintainer of oauth.net, and author of OAuth 2.0 Simplified; also known for IndieAuth and IndieWeb work.
- [Balázs Orbán](https://balazsorban.com/) `Free` - Creator of Auth.js and former lead maintainer of NextAuth.js, the authentication library many Next.js apps start with.
- [Benjamin Delpy](https://github.com/gentilkiwi) `Free` - Creator of mimikatz and kekeo, whose research brought Golden Ticket and pass-the-ticket attacks on Kerberos into the open.
- [Brian Campbell](https://github.com/bc-pi) `Free` - Co-author of OAuth RFCs including Token Exchange (RFC 8693), mutual-TLS client auth (RFC 8705), DPoP (RFC 9449), and SD-JWT VC.
- [Christopher Allen](https://www.lifewithalacrity.com/) `Free` - Co-author of TLS 1.0 (RFC 2246), author of the 2016 essay The Path to Self-Sovereign Identity, and founder of Rebooting the Web of Trust.
- [Daniel Fett](https://danielfett.de/) `Free` - Co-author of the OAuth 2.0 Security BCP (RFC 9700) and DPoP, editor of SD-JWT, and author of formal security analyses of OAuth and OIDC.
- [Dick Hardt](https://www.identity20.com/about-dick-hardt/) `Free` - Editor of the OAuth 2.0 framework (RFC 6749) and speaker of the 2005 Identity 2.0 talk on user-centric identity.
- [Dirk-jan Mollema](https://github.com/dirkjanm) `Free` - Author of ROADtools, mitm6, krbrelayx, and BloodHound.py, and finder of several critical Entra ID and Active Directory flaws.
- [Doc Searls](https://doc.searls.com/) `Free` - Co-founder of the Internet Identity Workshop, founder of ProjectVRM, and author of The Intention Economy on customer-driven markets.
- [Drummond Reed](https://github.com/talltree) `Free` - Co-editor of W3C Decentralized Identifiers 1.0 and co-author of the Manning book Self-Sovereign Identity.
- [Emil Lundberg](https://emlun.se/) `Free` - Editor of W3C Web Authentication and maintainer of Yubico's java-webauthn-server relying party library.
- [Evan Gilman](https://github.com/evan2645) `Free` - Maintainer of SPIFFE and SPIRE for workload identity and co-author of the O'Reilly book Zero Trust Networks.
- [Eve Maler](https://www.vennfactory.com/) `Free` - Lead author of the User-Managed Access (UMA) specs at Kantara and an editor of SAML 2.0 at OASIS; now runs an identity strategy firm.
- [Filip Skokan](https://github.com/panva) `Free` - Maintainer of the certified openid-client, oidc-provider, and jose libraries for Node.js, and a Node.js core collaborator.
- [Hannes Tschofenig](https://github.com/hannestschofenig) `Free` - Long-time IETF contributor and co-author of security RFCs including OAuth proof-of-possession key semantics (RFC 7800).
- [Heather Flanagan](https://sphericalcowconsulting.com/) `Free` - Former RFC Series Editor and principal editor of the IDPro Body of Knowledge; writes and podcasts on identity standards.
- [Ian Glazer](https://www.tuesdaynight.org/) `Free` - Co-founder of IDPro and a former Gartner identity analyst who writes and speaks on IAM strategy and the identity profession.
- [John Bradley](https://github.com/ve7jtb) `Free` - Co-author of JWT, PKCE, OpenID Connect Core, and several OAuth RFCs, and a long-time contributor to FIDO2 and WebAuthn.
- [Justin Richer](https://github.com/jricher) `Free` - Co-author of OAuth 2 in Action and editor of GNAP (RFC 9635) and HTTP Message Signatures (RFC 9421).
- [Kaliya Young](https://identitywoman.net/) `Free` - Co-founder of the Internet Identity Workshop and co-author, with Heather Vescent, of a book-length guide to self-sovereign identity.
- [Kristina Yasuda](https://github.com/Sakurann) `Free` - Co-editor of OpenID for Verifiable Credential Issuance and OpenID for Verifiable Presentations, the core EUDI wallet protocols.
- [Lorrie Faith Cranor](https://lorrie.cranor.org/) `Free` - Carnegie Mellon professor whose lab has published large studies of password policies, password meters, and usable authentication.
- [Manu Sporny](https://github.com/msporny) `Free` - Editor of the W3C Verifiable Credentials Data Model and DID 1.0 specifications, and co-creator of JSON-LD.
- [Mike Jones](https://self-issued.info/) `Free` - Editor of JWT (RFC 7519) and the JOSE specs, co-author of OpenID Connect Core, and a former WebAuthn editor; his blog tracks spec milestones.
- [Misagh Moayyed](https://github.com/mmoayyed) `Free` - Project lead and chair of Apereo CAS, the single sign-on server widely run in higher education, and a pac4j committer.
- [Nat Sakimura](https://nat.sakimura.org/) `Free` - Chairman of the OpenID Foundation and co-author of OpenID Connect Core, JWT, PKCE (RFC 7636), and the FAPI profiles.
- [Phil Hunt](https://independentid.com/) `Free` - Lead author of the SCIM protocol (RFC 7644), co-author of the OAuth threat model (RFC 6819), and contributor to Shared Signals.
- [Roland Hedberg](https://github.com/rohe) `Free` - Author of pysaml2 and pyoidc, the long-standing Python implementations of SAML 2.0 and OpenID Connect.
- [Samuel M. Smith](https://github.com/SmithSamuelM) `Free` - Designer of KERI (Key Event Receipt Infrastructure) and author of the ACDC specification for chained verifiable data.
- [Scott Cantor](https://www.shibboleth.net/about-us/the-shibboleth-team/scott-cantor/) `Free` - Technical editor of much of the SAML 2.0 specification set and long-time architect of the Shibboleth identity and service provider software.
- [Steve Syfuhs](https://syfuhs.net/) `Free` - Windows authentication engineer at Microsoft and primary developer of Kerberos.NET; writes about Kerberos and Windows sign-in internals.
- [Stian Thorgersen](https://github.com/stianst) `Free` - Keycloak project lead since its start at Red Hat and co-author of a Packt book on Keycloak.
- [Tim Cappalli](https://timcappalli.me/) `Free` - Editor of W3C Web Authentication Level 3 and the Digital Credentials API, and maintainer of the passkeys.dev developer site.
- [Tobias Looker](https://github.com/tplooker) `Free` - Co-editor of OpenID for Verifiable Credential Issuance and of the BBS signature scheme draft for selective disclosure.
- [Torin Sandall](https://github.com/tsandall) `Free` - Co-creator of Open Policy Agent and the Rego policy language used for authorization in cloud-native systems.
- [Torsten Lodderstedt](https://github.com/tlodderstedt) `Free` - Lead author of the OAuth threat model (RFC 6819) and Security BCP (RFC 9700), and co-author of PAR, RAR, and OpenID for Verifiable Credential Issuance.
- [Will Schroeder](https://github.com/HarmJ0y) `Free` - Co-creator of BloodHound, author of PowerView and Rubeus, and co-author of the Certified Pre-Owned research on AD CS abuse.

## Data and Datasets

### Datasets and Trackers

- [2FA Directory](https://2fa.directory/) `Free` - Community-maintained list of sites and the second factors each supports, from SMS and TOTP to hardware keys, with data on GitHub.
- [DID Extensions](https://www.w3.org/TR/did-extensions/) `Standard` - W3C registry of DID methods, properties, and extensions that succeeded the DID Specification Registries note.
- [eduGAIN Entities Database](https://technical.edugain.org/entities) `Free` - Searchable list of identity providers and service providers published through the eduGAIN interfederation of research and education federations.
- [eIDAS Trusted List Browser](https://eidas.ec.europa.eu/efda/tl-browser/) `Free` `Gov` - European Commission browser for the national lists of qualified trust service providers under eIDAS and their services in each member state.
- [Have I Been Pwned](https://haveibeenpwned.com/) `Freemium` - Searchable index of accounts exposed in public data breaches, with domain monitoring and an API for checking email addresses.
- [Identity Breach Database](https://startwithidentity.com/breaches/incidents/) `Free` - Maintained by Start With Identity, a filterable record of breaches since 2021 where identity was the way in, each linked to primary sources.
- [Identity CVE Catalog](https://startwithidentity.com/cves/) `Free` - Maintained by Start With Identity, a catalog of authentication and IAM CVEs such as SAML and JWT signature bypasses and Kerberos flaws.
- [Kantara Trust Status List](https://kantarainitiative.org/trust-status-list/) `Free` - Kantara Initiative list of identity providers and services certified against its assurance frameworks, including NIST 800-63 classes.
- [OpenID Certification](https://openid.net/certification/) `Free` - OpenID Foundation program pages listing implementations certified against OpenID Connect, FAPI, and related conformance profiles.
- [Passkeys Directory](https://passkeys.directory/) `Free` - Community-driven index of websites, apps, and services that let users sign in with passkeys, run by the 2FA Directory team.
- [Privacy Rights Clearinghouse Data Breach Chronology](https://privacyrights.org/data-breaches) `Freemium` - Searchable US breach database compiled from government breach notifications since 2005, with the full dataset sold for research.
- [Pwned Passwords](https://haveibeenpwned.com/Passwords) `Free` - Corpus of passwords seen in breaches, queryable through a k-anonymity range API or downloadable for blocklist checks.

## Related Lists

- [Awesome IAM](https://github.com/kdeldycke/awesome-iam) - Reading list on identity, authentication, and access control concepts.
- [Awesome OpenID Connect](https://github.com/cerberauth/awesome-openid-connect) - OpenID Connect providers, libraries, and tools.
- [Awesome Security](https://github.com/sindresorhus/awesome-security) - General security software, libraries, and documents.

## Contributing

Entries live in `data/` as small YAML files and this page is generated from them, so please do not edit `README.md` directly. Read the [contribution guidelines](CONTRIBUTING.md) before opening a pull request, or [suggest a resource](https://github.com/start-with-identity/awesome-identity/issues/new?template=add-resource.yml) through an issue if you would rather not touch git.

Found a dead link or a wrong description? [Report it](https://github.com/start-with-identity/awesome-identity/issues/new/choose).

Questions and ideas go to [Discussions](https://github.com/start-with-identity/awesome-identity/discussions). Everyone taking part is expected to follow the [code of conduct](CODE_OF_CONDUCT.md).
