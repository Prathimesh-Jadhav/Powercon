import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white w-full text-roboto">
      {/* Main Footer */}
      <div className="w-full mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold mb-4">Powercon Electromatics</h2>
            <p className="text-gray-300 mb-4">
              Providing top-quality industrial solutions since 1995. Specializing in CNC machining, industrial automation, and reliable spare parts.
            </p>
            <div className="flex space-x-3 mt-6">
              <a href="#" className="bg-gray-700 hover:bg-blue-600 p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-blue-400 p-2 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-pink-600 p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#Products" className="text-gray-300 hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="#Testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">CNC Machine Maintenance</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Industrial Automation</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Spare Parts Supply</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Machine Installation</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Technical Consulting</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Operator Training</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 mt-1" />
                <span>
                CS 2107, plot no 162<br/>
                 Jaysingrao Park<br/>
                Kagal, Kolhapur, 416216.
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span>9923411877</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span>powerconElectromatics@company.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-gray-900 py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} Company Name. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white mb-2 md:mb-0">Privacy Policy</a>
            <a href="#" className="hover:text-white mb-2 md:mb-0">Terms of Service</a>
            <a href="#" className="hover:text-white mb-2 md:mb-0">Cookie Policy</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}