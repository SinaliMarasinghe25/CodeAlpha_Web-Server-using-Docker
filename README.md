# CodeAlpha_Web-Server-using-Docker
Nginx web server containerized with Docker -CodeAlpha DevOps Internship Task 4

# Web Server using Docker 🐳
### CodeAlpha DevOps Internship — Task 4

A personal portfolio website served by **Nginx** running inside a **Docker container**. Built to demonstrate Docker containerization basics, container lifecycle management, health monitoring, and deployment best practices.

---

## Live Preview

> Run locally at `http://localhost:8080` following the steps below.

---

## Project Structure

```
docker-webserver/
│
├── Dockerfile          # Instructions to build the Docker image
├── nginx.conf          # Custom Nginx configuration
├── .dockerignore       # Files excluded from the Docker build
└── website/
    ├── index.html      # Main portfolio webpage
    ├── style.css       # Styling with green and gold theme
    └── script.js       # Scroll animations and interactivity
```

---

## Requirements Covered

| Requirement | How it is covered |
|---|---|
| Docker containerization basics | Dockerfile builds a custom Nginx image |
| Deploy and manage a web server | Nginx serves the portfolio site inside Docker |
| Container lifecycle and commands | build, run, stop, start, restart, rm, ps |
| Monitor container health and troubleshoot | HEALTHCHECK, docker stats, logs, inspect, exec |
| Container-based deployment best practices | Custom nginx.conf, HEALTHCHECK, .dockerignore, image tagging |

---

## Tech Stack

- **Docker** — containerization
- **Nginx** — web server
- **HTML / CSS / JavaScript** — frontend portfolio site

---

## How to Run

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and running
- Any terminal (Git Bash, PowerShell, or Command Prompt)

### Steps

**1. Clone the repository**
```bash
git clone https://github.com/SinaliMarasinghe25/CodeAlpha_Web-Server-using-Docker.git
cd CodeAlpha_Web-Server-using-Docker
```

**2. Build the Docker image**
```bash
docker build -t portfolio-webserver .
```

**3. Run the container**
```bash
docker run -d -p 8080:80 --name my-portfolio portfolio-webserver
```

**4. Open in browser**
```
http://localhost:8080
```

---

## Container Management Commands

```bash
# See running containers and health status
docker ps

# Stop the container
docker stop my-portfolio

# Start the container
docker start my-portfolio

# Remove the container
docker rm my-portfolio
```

---

## Health Monitoring Commands

```bash
# Live CPU and memory usage
docker stats my-portfolio

# View health check history
docker inspect --format='{{json .State.Health}}' my-portfolio

# Live request logs
docker logs -f my-portfolio

# Go inside the container to troubleshoot
docker exec -it my-portfolio /bin/bash
```

---

## Author

**Sinali Mrasinghe**
CodeAlpha DevOps Internship — Task 4

