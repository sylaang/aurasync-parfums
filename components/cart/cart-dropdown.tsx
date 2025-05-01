"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, X, Trash2 } from 'lucide-react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useCart } from './cart-context';
import { formatPrice } from '@/lib/utils';

interface CartDropdownProps {
  count: number;
}

export default function CartDropdown({ count }: CartDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Ouvrir le panier">
          <ShoppingBag className="h-5 w-5" />
          {count > 0 && (
            <Badge 
              variant="default" 
              className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center rounded-full text-[10px]"
            >
              {count}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="sm:max-w-md w-full">
      <SheetTitle>
        Votre panier ({count} {count <= 1 ? "article" : "articles"})
      </SheetTitle>
        
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="font-medium text-lg mb-1">Votre panier est vide</h3>
            <p className="text-muted-foreground text-sm text-center mb-8">
              Il semble que vous n'ayez pas encore ajouté de parfums à votre panier.
            </p>
            <Button onClick={() => setIsOpen(false)} asChild>
              <Link href="/shop">Poursuivre les achats</Link>
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="h-[calc(100vh-260px)] my-4">
              <div className="space-y-4 pr-4">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4">
                    <div className="relative h-20 w-20 rounded-md overflow-hidden bg-muted">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <p className="text-muted-foreground text-xs">{item.brand}</p>
                          <p className="text-xs mt-1">Taille : {item.size}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                          aria-label="Supprimer l'article"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center border rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="px-2 py-1 text-xs disabled:opacity-50"
                            aria-label="Diminuer la quantité"
                          >
                            -
                          </button>
                          <span className="px-2 py-1 text-xs">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 text-xs"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <p className="font-medium text-sm">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="space-y-4">
              <Separator />
              
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sous-total</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Expédition</span>
                  <span>Calculé à la caisse</span>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              
              <div className="grid gap-2">
                <Button asChild onClick={() => setIsOpen(false)}>
                  <Link href="/checkout">Passer à la caisse</Link>
                </Button>
                <Button variant="outline" onClick={() => setIsOpen(false)} asChild>
                  <Link href="/shop">Poursuivre les achats</Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}