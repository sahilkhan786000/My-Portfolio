import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

const experiences = [
  {
    id: 1,
    company: "Tudip Technologies",
    position: "Associate Software Developer",
    duration: "Sep 2024 - Present",
    location: "Pune, Maharashtra",
    description: `Working as a Software Developer on enterprise-level CRM applications, focusing on API integrations, automation, 
    and UI enhancements. Played a key role in streamlining manual business processes and improving overall efficiency.`,
    achievements: [
      "Designed and implemented API integrations and webhooks to automate Debtor Risk Assessment (DRA), reducing manual handling efforts by 70% and improving process efficiency by 50%.",
      "Developed approval workflows and automation features, improving turnaround time for business-critical tasks.",
      "Enhanced CRM UI components, leading to a 25% increase in user adoption and smoother customer experience.",
      "Collaborated with cross-functional teams to deliver scalable, enterprise-grade solutions."
    ],
    technologies: ["Microsoft Dynamics 365", "Power Apps", "Power Automate", "Javascript", "POSTMAN", "HTML", "CSS"]
  },
  {
    id: 2,
    company: "Oasis Infobyte",
    position: "Web Development Intern",
    duration: "Jul 2023 - Aug 2023",
    location: "Remote",
    description: `Completed a 2-month internship focused on learning modern web development technologies and building hands-on projects.`,
    achievements: [
      "Gained practical experience in HTML, CSS, JavaScript, and React.",
      "Developed a personal portfolio website to showcase skills and projects.",
      "Learned fundamental concepts of responsive design and UI development.",
      "Built a foundation in front-end workflows and project structuring."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React"]
  }
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="experience" className="py-20 bg-gray-900/70 backdrop-blur-md relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Work Experience
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            My professional journey in software development, from internships to current role
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg" />

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-gray-900/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {experience.position}
                        </h3>
                        <div className="flex items-center space-x-4 text-gray-300 text-sm">
                          <div className="flex items-center space-x-1">
                            <Briefcase className="h-4 w-4 text-blue-400" />
                            <span>{experience.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4 text-purple-400" />
                            <span>{experience.duration}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-400 text-sm mt-1">
                          <MapPin className="h-4 w-4 text-green-400" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2 flex items-center space-x-2">
                        <Award className="h-4 w-4 text-yellow-400" />
                        <span>Key Achievements</span>
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium text-white bg-blue-600/30 px-2 py-1 rounded-full border border-blue-500/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Briefcase className="h-5 w-5" />
            <span>Let's Work Together</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full opacity-40 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-500/20 to-blue-600/20 rounded-full opacity-40 blur-3xl" />
    </section>
  )
}

export default Experience
