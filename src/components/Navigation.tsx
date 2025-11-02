import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    {
      id: 'services',
      label: 'Services',
      dropdown: [
        { id: 'uv-printing', label: 'UV Printing' },
        { id: 'sun-film', label: 'Sun Film' },
        { id: 'glass-sticker', label: 'Glass Sticker' },
        { id: 'wallpaper', label: 'Wallpaper' },
      ],
    },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNavigation('home')}
          >
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">
                Space Innovation
              </h1>
              <p className="text-xs text-gray-600">Myanmar Sticker Solution</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={`text-gray-700 hover:text-blue-600 font-medium transition-colors ${
                        currentPage.includes('printing') ||
                        currentPage.includes('film') ||
                        currentPage.includes('sticker') ||
                        currentPage.includes('wallpaper')
                          ? 'text-blue-600'
                          : ''
                      }`}
                    >
                      {item.label}
                    </button>
                    {isServicesOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                        {item.dropdown.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={() => handleNavigation(subItem.id)}
                            className={`block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors ${
                              currentPage === subItem.id
                                ? 'text-blue-600 bg-blue-50'
                                : 'text-gray-700'
                            }`}
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`text-gray-700 hover:text-blue-600 font-medium transition-colors ${
                    currentPage === item.id ? 'text-blue-600' : ''
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.id}>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 rounded-md"
                    >
                      {item.label}
                    </button>
                    {isServicesOpen && (
                      <div className="pl-4">
                        {item.dropdown.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={() => handleNavigation(subItem.id)}
                            className={`w-full text-left block px-3 py-2 text-sm hover:bg-blue-50 rounded-md ${
                              currentPage === subItem.id
                                ? 'text-blue-600 bg-blue-50'
                                : 'text-gray-600'
                            }`}
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`w-full text-left block px-3 py-2 text-base font-medium rounded-md ${
                    currentPage === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
