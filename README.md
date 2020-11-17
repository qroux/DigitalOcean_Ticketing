<h1>Ticket Market Place with reservation system</h1>
<h3>Dockerized MircroService Architecture</h3>

<h2>http://www.ticketswapping.xyz/</h2>

**NB: type "thisisunsafe" on your keyboard to pass the security prompt (website have no sll yet)**

---

<h3>User journey</h3>

1. User can register himself with email and password, login and logout
2. User can add his ticket to the market place
3. User **CAN RESERVE** a ticket for 15min. **Reservation is lost if the payment is not completed within 15min**
4. User can pay through **STRIPE** with his credit card to obtain the ticket
5. User **CANNOT** buy a ticket already reserved by another person **UNLESS** the 15min delay to pay expire

---

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
    
---

<h3>Stack</h3>

- **Front**: React | Next.js
- **Back**: Node.js | TypeScript | Jest | MongoDB
- **Deployment**: Kubernetes | Docker

<h3>Event Handeling approach</h3>

- **Event Bus**: node-nats-streaming
- **Type**: asynchronous communication
- **Concurrency**: Optimistic Concurrency Control

<h3>Services List</h3>

- **common**: library that enable each service to decode JWT and avoid auth-service dependency
- **auth**: register users + generate JWT
- **tickets**: create tickets with validations(title and positiv price) + authenticated user
- **orders**: create orders if (authenticated user + ticket not already reserved/bought)
- **expiration**: set 'reserved' ticket back to 'available' after 15 min lock without successful payment
- **payments**: handle stripe response from client to update ticket status to 'paid' or back to 'available'




