import { ImageWithFallback } from './figma/ImageWithFallback'
import { motion } from 'motion/react'
import { scrollToSection } from '../utils/navigation'

export function CategoryHighlights() {
  const categories = [
    {
      name: "Dogs",
      emoji: "🐕",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Everything for your loyal companion",
      bgColor: "from-orange-400/20 to-red-400/20",
      itemCount: "2,500+ Products"
    },
    {
      name: "Cats", 
      emoji: "🐱",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Premium products for feline friends",
      bgColor: "from-amber-400/20 to-yellow-400/20",
      itemCount: "1,800+ Products"
    },
    {
      name: "Small Pets",
      emoji: "🐹",
      image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
      description: "Care for birds, hamsters & more",
      bgColor: "from-green-400/20 to-emerald-400/20",
      itemCount: "950+ Products"
    },
    {
      name: "Fish & Aquatic",
      emoji: "🐠",
      image: "https://images.unsplash.com/photo-1656917280317-85e85aaa74c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwdGFuayUyMGFxdWFyaXVtfGVufDF8fHx8MTc1NzMwOTM0OXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Aquarium supplies & fish care",
      bgColor: "from-blue-400/20 to-cyan-400/20",
      itemCount: "750+ Products"
    }
  ]

  return (
    <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-orange-50/50 to-background">
      <motion.div 
        className="text-center mb-12"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="flex items-center justify-center space-x-2 mb-4"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.span 
            className="text-2xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            🏪
          </motion.span>
          <span className="text-primary font-semibold">Categories</span>
        </motion.div>
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Shop by Pet
        </motion.h2>
        <motion.p 
          className="text-muted-foreground max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Find everything your furry, feathered, or small friends need, carefully curated for each type of companion
        </motion.p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <motion.div 
            key={category.name}
            className="group cursor-pointer"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.2,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              console.log(`Exploring ${category.name} category`);
              scrollToSection('bestsellers');
            }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-lg border-2 border-white hover:border-primary/30 transition-all duration-300">
              <motion.div
                className="overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <ImageWithFallback 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-80 object-cover"
                />
              </motion.div>
              <div className={`absolute inset-0 bg-gradient-to-t ${category.bgColor} via-transparent to-transparent`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <motion.div 
                className="absolute bottom-6 left-6 text-white"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <motion.span 
                    className="text-2xl"
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  >
                    {category.emoji}
                  </motion.span>
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                </div>
                <p className="text-sm opacity-90 mb-1">{category.description}</p>
                <p className="text-xs opacity-75 font-medium">{category.itemCount}</p>
              </motion.div>
              
              <motion.div 
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-primary font-semibold text-sm"
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  backgroundColor: "var(--primary)",
                  color: "white",
                  scale: 1.05
                }}
              >
                Explore →
              </motion.div>
              
              {/* Animated paw print decoration */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/10 text-6xl pointer-events-none"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              >
                🐾
              </motion.div>

              {/* Floating sparkles */}
              <motion.div
                className="absolute top-8 left-8 text-white/20 text-lg"
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.2, 0.8, 0.2],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index * 0.7
                }}
              >
                ✨
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}