# CORE # Kerberos # CONCEPTS

## Resources:
- https://gist.github.com/ashrithr/4767927948eca70845db
- https://codingbee.net/rhce/rhce-kerberos
- https://github.com/starburstdata/field-projects/tree/master/PrestoDockerDemos/kerberos-starburst


## Task
1. Deploy Kerberos container
2. Create UPN and SPN principal and keytab for starburst service as starburst username at /tmp location 
3. Get the ticket from the keytab which you created in previous step?
3. How to check the kvno number? [write the output in a kvno.txt at /tmp location?]
5. How to verify the ticket and it's validity? [write the output in a validity.txt at /tmp location?]
6. How to recognize UPN and SPN?
7. How to check the encryption algorithm which is used in the keytab? [write the output in a encyption.txt at /tmp location?]
8. How to debug the kerberos issues? 

### Write down all the possibilties in a debug.txt at /tmp with all the possible commands for the below issues

8. Let say you are getting below error in the logs or while trying to get the ticket

```
javax.security.sasl.SaslException:
GSS initiate failed [Caused by GSSException: No valid credentials provided (Mechanism level: Failed to find any Kerberos tgt)]
```
What all are the possibilities for this issue?





