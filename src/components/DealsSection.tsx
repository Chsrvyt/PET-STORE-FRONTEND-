import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Timer, Zap } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { motion } from 'motion/react'
import { scrollToSection } from '../utils/navigation'
import { useShopping } from '../contexts/ShoppingContext'

export function DealsSection() {
  const { addToCart } = useShopping();
  
  const deals = [
    {
      title: "Flash Sale",
      subtitle: "Up to 60% Off",
      description: "Premium dog food collection",
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      timeLeft: "23:45:12",
      bgColor: "bg-red-500"
    },
    {
      title: "Buy 2 Get 1",
      subtitle: "Free on Toys",
      description: "Interactive pet toys",
      image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      timeLeft: "2 Days Left", 
      bgColor: "bg-green-500"
    }
  ]

  const quickDeals = [
    {
      id: "deal-1",
      name: "Cat Litter - 10kg Premium",
      brand: "PetCare Plus",
      price: 899,
      originalPrice: 1299,
      rating: 4.5,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      category: "Cat Supplies",
      sizes: ['Small (5kg)', 'Large (10kg)']
    },
    {
      id: "deal-2",
      name: "Premium Dog Leash Set",
      brand: "WalkPro",
      price: 699,
      originalPrice: 999,
      rating: 4.7,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1705227881230-c08524c67ef6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBhY2Nlc3NvcmllcyUyMGNvbGxhciUyMGxlYXNofGVufDF8fHx8MTc1NzMwOTMzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Dog Accessories",
      sizes: ['Small', 'Medium', 'Large']
    },
    {
      id: "deal-3",
      name: "Pet Grooming Shampoo",
      brand: "CleanPaws",
      price: 399,
      originalPrice: 599,
      rating: 4.3,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1727510190155-51abda425a82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBncm9vbWluZyUyMHN1cHBsaWVzfGVufDF8fHx8MTc1NzMwOTM0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Grooming"
    },
    {
      id: "deal-4",
      name: "Interactive Cat Puzzle Feeder",
      brand: "SmartPaws",
      price: 1299,
      originalPrice: 1699,
      rating: 4.6,
      reviews: 187,
      image: "https://images.unsplash.com/photo-1652524791225-ea5e6de0ea71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjB0b3lzJTIwaW50ZXJhY3RpdmV8ZW58MXx8fHwxNzU3MzA5MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Cat Toys"
    },
    {
      id: "deal-5",
      name: "Fish Tank LED Lighting",
      brand: "AquaBright",
      price: 1899,
      originalPrice: 2499,
      rating: 4.4,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1656917280317-85e85aaa74c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwdGFuayUyMGFxdWFyaXVtfGVufDF8fHx8MTc1NzMwOTM0OXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Fish Supplies",
      sizes: ['30cm', '60cm', '90cm']
    },
    {
      id: "deal-6",
      name: "Small Pet Bedding - Natural",
      brand: "ComfyNest",
      price: 549,
      originalPrice: 799,
      rating: 4.5,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1719985970660-b946692f9972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW1zdGVyJTIwY2FnZSUyMHNtYWxsJTIwcGV0c3xlbnwxfHx8fDE3NTczMDkzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Small Pet Supplies",
      sizes: ['Small (2kg)', 'Large (5kg)']
    }
  ]

  return (
    <section className="container mx-auto px-4 py-16">
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
            animate={{ 
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          >
            🎯
          </motion.span>
          <h2 className="text-3xl font-bold">Deals & Offers</h2>
        </motion.div>
        <motion.p 
          className="text-muted-foreground"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Limited time offers you don't want to miss! 🐾💰
        </motion.p>
      </motion.div>

      {/* Main deals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {deals.map((deal, index) => (
          <motion.div 
            key={index} 
            className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.2,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <ImageWithFallback 
                src={deal.image}
                alt={deal.title}
                className="w-full h-64 object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
            
            {/* Animated sparkle overlay */}
            <motion.div
              className="absolute top-4 right-4 text-yellow-400 text-lg"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: index * 0.5
              }}
            >
              ✨
            </motion.div>
            
            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge className={`${deal.bgColor} text-white mb-4 w-fit`}>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <Zap className="h-3 w-3 mr-1" />
                    </motion.div>
                    {deal.title}
                  </Badge>
                </motion.div>
                <h3 className="text-3xl font-bold mb-2">{deal.subtitle}</h3>
                <p className="text-lg opacity-90">{deal.description}</p>
              </motion.div>
              
              <motion.div 
                className="space-y-4"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <motion.div 
                  className="flex items-center space-x-2"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Timer className="h-4 w-4" />
                  </motion.div>
                  <span className="text-sm">{deal.timeLeft}</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="bg-white text-black hover:bg-gray-100"
                    onClick={() => scrollToSection('bestsellers')}
                  >
                    Shop Now
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick deals */}
      <motion.div 
        className="bg-accent rounded-2xl p-8"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.div 
          className="flex items-center justify-between mb-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold">Quick Deals</h3>
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Badge variant="destructive">
              Ending Soon
            </Badge>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickDeals.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-background rounded-lg p-4 hover:shadow-md transition-shadow"
              initial={{ y: 30, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: 0.5 + index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="overflow-hidden rounded-md mb-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 object-cover"
                />
              </motion.div>
              <h4 className="font-medium mb-2">{item.name}</h4>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <motion.span 
                    className="font-bold"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  >
                    ₹{item.price}
                  </motion.span>
                  <span className="text-sm text-muted-foreground line-through">₹{item.originalPrice}</span>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button 
                    size="sm"
                    onClick={() => addToCart(item)}
                  >
                    Add
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}