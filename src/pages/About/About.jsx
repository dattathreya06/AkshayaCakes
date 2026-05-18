import { motion } from 'framer-motion'
import { Heart, Leaf, Award, Users } from 'lucide-react'
import { aboutBaker, bakeryBanner, floralCake } from '../../assets/images/index'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '../../animations/variants'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const timeline = [
  { year: '2018', title: 'The Beginning', desc: 'Started baking custom cakes from home with a passionate heart.' },
  { year: '2019', title: 'First 100 Customers', desc: 'Word spread — friends and families began trusting Akshaya Cakes.' },
  { year: '2021', title: 'Expanded Flavors', desc: 'Introduced new designs, flavors, and wedding cake collections.' },
  { year: '2024', title: 'Growing Community', desc: '500+ happy customers and counting, built on love and trust.' },
]

const values = [
  { icon: <Heart size={24} className="text-gold" />, title: 'Made With Love', desc: "Every cake carries the warmth and passion of our baker's hands." },
  { icon: <Leaf size={24} className="text-gold" />, title: 'Fresh Ingredients', desc: 'We use only locally sourced, premium-quality ingredients.' },
  { icon: <Award size={24} className="text-gold" />, title: 'Handcrafted Quality', desc: 'No shortcuts, no mass production — only artisanal precision.' },
  { icon: <Users size={24} className="text-gold" />, title: 'Personal Touch', desc: 'We treat every order as a personal gift, not just a transaction.' },
]

const About = () => {
  const { ref: timelineRef, isInView: timelineInView } = useScrollAnimation()

  return (
    <div className="min-h-screen bg-vanilla pb-24">
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-espresso to-cocoa" />
        <div
          className="absolute inset-0 opacity-15"
          style={{ backgroundImage: `url(${bakeryBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-espresso/75" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-float" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs font-inter font-semibold text-gold uppercase tracking-widest mb-4">About Us</p>
            <h1 className="font-playfair font-bold text-warm-milk leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Baking Dreams Into{' '}
              <span className="text-gradient-gold italic">Reality</span>
            </h1>
            <p className="text-warm-milk/70 font-inter max-w-xl mx-auto text-lg">
              We believe celebrations become unforgettable with a cake made personally for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-warm-milk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-warm-xl image-zoom h-[480px]">
                <img src={aboutBaker} alt="Akshaya — Founder and Head Baker" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-4 bg-warm-milk rounded-2xl shadow-warm-lg p-5 border border-almond max-w-[200px]">
                <p className="font-playfair italic text-espresso text-sm leading-relaxed">
                  "Baking is how I say I love you without words."
                </p>
                <p className="text-xs text-gold font-inter font-semibold mt-2">— Akshaya</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-xs font-inter font-semibold text-gold uppercase tracking-widest mb-3">Our Founder</p>
                <h2 className="font-playfair font-bold text-espresso text-3xl mb-5">
                  The Story of <span className="text-gradient-gold italic">Akshaya</span>
                </h2>
              </div>
              <div className="flex flex-col gap-4 text-espresso/70 font-inter leading-relaxed">
                <p>
                  It all started in a small kitchen with a big dream. Akshaya, a passionate home baker, began crafting cakes for family celebrations — pouring creativity and love into every layer.
                </p>
                <p>
                  What started as a labor of love quickly became a calling. Friends asked for cakes, then friends of friends. Word spread the way only real quality can — through experience and emotion.
                </p>
                <p>
                  Today, Akshaya Cakes is a trusted name for customized celebrations across Coimbatore. But the heart of what we do remains the same: making people feel special through the language of cake.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {[
                  { num: '500+', label: 'Happy Customers' },
                  { num: '200+', label: 'Unique Designs' },
                  { num: '6+', label: 'Years of Baking' },
                  { num: '100%', label: 'Made from Scratch' },
                ].map(stat => (
                  <div key={stat.label} className="bg-almond/40 rounded-xl p-4 border border-almond/60">
                    <p className="font-playfair font-bold text-2xl text-cocoa">{stat.num}</p>
                    <p className="text-xs text-espresso/60 font-inter">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-vanilla">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs font-inter font-semibold text-gold uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 className="font-playfair font-bold text-espresso" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.625rem)' }}>
              Our Baking Philosophy
            </h2>
            <div className="mt-4 h-0.5 w-14 bg-gradient-to-r from-gold to-gold-light rounded-full mx-auto" />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="bg-warm-milk rounded-2xl p-7 border border-almond/50 shadow-warm text-center group"
              >
                <div className="w-14 h-14 bg-almond/60 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/10 transition-colors duration-300">
                  {v.icon}
                </div>
                <h3 className="font-playfair font-bold text-espresso text-lg mb-3">{v.title}</h3>
                <p className="text-espresso/60 font-inter text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-warm-milk">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs font-inter font-semibold text-gold uppercase tracking-widest mb-3">Our Journey</p>
            <h2 className="font-playfair font-bold text-espresso" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.625rem)' }}>
              From Oven to Hearts
            </h2>
            <div className="mt-4 h-0.5 w-14 bg-gradient-to-r from-gold to-gold-light rounded-full mx-auto" />
          </motion.div>

          <div ref={timelineRef} className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/50 via-gold/30 to-transparent -translate-x-1/2 hidden md:block" />
            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-warm-milk rounded-2xl border border-almond/60 shadow-warm p-6 inline-block">
                      <p className="text-xs font-inter font-semibold text-gold uppercase tracking-widest mb-2">{item.year}</p>
                      <h3 className="font-playfair font-bold text-espresso text-lg mb-2">{item.title}</h3>
                      <p className="text-espresso/60 font-inter text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center shadow-gold flex-shrink-0 z-10">
                    <div className="w-3 h-3 bg-warm-milk rounded-full" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
