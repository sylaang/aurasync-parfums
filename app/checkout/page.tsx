"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/components/cart/cart-context';
import { useToast } from '@/hooks/use-toast';
import CheckoutForm from '@/components/checkout/checkout-form';
import OrderSummary from '@/components/checkout/order-summary';

export default function CheckoutPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const { cartItems, cartTotal, clearCart } = useCart();
  const router = useRouter();
  const { toast } = useToast();
  
  const handleCheckout = () => {
    setIsProcessing(true);
    
    // Simulate checkout process
    setTimeout(() => {
      toast({
        title: "Commande passée avec succès !",
        description: "Merci pour votre achat.",
      });
      clearCart();
      const orderData = {
        total: cartTotal,
        items: cartItems,
      };
      
      router.push(`/checkout/success?order=${encodeURIComponent(JSON.stringify(orderData))}`);
      setIsProcessing(false);
    }, 2000);
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="font-playfair text-3xl font-bold mb-4">Votre panier est vide</h1>
        <p className="text-muted-foreground mb-8">
          Ajoutez quelques parfums à votre panier avant de passer à la caisse.
        </p>
        <button
          onClick={() => router.push('/shop')}
          className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90"
        >
          Poursuivre les achats
        </button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center">Passer à la caisse</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <CheckoutForm 
          onSubmit={handleCheckout} 
          isProcessing={isProcessing} 
        />
        <OrderSummary 
          cartItems={cartItems} 
          cartTotal={cartTotal} 
          onCheckout={handleCheckout}
          isProcessing={isProcessing}
        />
      </div>
    </div>
  );
}