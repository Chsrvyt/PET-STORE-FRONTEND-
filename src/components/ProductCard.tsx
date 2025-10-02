import { Heart, Star, Plus, Minus, ShoppingCart, Zap } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { motion } from 'motion/react'
import { useShopping, type Product } from '../contexts/ShoppingContext'
import { useState } from 'react'
import { toast } from 'sonner@2.0.3'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { toggleWishlist, isInWishlist, addToCart } = useShopping();
  const isWishlistedState = isInWishlist(product.id);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
  const [showOptions, setShowOptions] = useState(false);
  
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`Added ${quantity} ${product.name} to cart!`);
    setShowOptions(false);
  };

  const handleQuickBuy = () => {
    handleAddToCart();
    toast.success('Quick buy successful! Check your cart.');
  };

  return (
    <motion.div 
      className="group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div 
        className="relative overflow-hidden rounded-2xl border-2 border-orange-100 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Wishlist button */}
        <motion.div
          className="absolute top-3 right-3 z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button 
            variant="ghost" 
            size="icon"
            className="bg-white/90 hover:bg-white h-8 w-8 rounded-full shadow-sm"
            onClick={() => toggleWishlist(product)}
          >
            <motion.div
              animate={isWishlistedState ? { 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              } : {}}
              transition={{ duration: 0.5 }}
            >
              <Heart className={`h-4 w-4 ${isWishlistedState ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
            </motion.div>
          </Button>
        </motion.div>

        {/* Discount badge */}
        {discountPercentage > 0 && (
          <motion.div
            className="absolute top-3 left-3 z-10"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
            >
              <Badge className="bg-primary text-white rounded-full">
                {discountPercentage}% OFF
              </Badge>
            </motion.div>
          </motion.div>
        )}

        {/* Product image */}
        <div className="aspect-square overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50 relative">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <ImageWithFallback 
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Floating sparkle animation */}
          <motion.div
            className="absolute top-4 left-4 text-yellow-400 opacity-0 group-hover:opacity-100"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0]
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

        {/* Product info */}
        <motion.div 
          className="p-4 space-y-3"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div>
            <motion.p 
              className="text-sm text-primary font-medium"
              whileHover={{ scale: 1.05 }}
            >
              {product.brand}
            </motion.p>
            <h3 className="font-semibold line-clamp-2 text-gray-900">{product.name}</h3>
          </div>

          {/* Rating */}
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <motion.div 
              className="flex items-center space-x-1 bg-green-50 px-2 py-1 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
              >
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              </motion.div>
              <span className="text-sm font-medium text-green-700">{product.rating}</span>
            </motion.div>
            <span className="text-sm text-muted-foreground">({product.reviews})</span>
          </motion.div>

          {/* Price */}
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <motion.span 
              className="font-bold text-lg text-primary"
              whileHover={{ scale: 1.05 }}
            >
              ₹{product.price}
            </motion.span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
            )}
          </motion.div>
        </motion.div>

        {/* Hover overlay with enhanced options */}
        <motion.div 
          className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center rounded-2xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          {!showOptions ? (
            <motion.div
              className="flex flex-col items-center space-y-3"
              initial={{ scale: 0, y: 20 }}
              whileHover={{ scale: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button 
                  className="bg-primary text-white hover:bg-orange-700 shadow-lg rounded-full px-6"
                  onClick={() => setShowOptions(true)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </motion.div>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="secondary"
                  className="bg-white/90 text-primary hover:bg-white shadow-lg rounded-full px-6"
                  onClick={handleQuickBuy}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Quick Buy
                </Button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border max-w-xs w-full mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                {/* Size selection if available */}
                {product.sizes && product.sizes.length > 0 && (
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Size</label>
                    <Select value={selectedSize} onValueChange={setSelectedSize}>
                      <SelectTrigger className="w-full h-8">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        {product.sizes.map(size => (
                          <SelectItem key={size} value={size}>{size}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Quantity selection */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Quantity</label>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="font-medium text-lg px-3">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setQuantity(Math.min(10, quantity + 1))}
                      disabled={quantity >= 10}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex space-x-2">
                  <Button
                    className="flex-1 bg-primary text-white hover:bg-orange-700 h-8"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 h-8"
                    onClick={() => setShowOptions(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}