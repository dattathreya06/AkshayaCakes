import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TestimonialCard = ({ review, name, location, rating = 5 }) => {
  return (
    <div className="glass rounded-2xl p-6 h-full flex flex-col border border-gold/10 shadow-warm">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={14} className="text-gold fill-gold" />
        ))}
      </div>
      <Quote size={24} className="text-gold/30 mb-3 flex-shrink-0" />
      <p className="text-espresso/75 font-inter text-sm leading-relaxed flex-1 italic">
        "{review}"
      </p>
      <div className="flex items-center gap-3 mt-5 pt-5 border-t border-almond/60">
        <div className="w-10 h-10 bg-gradient-to-br from-cocoa to-cocoa-light rounded-full flex items-center justify-center text-gold font-playfair font-bold text-sm flex-shrink-0">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-inter font-semibold text-espresso text-sm">— {name}</p>
          {location && <p className="text-xs text-espresso/50 font-inter">{location}</p>}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
