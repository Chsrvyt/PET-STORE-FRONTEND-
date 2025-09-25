import { ProductCard } from './ProductCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { motion } from 'motion/react'

export function BestSellers() {
  const bestSellers = {
    all: [
      {
        id: 'bs1',
        name: 'Premium Adult Dog Food - Chicken',
        brand: 'Pedigree',
        price: 1899,
        originalPrice: 2299,
        rating: 4.6,
        reviews: 2341,
        image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Dog Food',
        sizes: ['Small (1kg)', 'Medium (3kg)', 'Large (10kg)']
      },
      {
        id: 'bs2',
        name: 'Cat Food Bowl Set - Stainless Steel',
        brand: 'WhiskerBowl',
        price: 799,
        originalPrice: 999,
        rating: 4.4,
        reviews: 892,
        image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Cat Accessories'
      },
      {
        id: 'bs3',
        name: 'Dog Collar with LED Light',
        brand: 'SafePet',
        price: 1299,
        originalPrice: 1599,
        rating: 4.7,
        reviews: 1567,
        image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Dog Accessories',
        sizes: ['Small', 'Medium', 'Large']
      },
      {
        id: 'bs4',
        name: 'Cat Litter Box - Self Cleaning',
        brand: 'CleanPaws',
        price: 4999,
        originalPrice: 5999,
        rating: 4.8,
        reviews: 423,
        image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Cat Supplies'
      },
      {
        id: 'bs5',
        name: 'Pet Grooming Kit - Complete Set',
        brand: 'GroomMaster',
        price: 2199,
        originalPrice: 2699,
        rating: 4.5,
        reviews: 756,
        image: 'https://images.unsplash.com/photo-1605458386862-48a8da3b85ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Grooming'
      },
      {
        id: 'bs6',
        name: 'Bird Cage - Large Size',
        brand: 'BirdHome',
        price: 3499,
        originalPrice: 3999,
        rating: 4.3,
        reviews: 234,
        image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Bird Supplies',
        sizes: ['Medium', 'Large', 'Extra Large']
      },
      {
        id: 'bs7',
        name: 'Premium Cat Food - Salmon & Tuna',
        brand: 'WhiskerChef',
        price: 1649,
        originalPrice: 1999,
        rating: 4.7,
        reviews: 1834,
        image: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Cat Food',
        sizes: ['Small (500g)', 'Medium (2kg)', 'Large (5kg)']
      },
      {
        id: 'bs8',
        name: 'Interactive Dog Puzzle Toy',
        brand: 'BrainPaws',
        price: 899,
        originalPrice: 1199,
        rating: 4.6,
        reviews: 967,
        image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Dog Toys'
      }
    ],
    dogs: [
      {
        id: 'bs1',
        name: 'Premium Adult Dog Food - Chicken',
        brand: 'Pedigree',
        price: 1899,
        originalPrice: 2299,
        rating: 4.6,
        reviews: 2341,
        image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Dog Food',
        sizes: ['Small (1kg)', 'Medium (3kg)', 'Large (10kg)']
      },
      {
        id: 'bs3',
        name: 'Dog Collar with LED Light',
        brand: 'SafePet',
        price: 1299,
        originalPrice: 1599,
        rating: 4.7,
        reviews: 1567,
        image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Dog Accessories',
        sizes: ['Small', 'Medium', 'Large']
      },
      {
        id: 'bs8',
        name: 'Interactive Dog Puzzle Toy',
        brand: 'BrainPaws',
        price: 899,
        originalPrice: 1199,
        rating: 4.6,
        reviews: 967,
        image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Dog Toys'
      },
      {
        id: 'dog1',
        name: 'Orthopedic Dog Bed - Memory Foam',
        brand: 'ComfortPaws',
        price: 2499,
        originalPrice: 2999,
        rating: 4.8,
        reviews: 1234,
        image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Dog Beds',
        sizes: ['Small', 'Medium', 'Large', 'Extra Large']
      },
      {
        id: 'dog2',
        name: 'Retractable Dog Leash - 5m',
        brand: 'WalkEasy',
        price: 699,
        originalPrice: 899,
        rating: 4.5,
        reviews: 2156,
        image: 'https://images.unsplash.com/photo-1705227881230-c08524c67ef6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBhY2Nlc3NvcmllcyUyMGNvbGxhciUyMGxlYXNofGVufDF8fHx8MTc1NzMwOTMzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Dog Accessories',
        sizes: ['Small Dogs', 'Medium Dogs', 'Large Dogs']
      },
      {
        id: 'dog3',
        name: 'Dental Chew Toys Set',
        brand: 'HealthyBite',
        price: 449,
        originalPrice: 599,
        rating: 4.4,
        reviews: 1876,
        image: 'https://images.unsplash.com/photo-1605458386862-48a8da3b85ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Dog Toys'
      }
    ],
    cats: [
      {
        id: 'bs2',
        name: 'Cat Food Bowl Set - Stainless Steel',
        brand: 'WhiskerBowl',
        price: 799,
        originalPrice: 999,
        rating: 4.4,
        reviews: 892,
        image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Cat Accessories'
      },
      {
        id: 'bs4',
        name: 'Cat Litter Box - Self Cleaning',
        brand: 'CleanPaws',
        price: 4999,
        originalPrice: 5999,
        rating: 4.8,
        reviews: 423,
        image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Cat Supplies'
      },
      {
        id: 'bs7',
        name: 'Premium Cat Food - Salmon & Tuna',
        brand: 'WhiskerChef',
        price: 1649,
        originalPrice: 1999,
        rating: 4.7,
        reviews: 1834,
        image: 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Cat Food',
        sizes: ['Small (500g)', 'Medium (2kg)', 'Large (5kg)']
      },
      {
        id: 'cat1',
        name: 'Cat Scratcher Post with Sisal',
        brand: 'ScratchMaster',
        price: 1299,
        originalPrice: 1599,
        rating: 4.6,
        reviews: 756,
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Cat Furniture',
        sizes: ['Small (60cm)', 'Medium (90cm)', 'Large (120cm)']
      },
      {
        id: 'cat2',
        name: 'Interactive Feather Wand Toy',
        brand: 'PlayTime',
        price: 399,
        originalPrice: 549,
        rating: 4.5,
        reviews: 1234,
        image: 'https://images.unsplash.com/photo-1652524791225-ea5e6de0ea71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjB0b3lzJTIwaW50ZXJhY3RpdmV8ZW58MXx8fHwxNzU3MzA5MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Cat Toys'
      },
      {
        id: 'cat3',
        name: 'Premium Cat Litter - Clumping',
        brand: 'FreshPaws',
        price: 649,
        originalPrice: 799,
        rating: 4.7,
        reviews: 2341,
        image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Cat Supplies',
        sizes: ['Small (5kg)', 'Medium (10kg)', 'Large (20kg)']
      }
    ],
    smallPets: [
      {
        id: 'bs6',
        name: 'Bird Cage - Large Size',
        brand: 'BirdHome',
        price: 3499,
        originalPrice: 3999,
        rating: 4.3,
        reviews: 234,
        image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Bird Supplies',
        sizes: ['Medium', 'Large', 'Extra Large']
      },
      {
        id: 'small1',
        name: 'Hamster Exercise Wheel - Silent',
        brand: 'QuietPlay',
        price: 699,
        originalPrice: 899,
        rating: 4.6,
        reviews: 567,
        image: 'https://images.unsplash.com/photo-1719985970660-b946692f9972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW1zdGVyJTIwY2FnZSUyMHNtYWxsJTIwcGV0c3xlbnwxfHx8fDE3NTczMDkzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Small Pet Supplies',
        sizes: ['Small', 'Medium', 'Large']
      },
      {
        id: 'small2',
        name: 'Rabbit Hay Feeder - Premium',
        brand: 'BunnyBest',
        price: 899,
        originalPrice: 1199,
        rating: 4.5,
        reviews: 345,
        image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'Small Pet Supplies'
      },
      {
        id: 'small3',
        name: 'Guinea Pig Bedding - Natural',
        brand: 'ComfortBed',
        price: 549,
        originalPrice: 699,
        rating: 4.4,
        reviews: 789,
        image: 'https://images.unsplash.com/photo-1719985970660-b946692f9972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW1zdGVyJTIwY2FnZSUyMHNtYWxsJTIwcGV0c3xlbnwxfHx8fDE3NTczMDkzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Small Pet Supplies',
        sizes: ['Small (2kg)', 'Medium (5kg)', 'Large (10kg)']
      }
    ]
  }

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
              y: [0, -10, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          >
            🏆
          </motion.span>
          <h2 className="text-3xl font-bold">Best Sellers</h2>
        </motion.div>
        <motion.p 
          className="text-muted-foreground"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Most loved products by pet parents across India 🇮🇳🐾
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Tabs defaultValue="all" className="w-full">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <TabsTrigger value="all">All Pets</TabsTrigger>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <TabsTrigger value="dogs">Dogs</TabsTrigger>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <TabsTrigger value="cats">Cats</TabsTrigger>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <TabsTrigger value="smallPets">Small Pets</TabsTrigger>
              </motion.div>
            </TabsList>
          </motion.div>

          <TabsContent value="all">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {bestSellers.all.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ y: 50, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
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
          </TabsContent>

          <TabsContent value="dogs">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {bestSellers.dogs.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ y: 50, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
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
          </TabsContent>

          <TabsContent value="cats">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {bestSellers.cats.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ y: 50, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
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
          </TabsContent>

          <TabsContent value="smallPets">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {bestSellers.smallPets.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ y: 50, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
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
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  )
}