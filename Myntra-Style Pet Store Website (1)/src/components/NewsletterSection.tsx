import { motion } from 'motion/react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Badge } from './ui/badge'
import { 
  Mail, 
  Gift, 
  Bell, 
  Heart, 
  Star, 
  Calendar,
  Percent,
  Crown,
  Sparkles 
} from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

const benefits = [
  {
    icon: Gift,
    title: "Exclusive Deals",
    description: "Get 20% off your first order + early access to sales",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Bell,
    title: "New Product Alerts", 
    description: "Be the first to know about new arrivals and trending items",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Heart,
    title: "Pet Care Tips",
    description: "Weekly expert advice and seasonal care guides",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Calendar,
    title: "Birthday Surprises",
    description: "Special treats for your pet's birthday and adoption day",
    color: "from-purple-500 to-purple-600"
  }
]

const offers = [
  { text: "20% OFF First Order", emoji: "🎁" },
  { text: "Free Shipping", emoji: "🚚" },
  { text: "Birthday Treats", emoji: "🎂" },
  { text: "VIP Access", emoji: "👑" },
]

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      toast.error('Please enter your email address')
      return
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }
    
    // Simulate subscription
    setIsSubscribed(true)
    toast.success('🎉 Welcome to the Wild Whiskers family!')
    setEmail('')
  }

  return (
    <section className="py-16 bg-gradient-to-br from-primary via-orange-500 to-amber-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-white text-6xl animate-bounce">🐾</div>
        <div className="absolute top-20 right-20 text-white text-4xl animate-pulse">🐕</div>
        <div className="absolute bottom-20 left-20 text-white text-5xl animate-bounce delay-1000">🐱</div>
        <div className="absolute bottom-10 right-10 text-white text-3xl animate-pulse delay-500">🎾</div>
      </div>

      {/* Floating Sparkles */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-white/30"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 360],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="h-6 w-6" />
      </motion.div>
      
      <motion.div
        className="absolute top-3/4 right-1/3 text-white/20"
        animate={{ 
          y: [0, -15, 0],
          rotate: [360, 0],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Sparkles className="h-4 w-4" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
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
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Mail className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-white">Join the Pack!</h2>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Crown className="h-4 w-4 text-primary" />
            </div>
          </motion.div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Subscribe to our newsletter and become a VIP member of the Wild Whiskers family 🐾
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Benefits */}
            <motion.div
              className="space-y-6"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-4">What You'll Get:</h3>
                <div className="grid gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
                    >
                      <div className={`w-10 h-10 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <benefit.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                        <p className="text-white/80 text-sm">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Offers */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {offers.map((offer, index) => (
                  <motion.div
                    key={offer.text}
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, 1, -1, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: index * 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    <Badge className="bg-white text-primary font-semibold px-3 py-1 text-sm">
                      {offer.emoji} {offer.text}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Subscription Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
                <CardContent className="p-8">
                  {!isSubscribed ? (
                    <motion.div
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center mb-6">
                        <motion.div
                          className="w-16 h-16 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4"
                          animate={{ 
                            rotate: [0, 360],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            ease: "easeInOut"
                          }}
                        >
                          <Mail className="h-8 w-8 text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Get VIP Access
                        </h3>
                        <p className="text-muted-foreground">
                          Join 25,000+ pet parents and unlock exclusive benefits!
                        </p>
                      </div>

                      <form onSubmit={handleSubscribe} className="space-y-4">
                        <div>
                          <Input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-12 text-center border-2 border-gray-200 focus:border-primary"
                          />
                        </div>
                        
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            type="submit"
                            className="w-full h-12 bg-primary hover:bg-orange-700 text-white font-semibold text-lg shadow-lg"
                          >
                            🎁 Subscribe & Get 20% OFF
                          </Button>
                        </motion.div>
                      </form>

                      <div className="mt-6 text-center">
                        <div className="flex items-center justify-center space-x-1 text-yellow-500 mb-2">
                          {[...Array(5)].map((_, i) => (
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
                              <Star className="h-4 w-4 fill-current" />
                            </motion.div>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Trusted by 25,000+ pet parents across India
                        </p>
                      </div>

                      <p className="text-xs text-muted-foreground text-center mt-4">
                        By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 360]
                        }}
                        transition={{ duration: 1 }}
                      >
                        <span className="text-3xl">🎉</span>
                      </motion.div>
                      <h3 className="text-2xl font-bold text-green-600 mb-2">
                        Welcome to the Pack!
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Check your email for your 20% off coupon code!
                      </p>
                      <Badge className="bg-green-100 text-green-800 px-4 py-2">
                        ✓ Successfully Subscribed
                      </Badge>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { label: "Subscribers", value: "25K+", icon: "👥" },
            { label: "Avg. Savings", value: "₹500", icon: "💰" },
            { label: "Exclusive Deals", value: "50+", icon: "🎁" },
            { label: "Satisfaction", value: "98%", icon: "😊" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center text-white"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}