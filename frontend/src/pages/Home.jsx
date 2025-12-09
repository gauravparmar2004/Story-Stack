import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getProjects, getClients, createContact, subscribeNewsletter } from '../api/api';
import ProjectsSection from '../components/ProjectsSection';
import ClientsSection from '../components/ClientsSection';
import ContactForm from '../components/ContactForm';
import NewsletterForm from '../components/NewsletterForm';
import RealTrustLogo from '../components/RealTrustLogo';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [clientsLoading, setClientsLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
    fetchClients();
  }, []);

  const fetchProjects = async () => {
    try {
      setProjectsLoading(true);
      const response = await getProjects();
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      toast.error('Failed to load projects');
    } finally {
      setProjectsLoading(false);
      setLoading(false);
    }
  };

  const fetchClients = async () => {
    try {
      setClientsLoading(true);
      const response = await getClients();
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
      toast.error('Failed to load clients');
    } finally {
      setClientsLoading(false);
    }
  };

  const handleContactSubmit = async (formData) => {
    try {
      await createContact(formData);
      toast.success('Thank you for contacting us! We will get back to you soon.');
      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to submit contact form');
      return false;
    }
  };

  const handleNewsletterSubmit = async (email) => {
    try {
      await subscribeNewsletter({ email });
      toast.success('Successfully subscribed to newsletter!');
      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to subscribe');
      return false;
    }
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Brand */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="transition-transform duration-300 group-hover:scale-105">
                <RealTrustLogo className="w-36 h-10" />
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium group"
              >
                Our Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('clients')}
                className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium group"
              >
                Happy Clients
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('newsletter')}
                className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium group"
              >
                Newsletter
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </nav>

            {/* Admin Panel Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="/admin"
                className="relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
              >
                <span className="relative z-10">Admin Panel</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="pb-4 space-y-2">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium"
              >
                Our Projects
              </button>
              <button
                onClick={() => scrollToSection('clients')}
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium"
              >
                Happy Clients
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('newsletter')}
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium"
              >
                Newsletter
              </button>
              <a
                href="/admin"
                className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 mt-2"
              >
                Admin Panel
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4">
                Welcome to Real Trust
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900">
                Building Trust,{' '}
                <span className="text-blue-600">Delivering Excellence</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                We are committed to providing exceptional services and creating lasting relationships with our clients. 
                With years of experience and a passion for excellence, we deliver results that exceed expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
                >
                  Explore Our Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get In Touch
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">1000+</div>
                  <div className="text-sm text-gray-600">Projects Done</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80"
                  alt="Real Trust - Building Excellence"
                  className="w-full h-full object-cover aspect-[4/3]"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x600/f3f4f6/1f2937?text=Real+Trust';
                  }}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-8 right-8 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -z-10 bottom-8 left-8 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section id="projects" className="py-20 lg:py-28 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Our Projects
            </h2>
            <p className="text-xl text-gray-600">
              Explore our portfolio of successful projects and see how we've helped businesses achieve their goals.
            </p>
          </div>
          <ProjectsSection projects={projects} loading={projectsLoading} />
        </div>
      </section>

      {/* Happy Clients Section */}
      <section id="clients" className="py-20 lg:py-28 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it. Hear from our satisfied clients who have experienced our exceptional service.
            </p>
          </div>
          <ClientsSection clients={clients} loading={clientsLoading} />
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 lg:py-28 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Have a question or want to work with us? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            {/* Left Side - Image & Info */}
            <div className="space-y-8">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=700&fit=crop"
                  alt="Contact Us - Get In Touch"
                  className="w-full h-full object-cover aspect-[4/5]"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x700/f3f4f6/1f2937?text=Contact+Us';
                  }}
                />
              </div>
            </div>
            
            {/* Right Side - Form */}
            <div>
              <div className="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 lg:p-10">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Let's Start a Conversation</h3>
                  <p className="text-gray-600">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>
                <ContactForm onSubmit={handleContactSubmit} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section with Background Image */}
      <section id="newsletter" className="py-20 lg:py-24 scroll-mt-24 relative overflow-hidden">
        {/* Background Image - You can change this image URL */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=500&fit=crop&q=80"
            alt="Newsletter Background"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1920x500/2563eb/ffffff?text=Newsletter';
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-purple-900/80"></div>
        </div>
        
        {/* Content with Newsletter Form */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Side - Text */}
              <div className="text-center lg:text-left text-white flex-1">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  Learn more about our listing process, as well as our additional staging and design work.
                </h2>
                <p className="text-blue-100 text-lg">
                  Stay connected with us for the latest updates and insights.
                </p>
              </div>
              
              {/* Right Side - Newsletter Form */}
              <div className="flex flex-col items-center lg:items-end gap-4 flex-shrink-0">
                <span className="text-white text-lg font-medium">Subscribe to our newsletter</span>
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                  <NewsletterForm onSubmit={handleNewsletterSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <RealTrustLogo className="w-32 h-8" />
              </div>
              <p className="text-gray-400 text-sm">
                Building Trust, Delivering Excellence. Your trusted partner for success.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors">
                    Our Projects
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('clients')} className="hover:text-white transition-colors">
                    Testimonials
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>info@realtrust.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Real Trust. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;
