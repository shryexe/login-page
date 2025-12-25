const PeopleAlsoSearch = () => {
  const links = {
    about: [
      'About Us',
      'Our Story',
      'Team',
      'Careers',
      'Press'
    ],
    help: [
      'Help Center',
      'FAQ',
      'Contact Us',
      'Account',
      'Accessibility'
    ],
    legal: [
      'Terms of Use',
      'Privacy Policy',
      'Cookie Policy',
      'Copyright',
      'Legal Notices'
    ],
    connect: [
      'Facebook',
      'Twitter',
      'Instagram',
      'Discord',
      'YouTube'
    ],
    address: [
      'MangaVerse HQ',
      '123 Anime Street',
      'Tokyo, Japan 100-0001',
      'support@mangaverse.com',
      '+81 3-1234-5678'
    ]
  }

  return (
    <section className="relative py-16 px-6 md:px-12 bg-gradient-to-b from-gray-900/50 via-black to-black border-t border-white/10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text text-center">
          People Also Search
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/20 pb-2">About</h3>
            <ul className="space-y-3">
              {links.about.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm md:text-base block hover:translate-x-1 transition-transform"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/20 pb-2">Help</h3>
            <ul className="space-y-3">
              {links.help.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm md:text-base block hover:translate-x-1 transition-transform"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/20 pb-2">Legal</h3>
            <ul className="space-y-3">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm md:text-base block hover:translate-x-1 transition-transform"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/20 pb-2">Connect</h3>
            <ul className="space-y-3">
              {links.connect.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm md:text-base block hover:translate-x-1 transition-transform"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address Column */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/20 pb-2">Address</h3>
            <ul className="space-y-3">
              {links.address.map((info, index) => (
                <li key={index}>
                  <span className="text-gray-400 text-sm md:text-base block">
                    {info}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PeopleAlsoSearch

