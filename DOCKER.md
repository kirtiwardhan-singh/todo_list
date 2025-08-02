# 🐳 Docker Deployment Guide

This guide explains how to run the Todo App using Docker in both development and production modes.

## 📋 Prerequisites

- Docker installed on your system
- Docker Compose (usually comes with Docker Desktop)

## 🚀 Quick Start

### Option 1: Using Docker Compose (Recommended)

**Production Mode:**
```bash
docker-compose up -d
```
Access at: http://localhost:3000

**Development Mode:**
```bash
docker-compose -f docker-compose.dev.yml up
```
Access at: http://localhost:5173

### Option 2: Using npm scripts

```bash
# Build and run production container
npm run docker:build
npm run docker:run

# Run development mode
npm run docker:dev

# Stop and remove containers
npm run docker:stop
npm run docker:remove
```

### Option 3: Manual Docker Commands

**Production Build:**
```bash
# Build the image
docker build -t todo-list-app .

# Run the container
docker run -d -p 3000:80 --name todo-list-app todo-list-app
```

**Development Build:**
```bash
# Build development image
docker build -f Dockerfile.dev -t todo-list-dev .

# Run development container
docker run -p 5173:5173 -v $(pwd):/app -v /app/node_modules todo-list-dev
```

## 📁 Docker Files Explained

### `Dockerfile` (Production)
- **Multi-stage build** for optimized production image
- **Stage 1:** Build the React app with Node.js
- **Stage 2:** Serve with lightweight Nginx
- **Result:** ~15MB final image size

### `Dockerfile.dev` (Development)
- Single-stage build for development
- Hot reload enabled
- Volume mounting for live code changes
- Development server runs on port 5173

### `nginx.conf`
- Custom Nginx configuration
- Client-side routing support
- Static asset caching
- Security headers
- Gzip compression

## 🔧 Configuration Options

### Environment Variables
```bash
# Set in docker-compose.yml or command line
NODE_ENV=production
CHOKIDAR_USEPOLLING=true  # For development hot reload
```

### Port Mapping
- **Production:** Container port 80 → Host port 3000
- **Development:** Container port 5173 → Host port 5173

## 🛠️ Docker Commands Reference

```bash
# View running containers
docker ps

# View logs
docker logs todo-list-app

# Stop container
docker stop todo-list-app

# Remove container
docker rm todo-list-app

# Remove image
docker rmi todo-list-app

# Clean up unused resources
docker system prune -f
```

## 🏭 Production Deployment

### Building for Different Platforms
```bash
# Build for multiple architectures
docker buildx build --platform linux/amd64,linux/arm64 -t todo-list-app .
```

### Using Docker Registry
```bash
# Tag for registry
docker tag todo-list-app your-registry/todo-list-app:latest

# Push to registry
docker push your-registry/todo-list-app:latest
```

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Find and kill the process using the port
lsof -i :3000
kill -9 <PID>
```

**Container name already exists:**
```bash
# Remove existing container
docker rm todo-list-app
```

**Build cache issues:**
```bash
# Build without cache
docker build --no-cache -t todo-list-app .
```

**Development hot reload not working:**
- Ensure `CHOKIDAR_USEPOLLING=true` is set
- Check volume mounting is correct
- Try restarting the container

## 📊 Performance Optimization

### Production Image Size
- Current size: ~15MB (nginx:alpine base)
- Uses multi-stage build to exclude development dependencies
- Static assets are compressed and cached

### Development Performance
- Volume mounting for instant code changes
- Node modules cached in anonymous volume
- Polling enabled for file watching across platforms

## 🔒 Security Considerations

- Non-root user in containers
- Security headers in nginx config
- No sensitive data in images
- .dockerignore excludes unnecessary files

## 📱 Health Checks

Add to docker-compose.yml for monitoring:
```yaml
healthcheck:
  test: ["CMD", "curl", "-f", "http://localhost"]
  interval: 30s
  timeout: 10s
  retries: 3
```

## 🌐 Deployment Platforms

This Docker setup works with:
- AWS ECS/Fargate
- Google Cloud Run
- Azure Container Instances
- Kubernetes
- Railway, Render, fly.io
- Self-hosted Docker

---

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. View container logs: `docker logs todo-list-app`
3. Ensure Docker is running and up to date
