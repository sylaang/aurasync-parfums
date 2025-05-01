import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { CartItem } from '@/components/cart/cart-context';
import { formatPrice } from '@/lib/utils';

interface OrderSummaryProps {
  cartItems: CartItem[];
  cartTotal: number;
  onCheckout: () => void;
  isProcessing: boolean;
}

export default function OrderSummary({ 
  cartItems, 
  cartTotal, 
  onCheckout,
  isProcessing
}: OrderSummaryProps) {
  const shippingCost = cartTotal > 100 ? 0 : 10;
  const tax = cartTotal * 0.08; // 8% tax
  const total = cartTotal + shippingCost + tax;
  
  return (
    <div className="bg-muted p-6 rounded-md">
      <h2 className="text-xl font-semibold mb-4">Résumé de la commande</h2>
      
      <div className="space-y-4 mb-6">
        {cartItems.map((item) => (
          <div key={`${item.id}-${item.size}`} className="flex gap-4">
            <div className="relative h-16 w-16 rounded-md overflow-hidden bg-background">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h4 className="font-medium text-sm">{item.name}</h4>
              <p className="text-muted-foreground text-xs">{item.brand}</p>
              <div className="flex justify-between items-center mt-1">
                <p className="text-xs">
                  {item.size} x {item.quantity}
                </p>
                <p className="font-medium text-sm">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Separator className="mb-4" />
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Sous-total</span>
          <span>{formatPrice(cartTotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Expédition</span>
          <span>{shippingCost === 0 ? 'Gratuit' : formatPrice(shippingCost)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Taxe (8%)</span>
          <span>{formatPrice(tax)}</span>
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div className="flex justify-between font-semibold">
        <span>Total</span>
        <span>{formatPrice(total)}</span>
      </div>
      
      <Button 
        onClick={onCheckout} 
        className="w-full mt-6"
        disabled={isProcessing}
      >
        {isProcessing ? "Traitement..." : "Commande complète"}
      </Button>
      
      <p className="text-xs text-muted-foreground text-center mt-4">
      En effectuant votre achat, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
      </p>
    </div>
  );
}