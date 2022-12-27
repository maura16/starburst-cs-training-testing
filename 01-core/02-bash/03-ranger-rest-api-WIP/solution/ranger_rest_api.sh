#! /bin/bash
userResponse=$(curl -sS -L -k -u admin:RangerPassword1 -H "Content-type: application/json" -H "Accept: application/json" -X GET localhost:6080/service/xusers/users)
echo $userResponse | jq -r '.' > ranger_users

policyResponse=$(curl -sS -L -k -u admin:RangerPassword1 -H "Content-type: application/json" -H "Accept: application/json" -X GET localhost:6080/service/public/v2/api/policy)
echo $policyResponse | jq -r '.' > ranger_policies