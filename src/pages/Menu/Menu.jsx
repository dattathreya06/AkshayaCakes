import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Filter } from 'lucide-react'
import {
  chocolateTruffle, redVelvet, weddingCake, butterscotch,
  floralCake, blackForest, cupcakes, anniversaryCake,
  birthdayCake, themeCake
} from '../../assets/images/index'
import { staggerContainer, fadeInUp, scaleIn } from '../../animations/variants'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const categories = ['All', 'Birthday', 'Wedding', 'Anniversary', 'Cupcakes', 'Theme', 'Pastries']

const menuItems = [
  { id: 'm1', name: 'Chocolate Truffle', flavor: 'Chocolate', weight: '500g / 1kg / 2kg', price: '₹599', category: 'Birthday', image: chocolateTruffle, badge: 'Bestseller' },
  { id: 'm2', name: 'Red Velvet Cake', flavor: 'Cream Cheese', weight: '500g / 1kg / 2kg', price: '₹649', category: 'Birthday', image: redVelvet },
  { id: 'm3', name: 'Butterscotch Delight', flavor: 'Caramel Toffee', weight: '500g / 1kg', price: '₹549', category: 'Birthday', image: butterscotch },
  { id: 'm4', name: 'Black Forest Classic', flavor: 'Chocolate & Cherry', weight: '1kg / 2kg', price: '₹699', category: 'Birthday', image: blackForest },
  { id: 'm5', name: 'Royal Wedding Cake', flavor: 'Vanilla & Fondant', weight: '2kg / 3kg / 5kg', price: '₹1499', category: 'Wedding', image: weddingCake, badge: 'Premium' },
  { id: 'm6', name: 'Floral Anniversary', flavor: 'Strawberry & Cream', weight: '1kg / 2kg', price: '₹999', category: 'Anniversary', image: floralCake },
  { id: 'm7', name: 'Rose Anniversary', flavor: 'Rose & Lychee', weight: '1kg / 2kg', price: '₹899', category: 'Anniversary', image: anniversaryCake },
  { id: 'm8', name: 'Assorted Cupcakes', flavor: 'Vanilla / Choco / Strawberry', weight: 'Box of 6 / 12', price: '₹349', category: 'Cupcakes', image: cupcakes, badge: 'Popular' },
  { id: 'm9', name: 'Rainbow Birthday', flavor: 'Vanilla Sponge', weight: '1kg / 2kg', price: '₹799', category: 'Birthday', image: birthdayCake },
  { id: 'm10', name: 'Princess Theme Cake', flavor: 'Butterscotch', weight: '1kg / 2kg', price: '₹1199', category: 'Theme', image: themeCake, badge: 'Custom' },
]

const MenuCard = ({ item }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4 }}
    whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(74,44,42,0.15)' }}
    className="bg-warm-milk rounded-2xl overflow-hidden border border-almond/50 shadow-warm group"
    id={item.id}
  >
    <div className="relative overflow-hidden h-52">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      {item.badge && (
        <span className="absolute top-3 left-3 bg-cocoa text-gold text-xs font-inter font-semibold px-3 py-1 rounded-full">
          {item.badge}
        </span>
      )}
    </div>
    <div className="p-5">
      <h3 className="font-playfair font-bold text-espresso text-lg mb-1">{item.name}</h3>
      <p className="text-xs text-gold font-inter font-medium mb-1">{item.flavor}</p>
      <p className="text-xs text-espresso/50 font-inter mb-4">{item.weight}</p>
      <div className="flex items-center justify-between">
        <p className="font-playfair font-bold text-xl text-cocoa">
          {item.price}
          <span className="text-xs text-espresso/40 font-inter font-normal ml-1">onwards</span>
        </p>
        <a
          href={`https://wa.me/917729977244?text=Hi!%20I'd%20like%20to%20order%20a%20${encodeURIComponent(item.name)}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-xs py-2 px-4"
        >
          <ShoppingBag size={14} />
          Order
        </a>
      </div>
    </div>
  </motion.div>
)

const Menu = () => {
  const [active, setActive] = useState('All')
  const { ref, isInView } = useScrollAnimation()

  const filtered = active === 'All' ? menuItems : menuItems.filter(m => m.category === active)

  return (
    <div className="min-h-screen bg-vanilla pb-24">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cocoa via-cocoa-light to-espresso" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${chocolateTruffle})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-espresso/70" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-float" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs font-inter font-semibold text-gold uppercase tracking-widest mb-4">Our Menu</p>
            <h1 className="font-playfair font-bold text-warm-milk leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Crafted Fresh For{' '}
              <span className="text-gradient-gold italic">Every Occasion</span>
            </h1>
            <p className="text-warm-milk/70 font-inter max-w-xl mx-auto">
              From intimate celebrations to grand weddings — every cake crafted with love and premium ingredients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-10 bg-warm-milk sticky top-20 z-30 border-b border-almond/50 shadow-glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <Filter size={16} className="text-gold flex-shrink-0" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                id={`filter-${cat.toLowerCase()}`}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-inter font-medium transition-all duration-300 ${
                  active === cat
                    ? 'bg-gradient-to-r from-gold to-gold-light text-white shadow-gold'
                    : 'bg-almond/50 text-espresso/70 hover:bg-almond hover:text-cocoa'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map(item => <MenuCard key={item.id} item={item} />)}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-espresso/40 font-inter">No cakes found in this category yet!</p>
            </div>
          )}
        </div>
      </section>

      {/* Custom order CTA */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-cocoa to-espresso rounded-3xl p-10 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-2xl" />
            <p className="text-xs font-inter font-semibold text-gold uppercase tracking-widest mb-3">Custom Orders</p>
            <h2 className="font-playfair font-bold text-warm-milk text-2xl mb-3">
              Don't see what you're looking for?
            </h2>
            <p className="text-warm-milk/60 font-inter mb-6 text-sm">
              Place a special order! Tell us your theme, flavour, and occasion.
            </p>
            <a
              href="https://wa.me/917729977244?text=Hi!%20I%27d%20like%20to%20place%20a%20custom%20cake%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
              id="menu-custom-order-btn"
            >
              <ShoppingBag size={18} />
              Order Custom Cake
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Menu
