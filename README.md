# 🐳 CodeAlpha Web Server using Docker

![Docker](https://img.shields.io/badge/Docker-Containerized-blue?logo=docker)
![Nginx](https://img.shields.io/badge/Nginx-Web%20Server-green?logo=nginx)
![AWS](https://img.shields.io/badge/AWS-EC2-orange?logo=amazonaws)
![Docker Compose](https://img.shields.io/badge/Docker%20Compose-Orchestration-blue)
![Status](https://img.shields.io/badge/HealthCheck-Enabled-brightgreen)

A containerized portfolio website powered by **Nginx**, built as part of the **CodeAlpha DevOps Internship**. This project demonstrates Docker containerization, container lifecycle management, health monitoring, Docker Compose orchestration, and cloud deployment best practices.

---

## 🚀 Features

* 🐳 Docker containerization
* 🌐 Nginx web server deployment
* 🔄 Docker Compose orchestration
* ❤️ Container health checks
* 📊 Resource monitoring and troubleshooting
* 📁 Volume-based log management
* ☁️ AWS EC2 deployment
* 📦 Docker Hub image distribution

---

## 📂 Project Structure

```text
CodeAlpha_Web-Server-using-Docker/
│
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── README.md
│
├── nginx/
│   └── conf.d/
│       └── default.conf
│
└── website/
    ├── index.html
    ├── about.html
    ├── status.html
    ├── style.css
    └── script.js
```

---

## 🛠️ Technology Stack

* Docker
* Docker Compose
* Nginx (Alpine)
* HTML
* CSS
* JavaScript
* AWS EC2
* Docker Hub
* Git & GitHub

---

## 🎯 Internship Requirements Covered

| Requirement                     | Implementation                                    |
| ------------------------------- | ------------------------------------------------- |
| Docker containerization basics  | Dockerfile-based image creation                   |
| Deploy and manage a web server  | Nginx running inside Docker                       |
| Container lifecycle management  | Build, Run, Stop, Start, Restart                  |
| Monitor health and troubleshoot | Logs, Stats, Inspect, Health Checks               |
| Deployment best practices       | Compose, Volumes, Health Checks, Restart Policies |

---

## ▶️ Run Using Docker Compose

```bash
git clone https://github.com/SinaliMarasinghe25/CodeAlpha_Web-Server-using-Docker.git

cd CodeAlpha_Web-Server-using-Docker

docker compose up -d --build
```

Open:

```text
http://localhost:8080
```

---

## 🐳 Docker Hub

Pull the image:

```bash
docker pull sinalimarasinghe25/codealpha_web-server-using-docker:latest
```

Run:

```bash
docker run -d --name my-portfolio -p 80:80 sinalimarasinghe25/codealpha_web-server-using-docker:latest
```

---

## ☁️ AWS EC2 Deployment

As an additional enhancement, the Docker image was pushed to Docker Hub and deployed on an AWS EC2 instance to demonstrate cloud-based container deployment.

Deployment Workflow:

```text
Dockerfile
    ↓
Docker Image
    ↓
Docker Hub
    ↓
AWS EC2
    ↓
Running Container
```

---

## 📊 Monitoring Commands

```bash
docker ps

docker logs my-portfolio

docker stats my-portfolio

docker inspect my-portfolio

docker inspect --format='{{.State.Health.Status}}' my-portfolio
```

---

## 👩‍💻 Author

Sinali Marasinghe

CodeAlpha DevOps Internship

---

## ⭐ Repository Topics

docker • docker-compose • nginx • aws-ec2 • dockerhub • containerization • devops • web-server • portfolio-website
