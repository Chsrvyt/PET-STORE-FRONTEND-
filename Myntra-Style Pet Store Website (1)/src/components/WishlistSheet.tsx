import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useShopping } from '../contexts/ShoppingContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface WishlistSheetProps {
  children: React.ReactNode;
}

export function WishlistSheet({ children }: WishlistSheetProps) {
  const { 
    wishlist, 
    removeFromWishlist, 
    addToCart, 
    getWishlistCount,
    isInCart 
  } = useShopping();

  const wishlistCount = getWishlistCount();

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center space-x-2">
            <Heart className="h-5 w-5" />
            <span>Wishlist</span>
            {wishlistCount > 0 && (
              <Badge variant="secondary">{wishlistCount} items</Badge>
            )}
          </SheetTitle>
          <SheetDescription>
            Your favorite products saved for later.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col h-full mt-6">
          {wishlist.length === 0 ? (
            <motion.div 
              className="flex-1 flex flex-col items-center justify-center text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                <Heart className="h-12 w-12 text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">Your wishlist is empty</h3>
                <p className="text-sm text-muted-foreground">Save products you love to view them later!</p>
              </div>
            </motion.div>
          ) : (
            <div className="flex-1 overflow-auto space-y-4">
              {wishlist.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="flex items-center space-x-4 p-4 border rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.brand}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="font-semibold text-primary">₹{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-xs text-muted-foreground line-through">
                          ₹{item.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-1 mt-2">
                      <div className="flex items-center space-x-1 bg-green-50 px-2 py-1 rounded-full">
                        <span className="text-yellow-400 text-xs">⭐</span>
                        <span className="text-xs font-medium text-green-700">{item.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">({item.reviews})</span>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Button
                      variant={isInCart(item.id) ? "secondary" : "default"}
                      size="sm"
                      className="whitespace-nowrap"
                      onClick={() => addToCart(item)}
                      disabled={isInCart(item.id)}
                    >
                      {isInCart(item.id) ? (
                        <>✓ In Cart</>
                      ) : (
                        <>
                          <ShoppingCart className="h-3 w-3 mr-1" />
                          Add to Cart
                        </>
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}