import { motion } from 'motion/react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  Heart, 
  Share2,
  ArrowRight,
  TrendingUp,
  Star,
  Eye,
  ThumbsUp,
  MessageCircle
} from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for First-Time Dog Owners",
    excerpt: "Everything you need to know about bringing your first puppy home, from preparation to training basics.",
    category: "Pet Care",
    author: "Dr. Priya Sharma",
    date: "Dec 8, 2024",
    readTime: "5 min read",
    views: "12.5K",
    likes: "340",
    comments: "45",
    featured: true,
    image: "puppy first time owner training",
    tags: ["Dogs", "Training", "Beginner"],
    trending: true
  },
  {
    id: 2,
    title: "Cat Nutrition: A Complete Guide to Feeding Your Feline",
    excerpt: "Understanding your cat's nutritional needs, from kitten to senior, with expert-recommended diet plans.",
    category: "Nutrition",
    author: "Dr. Rahul Patel",
    date: "Dec 6, 2024",
    readTime: "8 min read",
    views: "9.2K",
    likes: "275",
    comments: "32",
    featured: false,
    image: "cat nutrition healthy feeding",
    tags: ["Cats", "Nutrition", "Health"]
  },
  {
    id: 3,
    title: "Winter Pet Care: Keeping Your Pets Warm and Safe",
    excerpt: "Essential winter care tips to protect your pets from cold weather and seasonal health issues.",
    category: "Seasonal Care",
    author: "Dr. Meera Reddy",
    date: "Dec 4, 2024",
    readTime: "6 min read",
    views: "8.7K",
    likes: "198",
    comments: "28",
    featured: false,
    image: "winter pet care warm clothing",
    tags: ["Winter", "Safety", "Health"]
  },
  {
    id: 4,
    title: "DIY Pet Toys: Fun and Safe Ideas for Your Pets",
    excerpt: "Creative and budget-friendly DIY toy ideas that will keep your pets entertained and mentally stimulated.",
    category: "DIY",
    author: "Arjun Kumar",
    date: "Dec 2, 2024",
    readTime: "4 min read",
    views: "15.3K",
    likes: "456",
    comments: "67",
    featured: true,
    image: "diy pet toys creative homemade",
    tags: ["DIY", "Toys", "Entertainment"],
    trending: true
  },
  {
    id: 5,
    title: "Understanding Pet Behavior: What Your Pet is Trying to Tell You",
    excerpt: "Decode your pet's body language and vocalizations to build a stronger bond and address behavioral issues.",
    category: "Behavior",
    author: "Dr. Vikram Singh",
    date: "Nov 30, 2024",
    readTime: "7 min read",
    views: "11.8K",
    likes: "312",
    comments: "54",
    featured: false,
    image: "pet behavior body language communication",
    tags: ["Behavior", "Training", "Communication"]
  },
  {
    id: 6,
    title: "Pet-Friendly Plants: Creating a Safe Garden for Your Pets",
    excerpt: "A comprehensive guide to pet-safe plants and creating a beautiful garden that won't harm your furry friends.",
    category: "Safety",
    author: "Priya Joshi",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    views: "7.4K",
    likes: "189",
    comments: "23",
    featured: false,
    image: "pet safe plants garden friendly",
    tags: ["Plants", "Safety", "Garden"]
  }
]

const categories = [
  { name: "Pet Care", count: 24, color: "bg-blue-100 text-blue-800" },
  { name: "Nutrition", count: 18, color: "bg-green-100 text-green-800" },
  { name: "Training", count: 15, color: "bg-purple-100 text-purple-800" },
  { name: "Health", count: 21, color: "bg-red-100 text-red-800" },
  { name: "DIY", count: 12, color: "bg-yellow-100 text-yellow-800" },
  { name: "Safety", count: 9, color: "bg-orange-100 text-orange-800" }
]

const blogStats = [
  { label: "Articles Published", value: "200+", icon: BookOpen, color: "from-blue-500 to-blue-600" },
  { label: "Expert Authors", value: "15+", icon: User, color: "from-green-500 to-green-600" },
  { label: "Monthly Readers", value: "50K+", icon: Eye, color: "from-purple-500 to-purple-600" },
  { label: "Community Engagement", value: "95%", icon: Heart, color: "from-red-500 to-red-600" }
]

export function BlogSection() {
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
              <BookOpen className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Pet Care Blog</h2>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Star className="h-4 w-4 text-white" />
            </div>
          </motion.div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Expert advice, tips, and insights from veterinarians and pet care professionals to help you give your pets the best life possible 📚🐾
          </p>
        </motion.div>

        {/* Blog Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {blogStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-orange-200/50 shadow-lg"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-xl text-primary">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge className={`${category.color} cursor-pointer px-4 py-2 font-medium text-sm hover:opacity-80 transition-opacity`}>
                {category.name} ({category.count})
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Articles & Regular Articles Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Articles Column */}
          <div className="lg:col-span-2 space-y-8">
            <motion.h3 
              className="text-xl font-bold text-gray-900 flex items-center space-x-2"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Featured Articles</span>
            </motion.h3>
            
            {/* Featured Posts */}
            <div className="space-y-6">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group cursor-pointer border-2 border-orange-100 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-white/90 backdrop-blur-sm overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="md:flex">
                        {/* Image */}
                        <div className="md:w-1/3 relative overflow-hidden">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                            className="h-48 md:h-full"
                          >
                            <ImageWithFallback 
                              src={`https://source.unsplash.com/400x300/?${post.image}`}
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                          
                          {/* Trending Badge */}
                          {post.trending && (
                            <motion.div
                              className="absolute top-3 left-3"
                              initial={{ scale: 0, rotate: -180 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            >
                              <Badge className="bg-red-500 text-white font-semibold">
                                🔥 Trending
                              </Badge>
                            </motion.div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="md:w-2/3">
                          <CardContent className="p-6">
                            <div className="space-y-4">
                              {/* Meta Info */}
                              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                                <Badge className="bg-primary/10 text-primary">{post.category}</Badge>
                                <div className="flex items-center space-x-1">
                                  <User className="h-3 w-3" />
                                  <span>{post.author}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-3 w-3" />
                                  <span>{post.date}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{post.readTime}</span>
                                </div>
                              </div>

                              {/* Title */}
                              <h3 className="font-bold text-xl text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                                {post.title}
                              </h3>

                              {/* Excerpt */}
                              <p className="text-muted-foreground leading-relaxed line-clamp-2">
                                {post.excerpt}
                              </p>

                              {/* Tags */}
                              <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag, tagIndex) => (
                                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>

                              {/* Engagement Stats */}
                              <div className="flex items-center justify-between pt-2">
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                  <div className="flex items-center space-x-1">
                                    <Eye className="h-3 w-3" />
                                    <span>{post.views}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <ThumbsUp className="h-3 w-3" />
                                    <span>{post.likes}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <MessageCircle className="h-3 w-3" />
                                    <span>{post.comments}</span>
                                  </div>
                                </div>
                                
                                <motion.div
                                  whileHover={{ x: 5 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10 p-0">
                                    Read More
                                    <ArrowRight className="h-3 w-3 ml-1" />
                                  </Button>
                                </motion.div>
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Regular Articles Sidebar */}
          <div className="space-y-8">
            <motion.h3 
              className="text-xl font-bold text-gray-900 flex items-center space-x-2"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <BookOpen className="h-5 w-5 text-primary" />
              <span>Recent Articles</span>
            </motion.h3>

            {/* Regular Posts */}
            <div className="space-y-6">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group cursor-pointer border border-orange-100 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-sm">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Image */}
                      <div className="relative overflow-hidden rounded-t-xl aspect-video bg-gradient-to-br from-orange-50 to-amber-50">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                        >
                          <ImageWithFallback 
                            src={`https://source.unsplash.com/300x200/?${post.image}`}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        
                        {/* Category Badge */}
                        <motion.div
                          className="absolute top-3 left-3"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <Badge className="bg-primary text-white text-xs">
                            {post.category}
                          </Badge>
                        </motion.div>
                      </div>

                      <CardContent className="p-4">
                        <div className="space-y-3">
                          {/* Meta Info */}
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>{post.date}</span>
                            <span>{post.readTime}</span>
                          </div>

                          {/* Title */}
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                            {post.title}
                          </h4>

                          {/* Author */}
                          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                            <User className="h-3 w-3" />
                            <span>{post.author}</span>
                          </div>

                          {/* Engagement */}
                          <div className="flex items-center justify-between pt-1">
                            <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Eye className="h-3 w-3" />
                                <span>{post.views}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <ThumbsUp className="h-3 w-3" />
                                <span>{post.likes}</span>
                              </div>
                            </div>
                            
                            <motion.button
                              className="text-primary hover:text-orange-700 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Share2 className="h-3 w-3" />
                            </motion.button>
                          </div>
                        </div>
                      </CardContent>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 bg-gradient-to-r from-primary to-orange-600 rounded-3xl p-8 text-white"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Stay Updated with Pet Care Tips! 📖
          </motion.h3>
          <motion.p 
            className="text-lg mb-6 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Subscribe to our blog newsletter and get the latest expert advice, tips, and insights delivered straight to your inbox.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 font-semibold"
              >
                📧 Subscribe to Blog
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 font-semibold"
              >
                📚 View All Articles
              </Button>
            </motion.div>
          </div>
          <p className="text-sm text-white/80 mt-4">
            Join 15,000+ pet parents learning together • Weekly updates • Expert content
          </p>
        </motion.div>
      </div>
    </section>
  )
}