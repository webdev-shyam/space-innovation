import { Shield, Eye, Lock, Sparkles, CheckCircle } from 'lucide-react';
import Button from '../components/Button';

interface GlassStickerProps {
  onNavigate: (page: string) => void;
}

export default function GlassSticker({ onNavigate }: GlassStickerProps) {
  const features = [
    {
      icon: Eye,
      title: 'Privacy Films',
      description: 'Frosted and decorative films for complete privacy without losing light.',
    },
    {
      icon: Shield,
      title: 'Safety Films',
      description: 'Shatter-resistant films that hold glass together on impact.',
    },
    {
      icon: Sparkles,
      title: 'Decorative Films',
      description: 'Stylish patterns and designs to enhance any space.',
    },
  ];

  const types = [
    {
      name: 'Frosted Glass Film',
      description: 'Create privacy while maintaining natural light flow',
      applications: [
        'Office partitions and meeting rooms',
        'Bathroom windows',
        'Front doors and sidelights',
        'Shower enclosures',
      ],
    },
    {
      name: 'Decorative Glass Film',
      description: 'Add style and personality to plain glass surfaces',
      applications: [
        'Retail storefronts',
        'Restaurant dividers',
        'Home decor accents',
        'Corporate branding',
      ],
    },
    {
      name: 'Safety & Security Film',
      description: 'Protect against break-ins and accidents',
      applications: [
        'Ground floor windows',
        'Glass doors and entryways',
        'Shopping centers',
        'Schools and public buildings',
      ],
    },
    {
      name: 'Custom Printed Film',
      description: 'Personalized designs for unique branding',
      applications: [
        'Company logos and branding',
        'Promotional graphics',
        'Wayfinding signage',
        'Artistic installations',
      ],
    },
  ];

  const benefits = [
    'Instant privacy without curtains or blinds',
    'UV protection prevents fading',
    'Energy savings with heat rejection',
    'Enhanced safety and security',
    'Easy to clean and maintain',
    'Cost-effective alternative to etched glass',
    'Removable and replaceable options',
    'Professional installation included',
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-teal-100 text-teal-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                GLASS STICKER SOLUTIONS
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Transform Your Glass Surfaces
              </h1>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Add privacy, safety, and style to your glass with our premium
                glass sticker solutions. From frosted films to decorative
                designs, we have the perfect option for every need.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our glass stickers offer an affordable, versatile alternative to
                traditional glass treatments, with professional installation and
                lasting quality.
              </p>
              <Button size="lg" onClick={() => onNavigate('contact')}>
                Explore Options
              </Button>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Glass film installation"
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
              Glass Sticker Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Privacy, protection, and design in one
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center mb-6">
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
              Key Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle
                    className="text-teal-600 mr-3 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Types of Glass Films
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find the perfect solution for your space
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {types.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <Lock className="text-teal-600 mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">
                    {type.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div>
                  <p className="font-semibold text-gray-900 mb-3">
                    Perfect for:
                  </p>
                  <div className="space-y-2">
                    {type.applications.map((app, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle
                          className="text-teal-600 mr-3 flex-shrink-0 mt-0.5"
                          size={18}
                        />
                        <span className="text-gray-700 text-sm">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Privacy Without Compromise
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Glass stickers provide the perfect balance between privacy and
                natural light. Unlike curtains or blinds, they work 24/7 without
                any effort while maintaining a clean, modern aesthetic.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Eye className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Complete Privacy
                    </h4>
                    <p className="text-gray-600">
                      Block views from outside while maintaining interior
                      brightness
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Added Security
                    </h4>
                    <p className="text-gray-600">
                      Safety films hold shattered glass together, preventing
                      injuries
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Sparkles className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Design Freedom
                    </h4>
                    <p className="text-gray-600">
                      Choose from endless patterns, textures, and custom designs
                    </p>
                  </div>
                </div>
              </div>
              <Button onClick={() => onNavigate('contact')}>
                Request Consultation
              </Button>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Frosted glass"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Enhance Your Glass?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Get expert advice and a custom quote for your glass sticker project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-white text-teal-600 hover:bg-gray-100 border-white"
            >
              Get Quote
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
