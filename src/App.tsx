import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      id: 1,
      icon: 'fa-id-card',
      title: 'PAN Card Services',
      description: 'New PAN card application, corrections, reprint, and linking with Aadhar. Fast and hassle-free processing.',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 2,
      icon: 'fa-fingerprint',
      title: 'Aadhar Card Services',
      description: 'New enrollment, update, correction, download, and all Aadhar-related services at your doorstep.',
      color: 'from-green-500 to-green-700'
    },
    {
      id: 3,
      icon: 'fa-landmark',
      title: 'Land Related Works',
      description: 'Jamabandi, mutation, land registration, Khasra-Khatuni, and all land-related documentation services.',
      color: 'from-amber-500 to-amber-700'
    },
    {
      id: 4,
      icon: 'fa-file-certificate',
      title: 'Caste, Income & Residence Certificate',
      description: 'Apply for Caste Certificate, Income Certificate, and Residence Certificate with proper documentation.',
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: 5,
      icon: 'fa-laptop-code',
      title: 'Online Form Fill-Up',
      description: 'JEE Mains, NEET, all Government Exam forms, admission forms, and scholarship applications.',
      color: 'from-red-500 to-red-700'
    },
    {
      id: 6,
      icon: 'fa-train',
      title: 'Railway Ticket Booking',
      description: 'Book railway tickets for any destination. Tatkal, general, and special quota bookings available.',
      color: 'from-cyan-500 to-cyan-700'
    },
    {
      id: 7,
      icon: 'fa-plane',
      title: 'Flight Ticket Booking',
      description: 'Domestic and international flight tickets at best prices. All major airlines available.',
      color: 'from-indigo-500 to-indigo-700'
    },
    {
      id: 8,
      icon: 'fa-shield-halved',
      title: 'Insurance Services',
      description: 'Life insurance, health insurance, vehicle insurance, and all types of insurance policies.',
      color: 'from-teal-500 to-teal-700'
    },
    {
      id: 9,
      icon: 'fa-mobile-screen',
      title: 'Mobile Recharge & Bill Payment',
      description: 'All operator recharges, electricity bills, water bills, gas bills, and DTH recharges.',
      color: 'from-pink-500 to-pink-700'
    },
    {
      id: 10,
      icon: 'fa-money-bill-transfer',
      title: 'Money Transfer & Withdrawal',
      description: 'AEPS, DMAT, IMPS, NEFT, RTGS money transfer and cash withdrawal services.',
      color: 'from-orange-500 to-orange-700'
    },
    {
      id: 11,
      icon: 'fa-passport',
      title: 'Passport Services',
      description: 'New passport application, renewal, tatkal passport, and all passport-related documentation.',
      color: 'from-sky-500 to-sky-700'
    },
    {
      id: 12,
      icon: 'fa-building-columns',
      title: 'All Government Works',
      description: 'Ration card, voter ID, birth/death certificate, driving license, and all government services.',
      color: 'from-violet-500 to-violet-700'
    },
    {
      id: 13,
      icon: 'fa-print',
      title: 'Print, Scan & Lamination',
      description: 'Multi-page printing, scanning, lamination, and photocopy/xerox services at affordable rates.',
      color: 'from-rose-500 to-rose-700'
    },
    {
      id: 14,
      icon: 'fa-camera',
      title: 'Photography & Photo Services',
      description: 'Passport size photos, ID photos, and all types of photo services for documents.',
      color: 'from-emerald-500 to-emerald-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                <i className="fas fa-globe text-2xl text-yellow-400"></i>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold tracking-wide">NEXTGEN DIGITAL</h1>
                <p className="text-xs text-blue-200 -mt-1">Online Services</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="hover:text-yellow-400 transition-colors font-medium">Home</a>
              <a href="#services" className="hover:text-yellow-400 transition-colors font-medium">Services</a>
              <a href="#about" className="hover:text-yellow-400 transition-colors font-medium">About</a>
              <a href="#contact" className="hover:text-yellow-400 transition-colors font-medium">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-blue-900/95 backdrop-blur-sm border-t border-blue-700">
            <div className="px-4 py-3 space-y-2">
              <a href="#home" className="block py-2 hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#services" className="block py-2 hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#about" className="block py-2 hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#contact" className="block py-2 hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <i className="fas fa-star text-yellow-400 mr-2"></i>
              <span className="text-sm font-medium">Your Trusted Digital Service Partner</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                NEXTGEN DIGITAL
              </span>
              <br />
              <span className="text-white">ONLINE SERVICES</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Your one-stop destination for all digital services — from government documents to travel bookings, 
              financial services, and printing solutions. Fast, reliable, and affordable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#services" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <i className="fas fa-th-large mr-2"></i>
                Our Services
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                <i className="fas fa-phone mr-2"></i>
                Contact Us
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-yellow-400">14+</div>
                <div className="text-sm text-blue-200">Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-yellow-400">5000+</div>
                <div className="text-sm text-blue-200">Happy Customers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-yellow-400">5+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-yellow-400">100%</div>
                <div className="text-sm text-blue-200">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              WHAT WE OFFER
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide a comprehensive range of digital and government services to make your life easier. 
              All services under one roof with expert assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="bg-white/20 backdrop-blur-sm w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <i className={`fas ${service.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-lg font-bold">{service.title}</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                ABOUT US
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">NextGen Digital?</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                NextGen Digital Online Services is your trusted partner for all digital and government-related services 
                in Bangarhatta, Singhia, Samastipur, Bihar. We are committed to providing fast, reliable, and 
                affordable services to our customers.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With years of experience in handling government documentation, travel bookings, financial services, 
                and printing solutions, we ensure that every customer gets the best service with complete transparency 
                and support.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-lg p-2">
                    <i className="fas fa-check text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Team</h4>
                    <p className="text-sm text-gray-500">Trained professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-lg p-2">
                    <i className="fas fa-check text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quick Processing</h4>
                    <p className="text-sm text-gray-500">Fast turnaround time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-lg p-2">
                    <i className="fas fa-check text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Affordable Rates</h4>
                    <p className="text-sm text-gray-500">Best prices guaranteed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-lg p-2">
                    <i className="fas fa-check text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">100% Secure</h4>
                    <p className="text-sm text-gray-500">Data protection assured</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-3xl p-8 text-white shadow-2xl">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4">
                    <i className="fas fa-building text-4xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold">NextGen Digital</h3>
                  <p className="text-blue-200">Online Services</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-xl p-4 flex items-center space-x-3">
                    <i className="fas fa-clock text-yellow-400 text-xl"></i>
                    <div>
                      <p className="font-semibold">Working Hours</p>
                      <p className="text-sm text-blue-200">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 flex items-center space-x-3">
                    <i className="fas fa-map-marker-alt text-yellow-400 text-xl"></i>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-sm text-blue-200">Bangarhatta, Singhia, Samastipur, Bihar - 848209</p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 flex items-center space-x-3">
                    <i className="fas fa-headset text-yellow-400 text-xl"></i>
                    <div>
                      <p className="font-semibold">Support</p>
                      <p className="text-sm text-blue-200">Available for all queries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need Any Digital Service?</h2>
          <p className="text-xl text-blue-200 mb-8">
            Visit us today or contact us for any service. We are here to help you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <i className="fas fa-map-marker-alt mr-2"></i>
              Visit Our Center
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Us</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit our center or reach out to us for any service inquiry. We're always happy to help!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marker-alt text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Address</h3>
              <p className="text-gray-600">
                Bangarhatta, Singhia,<br />
                Samastipur, Bihar<br />
                PIN: 848209
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Working Hours</h3>
              <p className="text-gray-600">
                Monday - Saturday<br />
                9:00 AM - 8:00 PM<br />
                <span className="text-red-500 font-medium">Sunday: Closed</span>
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-gradient-to-r from-purple-500 to-violet-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-info-circle text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Services Info</h3>
              <p className="text-gray-600">
                All services available<br />
                Affordable charges<br />
                Quick processing
              </p>
            </div>
          </div>

          {/* Map Embed */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <i className="fas fa-map text-blue-600 mr-3"></i>
                Find Us on Map
              </h3>
              <p className="text-gray-600 mt-1">Bangarhatta, Singhia, Samastipur, Bihar 848209</p>
            </div>
            <div className="h-64 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-map-marked-alt text-6xl text-blue-400 mb-4"></i>
                <p className="text-gray-600 font-medium">Bangarhatta, Singhia, Samastipur</p>
                <p className="text-gray-500">Bihar - 848209</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600/30 rounded-lg p-2">
                  <i className="fas fa-globe text-xl text-yellow-400"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold">NEXTGEN DIGITAL</h3>
                  <p className="text-xs text-gray-400">Online Services</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted partner for all digital and government services in Samastipur, Bihar. 
                We provide fast, reliable, and affordable solutions for all your needs.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>PAN Card & Aadhar Services</li>
                <li>Government Certificates</li>
                <li>Travel Bookings</li>
                <li>Money Transfer & Recharge</li>
                <li>Print, Scan & Xerox</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} NextGen Digital Online Services. All Rights Reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Bangarhatta, Singhia, Samastipur, Bihar - 848209
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
