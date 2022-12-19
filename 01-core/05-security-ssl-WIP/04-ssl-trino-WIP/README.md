# CORE # SSL # trino

## Resources:
* [keytool](https://www.sslshopper.com/article-most-common-java-keytool-keystore-commands.html)
* [TLS in Starburst docs](https://docs.starburst.io/latest/security/tls.html)

## Task

Configure trino to expose TLS secured endpoint.  
Learn `keytool` along the way.

1. Start with `minimal` docker demo.
2. Use `keytool` to generate `out/starburst.jks` keystore.
3. Configure `trino` to use the keystore.
4. Use `keytool` to view the certificate in `jks`.
5. Use `keytool` to extract the `crt` from the keystore.
6. Use curl to validate connection on `trino:8443/v1/status` endpoint. 


## NOTES:
- Add https://confluence.atlassian.com/kb/unable-to-connect-to-ssl-services-due-to-pkix-path-building-failed-error-779355358.html ?
