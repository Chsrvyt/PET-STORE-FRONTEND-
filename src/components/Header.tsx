import { Search, Heart, ShoppingBag, User, Menu, Phone, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { CartSheet } from './CartSheet'
import { WishlistSheet } from './WishlistSheet'
import { motion } from 'motion/react'
import { scrollToSection } from '../utils/navigation'
import { useShopping } from '../contexts/ShoppingContext'
import logoImage from 'figma:asset/edb7f69a0f136ed359612f2992a709c557ecb2e7.png'

export function Header() {
  const { getCartCount, getWishlistCount } = useShopping();
  const cartCount = getCartCount();
  const wishlistCount = getWishlistCount();

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50 shadow-sm">
      {/* Top notification bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm">
        🐾 Free delivery on orders above ₹999 | Use code: PAWFREE 🐾
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <motion.div 
              className="flex items-center justify-center cursor-pointer"
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={logoImage} 
                alt="Wild Whiskers"
                className="h-24 w-auto object-contain"
              />
            </motion.div>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-6">
            <motion.button 
              onClick={() => scrollToSection('categories')}
              className="hover:text-primary transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('deals')}
              className="hover:text-primary transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Deals
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('petcare')}
              className="hover:text-primary transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Pet Care
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('services')}
              className="hover:text-primary transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Services
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('blog')}
              className="hover:text-primary transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Blog
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('about')}
              className="hover:text-primary transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-primary transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </nav>

          {/* Search bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search for pet products, brands..." 
                className="pl-10 bg-secondary border-2 border-transparent focus:border-primary rounded-full"
              />
            </div>
          </div>

          {/* Local Support Box */}
          <motion.div 
            className="hidden lg:flex items-center bg-gradient-to-r from-primary to-amber-500 text-primary-foreground px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mr-4 cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              window.open('tel:+911234567890', '_self');
            }}
          >
            <div className="flex items-center space-x-2">
              <motion.div 
                className="flex items-center justify-center bg-white/20 rounded-full p-1"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Phone className="h-4 w-4" />
              </motion.div>
              <div className="flex flex-col leading-tight">
                <span className="text-xs opacity-90">Local Support</span>
                <span className="text-sm font-semibold">24/7 Help</span>
              </div>
            </div>
          </motion.div>

          {/* Action buttons */}
          <div className="flex items-center space-x-4">
            <WishlistSheet>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative hover:bg-secondary rounded-full"
                >
                  <Heart className="h-5 w-5" />
                  {wishlistCount > 0 && (
                    <motion.span 
                      className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {wishlistCount}
                    </motion.span>
                  )}
                </Button>
              </motion.div>
            </WishlistSheet>
            
            <CartSheet>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative hover:bg-secondary rounded-full"
                >
                  <ShoppingBag className="h-5 w-5" />
                  {cartCount > 0 && (
                    <motion.span 
                      className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </Button>
              </motion.div>
            </CartSheet>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-secondary rounded-full"
                onClick={() => {
                  console.log('User profile clicked');
                  // Add user profile functionality here
                }}
              >
                <User className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search for pet products..." 
              className="pl-10 bg-secondary border-2 border-transparent focus:border-primary rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  )
}