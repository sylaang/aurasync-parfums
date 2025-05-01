'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';

export default function CheckoutSuccessPage() {
  const [orderCreated, setOrderCreated] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const searchParams = useSearchParams(); // Utilise useSearchParams pour accéder aux paramètres de l'URL

  // Vérifie si la query `order` existe
  const orderDataFromUrl = searchParams.get('order') ? JSON.parse(decodeURIComponent(searchParams.get('order') as string)) : null;

  useEffect(() => {
    // Récupère l'utilisateur uniquement une fois au début
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
      }
    };
    
    fetchUser();
  }, []); // L'effet ne se déclenche qu'une seule fois à l'initialisation

  useEffect(() => {
    const createOrder = async () => {
      // Si les données de commande sont invalides ou l'utilisateur est absent, on ne fait rien
      if (!orderDataFromUrl || !user || orderCreated) return;

      const { error } = await supabase.from('orders').insert({
        user_id: user.id,
        status: 'pending',
        total: orderDataFromUrl.total, // Utilisation du total passé dans l'URL
        items: orderDataFromUrl.items, // Utilisation des articles passés dans l'URL
        shipping_address: {
          street: '12 Rue Exemple',
          city: 'Paris',
          state: '',
          zip: '75000',
          country: 'France',
        }
      });

      if (error) {
        console.error('Erreur lors de la création de la commande :', error);
      } else {
        setOrderCreated(true); // Marquer que la commande a été créée
      }
    };

    createOrder();
  }, [user, orderDataFromUrl, orderCreated]); // Assure-toi que les valeurs nécessaires changent correctement

  const orderData = {
    orderNumber: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
    date: new Date().toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="bg-muted rounded-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle size={64} className="text-green-500" />
        </div>

        <h1 className="font-playfair text-3xl font-bold mb-4">Merci pour votre commande !</h1>

        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Votre commande a été confirmée et sera bientôt expédiée. Nous avons envoyé un e-mail de confirmation avec tous les détails.
        </p>

        <div className="mb-8 bg-background rounded-md p-6 max-w-sm mx-auto">
          <div className="flex justify-between mb-2">
            <span className="text-muted-foreground">Numéro de commande :</span>
            <span className="font-medium">{orderData.orderNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Date :</span>
            <span>{orderData.date}</span>
          </div>
        </div>

        <div className="space-y-4">
          <Button asChild size="lg">
            <Link href="/shop">Poursuivre les achats</Link>
          </Button>

          <div>
            <Link href="/account/orders" className="text-primary underline-offset-4 hover:underline">
              Voir l'historique de la commande
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
