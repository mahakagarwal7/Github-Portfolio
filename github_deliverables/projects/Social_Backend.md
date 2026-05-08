# 🐦 Scalable Social Media Backend

<div align="center">
  <img src="https://via.placeholder.com/800x400?text=Distributed+Social+Graph+Architecture" alt="Backend Banner" width="100%" />
  
  <br />

  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
  ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
  ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white)
  ![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat&logo=redis&logoColor=white)
</div>

## 📖 Overview
A high-performance, distributed backend system designed to handle the scale and complexity of a modern social media platform like Twitter.

## ❓ Why This Project?
Building for scale requires more than just CRUD operations. This project focuses on **Distributed Systems challenges** such as fan-out feed generation, social graph consistency, and low-latency post delivery.

## ✨ Key Features
- **Scalable Post Delivery**: Efficient fan-out strategies for feed generation.
- **Distributed Social Graph**: Optimized queries for following/follower relationships.
- **Consistency Guarantees**: Balancing ACID and BASE properties across service boundaries.
- **High-Performance Caching**: Multi-level Redis caching to reduce database load.
- **Service-Oriented Design**: Clean boundaries between account, post, and notification services.

## 🏗️ Architecture
- **Language**: TypeScript with Node.js.
- **Databases**: PostgreSQL for relational data and NoSQL for high-velocity feeds.
- **Messaging**: Message queues for asynchronous background processing (notification delivery).

## 🗺️ Roadmap
- [x] Core account and post management services
- [x] Initial feed generation algorithm
- [ ] Sharding and horizontal scaling strategies
- [ ] Real-time notification system via WebSockets
