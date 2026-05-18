import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const WhatsAppIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)
import { aboutBaker } from '../../assets/images/index'

const occasions = ['Birthday', 'Anniversary', 'Wedding', 'Baby Shower', 'Corporate', 'Other']

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', occasion: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Hi Akshaya Cakes! 🎂%0AName: ${form.name}%0APhone: ${form.phone}%0AOccasion: ${form.occasion}%0AMessage: ${form.message}`
    window.open(`https://wa.me/917729977244?text=${msg}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  return (
    <div className="min-h-screen bg-vanilla pb-24">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-espresso to-cocoa">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url(${aboutBaker})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-espresso/78" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gold/8 rounded-full blur-3xl animate-float" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs font-inter font-semibold text-gold uppercase tracking-widest mb-4">Contact Us</p>
            <h1 className="font-playfair font-bold text-warm-milk leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Let's Create Something{' '}
              <span className="text-gradient-gold italic">Sweet Together</span>
            </h1>
            <p className="text-warm-milk/70 font-inter max-w-lg mx-auto">
              Tell us about your dream cake and we'll bring it to life with love and precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-warm-milk rounded-3xl shadow-warm-lg p-8 border border-almond/50">
                <h2 className="font-playfair font-bold text-espresso text-2xl mb-2">Send Us a Message</h2>
                <p className="text-espresso/55 font-inter text-sm mb-7">We'll get back to you within 2 hours!</p>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-center">
                    <p className="text-green-700 font-inter text-sm font-medium">
                      🎂 Message sent! Redirecting you to WhatsApp...
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} id="contact-form" className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-inter font-semibold text-espresso/60 uppercase tracking-wider mb-2">Your Name *</label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="Priya Sharma"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-almond bg-vanilla text-espresso font-inter text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                        id="contact-name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-inter font-semibold text-espresso/60 uppercase tracking-wider mb-2">Phone *</label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 77299 77244"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-almond bg-vanilla text-espresso font-inter text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                        id="contact-phone"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-inter font-semibold text-espresso/60 uppercase tracking-wider mb-2">Email</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="priya@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-almond bg-vanilla text-espresso font-inter text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                      id="contact-email"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-inter font-semibold text-espresso/60 uppercase tracking-wider mb-2">Occasion *</label>
                    <select
                      name="occasion"
                      required
                      value={form.occasion}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-almond bg-vanilla text-espresso font-inter text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                      id="contact-occasion"
                    >
                      <option value="">Select your occasion</option>
                      {occasions.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-inter font-semibold text-espresso/60 uppercase tracking-wider mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your cake — theme, flavour, number of people, date needed..."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-almond bg-vanilla text-espresso font-inter text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all resize-none"
                      id="contact-message"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center" id="contact-submit">
                    <Send size={17} />
                    Send via WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Right: Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-7"
            >
              {/* Bakery image */}
              <div className="rounded-3xl overflow-hidden shadow-warm-lg image-zoom h-52">
                <img src={aboutBaker} alt="Akshaya Cakes bakery" className="w-full h-full object-cover" />
              </div>

              {/* Contact info cards */}
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: <Phone size={20} className="text-gold" />, label: 'Call / WhatsApp', value: '+91 77299 77244', href: 'tel:+917729977244' },
                  { icon: <Mail size={20} className="text-gold" />, label: 'Email', value: 'akshayacakes@gmail.com', href: 'mailto:akshayacakes@gmail.com' },
                  { icon: <MapPin size={20} className="text-gold" />, label: 'Address', value: '123 Sweet Street, Coimbatore, Tamil Nadu – 641001', href: null },
                ].map(info => (
                  <div key={info.label} className="flex items-start gap-4 bg-warm-milk rounded-2xl p-5 border border-almond/50 shadow-warm">
                    <div className="w-10 h-10 bg-almond/60 rounded-xl flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-inter font-semibold text-espresso/50 uppercase tracking-wider mb-1">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-sm font-inter text-espresso font-medium hover:text-gold transition-colors">{info.value}</a>
                      ) : (
                        <p className="text-sm font-inter text-espresso font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Hours */}
                <div className="flex items-start gap-4 bg-warm-milk rounded-2xl p-5 border border-almond/50 shadow-warm">
                  <div className="w-10 h-10 bg-almond/60 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-inter font-semibold text-espresso/50 uppercase tracking-wider mb-1">Opening Hours</p>
                    <p className="text-sm font-inter text-espresso font-medium">Mon – Sat: 9 AM – 8 PM</p>
                    <p className="text-sm font-inter text-espresso font-medium">Sunday: 10 AM – 6 PM</p>
                  </div>
                </div>
              </div>

              {/* Google map placeholder */}
              <div className="rounded-2xl overflow-hidden shadow-warm border border-almond/50 h-48 bg-almond/30 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-gold mx-auto mb-2" />
                  <p className="text-sm font-inter text-espresso/60">Coimbatore, Tamil Nadu</p>
                  <a
                    href="https://maps.google.com/?q=Coimbatore,Tamil+Nadu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-inter text-gold font-semibold hover:underline mt-1 inline-block"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/917729977244?text=Hi%20Akshaya%20Cakes!%20I%27d%20like%20to%20order%20a%20cake."
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-btn"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-inter font-semibold px-6 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 justify-center"
              >
                <WhatsAppIcon size={22} />
                Chat Directly on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
