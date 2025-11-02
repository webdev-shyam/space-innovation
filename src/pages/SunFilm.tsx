import { Sun, ThermometerSun, Shield, Eye, CheckCircle } from 'lucide-react';
import Button from '../components/Button';

interface SunFilmProps {
  onNavigate: (page: string) => void;
}

export default function SunFilm({ onNavigate }: SunFilmProps) {
  const features = [
    {
      icon: ThermometerSun,
      title: 'Heat Reduction',
      description: 'Block up to 80% of heat for a cooler, more comfortable space.',
    },
    {
      icon: Shield,
      title: 'UV Protection',
      description: '99% UV blocking prevents fading and protects interiors.',
    },
    {
      icon: Eye,
      title: 'Privacy & Glare',
      description: 'Reduce glare and add privacy without blocking light.',
    },
  ];

  const brands = [
    {
      name: 'Nano Ray',
      description: 'Premium ceramic films with superior heat rejection',
      features: [
        'Advanced nano-ceramic technology',
        'No signal interference',
        'Crystal clear visibility',
        'Lifetime warranty available',
      ],
    },
    {
      name: 'Nano Raro',
      description: 'High-performance automotive and architectural films',
      features: [
        'Dual-reflective properties',
        'Enhanced durability',
        'Color stability guarantee',
        'Professional installation',
      ],
    },
    {
      name: '3M',
      description: 'World-renowned quality and reliability',
      features: [
        'Proven performance track record',
        'Multi-layer construction',
        'Industry-leading warranty',
        'Fade-resistant technology',
      ],
    },
    {
      name: 'Nano King & Others',
      description: 'Quality options for every budget',
      features: [
        'Cost-effective solutions',
        'Reliable performance',
        'Wide range of shades',
        'Professional support',
      ],
    },
  ];

  const benefits = [
    'Reduce energy costs by up to 30% with lower AC usage',
    'Protect furniture, flooring, and artwork from UV damage',
    'Increase comfort by eliminating hot spots',
    'Enhance safety with shatter-resistant properties',
    'Add privacy to glass surfaces',
    'Improve building aesthetics',
    'Environmentally friendly energy savings',
    'Quick and clean professional installation',
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                SUN FILM SOLUTIONS
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Premium Window Film Installation
              </h1>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Beat the heat and protect your space with our professional sun
                film installation services. We offer top international brands
                for residential, commercial, and automotive applications.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our sun films provide exceptional heat rejection, UV protection,
                and energy savings while maintaining clear visibility and
                aesthetics.
              </p>
              <Button size="lg" onClick={() => onNavigate('contact')}>
                Get Free Consultation
              </Button>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Window film installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Install Sun Film?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your space with comfort and protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Complete Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle
                    className="text-orange-500 mr-3 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Premium Brands We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from the world's leading window film manufacturers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <Sun className="text-orange-500 mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">
                    {brand.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">{brand.description}</p>
                <div className="space-y-3">
                  {brand.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle
                        className="text-orange-500 mr-3 flex-shrink-0 mt-0.5"
                        size={18}
                      />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Car window tinting"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Automotive Window Films
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Protect your vehicle's interior and enhance comfort with our
                premium automotive window films. Perfect for cars, SUVs, and
                commercial vehicles.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-orange-500 mr-3 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <span className="text-gray-700">
                    Superior heat rejection for cooler rides
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-orange-500 mr-3 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <span className="text-gray-700">
                    UV protection for you and your passengers
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-orange-500 mr-3 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <span className="text-gray-700">
                    Enhanced privacy and security
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-orange-500 mr-3 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <span className="text-gray-700">
                    Professional installation with warranty
                  </span>
                </li>
              </ul>
              <Button onClick={() => onNavigate('contact')}>
                Book Car Tinting Service
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-500 to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience the Difference Today
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Schedule your free consultation and discover how sun film can
            transform your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-white text-orange-600 hover:bg-gray-100 border-white"
            >
              Get Free Quote
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
