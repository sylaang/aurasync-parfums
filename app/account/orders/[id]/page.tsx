"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';
import { Loader2, ArrowLeft, Package, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/lib/supabase';
import { formatPrice } from '@/lib/utils';

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  size: string;
  price: number;
  image: string;
}

interface Order {
  id: string;
  created_at: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: OrderItem[];
  shipping_address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  tracking_number?: string;
  estimated_delivery?: string;
}

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchOrderDetails();
  }, [params.id]);

  const fetchOrderDetails = async () => {
    try {
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      
      if (authError || !user) {
        router.push('/login');
        return;
      }

      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('id', params.id)
        .eq('user_id', user.id)
        .single();

      if (error) throw error;
      
      setOrder(data);
    } catch (error) {
      console.error('Error fetching order details:', error);
      router.push('/account/orders');
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
        <h1 className="text-2xl font-bold mb-2">Commande introuvable</h1>
        <p className="text-muted-foreground mb-8">
          La commande que vous recherchez n'existe pas ou vous n'avez pas l'autorisation de la visualiser.
        </p>
        <Button asChild>
          <a href="/account/orders">Retour aux commandes</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => router.push('/account/orders')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux commandes
        </Button>

        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="font-playfair text-3xl font-bold mb-2">
              Order #{order.id}
            </h1>
            <p className="text-muted-foreground">
              Placed on {format(new Date(order.created_at), 'MMMM d, yyyy')}
            </p>
          </div>
          <Badge variant="secondary" className={getStatusColor(order.status)}>
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </Badge>
        </div>

        {order.status === 'shipped' && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Informations sur l'expédition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Numéro de suivi</span>
                  <span className="font-medium">{order.tracking_number}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Estimation de la livraison</span>
                  <span className="font-medium">
                    {order.estimated_delivery && 
                      format(new Date(order.estimated_delivery), 'MMMM d, yyyy')}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {order.items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative h-20 w-20 rounded-md overflow-hidden bg-muted">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Taille: {item.size}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-sm">Quantité : {item.quantity}</p>
                      <p className="font-medium">{formatPrice(item.price)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Résumé de la commande</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sous-total</span>
                <span>{formatPrice(order.total - 10)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Expédition</span>
                <span>{formatPrice(10)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>{formatPrice(order.total)}</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <h3 className="font-medium mb-2">Adresse de livraison</h3>
              <p className="text-muted-foreground">
                {order.shipping_address.street}<br />
                {order.shipping_address.city}, {order.shipping_address.state} {order.shipping_address.zip}<br />
                {order.shipping_address.country}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}