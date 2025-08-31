import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Database, Cloud, Smartphone, Palette, Wrench } from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeCategory, setActiveCategory] = useState('frontend')

  const skillCategories = {
    frontend: {
      icon: <Code2 className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Modern web technologies and frameworks for creating responsive user interfaces",
      skills: [
        { name: "React", level: 95, color: "from-blue-500 to-blue-600" },
        { name: "JavaScript/TypeScript", level: 90, color: "from-yellow-500 to-orange-500" },
        { name: "HTML5 & CSS3", level: 95, color: "from-orange-500 to-red-500" },
        { name: "TailwindCSS", level: 90, color: "from-cyan-500 to-blue-500" },
        { name: "Next.js", level: 85, color: "from-gray-800 to-black" },
        { name: "Redux/Context API", level: 88, color: "from-purple-500 to-pink-500" }
      ]
    },
    backend: {
      icon: <Database className="h-6 w-6" />,
      title: "Backend Development",
      description: "Server-side technologies and database management for robust applications",
      skills: [
        { name: "Java", level: 88, color: "from-orange-500 to-red-500" },
        { name: "Spring Boot", level: 85, color: "from-green-500 to-green-600" },
        { name: "Node.js", level: 82, color: "from-green-600 to-green-700" },
        { name: "Express.js", level: 80, color: "from-gray-600 to-gray-700" },
        { name: "RESTful APIs", level: 90, color: "from-blue-500 to-indigo-500" },
        { name: "GraphQL", level: 75, color: "from-pink-500 to-purple-500" }
      ]
    },
    // ... keep database, cloud, mobile, tools same
  }

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

  const currentCategory = skillCategories[activeCategory]

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-transparent">
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Skills & Expertise
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-xl text-white max-w-3xl mx-auto drop-shadow-sm"
          >
            A comprehensive overview of my technical skills and proficiency levels
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-900/60 backdrop-blur-md text-gray-200 hover:bg-white/20 border border-gray-700'
              }`}
            >
              {category.icon}
              <span className="hidden sm:inline">{category.title.split(' ')[0]}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Content */}
        
        <div className=" grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6 bg-gray-900/60 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-lg"
          >
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4 text-white">
                {currentCategory.icon}
                <h3 className="text-2xl font-bold">{currentCategory.title}</h3>
              </div>
              <p className="text-white">{currentCategory.description}</p>
            </div>

            <div className="space-y-6">
              {currentCategory.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-600 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Sphere (unchanged, but colors updated) */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative h-96 flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              {Object.entries(skillCategories).map(([key, category], index) => {
                const angle = (index * 360) / Object.keys(skillCategories).length
                const radius = 120
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius

                return (
                  <motion.div
                    key={key}
                    className={`absolute top-1/2 left-1/2 w-16 h-16 rounded-full flex items-center justify-center text-white font-medium text-sm cursor-pointer transition-all duration-300 ${
                      activeCategory === key
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-110 shadow-lg'
                        : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:scale-105'
                    }`}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(key)}
                  >
                    {category.title.split(' ')[0]}
                  </motion.div>
                )
              })}

              <motion.div
                className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <Code2 className="h-8 w-8" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full opacity-30 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-500/20 to-blue-500/20 rounded-full opacity-30 blur-3xl" />
    </section>
  )
}

export default Skills
