import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye, Code2 } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  // Sample projects data
  const sampleProjects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      category: "Full Stack"
    },
    {
      id: 2,
      name: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      techStack: ["React", "Firebase", "TailwindCSS", "Framer Motion"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      category: "Frontend"
    },
    {
      id: 3,
      name: "API Gateway Service",
      description: "A microservices API gateway built with Spring Boot, featuring authentication, rate limiting, and request routing capabilities.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      techStack: ["Java", "Spring Boot", "Redis", "Docker", "Kubernetes"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      category: "Backend"
    },
    {
      id: 4,
      name: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and beautiful UI/UX design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8b6a40?w=500&h=300&fit=crop",
      techStack: ["React", "TailwindCSS", "Framer Motion", "Vite"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      category: "Frontend"
    },
    {
      id: 5,
      name: "Data Analytics Dashboard",
      description: "An interactive dashboard for visualizing business metrics and KPIs with real-time data updates and customizable charts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      techStack: ["React", "D3.js", "Python", "PostgreSQL", "FastAPI"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      category: "Full Stack"
    },
    {
      id: 6,
      name: "Mobile Banking App",
      description: "A secure mobile banking application with biometric authentication, transaction history, and real-time notifications.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      techStack: ["React Native", "Node.js", "PostgreSQL", "JWT", "Socket.io"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
      category: "Mobile"
    }
  ]

  useEffect(() => {
    setTimeout(() => {
      setProjects(sampleProjects)
      setLoading(false)
    }, 1000)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-900/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-300">Loading projects...</p>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 bg-black/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg"
          >
            My Projects
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-white max-w-3xl mx-auto leading-relaxed"
          >
            A collection of projects that showcase my skills and passion for building innovative solutions.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3  rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-gray-900/60 backdrop-blur-md text-gray-300 hover:bg-gray-800/80 border border-white/20'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gray-900/60 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gray-900/70 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-blue-400 border border-white/30 shadow-md"
                  >
                    <Github className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gray-900/70 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-green-400 border border-white/30 shadow-md"
                  >
                    <ExternalLink className="h-6 w-6" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {project.category}
                  </span>
                  <Code2 className="h-5 w-5 text-gray-300" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                  {project.name}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-gray-300 bg-gray-800/60 backdrop-blur-sm border border-white/20 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-green-400 hover:text-green-300 font-medium"
                  >
                    <Eye className="h-4 w-4" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/30"
          >
            <Github className="h-5 w-5" />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full opacity-30 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full opacity-30 blur-3xl" />
    </section>
  )
}

export default Projects
