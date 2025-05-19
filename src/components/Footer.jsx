import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaEnvelope, FaPhoneAlt, FaAddressBook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-extrabold text-yellow-400">Levic Digital Agency</h2>
          <p className="mt-3 text-sm text-gray-400 max-w-xs leading-relaxed">
            Innovating Growth. Building Brands. We craft bold digital experiences that elevate brands and inspire audiences.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", to: "/" },
              { name: "About", to: "/about" },
              { name: "Services", to: "/services" },
              { name: "Portfolio", to: "/portfolio" },
              { name: "Contact", to: "/contact" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.to}
                  className="relative inline-block text-gray-300 hover:text-yellow-400 transition duration-300 group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400 leading-relaxed">
            <li>
              <FaAddressBook className="text-yellow-400" /> 
              Suite D9 HCR Plaza, Opp. Police Pension Office,<br />
              Sylvester U. Ugoh Crescent, Jabi, Abuja.
            </li>
            <li>
              <FaPhoneAlt className="text-yellow-400" /> +234 807 494 7146</li>
            <li> 
              <a href="mailto:info.levicdigital@gmail.com">
                <FaEnvelope className="text-yellow-400" /> 
                  info.levicdigital@gmail.com
              </a>
              </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to our newsletter for insights & updates.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Levic Digital Agency. All rights reserved.
      </div>
    </footer>
  );
}
