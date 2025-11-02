import { Award, Users, Target, CheckCircle } from 'lucide-react';
import Button from '../components/Button';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description:
        'We use only premium materials from trusted international brands.',
    },
    {
      icon: Users,
      title: 'Professional Team',
      description:
        'Our experienced installers ensure perfect results every time.',
    },
    {
      icon: Target,
      title: 'Customer Focus',
      description:
        'Your satisfaction is our priority with personalized solutions.',
    },
  ];

  const benefits = [
    'Heat reduction up to 80% for comfortable indoor environments',
    '99% UV protection prevents furniture and interior fading',
    'Energy savings with reduced air conditioning costs',
    'Enhanced privacy without compromising natural light',
    'Safety and security with shatter-resistant films',
    'Customized solutions for residential and commercial needs',
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                About Space Innovation Myanmar
              </h1>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                We are Myanmar's leading provider of professional window film
                installation, UV printing, sticker solutions, and wallpaper
                services. With years of experience and a commitment to quality,
                we help homes and businesses enhance their spaces with
                innovative solutions.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our mission is to provide superior products and services that
                improve comfort, reduce energy costs, and protect your valuable
                interiors from harmful UV rays. We partner with top
                international brands to ensure you receive the best quality
                materials and installation.
              </p>
              <Button onClick={() => onNavigate('contact')}>Get in Touch</Button>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                <p className="text-4xl font-bold">5+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What sets us apart in the industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-blue-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
              <p className="text-xl text-blue-100 mb-8">
                We deliver comprehensive solutions that protect, enhance, and
                transform your spaces.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle
                      className="text-blue-300 mr-3 flex-shrink-0 mt-1"
                      size={24}
                    />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Premium Brands</h3>
              <div className="space-y-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="font-semibold text-lg">Nano Ray</p>
                  <p className="text-blue-100 text-sm">
                    Advanced ceramic window films
                  </p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="font-semibold text-lg">Nano Raro</p>
                  <p className="text-blue-100 text-sm">
                    Premium automotive films
                  </p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="font-semibold text-lg">3M</p>
                  <p className="text-blue-100 text-sm">
                    Trusted global leader in films
                  </p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="font-semibold text-lg">Nano King & More</p>
                  <p className="text-blue-100 text-sm">
                    Wide selection of quality options
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help transform your space with our
            professional solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate('contact')}>
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('sun-film')}
            >
              View Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
