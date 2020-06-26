<h1>Dockerized MircroService Architecture</h1>

http://www.ticketswapping.xyz/

- **Front**: React | Next.js
- **Back**: Node.js | TypeScript | Jest | MongoDB
- **Deployment**: Kubernetes | Docker

<h3>Event Handeling approach</h3>

- **Event Bus**: node-nats-streaming
- **Type**: asynchronous communication
- **Concurrency**: Optimistic Concurrency Control

<h3>Services</h3>

- **common**: library that enable each service to decode JWT and avoid auth-service dependency

---

- **auth**: register users + generate JWT
- **tickets**: create tickets with validations(title and positiv price) + authenticated user
- **orders**: create orders if (authenticated user + ticket not already reserved/bought)
- **expiration**: set 'reserved' ticket back to 'available' after 15 min lock without successful payment
- **payments**: handle stripe response from client to update ticket status to 'paid' or back to 'available'


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

