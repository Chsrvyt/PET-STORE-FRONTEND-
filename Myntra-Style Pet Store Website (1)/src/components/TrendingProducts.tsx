import { ProductCard } from './ProductCard'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import { scrollToSection } from '../utils/navigation'

export function TrendingProducts() {
  const trendingProducts = [
    {
      id: '1',
      name: 'Premium Dog Food - Chicken & Rice',
      brand: 'Royal Canin',
      price: 2499,
      originalPrice: 2999,
      rating: 4.5,
      reviews: 1250,
      image: 'https://images.unsplash.com/photo-1747577672101-542f7797048b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBmb29kJTIwcHJlbWl1bSUyMHF1YWxpdHl8ZW58MXx8fHwxNzU3MzA5MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Dog Food',
      sizes: ['Small (1kg)', 'Medium (3kg)', 'Large (10kg)', 'Extra Large (15kg)']
    },
    {
      id: '2',
      name: 'Interactive Cat Toy Set',
      brand: 'Whiskers',
      price: 899,
      originalPrice: 1199,
      rating: 4.3,
      reviews: 892,
      image: 'https://images.unsplash.com/photo-1652524791225-ea5e6de0ea71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjB0b3lzJTIwaW50ZXJhY3RpdmV8ZW58MXx8fHwxNzU3MzA5MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Cat Toys'
    },
    {
      id: '3',
      name: 'Comfortable Dog Bed - Large',
      brand: 'PetComfort',
      price: 1599,
      originalPrice: 2199,
      rating: 4.7,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'Dog Beds',
      sizes: ['Small', 'Medium', 'Large', 'Extra Large']
    },
    {
      id: '4',
      name: 'Premium Leather Collar & Leash Set',
      brand: 'SafePet',
      price: 1299,
      originalPrice: 1599,
      rating: 4.6,
      reviews: 423,
      image: 'https://images.unsplash.com/photo-1705227881230-c08524c67ef6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBhY2Nlc3NvcmllcyUyMGNvbGxhciUyMGxlYXNofGVufDF8fHx8MTc1NzMwOTMzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Dog Accessories',
      sizes: ['Small', 'Medium', 'Large']
    },
    {
      id: '5',
      name: 'Dog Training Treats - Chicken Flavor',
      brand: 'TrainWell',
      price: 349,
      originalPrice: 499,
      rating: 4.4,
      reviews: 1567,
      image: 'https://images.unsplash.com/photo-1605458386862-48a8da3b85ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'Dog Treats',
      sizes: ['Small (200g)', 'Large (500g)']
    },
    {
      id: '6',
      name: 'Pet Carrier Bag - Travel Safe',
      brand: 'TravelPet',
      price: 1899,
      originalPrice: 2399,
      rating: 4.2,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'Pet Carriers',
      sizes: ['Small', 'Medium', 'Large']
    },
    {
      id: '7',
      name: 'Hamster Luxury Cage with Accessories',
      brand: 'SmallWorld',
      price: 2799,
      originalPrice: 3299,
      rating: 4.5,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1719985970660-b946692f9972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW1zdGVyJTIwY2FnZSUyMHNtYWxsJTIwcGV0c3xlbnwxfHx8fDE3NTczMDkzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Small Pet Supplies'
    },
    {
      id: '8',
      name: 'Professional Pet Grooming Kit',
      brand: 'GroomMaster',
      price: 2199,
      originalPrice: 2699,
      rating: 4.8,
      reviews: 756,
      image: 'https://images.unsplash.com/photo-1727510190155-51abda425a82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBncm9vbWluZyUyMHN1cHBsaWVzfGVufDF8fHx8MTc1NzMwOTM0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Grooming'
    },
    {
      id: '9',
      name: 'Premium Fish Tank with LED Lighting',
      brand: 'AquaLife',
      price: 4999,
      originalPrice: 6499,
      rating: 4.7,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1656917280317-85e85aaa74c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwdGFuayUyMGFxdWFyaXVtfGVufDF8fHx8MTc1NzMwOTM0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Fish Supplies',
      sizes: ['20L', '40L', '60L', '100L']
    },
    {
      id: '10',
      name: 'Cat Scratcher Tree - Multi-Level',
      brand: 'FelinePlay',
      price: 3299,
      originalPrice: 3999,
      rating: 4.6,
      reviews: 423,
      image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      category: 'Cat Furniture',
      sizes: ['Medium (120cm)', 'Large (150cm)', 'Extra Large (180cm)']
    }
  ]

  return (
    <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-orange-50/50 to-amber-50/50">
      <motion.div 
        className="flex items-center justify-between mb-8"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <motion.div 
            className="flex items-center space-x-2 mb-2"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span 
              className="text-2xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
            >
              🔥
            </motion.span>
            <h2 className="text-3xl font-bold">Trending Now</h2>
          </motion.div>
          <motion.p 
            className="text-muted-foreground"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Popular picks loved by pet parents across India 🐾
          </motion.p>
        </div>
        <motion.div 
          className="flex space-x-2"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => {
                const container = document.querySelector('#trending .flex.space-x-6');
                if (container) {
                  container.scrollBy({ left: -300, behavior: 'smooth' });
                }
              }}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => {
                const container = document.querySelector('#trending .flex.space-x-6');
                if (container) {
                  container.scrollBy({ left: 300, behavior: 'smooth' });
                }
              }}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="overflow-x-auto">
        <motion.div 
          className="flex space-x-6 pb-4" 
          style={{ width: 'max-content' }}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {trendingProducts.map((product, index) => (
            <motion.div 
              key={product.id} 
              className="w-72 flex-shrink-0"
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        className="text-center mt-8"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full"
            onClick={() => scrollToSection('bestsellers')}
          >
            🛍️ View All Trending Products
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}