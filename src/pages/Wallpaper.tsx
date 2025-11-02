import { Home, Palette, Sparkles, CheckCircle } from 'lucide-react';
import Button from '../components/Button';

interface WallpaperProps {
  onNavigate: (page: string) => void;
}

export default function Wallpaper({ onNavigate }: WallpaperProps) {
  const features = [
    {
      icon: Palette,
      title: 'Custom Designs',
      description: 'Create unique spaces with personalized wallpaper designs.',
    },
    {
      icon: Home,
      title: 'Any Room',
      description: 'Perfect for kitchens, bedrooms, offices, and more.',
    },
    {
      icon: Sparkles,
      title: 'Professional Install',
      description: 'Expert installation for flawless, lasting results.',
    },
  ];

  const types = [
    {
      name: 'Kitchen Wallpaper',
      description: 'Transform your kitchen with vibrant, easy-to-clean designs',
      features: [
        'Moisture-resistant materials',
        'Heat-tolerant finishes',
        'Grease and stain resistant',
        'Easy maintenance and cleaning',
      ],
    },
    {
      name: 'Living Room Wallpaper',
      description: 'Create stunning focal walls and elegant spaces',
      features: [
        'Premium textures and patterns',
        'Wide color selection',
        'Durable and long-lasting',
        'Complements any decor style',
      ],
    },
    {
      name: 'Bedroom Wallpaper',
      description: 'Personalize your private space with comfort and style',
      features: [
        'Calming colors and patterns',
        'Luxurious textures',
        'Sound-dampening options',
        'Easy to refresh and update',
      ],
    },
    {
      name: 'Commercial Wallpaper',
      description: 'Professional designs for offices and businesses',
      features: [
        'Corporate branding options',
        'High-traffic durability',
        'Modern and professional looks',
        'Custom printed graphics',
      ],
    },
  ];

  const benefits = [
    'Instant room transformation',
    'Cost-effective alternative to painting',
    'Endless design possibilities',
    'Hide wall imperfections',
    'Add texture and depth to spaces',
    'Durable and long-lasting',
    'Easy to clean and maintain',
    'Professional measurement and installation',
  ];

  const styles = [
    'Modern minimalist patterns',
    'Traditional and classic designs',
    'Nature-inspired themes',
    'Geometric and abstract art',
    'Textured and 3D effects',
    'Custom photo wallpapers',
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                WALLPAPER SOLUTIONS
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Custom Wallpaper Installation
              </h1>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Transform any space with our premium wallpaper solutions.
                Whether you're updating your home or business, we offer custom
                designs and professional installation for stunning results.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From modern patterns to classic designs, our wallpaper
                collection offers endless possibilities to express your style
                and create the perfect ambiance.
              </p>
              <Button size="lg" onClick={() => onNavigate('contact')}>
                View Gallery
              </Button>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Wallpaper installation"
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
              Why Choose Wallpaper?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Style, durability, and personality in one solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-rose-500 rounded-lg flex items-center justify-center mb-6">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Benefits
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle
                      className="text-rose-500 mr-3 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-500 to-pink-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Popular Styles</h3>
              <div className="space-y-3">
                {styles.map((style, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle
                      className="text-pink-200 mr-3 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>{style}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Wallpaper for Every Space
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized solutions for every room
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {types.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <Home className="text-rose-500 mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">
                    {type.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div className="space-y-3">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle
                        className="text-rose-500 mr-3 flex-shrink-0 mt-0.5"
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
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern wallpaper design"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Professional Installation Process
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our expert team ensures perfect results from start to finish,
                with attention to detail at every step.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-rose-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Consultation & Selection
                    </h4>
                    <p className="text-gray-600">
                      Choose from our extensive collection or create custom
                      designs
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-rose-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Precise Measurement
                    </h4>
                    <p className="text-gray-600">
                      Accurate measurements ensure perfect fit and minimal waste
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-rose-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Expert Installation
                    </h4>
                    <p className="text-gray-600">
                      Professional application for smooth, bubble-free results
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-rose-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Quality Check
                    </h4>
                    <p className="text-gray-600">
                      Final inspection to ensure your complete satisfaction
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button onClick={() => onNavigate('contact')}>
                  Schedule Installation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-rose-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-rose-100 mb-8">
            Contact us for a consultation and bring your vision to life with
            custom wallpaper.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-white text-rose-600 hover:bg-gray-100 border-white"
            >
              Get Started
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
