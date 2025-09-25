import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Separator } from './ui/separator'
import { motion } from 'motion/react'
import { scrollToSection } from '../utils/navigation'

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-orange-50 to-amber-50 border-t-2 border-primary/20">
      {/* Newsletter subscription */}
      <div className="bg-gradient-to-r from-primary to-orange-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                <span className="text-2xl">📧</span>
                <h3 className="text-xl font-bold">Stay Connected with Wild Whiskers</h3>
              </div>
              <p className="opacity-90">Get pawsome deals and pet care tips delivered to your inbox 🐾</p>
            </div>
            <div className="flex space-x-2 w-full md:w-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white text-black border-0 w-full md:w-80 rounded-full"
              />
              <Button 
                variant="secondary" 
                className="whitespace-nowrap bg-white text-primary hover:bg-orange-100 rounded-full"
                onClick={() => {
                  const emailInput = document.querySelector('input[placeholder="Enter your email"]') as HTMLInputElement;
                  if (emailInput && emailInput.value) {
                    console.log(`Subscribed email: ${emailInput.value}`);
                    emailInput.value = '';
                    // Add subscription functionality here
                  }
                }}
              >
                Subscribe 📬
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 bg-gradient-to-br from-primary via-orange-600 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                <div className="text-white font-bold text-xl tracking-tighter">
                  W<span className="text-amber-200">W</span>
                </div>
                {/* Whiskers decoration */}
                <div className="absolute -left-1 top-1/2 w-3 h-0.5 bg-white/60 rounded-full transform -translate-y-1 -rotate-12"></div>
                <div className="absolute -left-1 top-1/2 w-2 h-0.5 bg-white/40 rounded-full transform translate-y-1 rotate-12"></div>
                <div className="absolute -right-1 top-1/2 w-3 h-0.5 bg-white/60 rounded-full transform -translate-y-1 rotate-12"></div>
                <div className="absolute -right-1 top-1/2 w-2 h-0.5 bg-white/40 rounded-full transform translate-y-1 -rotate-12"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Wild Whiskers</h3>
                <p className="text-xs text-muted-foreground">Adventure & Care</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Your trusted partner in pet care. Providing quality products and expert advice for happy, healthy pets since 2020. 🐕❤️🐱
            </p>
            <div className="flex space-x-3">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full border-primary/30 hover:bg-primary hover:text-white"
                  onClick={() => window.open('https://facebook.com/wildwhiskers', '_blank')}
                >
                  <Facebook className="h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full border-primary/30 hover:bg-primary hover:text-white"
                  onClick={() => window.open('https://twitter.com/wildwhiskers', '_blank')}
                >
                  <Twitter className="h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full border-primary/30 hover:bg-primary hover:text-white"
                  onClick={() => window.open('https://instagram.com/wildwhiskers', '_blank')}
                >
                  <Instagram className="h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full border-primary/30 hover:bg-primary hover:text-white"
                  onClick={() => window.open('https://youtube.com/wildwhiskers', '_blank')}
                >
                  <Youtube className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-bold text-primary">🔗 Quick Links</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors flex items-center space-x-2 text-left"><span>ℹ️</span><span>About Us</span></button></li>
              <li><button onClick={() => scrollToSection('categories')} className="hover:text-primary transition-colors flex items-center space-x-2 text-left"><span>📖</span><span>Pet Care Guide</span></button></li>
              <li><button onClick={() => window.open('https://maps.google.com/?q=pet+stores+near+me', '_blank')} className="hover:text-primary transition-colors flex items-center space-x-2 text-left"><span>📍</span><span>Store Locator</span></button></li>
              <li><button onClick={() => console.log('Vet consultation clicked')} className="hover:text-primary transition-colors flex items-center space-x-2 text-left"><span>🩺</span><span>Vet Consultation</span></button></li>
              <li><button onClick={() => console.log('Pet insurance clicked')} className="hover:text-primary transition-colors flex items-center space-x-2 text-left"><span>🛡️</span><span>Pet Insurance</span></button></li>
              <li><button onClick={() => console.log('Careers clicked')} className="hover:text-primary transition-colors flex items-center space-x-2 text-left"><span>💼</span><span>Careers</span></button></li>
            </ul>
          </div>

          {/* Customer service */}
          <div className="space-y-4">
            <h4 className="font-bold text-primary">🛎️ Customer Service</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors flex items-center space-x-2 text-left"><span>📞</span><span>Contact Us</span></button></li>
              <li><button onClick={() => console.log('FAQ clicked')} className="hover:text-primary transition-colors flex items-center space-x-2 text-left"><span>❓</span><span>FAQ</span></button></li>
              <li><button onClick={() => console.log('Shipping info clicked')} className="hover:text-primary transition-colors flex items-center space-x-2 text-left"><span>🚚</span><span>Shipping Info</span></button></li>
              <li><button onClick={() => console.log('Returns clicked')} className="hover:text-primary transition-colors flex items-center space-x-2 text-left"><span>↩️</span><span>Returns & Exchange</span></button></li>
              <li><button onClick={() => console.log('Track order clicked')} className="hover:text-primary transition-colors flex items-center space-x-2 text-left"><span>📦</span><span>Track Your Order</span></button></li>
              <li><button onClick={() => console.log('Size guide clicked')} className="hover:text-primary transition-colors flex items-center space-x-2 text-left"><span>📏</span><span>Size Guide</span></button></li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="font-bold text-primary">📱 Get in Touch</h4>
            <div className="space-y-3 text-muted-foreground">
              <motion.div 
                className="flex items-center space-x-3 p-2 bg-white rounded-lg cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('tel:+911800123456', '_self')}
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>1800-123-4567</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 p-2 bg-white rounded-lg cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('mailto:support@wildwhiskers.com', '_self')}
              >
                <Mail className="h-4 w-4 text-primary" />
                <span>support@wildwhiskers.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 p-2 bg-white rounded-lg cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://maps.google.com/?q=Mumbai,+Maharashtra,+India', '_blank')}
              >
                <MapPin className="h-4 w-4 text-primary" />
                <span>Mumbai, Maharashtra, India</span>
              </motion.div>
            </div>
            <div className="bg-gradient-to-r from-primary/10 to-orange-100 rounded-2xl p-4 border-2 border-primary/20">
              <p className="font-bold text-primary mb-1">🕐 24/7 Pet Support</p>
              <p className="text-xs text-muted-foreground">We're here to help you and your pets anytime, day or night! 🌙⭐</p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="border-primary/20" />

      {/* Bottom footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
            <span>© 2024 Wild Whiskers. All rights reserved. Made with 🐾 for pet lovers</span>
            <div className="flex space-x-4">
              <button onClick={() => console.log('Privacy policy clicked')} className="hover:text-primary transition-colors">Privacy Policy</button>
              <button onClick={() => console.log('Terms clicked')} className="hover:text-primary transition-colors">Terms of Service</button>
              <button onClick={() => console.log('Cookie policy clicked')} className="hover:text-primary transition-colors">Cookie Policy</button>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>💳 We accept:</span>
            <div className="flex space-x-2">
              <div className="bg-white rounded-lg px-3 py-2 text-xs font-medium text-primary border-2 border-primary/20">VISA</div>
              <div className="bg-white rounded-lg px-3 py-2 text-xs font-medium text-primary border-2 border-primary/20">MC</div>
              <div className="bg-white rounded-lg px-3 py-2 text-xs font-medium text-primary border-2 border-primary/20">UPI</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}