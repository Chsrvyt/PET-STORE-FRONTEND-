import React from 'react'
import { motion } from 'motion/react'
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail,
  Clock,
  Shield,
  Truck,
  Heart,
  Star,
  CheckCircle,
  Search,
  Users
} from 'lucide-react'

const faqCategories = [
  { id: 'shipping', name: 'Shipping & Delivery', icon: Truck, count: 8 },
  { id: 'orders', name: 'Orders & Payment', icon: CheckCircle, count: 12 },
  { id: 'products', name: 'Products & Quality', icon: Star, count: 10 },
  { id: 'returns', name: 'Returns & Refunds', icon: Shield, count: 6 },
  { id: 'account', name: 'Account & Services', icon: Users, count: 7 },
  { id: 'pets', name: 'Pet Care', icon: Heart, count: 15 }
]

const faqs = [
  {
    id: 1,
    category: 'shipping',
    question: "What are your delivery options and charges?",
    answer: "We offer multiple delivery options: Standard delivery (2-5 business days) is FREE on orders above ₹999. Express delivery (1-2 business days) costs ₹99. Same-day delivery is available in metro cities for ₹149. We deliver across 100+ cities in India.",
    popular: true
  },
  {
    id: 2,
    category: 'shipping',
    question: "Do you deliver to remote areas?",
    answer: "Yes, we deliver to most pin codes across India. However, delivery to remote areas might take 3-7 business days. You can check delivery availability by entering your pin code at checkout.",
    popular: false
  },
  {
    id: 3,
    category: 'orders',
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods including Credit/Debit cards, Net Banking, UPI, Digital Wallets (Paytm, PhonePe, GPay), and Cash on Delivery (COD) for eligible orders.",
    popular: true
  },
  {
    id: 4,
    category: 'orders',
    question: "Can I modify or cancel my order?",
    answer: "You can modify or cancel your order within 1 hour of placing it by contacting our customer support. After that, we cannot guarantee changes as your order might have been processed for shipping.",
    popular: false
  },
  {
    id: 5,
    category: 'products',
    question: "Are all products authentic and safe for pets?",
    answer: "Absolutely! We source all products directly from authorized distributors and brands. Every product undergoes quality checks, and we only sell items that are certified safe for pets. We provide authenticity guarantees on all branded items.",
    popular: true
  },
  {
    id: 6,
    category: 'products',
    question: "Do you offer product recommendations for specific pet breeds?",
    answer: "Yes! Our expert team provides personalized recommendations based on your pet's breed, age, size, and specific needs. You can chat with our pet care experts or use our breed-specific product filters.",
    popular: true
  },
  {
    id: 7,
    category: 'returns',
    question: "What is your return and refund policy?",
    answer: "We offer a 30-day return policy for most products. Items must be unused, in original packaging. Perishable items like food have a 7-day return window. Refunds are processed within 5-7 business days after we receive the returned item.",
    popular: true
  },
  {
    id: 8,
    category: 'returns',
    question: "How do I return a product?",
    answer: "Simply contact our customer support within the return window. We'll arrange a free pickup from your address and provide you with a return authorization number. Pack the item securely in its original packaging.",
    popular: false
  },
  {
    id: 9,
    category: 'account',
    question: "How do subscription plans work?",
    answer: "Our subscription plans let you automate repeat purchases of essential items. Choose your delivery frequency (weekly, monthly, quarterly), get 10% off on all subscribed items, and enjoy priority delivery. You can pause, modify, or cancel anytime.",
    popular: true
  },
  {
    id: 10,
    category: 'account',
    question: "What services do you offer besides products?",
    answer: "We offer vet consultations, professional grooming, pet boarding, training classes, and emergency care services. These services are available in select cities with certified professionals.",
    popular: false
  },
  {
    id: 11,
    category: 'pets',
    question: "How do I choose the right food for my pet?",
    answer: "Consider your pet's age, breed, size, activity level, and any health conditions. Our pet nutrition experts can provide personalized recommendations. Look for AAFCO-certified foods and consult your vet for specific dietary needs.",
    popular: true
  },
  {
    id: 12,
    category: 'pets',
    question: "What should I do in a pet emergency?",
    answer: "Contact your nearest emergency vet clinic immediately. Our 24/7 vet consultation service can provide immediate guidance. Keep our emergency helpline number handy: 1800-PET-HELP. For poisoning, contact the pet poison control center.",
    popular: true
  }
]

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team",
    availability: "24/7 Available",
    action: "Start Chat",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Phone,
    title: "Call Support",
    description: "Speak to our experts",
    availability: "9 AM - 9 PM",
    action: "Call Now",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us your questions",
    availability: "24-48 hour response",
    action: "Send Email",
    color: "from-purple-500 to-purple-600"
  }
]

export function FAQSection() {
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
              <HelpCircle className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <MessageCircle className="h-4 w-4 text-white" />
            </div>
          </motion.div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Got questions? We've got answers! Find quick solutions to common questions about our products, services, and policies 🤔💡
          </p>
        </motion.div>

        {/* Quick Support Options */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="border-2 border-orange-100 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${option.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <option.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{option.description}</p>
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {option.availability}
                  </Badge>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      size="sm" 
                      className="w-full bg-primary hover:bg-orange-700 text-white"
                    >
                      {option.action}
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {faqCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge 
                className="bg-white hover:bg-primary/5 text-gray-700 border-2 border-orange-200 hover:border-primary/30 cursor-pointer px-4 py-2 font-medium text-sm transition-all duration-200"
              >
                <category.icon className="h-3 w-3 mr-1" />
                {category.name} ({category.count})
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Main FAQ Content */}
        <div className="max-w-4xl mx-auto">
          {/* Popular Questions */}
          <motion.div
            className="mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Star className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold text-gray-900">Most Popular Questions</h3>
            </div>
            
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-orange-200/50 shadow-lg">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.filter(faq => faq.popular).map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <AccordionItem value={`popular-${faq.id}`} className="border-orange-100">
                        <AccordionTrigger className="text-left hover:text-primary transition-colors font-semibold text-gray-900">
                          <div className="flex items-center space-x-2">
                            <Badge className="bg-red-100 text-red-800 text-xs">Popular</Badge>
                            <span>{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>

          {/* All Questions by Category */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <HelpCircle className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold text-gray-900">All Questions</h3>
            </div>
            
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-orange-200/50 shadow-lg">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <AccordionItem value={`faq-${faq.id}`} className="border-orange-100">
                        <AccordionTrigger className="text-left hover:text-primary transition-colors font-medium text-gray-900">
                          <div className="flex items-center space-x-2">
                            {faqCategories.find(cat => cat.id === faq.category)?.icon && (
                              <div className="w-4 h-4 text-primary">
                                {React.createElement(faqCategories.find(cat => cat.id === faq.category)!.icon, { className: "h-4 w-4" })}
                              </div>
                            )}
                            <span>{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          className="text-center mt-16 bg-gradient-to-r from-primary to-orange-600 rounded-3xl p-8 text-white"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div
            className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          >
            <MessageCircle className="h-8 w-8 text-white" />
          </motion.div>
          
          <motion.h3 
            className="text-2xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Still Have Questions? 🤔
          </motion.h3>
          
          <motion.p 
            className="text-lg mb-6 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Our pet care experts are here to help! Get personalized assistance for your specific questions and concerns.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 font-semibold"
              >
                💬 Chat with Expert
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
                📞 Schedule Call
              </Button>
            </motion.div>
          </div>
          
          <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-white/80">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4" />
              <span>Expert Advice</span>
            </div>
            <div className="flex items-center space-x-1">
              <Shield className="h-4 w-4" />
              <span>Quick Response</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}