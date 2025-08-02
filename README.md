# 📱 Todo List App

A modern, responsive React todo application with a beautiful dark theme and Docker support.

## ✨ Features

- ✅ Add, complete, and delete todos
- 📅 Optional due dates for todos
- 📊 Real-time statistics (total, completed, pending)
- 🌙 Modern dark theme design
- 📱 Fully responsive layout
- 🐳 Docker support for easy deployment
- ♿ Accessible design with ARIA labels

## 🚀 Quick Start

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   ```
   http://localhost:5173
   ```

### 🐳 Docker Deployment

**Prerequisites:** Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)

**Production mode:**
```bash
npm run docker:prod
# or
docker-compose up -d
```
Access at: http://localhost:3000

**Development mode:**
```bash
npm run docker:dev
# or
docker-compose -f docker-compose.dev.yml up
```
Access at: http://localhost:5173

📖 **Detailed Docker guide:** [DOCKER.md](./DOCKER.md)

## 🛠️ Technology Stack

- **Framework:** React 18.2.0
- **Build Tool:** Vite 5.2.0
- **Styling:** Custom CSS with CSS Variables
- **Icons:** React Icons
- **Deployment:** Docker + Nginx

## 📁 Project Structure

```
src/
├── components/
│   ├── AddTodo.jsx          # Todo input form
│   ├── AppName.jsx          # App title
│   ├── TodoItem.jsx         # Individual todo item
│   ├── TodoItems.jsx        # Todo list container
│   └── WelcomeMessage.jsx   # Welcome/stats display
├── store/
│   └── todoItemsStore.jsx   # React Context
├── App.jsx                  # Main app component
├── App.css                  # Global styles
└── main.jsx                 # React entry point
```

## 📜 Available Scripts

### Development
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Docker
```bash
npm run docker:build   # Build production Docker image
npm run docker:run     # Run production container
npm run docker:dev     # Run development mode
npm run docker:prod    # Run with docker-compose
npm run docker:stop    # Stop container
npm run docker:remove  # Remove container
npm run docker:clean   # Clean Docker resources
```

## 🎨 Design Features

- **Clean Dark Theme** with consistent color palette
- **Responsive Design** that works on all devices
- **Smooth Animations** for better user experience
- **Gradient Text Effects** for visual appeal
- **Professional Typography** using Poppins font

## 🏗️ Architecture

- **State Management:** React Context API
- **Form Handling:** useRef for performance
- **Component Pattern:** Functional components with hooks
- **Styling:** CSS Modules + Global CSS Variables
- **Build:** Multi-stage Docker builds for optimization

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🚀 Deployment Options

This app can be deployed to:
- **Docker:** Any Docker-compatible platform
- **Static Hosting:** Netlify, Vercel, GitHub Pages
- **Cloud:** AWS S3, Google Cloud Storage
- **Containers:** Kubernetes, Docker Swarm

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.
