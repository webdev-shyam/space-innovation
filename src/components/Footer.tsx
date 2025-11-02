import { Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Space Innovation</h3>
            <p className="text-gray-400 text-sm">
              Myanmar's leading provider of UV printing, sun film, glass
              stickers, and wallpaper solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('uv-printing')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  UV Printing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sun-film')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sun Film
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('glass-sticker')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Glass Sticker
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('wallpaper')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Wallpaper
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Phone size={18} className="mr-2" />
                <a href="tel:09422126169" className="hover:text-white transition-colors">
                  09422126169
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={18} className="mr-2" />
                <a
                  href="mailto:spaceinnovation.myanmar@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  spaceinnovation.myanmar@gmail.com
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin size={18} className="mr-2 mt-1" />
                <span>Yangon, Myanmar</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/spaceinnovationmyanmar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://youtube.com/@spaceinnovationmyanmareven4090?si=wZPFSKiFy3Eg6zE4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Space Innovation Myanmar. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
