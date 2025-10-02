import { motion } from 'motion/react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { 
  Truck, 
  Heart, 
  Calendar, 
  Phone, 
  MapPin, 
  Award,
  Clock,
  Star,
  Shield,
  Scissors,
  Stethoscope,
  Home,
  Users,
  Gift,
  CheckCircle
} from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const services = [
  {
    id: 1,
    icon: Truck,
    title: "Free Home Delivery",
    description: "Fast & reliable delivery to your doorstep across 100+ cities in India",
    features: ["Same-day delivery in metro cities", "Free delivery on orders ₹999+", "Real-time tracking", "Contactless delivery"],
    price: "Free",
    popular: false,
    image: "delivery truck pet supplies",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    icon: Stethoscope,
    title: "Vet Consultation",
    description: "24/7 online veterinary consultation with certified professionals",
    features: ["Video consultations", "Health check reminders", "Prescription management", "Emergency support"],
    price: "₹299/session",
    popular: true,
    image: "veterinarian consultation online",
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    icon: Scissors,
    title: "Professional Grooming",
    description: "At-home grooming services by trained professionals",
    features: ["Bath & blow dry", "Nail trimming", "Ear cleaning", "Dental care"],
    price: "Starting ₹799",
    popular: false,
    image: "pet grooming professional service",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 4,
    icon: Calendar,
    title: "Subscription Plans",
    description: "Never run out of essentials with our smart subscription service",
    features: ["Customizable frequency", "10% discount on all items", "Flexible pause/resume", "Priority delivery"],
    price: "Save 10%",
    popular: true,
    image: "pet subscription monthly delivery",
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 5,
    icon: Home,
    title: "Pet Boarding",
    description: "Safe and comfortable boarding facilities when you're away",
    features: ["Climate-controlled rooms", "24/7 supervision", "Play areas", "Regular updates"],
    price: "₹1200/night",
    popular: false,
    image: "pet boarding facility comfortable",
    color: "from-teal-500 to-teal-600"
  },
  {
    id: 6,
    icon: Users,
    title: "Training Classes",
    description: "Professional pet training and behavior modification",
    features: ["Basic obedience", "Behavioral correction", "Socialization", "Advanced tricks"],
    price: "₹2500/month",
    popular: false,
    image: "pet training classes professional",
    color: "from-indigo-500 to-indigo-600"
  }
]

const benefits = [
  { icon: Shield, title: "100% Safe", description: "All services are insured and bonded" },
  { icon: Award, title: "Certified Professionals", description: "Trained and verified service providers" },
  { icon: Clock, title: "Flexible Timing", description: "Services available at your convenience" },
  { icon: Phone, title: "24/7 Support", description: "Round-the-clock customer assistance" }
]

const testimonialQuotes = [
  { text: "Best grooming service in the city!", author: "Priya S.", rating: 5 },
  { text: "Vet consultation saved my dog's life", author: "Rahul K.", rating: 5 },
  { text: "Subscription service is so convenient", author: "Meera R.", rating: 5 }
]

export function ServicesSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-white via-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
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
              <Heart className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Premium Pet Services</h2>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Star className="h-4 w-4 text-white" />
            </div>
          </motion.div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive pet care services designed to keep your furry friends happy, healthy, and well-groomed 🐾
          </p>
        </motion.div>

        {/* Benefits Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-orange-200/50 shadow-lg"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <benefit.icon className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-semibold text-sm text-gray-900 mb-1">{benefit.title}</h4>
              <p className="text-xs text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`group cursor-pointer h-full border-2 ${
                service.popular ? 'border-primary/50 bg-gradient-to-br from-orange-50 to-amber-50' : 'border-orange-100'
              } hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm relative overflow-hidden`}>
                
                {/* Popular Badge */}
                {service.popular && (
                  <motion.div
                    className="absolute top-4 right-4 z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Badge className="bg-primary text-white font-semibold">
                      🔥 Popular
                    </Badge>
                  </motion.div>
                )}

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Service Image */}
                  <div className="relative overflow-hidden rounded-t-xl aspect-video bg-gradient-to-br from-orange-50 to-amber-50">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ImageWithFallback 
                        src={`https://source.unsplash.com/400x240/?${service.image}`}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    {/* Floating Icon */}
                    <motion.div
                      className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center shadow-lg`}
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut"
                      }}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </motion.div>

                    {/* Sparkle Effect */}
                    <motion.div
                      className="absolute bottom-4 right-4 text-yellow-400 opacity-0 group-hover:opacity-100"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut"
                      }}
                    >
                      ✨
                    </motion.div>
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Title & Price */}
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <div className="text-right">
                          <Badge variant="secondary" className="bg-primary/10 text-primary font-semibold">
                            {service.price}
                          </Badge>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-gray-800">Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <motion.li 
                              key={featureIndex}
                              className="text-sm text-muted-foreground flex items-start space-x-2"
                              initial={{ x: -10, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                            >
                              <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="pt-2"
                      >
                        <Button 
                          className={`w-full ${
                            service.popular 
                              ? 'bg-primary hover:bg-orange-700 text-white' 
                              : 'bg-white hover:bg-primary/5 text-primary border-2 border-primary'
                          } font-semibold`}
                        >
                          {service.popular ? '🔥 Book Now' : '📅 Schedule Service'}
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Testimonials */}
        <motion.div
          className="bg-gradient-to-r from-primary to-orange-600 rounded-3xl p-8 text-white mb-12"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">What Pet Parents Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialQuotes.map((quote, index) => (
              <motion.div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <div className="flex justify-center space-x-1 mb-3">
                  {[...Array(quote.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm italic mb-2">"{quote.text}"</p>
                <p className="text-xs text-white/80">- {quote.author}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-orange-200/50 shadow-lg"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-900 mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Need Help Choosing? 🤔
          </motion.h3>
          <motion.p 
            className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Our pet care experts are here to help you choose the perfect services for your furry friend's needs.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg"
                className="bg-primary hover:bg-orange-700 text-white px-8 py-3 font-semibold"
              >
                📞 Talk to Expert
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 font-semibold"
              >
                📧 Get Quote
              </Button>
            </motion.div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Available 24/7 • Free consultation • Quick response time
          </p>
        </motion.div>
      </div>
    </section>
  )
}