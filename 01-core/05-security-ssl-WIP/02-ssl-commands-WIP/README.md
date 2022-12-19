# CORE # SSL # CONCEPTS

## Resources:
* https://geekflare.com/openssl-commands-certificates/
* https://www.freecodecamp.org/news/openssl-command-cheatsheet-b441be1e8c4a/
* https://www.digicert.com/kb/ssl-support/openssl-quick-reference-guide.htm
* https://sysaix.com/19-practical-examples-of-openssl-command-in-linux-and-unix

## Task

1. Create CA certificate and Key at `/tmp` (name should be `ca.key` and `ca.crt`)
2. Create SSL CSR certificate with CN as starburst at `/tmp` location (name should be `starburst.csr`)
3. Sign the CSR certificate using the CA certs which you created in Task-1 (name should be `starburst.crt`) at `/tmp` location
3. Get the validity details of the staburst.crt certificate and write the output in `/tmp/validity.txt` file 
4. Create keystore and truststore with appropriate certs at `/tmp` location 
 

