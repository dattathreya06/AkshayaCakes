import { motion } from 'framer-motion'

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
)
import {
  chocolateTruffle, redVelvet, weddingCake, butterscotch,
  floralCake, blackForest, cupcakes, anniversaryCake,
  birthdayCake, gallerySetup, themeCake, bakeryBanner
} from '../../assets/images/index'

const images = [
  { src: floralCake, alt: 'Elegant floral theme cake', size: 'large' },
  { src: chocolateTruffle, alt: 'Chocolate truffle cake', size: 'small' },
  { src: cupcakes, alt: 'Assorted cupcakes', size: 'small' },
  { src: weddingCake, alt: 'Wedding cake masterpiece', size: 'large' },
  { src: birthdayCake, alt: 'Kids birthday rainbow cake', size: 'small' },
  { src: redVelvet, alt: 'Red velvet slice', size: 'small' },
  { src: gallerySetup, alt: 'Celebration dessert table', size: 'large' },
  { src: butterscotch, alt: 'Butterscotch caramel cake', size: 'small' },
  { src: themeCake, alt: 'Theme fondant cake', size: 'small' },
  { src: anniversaryCake, alt: 'Romantic anniversary cake', size: 'large' },
  { src: blackForest, alt: 'Classic black forest', size: 'small' },
  { src: bakeryBanner, alt: 'Bakery kitchen warmth', size: 'small' },
]

const Gallery = () => {
  return (
    <div className="min-h-screen bg-vanilla pb-24">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cocoa to-espresso" />
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url(${weddingCake})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-espresso/78" />
        <div className="absolute top-12 left-12 w-56 h-56 bg-gold/10 rounded-full blur-3xl animate-float" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs font-inter font-semibold text-gold uppercase tracking-widest mb-4">Our Gallery</p>
            <h1 className="font-playfair font-bold text-warm-milk leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Every Cake, A{' '}
              <span className="text-gradient-gold italic">Sweet Story</span>
            </h1>
            <p className="text-warm-milk/70 font-inter max-w-xl mx-auto">
              A visual celebration of the cakes we've crafted with love for our wonderful customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="masonry-grid">
            {images.map((img, i) => (
              <div key={i} className="masonry-item">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: (i % 4) * 0.1, duration: 0.6 }}
                  className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-warm hover:shadow-warm-lg transition-shadow duration-500"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                    <div className="flex items-center gap-2 bg-warm-milk/15 border border-warm-milk/30 rounded-full px-5 py-2.5 backdrop-blur-sm">
                      <InstagramIcon size={15} className="text-warm-milk" />
                      <span className="text-warm-milk font-inter text-sm font-semibold">View Cake</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-inter font-semibold text-gold uppercase tracking-widest mb-3">Follow Us</p>
            <h2 className="font-playfair font-bold text-espresso text-3xl mb-3">
              See More On Instagram
            </h2>
            <p className="text-espresso/60 font-inter mb-7">
              We share daily creations, behind-the-scenes, and happy customers. Follow us for sweet inspiration!
            </p>
            <a
              href="https://instagram.com/akshayacakes"
              target="_blank"
              rel="noopener noreferrer"
              id="gallery-instagram-btn"
              className="btn-primary inline-flex"
            >
              <InstagramIcon size={18} />
              @akshayacakes
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
