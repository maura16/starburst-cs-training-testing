# CORE # SSL # nginx

## Resources:
* https://hub.docker.com/_/nginx
* [The `/etc/hosts` file](https://tldp.org/LDP/solrhe/Securing-Optimizing-Linux-RH-Edition-v1.3/chap9sec95.html)

## Task

Configure `nginx` server to provide SSL secured endpoint using a custom certificate.

1. Create a self-signed certificate with `CN=nginx`.
2. Start up `nginx` server in docker.
3. Configure SSL endpoint with the certificate.
4. Add `nginx` entry to `/etc/hosts`.
5. Verify it's working by running `curl -k ...` (ignore cert validation). Save this to `out/curl_insecure.sh`.
6. Improve the above command by configuring curl to verify the certificate. Save this in `out/curl_secure.sh`.

