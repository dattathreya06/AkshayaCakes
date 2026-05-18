import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'
import { cardHover, imageZoom } from '../../animations/variants'

const CakeCard = ({ image, name, description, price, badge, id }) => {
  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="bg-warm-milk rounded-2xl overflow-hidden shadow-warm border border-almond/50 flex flex-col group"
      id={id}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <motion.img
          variants={imageZoom}
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-cocoa to-cocoa-light text-gold text-xs font-inter font-semibold px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-playfair text-espresso font-bold text-xl mb-1.5 leading-tight">{name}</h3>
        <p className="text-espresso/60 text-sm font-inter leading-relaxed flex-1">{description}</p>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-almond/60">
          <div>
            <span className="text-xs text-espresso/40 font-inter">Starting from</span>
            <p className="text-gold font-playfair font-bold text-xl">₹{price}</p>
          </div>
          <a
            href="https://wa.me/917729977244?text=Hi!%20I%27d%20like%20to%20order%20a%20${encodeURIComponent(name)}."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-4"
          >
            <ShoppingBag size={15} />
            Order Now
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default CakeCard
