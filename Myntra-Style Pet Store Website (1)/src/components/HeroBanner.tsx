import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { MapPin, Store, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { scrollToSection } from '../utils/navigation'
import bandanasImage from 'figma:asset/5332d29aea5c9ae7ba2d2ef294960a1970615e86.png'

export function HeroBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 bg-[rgba(0,0,0,0)]" style={{
      backgroundImage: `url(${bandanasImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-orange-50/80 to-amber-50/70"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/40 bg-[rgba(29,24,24,0)]"></div>
      
      {/* Local Store Corner Partition - 1/10 of the slide */}
      <motion.div 
        className="absolute top-0 right-0 w-1/10 h-full bg-gradient-to-bl from-primary via-orange-500 to-amber-600 border-l-4 border-white/30 z-20 overflow-hidden cursor-pointer group"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
        onClick={() => {
          window.open('https://maps.google.com/?q=pet+stores+near+me', '_blank');
        }}
      >
        {/* Animated background sparkles */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 60%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating sparkle elements */}
        <motion.div
          className="absolute top-4 right-2 text-white/30"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="h-3 w-3" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-8 left-2 text-white/20"
          animate={{ 
            y: [0, -8, 0],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Sparkles className="h-2 w-2" />
        </motion.div>

        <div className="h-full flex flex-col justify-center items-center p-4 text-white relative">
          {/* Animated store icon */}
          <motion.div 
            className="bg-white/20 rounded-full p-3 mb-3 backdrop-blur-sm border border-white/10 shadow-lg"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: "rgba(255,255,255,0.3)",
              boxShadow: "0 0 20px rgba(255,255,255,0.3)"
            }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Store className="h-6 w-6" />
            </motion.div>
          </motion.div>
          
          {/* Animated text */}
          <motion.div 
            className="text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.p 
              className="text-sm font-bold mb-1 tracking-wider"
              whileHover={{ scale: 1.05 }}
            >
              LOCAL
            </motion.p>
            <motion.p 
              className="text-sm font-bold tracking-wider"
              whileHover={{ scale: 1.05 }}
            >
              STORE
            </motion.p>
          </motion.div>
          
          {/* Animated location pin */}
          <motion.div 
            className="mt-3 bg-white/20 rounded-full p-2 backdrop-blur-sm border border-white/10 shadow-lg"
            initial={{ scale: 0, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "rgba(255,255,255,0.3)" 
            }}
          >
            <motion.div
              animate={{ 
                y: [0, -3, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
            >
              <MapPin className="h-4 w-4" />
            </motion.div>
          </motion.div>
          
          {/* Pulsing ring effect */}
          <motion.div
            className="absolute inset-0 rounded-l-lg border-2 border-white/20"
            animate={{ 
              opacity: [0.2, 0.6, 0.2],
              scale: [0.98, 1.02, 0.98]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-bl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </motion.div>

      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">W</span>
              </div>
              <span className="text-primary font-semibold">Wild Whiskers - Adventure & Care</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Make a Duo
              <span className="text-primary"> with Your Pet</span>
              <br />& Adventure Together
            </h1>
            <p className="text-lg text-gray-700 max-w-md">
              From nutritious meals to fun toys, discover thousands of premium products crafted with love for your beloved companions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-orange-700 text-white shadow-lg"
                  onClick={() => scrollToSection('trending')}
                >
                  🛍️ Shop Now
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => scrollToSection('categories')}
                >
                  📱 Browse Categories
                </Button>
              </motion.div>
            </div>
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>🚚 Free Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>↩️ Easy Returns</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span>💬 24/7 Support</span>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* Feature highlight cards */}
            <div className="space-y-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-orange-200/50">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900">Limited Edition</p>
                    <p className="text-sm text-gray-600">Exclusive bandanas for your pet</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-orange-200/50">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">💰</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900">Only ₹399</p>
                    <p className="text-sm text-gray-600">Premium quality at best price</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-orange-200/50">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">⭐</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900">10K+ Reviews</p>
                    <p className="text-sm text-gray-600">Trusted by pet parents 🐕‍🦺</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating paw prints */}
            <div className="absolute top-4 right-4 text-primary/30 text-2xl animate-bounce">🐾</div>
            <div className="absolute top-1/2 -right-4 text-primary/20 text-xl animate-pulse">🐾</div>
          </div>
        </div>
      </div>
    </div>
  )
}