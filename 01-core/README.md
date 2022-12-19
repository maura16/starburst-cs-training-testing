# CORE

<!-- # A collapsible section with markdown
<details>
  <summary>Click to expand!</summary>
  
  ## Heading
  1. A numbered
  2. list
     * With some
     * Sub bullets
</details> -->


General
-------

*   What Trino / Starburst is
*   General architecture
*   Core concepts:
    *   coordinator / worker
    *   catalog / schema / table / column
    *   execution (link to docs)
        *   query / plan / stage / split
*   SQL
    *   (full course)
    *   query examples with discussion
        *   select
        *   join
        *   aggregation
        
Deployment Technologies (Mateusz)
---------------------------------

*   **Docker**
    *   ( full course)
    *   Images
        *   Dockerfile
    *   Containers
    *   Docker compose
        *   image
        *   ports
        *   networking between containers
        *   volumes
        *   custom command
    *   docker monitoring (ps)
    *   connect to DockerDemos
        *   most useful envs
*   **Kubernetes**
    *   core:
        *   installation
        *   monitoring / general troubleshooting
        *   modifying
    *   concepts (complete course):
        *   containter / pod / replicaset / deployment / daemonset
        *   secrets / configmap
        *   services / ingress
        *   RBAC (opt.)
    *   kubectl - get <resource> / logs / describe
    *   Helm familiarity
        *   show values
        *   helm repo \[add / search / update \]
        *   install / upgrade
    *   Local deployment (minikube) \[unsure\]
    *   Cloud deployment (EKS) \[unsure\]
*   **CFT Deployment**
    *   AWS essentials
    *   AMI + how do we share it
    *   CFT installation \[different archs\]
    *   EC2 instance
    *   IAM roles / policies
    *   security groups
    *   cloudwatch \[how to get logs from instances\]
    *   autoscaling groups
    *   Ex: create without the license, check why it’s not starting
*   **Tarball/RPM Deployment**
    *   show how Dockerfile does it
    *   officially unsupported - good to know, but customers should not use it
*   **Starburst Admin\*\*\***
    *   Kamil’s training
* * *