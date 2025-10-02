import { motion } from 'motion/react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Heart, Clock, Users, BookOpen, Star, ChevronRight } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { unsplash_tool } from '../utils/unsplash'

const petCareData = [
  {
    id: 1,
    title: "Complete Puppy Training Guide",
    description: "Essential tips for training your new puppy, from basic commands to house training.",
    category: "Training",
    readTime: "8 min read",
    difficulty: "Beginner",
    image: "dog training puppy",
    tips: ["Start with basic commands", "Use positive reinforcement", "Be consistent with schedule"]
  },
  {
    id: 2,
    title: "Cat Nutrition Essentials",
    description: "Understanding your cat's dietary needs at every life stage for optimal health.",
    category: "Nutrition",
    readTime: "6 min read",
    difficulty: "Intermediate",
    image: "cat eating healthy food",
    tips: ["Choose age-appropriate food", "Monitor portion sizes", "Provide fresh water daily"]
  },
  {
    id: 3,
    title: "Grooming Your Pet at Home",
    description: "Professional grooming techniques you can do at home to keep your pet healthy.",
    category: "Grooming",
    readTime: "10 min read",
    difficulty: "Beginner",
    image: "pet grooming brushing",
    tips: ["Brush regularly", "Trim nails carefully", "Check ears weekly"]
  },
  {
    id: 4,
    title: "Senior Pet Care Guide",
    description: "Special care considerations for aging pets to ensure their comfort and health.",
    category: "Health",
    readTime: "12 min read",
    difficulty: "Advanced",
    image: "senior dog care",
    tips: ["Regular vet checkups", "Comfortable bedding", "Gentle exercise routine"]
  },
  {
    id: 5,
    title: "Indoor Exercise for Cats",
    description: "Creative ways to keep your indoor cat active and mentally stimulated.",
    category: "Exercise",
    readTime: "5 min read",
    difficulty: "Beginner",
    image: "cat playing indoor toys",
    tips: ["Interactive toys", "Climbing structures", "Rotating toy selection"]
  },
  {
    id: 6,
    title: "Pet Emergency First Aid",
    description: "Essential first aid knowledge every pet parent should know for emergencies.",
    category: "Emergency",
    readTime: "15 min read",
    difficulty: "Advanced",
    image: "pet first aid kit",
    tips: ["Know emergency contacts", "Basic wound care", "Recognition of symptoms"]
  }
]

export function PetCareGuide() {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
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
              <Heart className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Pet Care Guide</h2>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <BookOpen className="h-4 w-4 text-white" />
            </div>
          </motion.div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert tips and guides to help you provide the best care for your beloved pets 🐾
          </p>
        </motion.div>

        {/* Featured Stat Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-orange-200/50 shadow-lg"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold text-2xl text-primary">50K+</h3>
            <p className="text-muted-foreground">Pet Parents Helped</p>
          </motion.div>

          <motion.div
            className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-orange-200/50 shadow-lg"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold text-2xl text-green-600">200+</h3>
            <p className="text-muted-foreground">Care Guides</p>
          </motion.div>

          <motion.div
            className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-orange-200/50 shadow-lg"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold text-2xl text-yellow-600">4.9/5</h3>
            <p className="text-muted-foreground">Guide Rating</p>
          </motion.div>
        </motion.div>

        {/* Care Guide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {petCareData.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer h-full border-2 border-orange-100 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-t-xl aspect-video bg-gradient-to-br from-orange-50 to-amber-50">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ImageWithFallback 
                        src={`https://source.unsplash.com/400x240/?${guide.image}`}
                        alt={guide.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    {/* Category badge */}
                    <motion.div
                      className="absolute top-3 left-3"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Badge className="bg-primary text-white">
                        {guide.category}
                      </Badge>
                    </motion.div>

                    {/* Difficulty badge */}
                    <motion.div
                      className="absolute top-3 right-3"
                      initial={{ scale: 0, rotate: 180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <Badge variant="secondary" className="bg-white/90 text-gray-700">
                        {guide.difficulty}
                      </Badge>
                    </motion.div>

                    {/* Sparkle animation */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 text-yellow-400 opacity-0 group-hover:opacity-100 text-2xl"
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
                      {/* Read time */}
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{guide.readTime}</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">
                        {guide.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {guide.description}
                      </p>

                      {/* Key Tips */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-gray-800">Key Tips:</h4>
                        <ul className="space-y-1">
                          {guide.tips.map((tip, tipIndex) => (
                            <motion.li 
                              key={tipIndex}
                              className="text-sm text-muted-foreground flex items-start space-x-2"
                              initial={{ x: -10, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: tipIndex * 0.1 }}
                            >
                              <span className="text-primary mt-1">•</span>
                              <span>{tip}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Read More Button */}
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button 
                          variant="ghost" 
                          className="group/btn text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto"
                        >
                          Read Full Guide
                          <ChevronRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
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
          className="text-center mt-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-orange-700 text-white shadow-lg px-8 py-3"
            >
              📚 View All Pet Care Guides
            </Button>
          </motion.div>
          <p className="text-sm text-muted-foreground mt-3">
            Join our community of 50,000+ pet parents learning together 🐕‍🦺
          </p>
        </motion.div>
      </div>
    </section>
  )
}