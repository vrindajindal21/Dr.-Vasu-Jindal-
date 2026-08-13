import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Stethoscope, Activity, Heart, Users, Calendar, User, Award, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [appointmentData, setAppointmentData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    condition: ''
  })
  const [appointmentSubmitted, setAppointmentSubmitted] = useState(false)
  const [showAppointments, setShowAppointments] = useState(false)

  const handleAppointmentSubmit = (e) => {
    e.preventDefault()

    // Save to Local Storage
    const existingAppointments = JSON.parse(localStorage.getItem('appointments') || '[]')
    const newAppointment = {
      ...appointmentData,
      id: Date.now(),
      createdAt: new Date().toISOString()
    }
    existingAppointments.push(newAppointment)
    localStorage.setItem('appointments', JSON.stringify(existingAppointments))

    console.log('Appointment Booking Details:', appointmentData)
    console.log('All Appointments:', existingAppointments)

    // Create WhatsApp message
    const whatsappMessage = `Hello Dr. Jindal, I would like to book an appointment

Name: ${appointmentData.fullName}
Phone: ${appointmentData.phone}
Email: ${appointmentData.email}
Date: ${appointmentData.date}
Time: ${appointmentData.time}
Service: ${appointmentData.service}
Condition: ${appointmentData.condition}`

    // Open WhatsApp with pre-filled message
    const whatsappNumber = '919167761851'
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')

    setAppointmentSubmitted(true)
  }

  const handleInputChange = (e) => {
    setAppointmentData({
      ...appointmentData,
      [e.target.name]: e.target.value
    })
  }

  const getAppointments = () => {
    return JSON.parse(localStorage.getItem('appointments') || '[]')
  }

  const clearAppointments = () => {
    if (confirm('Are you sure you want to clear all appointments?')) {
      localStorage.removeItem('appointments')
      setShowAppointments(false)
    }
  }

  return (
    <div className="min-h-screen bg-spine-tan">
      {/* Navigation */}
      <nav className="bg-spine-teal text-white py-3 px-4 md:py-4 md:px-6 shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold">JINDAL SPINE CLINIC</h1>
          <button
            className="md:hidden text-white p-2"
            
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <div className={`hidden md:flex space-x-4 md:space-x-6`}>
            <a href="#home" className="hover:text-spine-tan-light transition text-sm md:text-base">Home</a>
            <a href="#doctor" className="hover:text-spine-tan-light transition text-sm md:text-base">Dr. Vasu Jindal</a>
            <a href="#about" className="hover:text-spine-tan-light transition text-sm md:text-base">About</a>
            <a href="#services" className="hover:text-spine-tan-light transition text-sm md:text-base">Services</a>
            <a href="#appointment" className="hover:text-spine-tan-light transition text-sm md:text-base">Book Appointment</a>
            <a href="#location" className="hover:text-spine-tan-light transition text-sm md:text-base">Location</a>
            <a href="#contact" className="hover:text-spine-tan-light transition text-sm md:text-base">Contact</a>
            <button
              onClick={() => setShowAppointments(true)}
              className="bg-spine-tan text-spine-teal-dark px-4 py-2 rounded-lg font-semibold hover:bg-spine-tan-light transition text-sm md:text-base"
            >
              View Appointments
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <a href="#home" className="block py-3 px-4 hover:bg-white/10 rounded-lg transition" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#doctor" className="block py-3 px-4 hover:bg-white/10 rounded-lg transition" onClick={() => setMobileMenuOpen(false)}>Dr. Vasu Jindal</a>
            <a href="#about" className="block py-3 px-4 hover:bg-white/10 rounded-lg transition" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#services" className="block py-3 px-4 hover:bg-white/10 rounded-lg transition" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#appointment" className="block py-3 px-4 hover:bg-white/10 rounded-lg transition" onClick={() => setMobileMenuOpen(false)}>Book Appointment</a>
            <a href="#location" className="block py-3 px-4 hover:bg-white/10 rounded-lg transition" onClick={() => setMobileMenuOpen(false)}>Location</a>
            <a href="#contact" className="block py-3 px-4 hover:bg-white/10 rounded-lg transition" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <button
              onClick={() => {
                setShowAppointments(true)
                setMobileMenuOpen(false)
              }}
              className="w-full bg-spine-tan text-spine-teal-dark px-4 py-3 rounded-lg font-semibold hover:bg-spine-tan-light transition text-left mt-2"
            >
              View Appointments
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-spine-teal via-spine-teal-dark to-spine-teal text-white py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-spine-tan/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-spine-teal/30 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-3 md:mb-4 leading-tight">
              Dr. Vasu Jindal
            </h2>
            <h3 className="text-base md:text-xl lg:text-2xl xl:text-4xl font-semibold mb-4 md:mb-6 text-spine-tan-light leading-relaxed">
              <span className="bg-gradient-to-r from-spine-tan to-spine-tan-light bg-clip-text text-transparent">MBBS</span><br />
              <span className="bg-gradient-to-r from-spine-tan to-spine-tan-light bg-clip-text text-transparent">MS Ortho</span><br />
              <span className="bg-gradient-to-r from-spine-tan to-spine-tan-light bg-clip-text text-transparent">DNB Ortho</span><br />
              <span className="bg-gradient-to-r from-spine-tan to-spine-tan-light bg-clip-text text-transparent">FNB Spine Surgery</span>
            </h3>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-6 md:mb-8 text-spine-tan-light font-medium">
              Transform Your Spine Health at <span className="text-spine-tan font-bold">Jindal Spine Clinic</span>
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 md:space-x-4">
              <a href="#appointment" className="bg-gradient-to-r from-spine-tan to-spine-tan-light text-spine-teal-dark px-6 py-4 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center min-h-[48px] flex items-center justify-center">
                📅 Book Free Consultation
              </a>
              <a href="#doctor" className="border-2 border-spine-tan text-spine-tan px-6 py-4 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-spine-tan hover:text-spine-teal-dark transition-all duration-300 text-center min-h-[48px] flex items-center justify-center">
                👨‍⚕️ Meet Dr. Jindal
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center order-2 md:order-1">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-spine-tan to-spine-tan-light rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white/15 backdrop-blur-md rounded-3xl p-6 md:p-10 w-full border border-white/20 shadow-2xl">
                <div className="text-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-spine-tan to-spine-tan-light rounded-full flex items-center justify-center shadow-xl">
                    <Stethoscope size={56} className="text-spine-teal-dark" />
                  </div>
                  <p className="text-spine-tan font-semibold text-base md:text-lg mb-2">Jindal Spine Clinic</p>
                  <p className="text-white/80 text-xs md:text-sm">Advanced Spine Care Center</p>
                  <div className="mt-4 md:mt-6 grid grid-cols-3 gap-2 md:gap-4">
                    <div className="bg-white/10 rounded-lg p-2 md:p-3">
                      <p className="text-xl md:text-2xl font-bold text-spine-tan">98%</p>
                      <p className="text-xs text-white/70">Success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Vasu Jindal Profile Section */}
      <section id="doctor" className="py-12 md:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-spine-teal mb-6 md:mb-8 text-center">Meet Dr. Vasu Jindal</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-spine-teal to-spine-teal-dark rounded-full flex items-center justify-center shadow-2xl">
                  <User size={96} className="text-spine-tan" />
                </div>
                <div className="absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 bg-spine-tan text-spine-teal-dark px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg">
                  <span className="font-semibold text-sm md:text-base">Spine Surgeon</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-spine-teal mb-3 md:mb-4">Dr. Vasu Jindal</h3>
              <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">
                Dr. Vasu Jindal is a renowned spine surgeon and the founder of Jindal Spine Clinic. With extensive qualifications including MBBS, MS Ortho, DNB Ortho, and FNB Spine Surgery, he specializes in treating complex spinal conditions with advanced surgical techniques.
              </p>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                At Jindal Spine Clinic, Dr. Jindal provides comprehensive spine care combining surgical expertise with compassionate patient-centered treatment to help patients achieve optimal spinal health and pain-free living.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <Award size={18} className="text-spine-teal" />
                  <span className="text-gray-700 font-medium text-sm md:text-base">MBBS</span>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <Award size={18} className="text-spine-teal" />
                  <span className="text-gray-700 font-medium text-sm md:text-base">MS Ortho</span>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <Award size={18} className="text-spine-teal" />
                  <span className="text-gray-700 font-medium text-sm md:text-base">DNB Ortho</span>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <Award size={18} className="text-spine-teal" />
                  <span className="text-gray-700 font-medium text-sm md:text-base">FNB Spine Surgery</span>
                </div>
              </div>
              <div className="mt-4 md:mt-6">
                <h4 className="text-base md:text-lg font-semibold text-spine-teal mb-3 md:mb-4">Connect with Dr. Jindal</h4>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <a
                    href="https://instagram.com/drvasujindal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-br from-purple-500 to-pink-500 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:opacity-90 transition text-xs md:text-sm"
                  >
                    <Instagram size={18} />
                    <span className="font-medium">Instagram</span>
                  </a>
                  <a
                    href="https://facebook.com/drvasujindal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:opacity-90 transition text-xs md:text-sm"
                  >
                    <Facebook size={18} />
                    <span className="font-medium">Facebook</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/drvasujindal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-700 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:opacity-90 transition text-xs md:text-sm"
                  >
                    <Linkedin size={18} />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  <a
                    href="https://wa.me/919167761851"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-green-500 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:opacity-90 transition text-xs md:text-sm"
                  >
                    <MessageCircle size={18} />
                    <span className="font-medium">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-spine-teal mb-6 md:mb-8 text-center">About Jindal Spine Clinic</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">
                At Jindal Spine Clinic, we specialize in comprehensive spine care led by Dr. Vasu Jindal. Our team provides both surgical and non-surgical treatments, dedicated to helping you achieve optimal spinal health through personalized treatment plans.
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                With years of experience in spinal medicine, we combine advanced techniques with compassionate care to address your unique needs and concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gradient-to-b from-spine-tan-light to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-spine-teal mb-3 md:mb-4">Our Services</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600">Comprehensive Spine Care Solutions</p>
            <div className="w-16 md:w-24 h-1 bg-spine-teal mx-auto mt-3 md:mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-spine-teal to-spine-teal-dark rounded-2xl flex items-center justify-center mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Activity size={28} className="text-white" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-spine-teal mb-1 md:mb-2">Spinal Rehabilitation</h3>
              <p className="text-gray-600 text-xs md:text-sm lg:text-base mb-1">Comprehensive rehabilitation programs to restore mobility and strength.</p>
              <p className="text-gray-500 text-xs md:text-sm italic">स्पाइनल पुनर्वास - गतिशीलता और शक्ति बहाल करने के लिए व्यापक पुनर्वास कार्यक्रम</p>
            </div>
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-spine-teal to-spine-teal-dark rounded-2xl flex items-center justify-center mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart size={28} className="text-white" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-spine-teal mb-1 md:mb-2">Pain Management</h3>
              <p className="text-gray-600 text-xs md:text-sm lg:text-base mb-1">Advanced pain management techniques for lasting relief.</p>
              <p className="text-gray-500 text-xs md:text-sm italic">दर्द प्रबंधन - स्थायी राहत के लिए उन्नत दर्द प्रबंधन तकनीक</p>
            </div>
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-spine-teal to-spine-teal-dark rounded-2xl flex items-center justify-center mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Stethoscope size={28} className="text-white" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-spine-teal mb-1 md:mb-2">Chiropractic Care</h3>
              <p className="text-gray-600 text-xs md:text-sm lg:text-base mb-1">Professional chiropractic adjustments and spinal alignment.</p>
              <p className="text-gray-500 text-xs md:text-sm italic">काइरोप्रैक्टिक देखभाल - पेशेवर काइरोप्रैक्टिक समायोजन और स्पाइनल संरेखण</p>
            </div>
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-spine-teal to-spine-teal-dark rounded-2xl flex items-center justify-center mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users size={28} className="text-white" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-spine-teal mb-1 md:mb-2">Physical Therapy</h3>
              <p className="text-gray-600 text-xs md:text-sm lg:text-base mb-1">Customized physical therapy programs for recovery.</p>
              <p className="text-gray-500 text-xs md:text-sm italic">फिजियोथेरेपी - रिकवरी के लिए अनुकूलित फिजियोथेरेपी कार्यक्रम</p>
            </div>
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-spine-teal to-spine-teal-dark rounded-2xl flex items-center justify-center mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Activity size={28} className="text-white" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-spine-teal mb-1 md:mb-2">Post-Surgical Care</h3>
              <p className="text-gray-600 text-xs md:text-sm lg:text-base mb-1">Specialized care for patients recovering from spine surgery.</p>
              <p className="text-gray-500 text-xs md:text-sm italic">ऑपरेशन के बाद की देखभाल - स्पाइन सर्जरी से रिकवर करने वाले मरीजों के लिए विशेष देखभाल</p>
            </div>
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-spine-teal to-spine-teal-dark rounded-2xl flex items-center justify-center mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart size={28} className="text-white" />
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-spine-teal mb-1 md:mb-2">Wellness Programs</h3>
              <p className="text-gray-600 text-xs md:text-sm lg:text-base mb-1">Preventive care and wellness programs for spinal health.</p>
              <p className="text-gray-500 text-xs md:text-sm italic">वेलनेस कार्यक्रम - स्पाइनल स्वास्थ्य के लिए निवारक देखभाल और वेलनेस कार्यक्रम</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section id="appointment" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gradient-to-br from-spine-teal via-spine-teal-dark to-spine-teal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-spine-tan/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-spine-teal/20 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-4">Book Your Appointment</h2>
            <p className="text-base md:text-lg lg:text-xl text-spine-tan-light">Get Expert Spine Care Today</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 md:p-6 lg:p-8 xl:p-10 border border-white/20 shadow-2xl">
            {appointmentSubmitted ? (
              <div className="text-center py-6 md:py-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">Appointment Booked Successfully!</h3>
                <p className="text-spine-tan-light mb-4 md:mb-6 text-sm md:text-base">We will contact you within 24 hours to confirm your appointment.</p>
                <button
                  onClick={() => setAppointmentSubmitted(false)}
                  className="bg-gradient-to-r from-spine-tan to-spine-tan-light text-spine-teal-dark px-6 py-3 md:px-8 md:py-3 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm md:text-base"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleAppointmentSubmit} className="space-y-3 md:space-y-4 lg:space-y-6">
                <div className="grid md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                  <div>
                    <label className="block text-spine-tan-light mb-2 font-semibold text-xs md:text-sm lg:text-base">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Enter your full name"
                      value={appointmentData.fullName}
                      onChange={handleInputChange}
                      className="w-full p-3 md:p-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-spine-tan bg-white/90 text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-spine-tan-light mb-2 font-semibold text-xs md:text-sm lg:text-base">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Enter your phone number"
                      value={appointmentData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 md:p-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-spine-tan bg-white/90 text-sm md:text-base"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                  <div>
                    <label className="block text-spine-tan-light mb-2 font-semibold text-xs md:text-sm lg:text-base">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your email"
                      value={appointmentData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 md:p-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-spine-tan bg-white/90 text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-spine-tan-light mb-2 font-semibold text-xs md:text-sm lg:text-base">Preferred Date *</label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={appointmentData.date}
                      onChange={handleInputChange}
                      className="w-full p-3 md:p-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-spine-tan bg-white/90 text-sm md:text-base"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                  <div>
                    <label className="block text-spine-tan-light mb-2 font-semibold text-xs md:text-sm lg:text-base">Preferred Time *</label>
                    <select
                      name="time"
                      required
                      value={appointmentData.time}
                      onChange={handleInputChange}
                      className="w-full p-3 md:p-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-spine-tan bg-white/90 text-sm md:text-base"
                    >
                      <option value="">Select a time slot</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-spine-tan-light mb-2 font-semibold text-xs md:text-sm lg:text-base">Service Type *</label>
                    <select
                      name="service"
                      required
                      value={appointmentData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 md:p-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-spine-tan bg-white/90 text-sm md:text-base"
                    >
                      <option value="">Select a service</option>
                      <option value="consultation">Initial Consultation</option>
                      <option value="rehabilitation">Spinal Rehabilitation</option>
                      <option value="pain-management">Pain Management</option>
                      <option value="chiropractic">Chiropractic Care</option>
                      <option value="physical-therapy">Physical Therapy</option>
                      <option value="follow-up">Follow-up Visit</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-spine-tan-light mb-2 font-semibold text-xs md:text-sm lg:text-base">Describe Your Condition</label>
                  <textarea
                    name="condition"
                    placeholder="Please briefly describe your spine-related concerns or symptoms"
                    rows="4"
                    value={appointmentData.condition}
                    onChange={handleInputChange}
                    className="w-full p-3 md:p-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-spine-tan bg-white/90 text-sm md:text-base"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-spine-tan to-spine-tan-light text-spine-teal-dark py-3 md:py-4 rounded-xl font-bold text-sm md:text-base lg:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 min-h-[48px]"
                >
                  <Calendar size={22} />
                  <span>Schedule Appointment Now</span>
                </button>
                <div className="flex items-center justify-center space-x-2 text-spine-tan-light">
                  <span className="text-lg md:text-xl lg:text-2xl">⚡</span>
                  <p className="text-xs md:text-sm font-medium">We will confirm your appointment within 24 hours</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gradient-to-b from-white to-spine-tan-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-spine-teal mb-3 md:mb-4">Find Us</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600">Visit Jindal Spine Clinic</p>
            <div className="w-16 md:w-24 h-1 bg-spine-teal mx-auto mt-3 md:mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-spine-teal mb-3 md:mb-4 lg:mb-6 flex items-center">
                <MapPin size={20} className="mr-2" />
                Clinic Location
              </h3>
              <div className="space-y-3 md:space-y-4 lg:space-y-6">
                <div className="flex items-start space-x-2 md:space-x-3 lg:space-x-4 p-3 md:p-4 bg-spine-tan-light rounded-xl">
                  <MapPin size={20} className="text-spine-teal mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-800 text-sm md:text-base lg:text-lg">Jindal Spine Clinic</p>
                    <p className="text-gray-600 text-xs md:text-sm lg:text-base">36-A Mahavir Chowk, Old Vardhman Street</p>
                    <p className="text-gray-600 text-xs md:text-sm lg:text-base">Muzaffarnagar, Uttar Pradesh, India</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4 p-3 md:p-4 bg-spine-tan-light rounded-xl">
                  <Phone size={20} className="text-spine-teal flex-shrink-0" />
                  <span className="text-gray-800 font-medium text-xs md:text-sm lg:text-base">+91 91677 61851</span>
                </div>
                <div className="flex items-start space-x-2 md:space-x-3 lg:space-x-4 p-3 md:p-4 bg-spine-tan-light rounded-xl">
                  <Clock size={20} className="text-spine-teal mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800 font-medium text-xs md:text-sm lg:text-base">Morning: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-800 font-medium text-xs md:text-sm lg:text-base">Evening: 4:00 PM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-6 lg:mt-8">
                <a
                  href="https://maps.google.com/?q=36-A+Mahavir+Chowk+Old+Vardhman+Street+Muzaffarnagar+Uttar+Pradesh+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-spine-teal to-spine-teal-dark text-white px-5 py-3 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-xl font-bold text-sm md:text-base lg:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full justify-center min-h-[48px]"
                >
                  <MapPin size={20} />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-spine-teal to-spine-teal-dark rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative h-full min-h-[250px] md:min-h-[300px] lg:min-h-[400px] flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 text-white">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/20 rounded-full flex items-center justify-center mb-3 md:mb-4 lg:mb-6 backdrop-blur-sm">
                  <MapPin size={40} className="text-white" />
                </div>
                <p className="text-lg md:text-xl lg:text-2xl font-bold mb-2">Interactive Map</p>
                <p className="text-spine-tan-light text-center mb-3 md:mb-4 lg:mb-6 text-xs md:text-sm lg:text-base">Click "Get Directions" to navigate to our clinic</p>
                <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 md:px-4 md:py-2 rounded-full backdrop-blur-sm">
                  <span className="text-lg md:text-xl lg:text-2xl">📍</span>
                  <span className="font-medium text-xs md:text-sm lg:text-base">36-A Mahavir Chowk, Muzaffarnagar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-spine-teal text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 lg:mb-12 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4 lg:mb-6">Get in Touch</h3>
              <div className="space-y-2 md:space-y-3 lg:space-y-4">
                <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
                  <Phone size={20} className="text-spine-tan flex-shrink-0" />
                  <span className="text-xs md:text-sm lg:text-base">+91 91677 61851</span>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
                  <MapPin size={20} className="text-spine-tan flex-shrink-0" />
                  <span className="text-xs md:text-sm lg:text-base">36-A Mahavir Chowk, Old Vardhman Street, Muzaffarnagar</span>
                </div>
                <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
                  <Clock size={20} className="text-spine-tan flex-shrink-0" />
                  <span className="text-xs md:text-sm lg:text-base">Morning: 10:00 AM - 2:00 PM</span>
                  <span className="text-xs md:text-sm lg:text-base">Evening: 4:00 PM - 6:00 PM</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-2 md:space-y-3 lg:space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 md:p-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-spine-tan text-sm md:text-base"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 md:p-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-spine-tan text-sm md:text-base"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 md:p-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-spine-tan text-sm md:text-base"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 md:p-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-spine-tan text-sm md:text-base"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-spine-tan text-spine-teal-dark py-3 md:py-4 rounded-xl font-semibold hover:bg-spine-tan-light transition text-sm md:text-base min-h-[48px]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-spine-teal-dark text-white py-4 md:py-6 lg:py-8 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2">JINDAL SPINE CLINIC</h3>
          <p className="text-spine-tan-light mb-3 md:mb-4 text-xs md:text-sm lg:text-base">Expert Spine Care for a Better Life</p>
          <div className="flex justify-center space-x-2 md:space-x-3 lg:space-x-4 mb-3 md:mb-4">
            <a
              href="https://instagram.com/drvasujindal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-spine-tan-light hover:text-white transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com/drvasujindal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-spine-tan-light hover:text-white transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://linkedin.com/in/drvasujindal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-spine-tan-light hover:text-white transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://wa.me/919167761851"
              target="_blank"
              rel="noopener noreferrer"
              className="text-spine-tan-light hover:text-white transition"
            >
              <MessageCircle size={20} />
            </a>
          </div>
          <p className="text-xs md:text-sm text-gray-400">&copy; 2026 Jindal Spine Clinic. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919167761851?text=Hello%20Dr.%20Jindal,%20I%20would%20like%20to%20book%20an%20appointment"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 md:bottom-6 right-4 md:right-6 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      >
        <MessageCircle size={28} />
      </a>

      {/* Appointments Modal */}
      {showAppointments && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="bg-spine-teal text-white p-4 md:p-6 flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-bold">Booked Appointments</h2>
              <button
                onClick={() => setShowAppointments(false)}
                className="text-white hover:text-spine-tan-light transition p-2"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4 md:p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {getAppointments().length === 0 ? (
                <div className="text-center py-8 md:py-12">
                  <Calendar size={56} className="mx-auto text-gray-300 mb-3 md:mb-4" />
                  <p className="text-gray-500 text-base md:text-lg">No appointments booked yet</p>
                </div>
              ) : (
                <div className="space-y-3 md:space-y-4">
                  {getAppointments().map((appointment) => (
                    <div key={appointment.id} className="bg-spine-tan-light rounded-xl p-3 md:p-4 border border-gray-200">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 md:mb-3">
                        <div>
                          <h3 className="font-bold text-base md:text-lg text-spine-teal">{appointment.fullName}</h3>
                          <p className="text-xs md:text-sm text-gray-600">Booked on: {new Date(appointment.createdAt).toLocaleDateString()}</p>
                        </div>
                        <span className="bg-spine-teal text-white text-xs px-2 py-1 md:px-3 md:py-1 rounded-full w-fit mt-2 md:mt-0">
                          {appointment.service}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 md:gap-3 text-xs md:text-sm">
                        <div>
                          <p className="text-gray-500">Phone:</p>
                          <p className="font-medium">{appointment.phone}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Email:</p>
                          <p className="font-medium">{appointment.email}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Date:</p>
                          <p className="font-medium">{appointment.date}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Time:</p>
                          <p className="font-medium">{appointment.time}</p>
                        </div>
                      </div>
                      {appointment.condition && (
                        <div className="mt-2 md:mt-3">
                          <p className="text-gray-500 text-xs md:text-sm">Condition:</p>
                          <p className="text-xs md:text-sm">{appointment.condition}</p>
                        </div>
                      )}
                      <a
                        href={`https://wa.me/${appointment.phone}?text=Hello ${appointment.fullName}, your appointment for ${appointment.date} at ${appointment.time} has been confirmed.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 mt-3 md:mt-4 bg-green-500 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-green-600 transition text-xs md:text-sm"
                      >
                        <MessageCircle size={15} />
                        <span>Contact on WhatsApp</span>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {getAppointments().length > 0 && (
              <div className="bg-gray-50 p-3 md:p-4 flex flex-col md:flex-row md:justify-between md:items-center border-t gap-2">
                <p className="text-xs md:text-sm text-gray-600">Total: {getAppointments().length} appointment(s)</p>
                <button
                  onClick={clearAppointments}
                  className="bg-red-500 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-red-600 transition text-xs md:text-sm"
                >
                  Clear All
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
