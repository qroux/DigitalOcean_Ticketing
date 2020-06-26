<h1>Dockerized MircroService Architecture</h1>

http://www.ticketswapping.xyz/

- **Front**: React | Next.js
- **Back**: Node.js | TypeScript | MongoDB
- **Deployment**: Kubernetes | Docker

<h3>Event Handeling approach</h3>

- **Event Bus**: node-nats-streaming
- **Type**: asynchronous communication
- **Concurrency**: Optimistic Concurrency Control

<h3>Deployment</h3>

- **cloud provider**: DigitalOcean
- **Run**: Kubernetes

<h3>GitHub WorkFlow</h3>

1. pull request
2. unit test running for modified service/s
3. merging
4. Github Action deployment:
    - **build** service's Docker image
    - **push** to docker hub
    - **run** doctl
    - **restart** service deployment

