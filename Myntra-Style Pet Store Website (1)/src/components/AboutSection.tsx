import { motion } from 'motion/react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { 
  Heart, 
  Award, 
  Users, 
  Globe, 
  Shield, 
  Truck,
  Clock,
  Star,
  Target,
  Leaf,
  CheckCircle,
  MapPin
} from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const milestones = [
  { year: "2019", event: "Wild Whiskers Founded", description: "Started with a mission to make pet care accessible" },
  { year: "2020", event: "10K Happy Customers", description: "Reached our first major milestone during the pandemic" },
  { year: "2021", event: "Pan-India Delivery", description: "Expanded to serve pet parents across all major cities" },
  { year: "2022", event: "Premium Brand Partnerships", description: "Partnered with top international pet brands" },
  { year: "2023", event: "50K Pet Families", description: "Became India's trusted pet care companion" },
  { year: "2024", event: "Sustainability Initiative", description: "Launched eco-friendly packaging and carbon-neutral delivery" }
]

const values = [
  {
    icon: Heart,
    title: "Pet-First Approach",
    description: "Every decision we make prioritizes the health and happiness of pets",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "100% authentic products with rigorous quality testing",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Eco-friendly packaging and carbon-neutral delivery options",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "Building a supportive community of pet parents across India",
    color: "from-purple-500 to-purple-600"
  }
]

const achievements = [
  { icon: Award, label: "Best Pet Store 2023", value: "Winner", color: "text-yellow-600" },
  { icon: Star, label: "Customer Rating", value: "4.9/5", color: "text-orange-600" },
  { icon: Users, label: "Happy Pet Families", value: "50K+", color: "text-blue-600" },
  { icon: Globe, label: "Cities Served", value: "100+", color: "text-green-600" },
]

const team = [
  {
    name: "Arjun Sharma",
    role: "Founder & CEO",
    description: "Pet lover with 15 years in e-commerce",
    image: "professional founder pet industry"
  },
  {
    name: "Dr. Priya Patel",
    role: "Chief Veterinarian",
    description: "Expert in pet nutrition and health",
    image: "veterinarian professional female"
  },
  {
    name: "Rahul Kumar", 
    role: "Head of Operations",
    description: "Ensuring smooth delivery across India",
    image: "operations manager professional"
  }
]

export function AboutSection() {
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
            <h2 className="text-3xl font-bold text-gray-900">About Wild Whiskers</h2>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Target className="h-4 w-4 text-white" />
            </div>
          </motion.div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Born from a passion for pets and a commitment to their wellbeing, Wild Whiskers has been India's trusted companion in the journey of pet parenthood since 2019 🐾
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="bg-gradient-to-r from-primary to-orange-600 rounded-3xl p-8 md:p-12 text-white mb-16 relative overflow-hidden"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 text-6xl">🐕</div>
            <div className="absolute bottom-4 left-4 text-5xl">🐱</div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl">🐾</div>
          </div>
          
          <div className="relative z-10 text-center">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our Mission
            </motion.h3>
            <motion.p 
              className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              "To make pet care accessible, affordable, and delightful for every pet parent in India. We believe every pet deserves the best care, and every pet parent deserves the convenience of premium products delivered to their doorstep."
            </motion.p>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-orange-100 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-sm">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          className="mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Journey</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-primary/20 h-full"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} md:w-1/2`}>
                    <Card className="bg-white/90 backdrop-blur-sm border border-orange-200/50 shadow-lg">
                      <CardContent className="p-6">
                        <Badge className="bg-primary text-white mb-2">{milestone.year}</Badge>
                        <h4 className="font-bold text-lg text-gray-900 mb-2">{milestone.event}</h4>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-orange-200/50 shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md`}>
                  <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                </div>
                <h4 className="font-bold text-lg text-primary">{achievement.value}</h4>
                <p className="text-sm text-muted-foreground">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-2 border-orange-100 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-sm">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="relative mb-4">
                        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-primary to-orange-600">
                          <ImageWithFallback 
                            src={`https://source.unsplash.com/200x200/?${member.image}`}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <h4 className="font-bold text-lg text-gray-900 mb-1">{member.name}</h4>
                      <Badge className="bg-primary/10 text-primary mb-3">{member.role}</Badge>
                      <p className="text-muted-foreground text-sm">{member.description}</p>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-primary to-orange-600 rounded-3xl p-8 text-white"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Join Our Mission 🚀
          </motion.h3>
          <motion.p 
            className="text-lg mb-6 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Be part of our journey to make pet care accessible to every pet parent in India. Together, we can create a world where every pet lives their happiest, healthiest life.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                className="bg-white text-primary hover:bg-gray-100 px-6 py-3 font-semibold"
              >
                🛍️ Start Shopping
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-3 font-semibold"
              >
                📞 Contact Us
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}