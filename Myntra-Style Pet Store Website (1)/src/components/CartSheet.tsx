import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';
import { useShopping } from '../contexts/ShoppingContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CartSheetProps {
  children: React.ReactNode;
}

export function CartSheet({ children }: CartSheetProps) {
  const { 
    cart, 
    updateCartQuantity, 
    removeFromCart, 
    getCartTotal, 
    getCartCount, 
    clearCart 
  } = useShopping();

  const total = getCartTotal();
  const itemCount = getCartCount();

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center space-x-2">
            <ShoppingBag className="h-5 w-5" />
            <span>Shopping Cart</span>
            {itemCount > 0 && (
              <Badge variant="secondary">{itemCount} items</Badge>
            )}
          </SheetTitle>
          <SheetDescription>
            Review your items and proceed to checkout when ready.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col h-full mt-6">
          {cart.length === 0 ? (
            <motion.div 
              className="flex-1 flex flex-col items-center justify-center text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">Your cart is empty</h3>
                <p className="text-sm text-muted-foreground">Add some products to get started!</p>
              </div>
            </motion.div>
          ) : (
            <>
              <div className="flex-1 overflow-auto space-y-4">
                {cart.map((item, index) => (
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
                    </div>

                    <div className="flex flex-col items-end space-y-2">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Subtotal:</span>
                  <span className="font-bold text-lg text-primary">₹{total.toLocaleString()}</span>
                </div>
                
                <div className="space-y-2">
                  <Button className="w-full" size="lg">
                    Proceed to Checkout 🛒
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
                
                <div className="text-xs text-muted-foreground text-center">
                  🚚 Free delivery on orders above ₹999
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}