import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Target, Award, Code2 } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    { name: 'Frontend Development', level: 90, color: 'from-blue-500 to-blue-600' },
    { name: 'Backend Development', level: 85, color: 'from-green-500 to-green-600' },
    { name: 'Database Design', level: 80, color: 'from-purple-500 to-purple-600' },
    { name: 'DevOps & Cloud', level: 75, color: 'from-orange-500 to-orange-600' },
    { name: 'Problem Solving', level: 95, color: 'from-red-500 to-red-600' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="py-20 bg-gray-900/70 backdrop-blur-md">
      {/* Background Overlay */}
      <div  />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info Cards */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {[
              {
  icon: <User className="h-6 w-6 text-white" />,
  title: 'Current Role',
  desc: (
    <>
      Associate Software Developer at{' '}
      <span className="font-semibold text-blue-400">
        Tudip Technologies
      </span>
      , working on the <span className="font-semibold">Olea Project</span> with a focus on 
      API integrations, UI enhancements, automations, and approval functionalities 
      within CRM solutions.
    </>
  ),
  gradient: 'from-blue-500 to-purple-600',
},
            {
  icon: <Target className="h-6 w-6 text-white" />,
  title: 'Career Goals',
  desc: `Aiming to grow as a Full Stack Java Developer, building enterprise-grade 
  applications and scalable systems, while also learning and exploring AI to 
  create smarter, more innovative solutions.`,
  gradient: 'from-green-500 to-blue-600',
},
         {
  icon: <Award className="h-6 w-6 text-white" />,
  title: 'Passion',
  desc: `Passionate about solving real-world problems through technology, writing 
  clean and efficient code, and delivering impactful user experiences. I enjoy 
  learning new technologies, exploring AI, and gaining knowledge of DevOps 
  concepts to build smarter and more scalable solutions.`,
  gradient: 'from-purple-500 to-pink-600',
},


            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 bg-gray-900/70 backdrop-blur-md border border-white/10 rounded-2xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${card.gradient} rounded-xl flex items-center justify-center shadow-md`}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-md">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {/* Skills Header */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Code2 className="h-8 w-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white drop-shadow-md">
                  Technical Skills
                </h3>
              </div>
              <p className="text-white drop-shadow-sm">
                Continuously learning and improving my technical expertise
              </p>
            </div>

            {/* Skill Bars */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-white text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-900/70 backdrop-blur-md rounded-full h-3 overflow-hidden">
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

            {/* Extra Info Card */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gray-900/70 backdrop-blur-md border border-white/10 rounded-2xl"
            >
              <h4 className="text-lg font-semibold text-white mb-4 drop-shadow-md">
                What I Bring
              </h4>
              <ul className="space-y-2 text-gray-300">
                {[
                  { dot: 'bg-blue-400', text: 'Strong problem-solving and analytical skills' },
                  { dot: 'bg-green-400', text: 'Experience with modern web technologies' },
                  { dot: 'bg-purple-400', text: 'Commitment to writing clean, maintainable code' },
                  { dot: 'bg-orange-400', text: 'Team collaboration and communication skills' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 ${item.dot} rounded-full`} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full opacity-30 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-500/20 to-blue-500/20 rounded-full opacity-30 blur-3xl" />
    </section>
  )
}

export default About
