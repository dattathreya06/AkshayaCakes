import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CakeSlice, Phone, Mail, MapPin, Heart } from 'lucide-react'
import { staggerContainer, fadeInUp } from '../../animations/variants'

const WhatsAppIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
)

const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Menu', path: '/menu' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

const Footer = () => {
  return (
    <footer className="bg-espresso text-warm-milk/80 relative overflow-hidden">
      {/* Top decorative divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Floating orbs */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-cocoa/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Column 1 — Brand */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
                <CakeSlice size={20} className="text-espresso" />
              </div>
              <div>
                <span className="font-playfair text-xl font-bold text-warm-milk block">Akshaya Cakes</span>
                <span className="text-xs text-gold font-inter uppercase tracking-widest">Since 2025</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-warm-milk/60 font-inter mb-6">
              Customized cakes baked fresh with love. Every cake tells a beautiful story of celebration, joy, and sweetness.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-warm-milk/10 hover:bg-gold/20 border border-warm-milk/10 hover:border-gold/40 rounded-full flex items-center justify-center text-warm-milk/60 hover:text-gold transition-all duration-300"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-warm-milk/10 hover:bg-gold/20 border border-warm-milk/10 hover:border-gold/40 rounded-full flex items-center justify-center text-warm-milk/60 hover:text-gold transition-all duration-300"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://wa.me/917729977244"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 bg-warm-milk/10 hover:bg-[#25D366] border border-warm-milk/10 hover:border-[#25D366] rounded-full flex items-center justify-center text-warm-milk/60 hover:text-white transition-all duration-300"
              >
                <WhatsAppIcon size={16} />
              </a>
            </div>
          </motion.div>

          {/* Column 2 — Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-playfair text-warm-milk font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-warm-milk/60 hover:text-gold transition-colors duration-300 font-inter flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 — Contact */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-playfair text-warm-milk font-semibold text-lg mb-5">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+917729977244" className="text-sm text-warm-milk/60 hover:text-gold transition-colors font-inter">
                    +91 77299 77244
                  </a>
                  <p className="text-xs text-warm-milk/40 font-inter mt-0.5">Call or WhatsApp</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <a href="mailto:akshayacakes@gmail.com" className="text-sm text-warm-milk/60 hover:text-gold transition-colors font-inter">
                  akshayacakes@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <p className="text-sm text-warm-milk/60 font-inter">
                  Gudivada<br />
                  Krishna District,
                  Andhra Pradesh - 521301
                </p>
              </li>
            </ul>
            <div className="mt-5 p-3 bg-warm-milk/5 rounded-xl border border-warm-milk/10">
              <p className="text-xs text-warm-milk/50 font-inter font-semibold uppercase tracking-wider mb-1">Opening Hours</p>
              <p className="text-sm text-warm-milk/70 font-inter">Mon – Sat: 9 AM – 8 PM</p>
              <p className="text-sm text-warm-milk/70 font-inter">Sunday: 10 AM – 6 PM</p>
            </div>
          </motion.div>

          {/* Column 4 — Order CTA */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-playfair text-warm-milk font-semibold text-lg mb-5">Order A Cake</h4>
            <p className="text-sm text-warm-milk/60 font-inter mb-5 leading-relaxed">
              Ready to order your dream cake? Reach out to us on WhatsApp and we'll make it happen!
            </p>
            <a
              href="https://wa.me/917729977244?text=Hi%20Akshaya%20Cakes!%20I%27d%20like%20to%20order%20a%20cake."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm px-5 py-3 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5 duration-300"
              id="footer-whatsapp-btn"
            >
              <WhatsAppIcon size={16} />
              Chat on WhatsApp
            </a>
            <div className="mt-6 p-4 bg-warm-milk/5 rounded-xl border border-warm-milk/10">
              <p className="text-xs text-gold font-inter font-semibold uppercase tracking-wider mb-2">Follow Us</p>
              <p className="text-xs text-warm-milk/50 font-inter">@akshayacakes</p>
              <p className="text-xs text-warm-milk/40 font-inter mt-1">Tag us in your cake photos!</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-warm-milk/10 to-transparent my-10" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-milk/40 font-inter">
          <p>© 2024 Akshaya Cakes. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart size={12} className="text-gold fill-gold" /> for every celebration
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
