# 🛒 Online Store API

A modular, production-ready Express.js + TypeScript backend for an online store.

---

## 📦 Features

- Express.js REST API with TypeScript
- Modular architecture for scalability
- Environment variable support
- Dockerized for easy local and production deployment
- CORS and JSON body parsing enabled
- Ready for expansion (Auth, Product, Cart, etc.)

---

## 📁 Project Structure

ecomm-paas/
├── src/
│ └── index.ts # App entry point
├── .env
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── nodemon.json
├── package.json
├── tsconfig.json
└── README.md

## 🚀 Getting Started

### 1. Clone the Repository
git clone https://github.com/your-username/ecomm-paas.git
cd ecomm-paas

### 2. Install dependencies
npm install

### 3. Configure Environment Variables
Create a .env file in the project root:
PORT=5000

### 4. Run the server (Dev Mode)
npm run dev

## OPTIONAL

### 1. Running with Docker
docker build -t ecomm-paas .

### 2.  Run Container
docker run -p 5000:5000 ecomm-paas

### 2.  Use Docker Compose
docker-compose up --build




