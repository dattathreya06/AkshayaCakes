import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { CakeSlice, Heart, Sparkles, ArrowRight, Star } from 'lucide-react'

const WhatsAppIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
)
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import HeroSection from '../../components/Hero/HeroSection'
import CakeCard from '../../components/CakeCard/CakeCard'
import TestimonialCard from '../../components/Testimonials/TestimonialCard'
import {
  chocolateTruffle, redVelvet, weddingCake, butterscotch,
  floralCake, blackForest, cupcakes, aboutBaker,
  anniversaryCake, birthdayCake, gallerySetup, bakeryBanner, themeCake
} from '../../assets/images/index'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight, scaleIn } from '../../animations/variants'
import useScrollAnimation from '../../hooks/useScrollAnimation'

// ─── Data ───────────────────────────────────────────────────────────────────

const cakes = [
  { id: 'choc-truffle', name: 'Chocolate Truffle Cake', description: 'Rich dark chocolate ganache with velvety truffle layers.', price: '599', image: chocolateTruffle, badge: '❤️ Bestseller' },
  { id: 'red-velvet', name: 'Red Velvet Cake', description: 'Iconic red sponge with smooth cream cheese frosting.', price: '649', image: redVelvet },
  { id: 'butterscotch', name: 'Butterscotch Cake', description: 'Caramel drizzle with crunchy butterscotch chips.', price: '549', image: butterscotch },
  { id: 'black-forest', name: 'Black Forest Cake', description: 'Classic layers of chocolate, cream, and cherries.', price: '699', image: blackForest },
  { id: 'floral', name: 'Floral Theme Cake', description: 'Edible sugar flowers crafted for elegant celebrations.', price: '899', image: floralCake, badge: '🌸 Trending' },
  { id: 'wedding', name: 'Wedding Cake', description: 'Multi-tier masterpieces designed for your perfect day.', price: '1499', image: weddingCake, badge: '💍 Premium' },
]

const testimonials = [
  { review: "The birthday cake looked absolutely stunning and tasted amazing! Everyone at the party was complimenting it. Truly made with love.", name: 'Priya S.', location: 'Coimbatore', rating: 5 },
  { review: "Best customized cakes in town. Beautiful designs and very soft cake. Akshaya Cakes never disappoints!", name: 'Kavya R.', location: 'Erode', rating: 5 },
  { review: "Akshaya Cakes made our anniversary extra special. The floral design was exactly what I dreamed of!", name: 'Arun K.', location: 'Tiruppur', rating: 5 },
  { review: "Ordered a unicorn cake for my daughter's birthday. She was overjoyed! The attention to detail is incredible.", name: 'Meena V.', location: 'Salem', rating: 5 },
  { review: "The wedding cake was breathtaking. Our guests couldn't stop talking about how beautiful and delicious it was.", name: 'Sathish & Divya', location: 'Coimbatore', rating: 5 },
]

const galleryImages = [
  { src: chocolateTruffle, alt: 'Chocolate cake', span: 'row-span-1' },
  { src: floralCake, alt: 'Floral cake', span: 'row-span-2' },
  { src: cupcakes, alt: 'Cupcakes assortment', span: 'row-span-1' },
  { src: weddingCake, alt: 'Wedding cake', span: 'row-span-2' },
  { src: birthdayCake, alt: 'Birthday cake', span: 'row-span-1' },
  { src: gallerySetup, alt: 'Dessert table setup', span: 'row-span-1' },
]

// ─── Section Wrapper ─────────────────────────────────────────────────────────

const SectionWrapper = ({ children, className = '' }) => {
  const { ref, isInView } = useScrollAnimation()
  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Section Header ───────────────────────────────────────────────────────────

const SectionHeader = ({ eyebrow, title, subtitle, center = true }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    {eyebrow && (
      <p className="text-xs font-inter font-semibold text-gold uppercase tracking-widest mb-3">{eyebrow}</p>
    )}
    <h2 className="font-playfair font-bold text-espresso" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.625rem)' }}>
      {title}
    </h2>
    {subtitle && (
      <p className="text-espresso/60 font-inter mt-3 max-w-xl mx-auto" style={{ fontSize: '1.0625rem' }}>
        {subtitle}
      </p>
    )}
    <div className={`mt-4 h-0.5 w-14 bg-gradient-to-r from-gold to-gold-light rounded-full ${center ? 'mx-auto' : ''}`} />
  </div>
)

// ─── Home Page ───────────────────────────────────────────────────────────────

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* 1. HERO */}
      <HeroSection />

      {/* 2. TRUST BAR */}
      <section className="py-20 bg-warm-milk relative">
        <div className="absolute inset-0 bg-gradient-to-b from-vanilla/30 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionWrapper>
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <SectionHeader
                eyebrow="Why Choose Us"
                title="Crafted With Passion"
                subtitle="Every cake is a work of art born from love, quality, and dedication."
              />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <CakeSlice size={28} className="text-gold" />, title: 'Customized Designs', text: 'Every cake is specially designed around your celebration theme and vision.', color: 'from-gold/10 to-almond/20' },
                { icon: <Heart size={28} className="text-gold" />, title: 'Made With Love', text: 'Freshly handcrafted cakes baked with care, passion, and emotional warmth.', color: 'from-cocoa/5 to-almond/10' },
                { icon: <Sparkles size={28} className="text-gold" />, title: 'Premium Ingredients', text: 'Only the finest cream, chocolate, and fresh ingredients in every bite.', color: 'from-gold/10 to-almond/20' },
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(74,44,42,0.18)' }}
                  className={`bg-gradient-to-br ${feature.color} border border-almond/60 rounded-2xl p-8 text-center group transition-all duration-400`}
                  id={`trust-card-${i}`}
                >
                  <div className="w-16 h-16 bg-warm-milk rounded-2xl shadow-warm flex items-center justify-center mx-auto mb-5 group-hover:shadow-gold transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-playfair font-bold text-espresso text-xl mb-3">{feature.title}</h3>
                  <p className="text-espresso/60 font-inter text-sm leading-relaxed">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* 3. SIGNATURE CAKES */}
      <section className="py-20 bg-vanilla relative overflow-hidden" id="cakes-section">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gold/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div variants={fadeInUp}>
              <SectionHeader
                eyebrow="Our Specialties"
                title="Customer Favorites"
                subtitle="Cakes our customers keep coming back for — crafted with love every single time."
              />
            </motion.div>
          </SectionWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cakes.map((cake, i) => (
              <motion.div
                key={cake.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <CakeCard {...cake} />
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/menu" className="btn-primary inline-flex">
              <ArrowRight size={18} />
              View Full Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. ABOUT PREVIEW */}
      <section className="py-20 bg-warm-milk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-warm-xl image-zoom">
                <img src={aboutBaker} alt="Our baker crafting cakes with love" className="w-full h-96 lg:h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent" />
              </div>
              {/* Quote badge */}
              <motion.div
                className="absolute -bottom-5 -right-4 lg:right-0 bg-warm-milk rounded-2xl shadow-warm-lg p-5 max-w-xs border border-almond"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <p className="font-playfair italic text-espresso text-sm leading-relaxed">
                  "Every cake tells a beautiful story."
                </p>
                <p className="text-xs text-gold font-inter font-semibold mt-2">— Akshaya</p>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <SectionHeader
                eyebrow="Our Story"
                title="Baked From The Heart"
                center={false}
              />
              <p className="text-espresso/70 font-inter leading-relaxed">
                Akshaya Cakes started with a simple dream — creating customized cakes that bring joy to every celebration.
              </p>
              <p className="text-espresso/70 font-inter leading-relaxed">
                What began as a small home bakery became a trusted place for beautifully handcrafted cakes filled with emotion, creativity, and love. Each cake we create carries a piece of our heart.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Fresh Baked Daily', icon: '🌿' },
                  { label: 'Custom Designs', icon: '🎨' },
                  { label: 'Premium Quality', icon: '⭐' },
                  { label: 'On-Time Delivery', icon: '🚀' },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-2 text-sm font-inter text-espresso/70">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary w-fit">
                <ArrowRight size={18} />
                Read Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCE BANNER */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bakeryBanner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/92 via-espresso/75 to-espresso/50" />

        {/* Floating orbs */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-cocoa/30 rounded-full blur-3xl animate-float-slow" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-5"
          >
            <p className="text-xs font-inter font-semibold text-gold uppercase tracking-widest">
              The Akshaya Experience
            </p>
            <h2 className="font-playfair font-bold text-warm-milk leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              The Joy of Celebrations.{' '}
              <span className="text-gradient-gold italic">The Sweetness</span>{' '}
              of Memories.
            </h2>
            <p className="text-warm-milk/70 font-inter text-lg">
              Cakes crafted with love, made for moments that last forever.
            </p>
            <div className="mt-4">
              <a
                href="https://wa.me/917729977244?text=Hi!%20I%27d%20like%20to%20order%20my%20dream%20cake."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
                id="banner-order-btn"
              >
                <Sparkles size={18} />
                Order Your Dream Cake
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-20 bg-vanilla relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/6 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div variants={fadeInUp}>
              <SectionHeader
                eyebrow="Testimonials"
                title="Loved By Our Customers"
                subtitle="Real stories from families we've made happy, one cake at a time."
              />
            </motion.div>
          </SectionWrapper>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <TestimonialCard {...t} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 7. INSTAGRAM GALLERY */}
      <section className="py-20 bg-warm-milk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <motion.div variants={fadeInUp}>
              <SectionHeader
                eyebrow="Instagram Gallery"
                title="Fresh Creations"
                subtitle="A glimpse into our world of sweetness. Follow us @akshayacakes."
              />
            </motion.div>
          </SectionWrapper>
          <div className="masonry-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className="masonry-item">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative rounded-2xl overflow-hidden group cursor-pointer image-zoom"
                >
                  <img src={img.src} alt={img.alt} className="w-full object-cover" />
                  <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/50 transition-all duration-500 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <div className="bg-warm-milk/20 border border-warm-milk/40 rounded-full px-5 py-2 flex items-center gap-2">
                        <InstagramIcon size={16} className="text-warm-milk" />
                        <span className="text-warm-milk font-inter text-sm font-semibold">View Cake</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER */}
      <section className="py-16 bg-vanilla">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-almond/80 to-warm-milk border border-gold/25 rounded-3xl p-10 text-center shadow-warm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cocoa/5 rounded-full blur-2xl pointer-events-none" />
            <p className="text-xs font-inter font-semibold text-gold uppercase tracking-widest mb-3">Newsletter</p>
            <h2 className="font-playfair font-bold text-espresso text-3xl mb-3">Stay Sweet With Us</h2>
            <p className="text-espresso/60 font-inter mb-8">
              Get festive offers, cake launches, and sweet inspirations delivered to your inbox.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing! 🎂') }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              id="newsletter-form"
            >
              <input
                type="text"
                placeholder="Your name"
                required
                className="flex-1 px-4 py-3 rounded-full border border-almond bg-warm-milk text-espresso font-inter text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
              />
              <input
                type="email"
                placeholder="Your email"
                required
                className="flex-1 px-4 py-3 rounded-full border border-almond bg-warm-milk text-espresso font-inter text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
              />
              <button type="submit" className="btn-primary whitespace-nowrap" id="newsletter-submit">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/917729977244?text=Hi%20Akshaya%20Cakes!"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float bg-[#25D366] hover:bg-[#20ba5a]"
        id="whatsapp-float-btn"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={28} className="text-white" />
      </a>
    </div>
  )
}

export default Home
