import { Sparkles, CheckCircle, Palette, Zap } from 'lucide-react';
import Button from '../components/Button';

interface UVPrintingProps {
  onNavigate: (page: string) => void;
}

export default function UVPrinting({ onNavigate }: UVPrintingProps) {
  const features = [
    {
      icon: Sparkles,
      title: 'Vibrant Colors',
      description: 'Rich, vivid colors that stand out and last longer.',
    },
    {
      icon: Zap,
      title: 'Fast Production',
      description: 'Quick turnaround times for urgent projects.',
    },
    {
      icon: Palette,
      title: 'Custom Designs',
      description: 'Bring your unique ideas to life with precision.',
    },
  ];

  const applications = [
    'Vehicle stickers and decals',
    'Shop signage and branding',
    'Wall graphics and murals',
    'Floor stickers and directional signs',
    'Window displays and promotional materials',
    'Product labels and packaging',
    'Event banners and exhibition graphics',
    'Custom artwork and decorative pieces',
  ];

  const benefits = [
    'Durable and weather-resistant prints',
    'High-resolution quality with sharp details',
    'Eco-friendly UV-curable inks',
    'Versatile printing on various materials',
    'Scratch and fade-resistant finish',
    'Indoor and outdoor applications',
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                UV PRINTING SERVICES
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Professional UV Printing Solutions
              </h1>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Transform your ideas into stunning, durable prints with our
                state-of-the-art UV printing technology. Perfect for stickers,
                signage, and custom designs that need to last.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our UV printing service uses advanced technology to create
                vibrant, high-quality prints on various materials. Whether you
                need vehicle stickers, shop signage, or custom artwork, we
                deliver exceptional results with fast turnaround times.
              </p>
              <Button size="lg" onClick={() => onNavigate('contact')}>
                Request a Quote
              </Button>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="UV printing process"
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
              Why Choose UV Printing?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced technology for superior results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Benefits
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle
                      className="text-blue-600 mr-3 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Applications</h3>
              <div className="space-y-3">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle
                      className="text-cyan-200 mr-3 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-white">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  The UV Printing Advantage
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  UV printing uses ultraviolet light to instantly cure and dry
                  ink as it's printed. This process creates prints that are:
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">
                        Instantly Dry
                      </p>
                      <p className="text-gray-600">
                        No waiting time, ready to use immediately
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">
                        Superior Adhesion
                      </p>
                      <p className="text-gray-600">
                        Bonds directly to the material surface
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">
                        Long-Lasting
                      </p>
                      <p className="text-gray-600">
                        Resistant to scratching, fading, and weather
                      </p>
                    </div>
                  </li>
                </ul>
                <Button onClick={() => onNavigate('contact')}>
                  Get Your UV Printing Quote
                </Button>
              </div>
              <div className="relative h-full min-h-[400px]">
                <img
                  src="https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="UV printing examples"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Bring Your Design to Life?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss your UV printing project and get a
            custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-white text-blue-600 hover:bg-gray-100 border-white"
            >
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
