import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'your_service_id',
      'your_template_id',
      formData,
      'your_public_key'
    )
      .then((result) => {
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Thank you! Your message has been sent successfully. We will get back to you soon.'
        });
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }, (error) => {
        setFormStatus({
          submitted: true,
          error: true,
          message: 'Oops! Something went wrong. Please try again later.',
        });
      });
  };

  return (
    <div className="py-16 bg-gray-300 w-full -z-20" id='contact'>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our services or products? Get in touch with our team and we'll be happy to assist you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Our Location</h4>
                    <p className="text-gray-600 mt-1">
                      CS 2107, plot no 162,<br />
                      Jaysingrao Park,
                      Kagal, Kolhapur<br />
                      416216
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Phone Numbers</h4>
                    <p className="text-gray-600 mt-1">
                      9923411877
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email Addresses</h4>
                    <p className="text-gray-600 mt-1">
                      Owner: Sanjaykumar Ghorpade <br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Business Hours</h4>
                    <p className="text-gray-600 mt-1">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Send Us a Message</h3>

              {formStatus.submitted ? (
                <div className={`p-4 mb-6 rounded-md ${formStatus.error ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                  {formStatus.message}
                </div>
              ) : null}

              <div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Service Inquiry"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
                  >
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden -z-10">
            <div className="bg-gray-200 h-80 rounded-md flex items-center justify-center">
              <MapContainer center={[16.5775, 74.3155]} zoom={5} style={{ height: '300px', width: '100%' }}>
                <TileLayer
                  attribution='&copy; OpenStreetMap contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[16.5775, 74.3155]}>
                  <Popup>
                    Owner's Shop Location<br /> Kagal, Kolhapur.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}