import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [confetti, setConfetti] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission without backend
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setConfetti(true)
      reset()
      setTimeout(() => setConfetti(false), 1500)
    }, 1500)
  }

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

  const contactInfo = [
    { icon: <Mail className="h-6 w-6" />, title: "Email", value: "salmanengis6397@gmail.com", link: "mailto:salmanengis6397@gmail.com" },
    { icon: <Phone className="h-6 w-6" />, title: "Phone", value: "+91 9997458123", link: "tel:+919997458123" },
    { icon: <MapPin className="h-6 w-6" />, title: "Location", value: "Pune, Maharashtra, India", link: "#" }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-900/70 backdrop-blur-md relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="text-center mb-16">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">Get In Touch</motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8" />
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start a project or have a question? Let's discuss how I can help bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <motion.div variants={itemVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="space-y-8">
            <div className="bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities and exciting projects.
              </p>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div key={info.title} variants={itemVariants} initial="hidden" animate={inView ? "visible" : "hidden"} transition={{ delay: index * 0.1 }} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">{info.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                      <a href={info.link} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">{info.value}</a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div variants={itemVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">Full Name *</label>
                <input type="text" id="name" {...register('name', { required: 'Name is required' })} placeholder="Enter your full name"
                  className={`w-full px-4 py-3 rounded-lg bg-black/40 border focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 ${errors.name ? 'border-red-500' : 'border-white/20'}`} />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">Email Address *</label>
                <input type="email" id="email" {...register('email', { required: 'Email is required' })} placeholder="Enter your email address"
                  className={`w-full px-4 py-3 rounded-lg bg-black/40 border focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 ${errors.email ? 'border-red-500' : 'border-white/20'}`} />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">Subject *</label>
                <input type="text" id="subject" {...register('subject', { required: 'Subject is required' })} placeholder="What's this about?"
                  className={`w-full px-4 py-3 rounded-lg bg-black/40 border focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 ${errors.subject ? 'border-red-500' : 'border-white/20'}`} />
                {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">Message *</label>
                <textarea id="message" rows={5} {...register('message', { required: 'Message is required' })} placeholder="Tell me about your project..."
                  className={`w-full px-4 py-3 rounded-lg bg-black/40 border focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none ${errors.message ? 'border-red-500' : 'border-white/20'}`} />
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
              </div>

              <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white flex items-center justify-center space-x-2 transition-all duration-300 ${isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl'}`}>
                {isSubmitting ? <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div><span>Sending...</span></> :
                  <><Send className="h-5 w-5" /><span>Send Message</span></>}
              </motion.button>

              {submitStatus === 'success' && <motion.div className="flex items-center space-x-2 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-300"><CheckCircle className="h-5 w-5" /><span>Message sent successfully! I'll get back to you soon.</span></motion.div>}
            </form>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full opacity-30 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full opacity-30 blur-3xl" />
    </section>
  )
}

export default Contact
