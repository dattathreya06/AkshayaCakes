import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react'
import { heroHeading, fadeInUp, staggerContainer, scaleIn } from '../../animations/variants'
import { heroCake } from '../../assets/images/index'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-vanilla via-warm-milk to-almond/40" />

      {/* Floating orbs */}
      <div className="absolute top-24 left-8 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-20 right-8 w-96 h-96 bg-almond/60 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cocoa/5 rounded-full blur-2xl animate-float-fast pointer-events-none" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gold/40 rounded-full pointer-events-none"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.7,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh] py-12">
          {/* Left content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 w-fit">
              <div className="flex items-center gap-2 bg-almond border border-gold/30 rounded-full px-4 py-2">
                <Sparkles size={14} className="text-gold" />
                <span className="text-xs font-inter font-semibold text-cocoa uppercase tracking-widest">
                  Freshly Baked With Love
                </span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={heroHeading}
              className="font-playfair font-bold text-espresso leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Customized Cakes{' '}
              <span className="text-gradient-gold italic">For Every</span>{' '}
              Celebration
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              className="text-espresso/65 font-inter leading-relaxed max-w-lg"
              style={{ fontSize: '1.0625rem' }}
            >
              Beautiful handcrafted cakes made specially for birthdays, anniversaries, weddings, baby showers, and every sweet moment in life.
            </motion.p>

            {/* Stats row */}
            <motion.div variants={fadeInUp} className="flex gap-8 py-2">
              {[
                { num: '500+', label: 'Happy Customers' },
                { num: '200+', label: 'Cake Designs' },
                { num: '6+', label: 'Years of Love' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-playfair font-bold text-2xl text-cocoa">{stat.num}</p>
                  <p className="text-xs text-espresso/50 font-inter">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link to="/menu" className="btn-primary">
                <ArrowRight size={18} />
                Explore Cakes
              </Link>
              <a
                href="https://wa.me/917729977244?text=Hi!%20I%27d%20like%20to%20order%20a%20custom%20cake."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <ShoppingBag size={18} />
                Order Custom Cake
              </a>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="relative flex items-center justify-center"
          >
            {/* Image glow ring */}
            <div className="absolute w-80 h-80 lg:w-[420px] lg:h-[420px] bg-gold/20 rounded-full blur-2xl animate-pulse-warm" />

            {/* Main cake image */}
            <motion.div
              className="relative z-10 w-72 h-72 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-warm-milk shadow-warm-xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src={heroCake}
                alt="Premium customized celebration cake by Akshaya Cakes"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating badge cards */}
            <motion.div
              className="absolute top-8 -left-4 lg:left-0 bg-warm-milk rounded-2xl shadow-warm px-4 py-3 border border-almond/60 flex items-center gap-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <span className="text-2xl">🎂</span>
              <div>
                <p className="text-xs font-inter font-bold text-espresso">100% Custom</p>
                <p className="text-xs text-espresso/50 font-inter">Your design</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-12 -right-2 lg:right-4 bg-warm-milk rounded-2xl shadow-warm px-4 py-3 border border-almond/60 flex items-center gap-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <span className="text-2xl">✨</span>
              <div>
                <p className="text-xs font-inter font-bold text-espresso">Fresh Baked</p>
                <p className="text-xs text-espresso/50 font-inter">Every order</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-5 h-8 border-2 border-gold/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-gold/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
