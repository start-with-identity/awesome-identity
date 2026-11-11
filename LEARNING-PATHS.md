<!-- Generated from data/entries/learning-paths.yml by scripts/build.mjs. Edit the YAML file, not this file. -->
# Learning Paths

Part of [Awesome Identity](README.md). Ordered reading lists for people starting out in a role. Every step is free and points at a primary source, a free course, or a recorded talk.

Have a better order, or a step that has gone stale? Paths live in `data/entries/learning-paths.yml` and follow the same [contribution rules](CONTRIBUTING.md) as the rest of the list.

## New to Identity

For people moving in from IT, help desk, or general security who need the vocabulary and the shape of the core protocols first.

1. [Introduction to Security, Compliance, and Identity Concepts](https://learn.microsoft.com/en-us/training/paths/describe-concepts-of-security-compliance-identity/) - Free Microsoft Learn modules that define authentication, authorization, identity providers, and federation in plain terms.
2. [Auth0 Identity Fundamentals](https://auth0.com/docs/get-started/identity-fundamentals) - Short primers on what IAM covers and why authentication and authorization are separate problems.
3. [OAuth 2.0 and OpenID Connect (in plain English)](https://www.youtube.com/watch?v=996OiexHze0) - One-hour talk that explains delegated access, the authorization code flow, and where OIDC adds login on top.
4. [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html) - Covers login error messages, password rules, account lockout, and re-authentication in one page.
5. [OWASP Multifactor Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Multifactor_Authentication_Cheat_Sheet.html) - Compares factor types, explains which resist phishing, and lists recovery pitfalls to avoid.
6. [NIST SP 800-63-4 Digital Identity Guidelines](https://pages.nist.gov/800-63-4/sp800-63.html) - Read the base volume to learn identity, authenticator, and federation assurance levels used in audits and contracts.
7. [passkeys.dev](https://passkeys.dev/) - Explains what passkeys are, how syncing works across devices, and which platforms support which features.

## Application Developer

For engineers adding login, API authorization, or passkeys to an app who want to get the protocol details right the first time.

1. [OAuth 2.0 Simplified](https://www.oauth.com/) - Free online book that walks through client types, grants, tokens, and server design before you read the specs.
2. [OAuth 2.1 draft](https://datatracker.ietf.org/doc/draft-ietf-oauth-v2-1/) - Read this instead of RFC 6749 alone, since it folds in PKCE everywhere and drops the implicit and password grants.
3. [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html) - Focus on ID token validation, nonce handling, and the authorization code flow sections.
4. [RFC 9700: Best Current Practice for OAuth 2.0 Security](https://datatracker.ietf.org/doc/html/rfc9700) - The attack list every client and server should be checked against, from code injection to mix-up attacks.
5. [RFC 8725: JSON Web Token Best Current Practices](https://datatracker.ietf.org/doc/html/rfc8725) - Rules for algorithm verification, audience and issuer checks, and avoiding token confusion across JWT uses.
6. [RFC 10017: OAuth 2.0 for Browser-Based Applications](https://datatracker.ietf.org/doc/rfc10017/) - Compares backend-for-frontend, token-mediating backend, and pure browser client designs for single-page apps.
7. [OWASP Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html) - Cookie flags, session ID handling, timeouts, and logout behavior for what happens after login succeeds.
8. [Passkeys with Form Autofill Codelab](https://developers.google.com/codelabs/passkey-form-autofill) - Hands-on exercise adding passkey registration and conditional UI sign-in to a sample web app.

## Security Engineer

For defenders and testers who need to understand how identity systems are attacked and what the evidence of each attack looks like.

1. [MITRE ATT&CK Credential Access Tactic](https://attack.mitre.org/tactics/TA0006/) - Map the techniques attackers use to steal and forge credentials, with detection and mitigation notes per technique.
2. [Web Security Academy: OAuth 2.0 Authentication Vulnerabilities](https://portswigger.net/web-security/oauth) - Exploit redirect_uri, state, and implicit flow flaws in free labs to see why the specs insist on each check.
3. [Web Security Academy: JWT Attacks](https://portswigger.net/web-security/jwt) - Labs on signature bypasses and header injection that show what weak token validation lets an attacker do.
4. [Attacking Microsoft Kerberos, Kicking the Guard Dog of Hades](https://www.youtube.com/watch?v=PUyhlN-E5MU) - The DerbyCon talk that introduced Kerberoasting; a good entry point to ticket-based Active Directory attacks.
5. [Six Degrees of Domain Admin](https://www.youtube.com/watch?v=wP8ZCczC1OU) - Learn how attack path graphs over AD group membership and sessions turn small footholds into domain admin.
6. [Certified Pre-Owned](https://specterops.io/blog/2021/06/17/certified-pre-owned/) - SpecterOps research on AD CS misconfigurations, with the ESC escalation classes defenders still audit against.
7. [I'm In Your Cloud: Pwning Your Azure Environment](https://www.youtube.com/watch?v=xei8lAPitX8) - Moves the same thinking into Entra ID, covering hybrid sync accounts, app permissions, and tenant privilege paths.
8. [Securing Privileged Access: Enterprise Access Model](https://learn.microsoft.com/en-us/security/privileged-access-workstations/privileged-access-access-model) - Microsoft's model for separating control, management, and data planes, useful when turning findings into fixes.

## Identity Architect

For people designing identity across many applications and organizations, where assurance, federation, and lifecycle choices last for years.

1. [NIST SP 800-63-4 Digital Identity Guidelines](https://pages.nist.gov/800-63-4/sp800-63.html) - Use the risk management process and assurance levels to decide how strong proofing, authentication, and federation must be.
2. [NIST SP 800-207 Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final) - Defines policy decision and enforcement points, which helps place the identity provider within a wider access design.
3. [RFC 7644: SCIM Protocol](https://datatracker.ietf.org/doc/html/rfc7644) - The standard API for provisioning users and groups across systems; read alongside your joiner, mover, leaver process.
4. [FAPI 2.0 Security Profile](https://openid.net/specs/fapi-security-profile-2_0-final.html) - A worked example of a high-assurance OAuth profile combining PAR, PKCE, and sender-constrained tokens.
5. [OpenID Shared Signals Framework](https://openid.net/specs/openid-sharedsignals-framework-1_0-final.html) - How identity providers and apps exchange session revocation and risk events so access decisions keep updating after login.
6. [W3C Verifiable Credentials Data Model 2.0](https://www.w3.org/TR/vc-data-model-2.0/) - The data model for issuer, holder, and verifier roles that wallet-based identity programs are built on.
7. [OpenID for Verifiable Presentations 1.0](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html) - The protocol a verifier uses to request credentials from a wallet, now referenced by government wallet programs.
