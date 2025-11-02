import { Shield, Sparkles, Car, Home as HomeIcon, Palette, Sun } from 'lucide-react';
import Button from '../components/Button';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const services = [
    {
      id: 'uv-printing',
      icon: Sparkles,
      title: 'UV Printing',
      description:
        'High-quality UV printing for stickers, signs, and custom designs with vibrant colors.',
    },
    {
      id: 'sun-film',
      icon: Sun,
      title: 'Sun Film',
      description:
        'Premium heat-blocking and UV protection films from top brands like Nano Ray and 3M.',
    },
    {
      id: 'glass-sticker',
      icon: Shield,
      title: 'Glass Sticker',
      description:
        'Privacy, safety, and decorative glass stickers for homes and offices.',
    },
    {
      id: 'wallpaper',
      icon: Palette,
      title: 'Wallpaper',
      description:
        'Custom wallpaper solutions for any space with professional installation.',
    },
  ];

  const features = [
    {
      icon: Car,
      title: 'Automotive Solutions',
      description:
        'Specialized car stickers and window films for vehicle protection.',
    },
    {
      icon: HomeIcon,
      title: 'Residential & Commercial',
      description: 'Professional installation services for homes and businesses.',
    },
    {
      icon: Shield,
      title: 'UV Protection',
      description:
        'Advanced UV blocking technology to protect interiors and reduce heat.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Sun Block, UV Protection
            <span className="block text-blue-600">Glass & Sticker Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Myanmar's trusted partner for professional window films, stickers,
            and printing services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate('contact')}>
              Get a Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('about')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for all your window film, sticker, and
              printing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border border-gray-100 cursor-pointer group"
                  onClick={() => onNavigate(service.id)}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Learn More →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Professional quality and service you can trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-8 hover:bg-white/20 transition-colors duration-300"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-blue-100">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Premium Quality, Professional Installation
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We work with top international brands including Nano Ray, Nano
                Raro, 3M, and more to provide the best window film and sticker
                solutions for your needs.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Shield className="text-blue-600 mr-3 flex-shrink-0" size={24} />
                  <span className="text-gray-700">
                    Heat reduction and energy savings for lower AC costs
                  </span>
                </li>
                <li className="flex items-start">
                  <Shield className="text-blue-600 mr-3 flex-shrink-0" size={24} />
                  <span className="text-gray-700">
                    99% UV protection for furniture and interior preservation
                  </span>
                </li>
                <li className="flex items-start">
                  <Shield className="text-blue-600 mr-3 flex-shrink-0" size={24} />
                  <span className="text-gray-700">
                    Privacy and security enhancement for glass surfaces
                  </span>
                </li>
              </ul>
              <Button onClick={() => onNavigate('contact')}>
                Schedule Installation
              </Button>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional installation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation and quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" onClick={() => onNavigate('contact')} className="bg-white text-blue-600 hover:bg-gray-100 border-white">
              Contact Us
            </Button>
            <a href="tel:09422126169" className="inline-block">
              <Button variant="secondary" size="lg">
                Call: 09422126169
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
