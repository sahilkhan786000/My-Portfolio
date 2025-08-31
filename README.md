# Developer Portfolio Website

A high-quality, modern developer portfolio website built with React frontend and Spring Boot backend, featuring smooth animations, responsive design, and a professional appearance.

## 🎨 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Mobile-first approach with TailwindCSS
- **Smooth Animations**: Framer Motion animations throughout the interface
- **Interactive Elements**: Hover effects, particle backgrounds, and 3D skill sphere
- **Contact Form**: Functional contact form with backend integration
- **Project Showcase**: Dynamic project display with filtering capabilities
- **Skills Visualization**: Interactive skill bars and rotating 3D sphere
- **Experience Timeline**: Animated work experience timeline
- **SEO Optimized**: Meta tags and structured content for better search visibility

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Type Animation** - Typewriter effects
- **React Hook Form** - Form handling and validation
- **Axios** - HTTP client for API calls
- **Lucide React** - Beautiful icons

### Backend
- **Java 17** - Modern Java with latest features
- **Spring Boot 3.2** - Rapid application development framework
- **Spring Data JPA** - Data access layer
- **PostgreSQL** - Relational database
- **Maven** - Dependency management and build tool

### Deployment
- **Vercel** - Frontend hosting
- **Render** - Backend and database hosting

## 📁 Project Structure

```
MyPortfolio-1/
├── src/                          # Frontend source code
│   ├── components/               # React components
│   │   ├── About.jsx            # About section
│   │   ├── Contact.jsx          # Contact form
│   │   ├── Experience.jsx       # Work experience
│   │   ├── Footer.jsx           # Footer component
│   │   ├── Hero.jsx             # Hero section
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── ParticleBackground.jsx # Animated background
│   │   ├── Projects.jsx         # Projects showcase
│   │   └── Skills.jsx           # Skills section
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # App entry point
│   └── index.css                # Global styles
├── backend/                      # Spring Boot backend
│   ├── src/main/java/com/portfolio/
│   │   ├── controller/          # REST controllers
│   │   ├── service/             # Business logic
│   │   ├── repository/          # Data access layer
│   │   ├── entity/              # JPA entities
│   │   ├── dto/                 # Data transfer objects
│   │   ├── exception/           # Exception handling
│   │   └── config/              # Configuration classes
│   ├── pom.xml                  # Maven dependencies
│   └── application.properties   # Application configuration
├── package.json                  # Frontend dependencies
├── tailwind.config.js           # TailwindCSS configuration
├── vite.config.js               # Vite configuration
└── README.md                    # This file
```

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** and **npm** or **yarn**
- **Java 17+** and **Maven 3.6+**
- **PostgreSQL 12+**

### Frontend Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies and run**
   ```bash
   mvn spring-boot:run
   ```

3. **Or build and run JAR**
   ```bash
   mvn clean package
   java -jar target/portfolio-backend-0.0.1-SNAPSHOT.jar
   ```

### Database Setup

1. **Create PostgreSQL database**
   ```sql
   CREATE DATABASE portfolio_db;
   CREATE USER portfolio_user WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE portfolio_db TO portfolio_user;
   ```

2. **Update backend configuration**
   Edit `backend/src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/portfolio_db
   spring.datasource.username=portfolio_user
   spring.datasource.password=your_password
   ```

## 🌐 API Endpoints

### Projects API
- `GET /api/projects` - Get all projects
- `GET /api/projects/{id}` - Get project by ID
- `GET /api/projects/category/{category}` - Get projects by category
- `GET /api/projects/search?q={query}` - Search projects
- `GET /api/projects/categories` - Get all project categories
- `POST /api/projects` - Create new project
- `PUT /api/projects/{id}` - Update project
- `DELETE /api/projects/{id}` - Delete project

### Contact API
- `POST /api/contact` - Submit contact message
- `GET /api/contact/messages` - Get all messages (admin)
- `GET /api/contact/messages/{id}` - Get message by ID (admin)
- `PUT /api/contact/messages/{id}/read` - Mark message as read (admin)
- `GET /api/contact/messages/unread/count` - Get unread count (admin)

## 🚀 Deployment

### Frontend Deployment (Vercel)

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio website"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure build settings:
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`

3. **Environment Variables**
   - `VITE_API_BASE_URL`: Your backend API URL

### Backend Deployment (Render)

1. **Create Render account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Deploy Spring Boot app**
   - New → Web Service
   - Connect GitHub repository
   - Configure:
     - Name: `portfolio-backend`
     - Environment: `Java`
     - Build Command: `mvn clean package`
     - Start Command: `java -jar target/portfolio-backend-0.0.1-SNAPSHOT.jar`

3. **Environment Variables**
   ```
   DATABASE_URL=postgresql://username:password@host:port/database
   DATABASE_USERNAME=your_db_username
   DATABASE_PASSWORD=your_db_password
   SPRING_PROFILES_ACTIVE=prod
   CORS_ALLOWED_ORIGINS=https://your-domain.vercel.app
   ```

### Database Deployment (Render)

1. **Create PostgreSQL database**
   - New → PostgreSQL
   - Configure database settings
   - Copy connection string to backend environment variables

## 🔧 Configuration

### Frontend Configuration

Update `vite.config.js` for production API:
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: process.env.VITE_API_BASE_URL || 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})
```

### Backend Configuration

Update `application.properties` for production:
```properties
# Production settings
spring.profiles.active=prod
spring.jpa.hibernate.ddl-auto=validate
spring.jpa.show-sql=false
logging.level.com.portfolio=INFO
```

## 📱 Customization

### Personal Information
- Update personal details in `src/components/Hero.jsx`
- Modify experience in `src/components/Experience.jsx`
- Adjust skills in `src/components/Skills.jsx`
- Update contact information in `src/components/Contact.jsx`

### Styling
- Modify colors in `tailwind.config.js`
- Update global styles in `src/index.css`
- Customize component-specific styles

### Projects
- Add/remove projects in `backend/src/main/java/com/portfolio/config/DataInitializer.java`
- Or use the API endpoints to manage projects dynamically

## 🧪 Testing

### Frontend Testing
```bash
npm run lint          # ESLint check
npm run build         # Build verification
```

### Backend Testing
```bash
cd backend
mvn test              # Run unit tests
mvn verify            # Run all tests and checks
```

## 📚 Learning Resources

- **React Documentation**: [react.dev](https://react.dev)
- **Spring Boot Guide**: [spring.io/guides](https://spring.io/guides)
- **TailwindCSS Docs**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Unsplash** for beautiful project images
- **Lucide** for elegant icons
- **TailwindCSS** for utility-first CSS framework
- **Framer Motion** for smooth animations
- **Spring Boot** for robust backend framework

## 📞 Support

If you have any questions or need help:
- Create an issue in the GitHub repository
- Contact via the portfolio contact form
- Email: your.email@example.com

---

**Happy Coding! 🚀**