import { motion } from 'motion/react'
import { Card, CardContent } from './ui/card'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { Star, Quote, Heart, Users } from 'lucide-react'
import { Badge } from './ui/badge'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Mumbai, Maharashtra",
    petName: "Buddy",
    petType: "Golden Retriever",
    rating: 5,
    review: "Wild Whiskers has been a game-changer for my Golden Retriever! The premium dog food I ordered arrived fresh, and Buddy absolutely loves it. The customer service is exceptional too!",
    verified: true,
    image: "SJ",
    purchaseType: "Premium Dog Food",
    joinDate: "2 years ago"
  },
  {
    id: 2,
    name: "Arjun Patel",
    location: "Bangalore, Karnataka",
    petName: "Whiskers & Luna",
    petType: "Persian Cats",
    rating: 5,
    review: "As a cat parent of two Persians, finding quality products was challenging until I discovered Wild Whiskers. Their grooming supplies are top-notch, and my cats look fabulous!",
    verified: true,
    image: "AP",
    purchaseType: "Cat Grooming Kit",
    joinDate: "1 year ago"
  },
  {
    id: 3,
    name: "Priya Sharma",
    location: "Delhi, NCR",
    petName: "Coco",
    petType: "Labrador Mix",
    rating: 5,
    review: "The toys I bought for Coco are incredibly durable and safe. She's been playing with them for months! Wild Whiskers truly understands what pets and their parents need.",
    verified: true,
    image: "PS",
    purchaseType: "Interactive Toys",
    joinDate: "6 months ago"
  },
  {
    id: 4,
    name: "Rahul Krishnan",
    location: "Chennai, Tamil Nadu",
    petName: "Rocky",
    petType: "German Shepherd",
    rating: 5,
    review: "Fast delivery, authentic products, and reasonable prices. Rocky's health has improved significantly since switching to Wild Whiskers' recommended diet plan!",
    verified: true,
    image: "RK",
    purchaseType: "Health Supplements",
    joinDate: "8 months ago"
  },
  {
    id: 5,
    name: "Meera Reddy",
    location: "Hyderabad, Telangana",
    petName: "Simba & Nala",
    petType: "Indoor Cats",
    rating: 5,
    review: "Their pet care guides helped me so much as a first-time cat parent! The products recommended worked perfectly for my indoor cats. Highly recommend Wild Whiskers!",
    verified: true,
    image: "MR",
    purchaseType: "Starter Kit",
    joinDate: "4 months ago"
  },
  {
    id: 6,
    name: "Vikram Singh",
    location: "Pune, Maharashtra",
    petName: "Max",
    petType: "Beagle",
    rating: 5,
    review: "Exceptional quality and service! Max's favorite treats are from Wild Whiskers. The subscription service is so convenient - never runs out of essentials!",
    verified: true,
    image: "VS",
    purchaseType: "Monthly Subscription",
    joinDate: "1.5 years ago"
  }
]

const stats = [
  { label: "Happy Customers", value: "50,000+", icon: Users, color: "from-blue-500 to-blue-600" },
  { label: "5-Star Reviews", value: "25,000+", icon: Star, color: "from-yellow-500 to-yellow-600" },
  { label: "Pet Parents", value: "40,000+", icon: Heart, color: "from-red-500 to-red-600" },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-br from-white via-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        {/* Header */}
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
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Quote className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Pet Parent Reviews</h2>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Heart className="h-4 w-4 text-white" />
            </div>
          </motion.div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from our amazing community of pet parents across India 🇮🇳
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-orange-200/50 shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: index * 0.5
              }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-2xl text-primary">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ y: 50, opacity: 0, rotate: -2 }}
              whileInView={{ y: 0, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer h-full border-2 border-orange-100 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-white/90 backdrop-blur-sm">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Quote Icon */}
                      <motion.div
                        className="flex justify-between items-start"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Quote className="h-8 w-8 text-primary/30" />
                        {testimonial.verified && (
                          <Badge className="bg-green-100 text-green-800 border-green-200">
                            ✓ Verified Purchase
                          </Badge>
                        )}
                      </motion.div>

                      {/* Star Rating */}
                      <motion.div 
                        className="flex items-center space-x-1"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ 
                              rotate: [0, 360],
                              scale: [1, 1.2, 1]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              delay: i * 0.2,
                              ease: "easeInOut"
                            }}
                          >
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Review Text */}
                      <motion.p 
                        className="text-gray-700 leading-relaxed italic"
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        "{testimonial.review}"
                      </motion.p>

                      {/* Purchase Info */}
                      <motion.div
                        className="bg-orange-50 rounded-lg p-3 border border-orange-100"
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <p className="text-sm font-medium text-orange-800">
                          📦 Purchase: {testimonial.purchaseType}
                        </p>
                        <p className="text-xs text-orange-600">
                          🐾 Pet: {testimonial.petName} ({testimonial.petType})
                        </p>
                      </motion.div>

                      {/* Customer Info */}
                      <motion.div 
                        className="flex items-center space-x-3 pt-2"
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <Avatar className="h-12 w-12 border-2 border-primary/20">
                          <AvatarFallback className="bg-primary text-white font-semibold">
                            {testimonial.image}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                          <p className="text-xs text-orange-600">Customer since {testimonial.joinDate}</p>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12 bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-orange-200/50 shadow-lg"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Growing Family! 🐕‍🦺
            </h3>
          </motion.div>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Become part of India's largest community of happy pet parents. Share your experience and help other pet families! 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-primary hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              ⭐ Write a Review
            </motion.button>
            <motion.button
              className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-6 py-3 rounded-full font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              📖 Read More Reviews
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}