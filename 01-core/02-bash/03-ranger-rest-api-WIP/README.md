# CORE / BASH / Ranger REST API

## Pre-requisites
Docs Reference:  
- [Apache Ranger overview](https://docs.starburst.io/latest/security/ranger-overview.html)
- [Ranger REST API documentation](https://ranger.apache.org/apidocs/index.html)

## Task
- Use `ranger-usersync-ldap` demo.
- Verify that usersync has completed.
- Extract the Ranger users through API, save in `solution/ranger_users` file.
- Extract the Ranger policies through API, save in `solution/ranger_policies`
  file.


## Optional
Through API calls
- Create a new user
- Create a new group
- Assign group membership
- Create a new policy

<details>
  <summary>Hints</summary>
  
  1. You can follow steps outlined
     [HERE](https://starburstdata.atlassian.net/wiki/spaces/SA/pages/1802829865/Ranger+and+Ranger+UserSync)
     for verifying usersync has completed
</details>